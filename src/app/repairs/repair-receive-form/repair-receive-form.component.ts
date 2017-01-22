import { Component, OnInit } from '@angular/core';
import { Repair } from '../shared/repair.model';
import { RepairService } from '../shared/repair.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Auth } from '../../core/auth.service';
// import { CalendarModule } from 'primeng/primeng';
import { th } from '../../shared/calendar-localization';
import * as moment from 'moment';

@Component({
  selector: 'repair-recive-form',
  templateUrl: './repair-receive-form.component.html',
  styleUrls: ['./repair-receive-form.component.css']
})
export class RepairReceiveFormComponent implements OnInit {
  repair = new Repair();
  isComplete: boolean = false;
  locale: any;

  constructor(
    private repairService: RepairService,
    private route: ActivatedRoute,
    private auth: Auth,
    private router: Router
  ) {

  }

  ngOnInit() {
    this.getRepair(this.route.snapshot.params['repairNo']);
    this.locale = th;
  }
  // addSparePaths() {
  //   this.repair.sparePaths.push({ sparePathsName: '' });
  // }
  // deleteSparePaths(index: number) {
  //   this.repair.sparePaths.splice(index, 1);
  // }
  // addUserRepair() {
  //   let temp = this.repair.userRepair;
  //   temp.push({ userName: '' });
  //   this.repair.userRepair = temp;
  // }
  // deleteUserRepair(index: number) {
  //   this.repair.userRepair.splice(index, 1);
  // }
  onSubmit() {
    if (this.isComplete) {
      this.repair.status = 'ดำเนินการเรียบร้อย';
    } else {
      if (this.repair.repairMethod === 'ส่งซ่อมภายนอก') {
        this.repair.status = 'ส่งซ่อมภายนอก';
      } else {
        this.repair.status = 'กำลังดำเนินการ';
      }
    }
    this.editRepair(this.repair);
  }

  cancle() {
    this.getRepair(this.route.snapshot.params['repairNo']);
  }

  editRepair(repair: Repair) {
    let repairDate = moment(repair.repairDate);
    repair.repairDate = repairDate.format('YYYY-MM-DD');
    let repairCompleteDate = moment(repair.repairCompleteDate);
    repair.repairCompleteDate = repairCompleteDate.format('YYYY-MM-DD');
    this.repairService.editRepair(repair)
      .subscribe(
      data => {
        if (data.message === '1') {
          this.router.navigate(['/repairs']);
        }
      },
      error => console.log(Error)
      )
  }

  getRepair(repairNo: string) {
    this.repairService.getRepair(repairNo)
      .subscribe(
      data => {
        
        this.repair = data
        this.isComplete = false;
        this.repair.expenses = 0;
        this.repair.user = this.auth.userProfile['email'];     
        
        if(data.repairDate != null){
          this.repair.repairDate = moment(data.repairDate).toDate();
          // let repairDate = moment(data.repairDate);  
          // this.repair.repairDate = {
          //   day: repairDate.format('DD'),month: repairDate.format('MM'), year: repairDate.format('YYYY'),
          //   formatted: repairDate.format('DD/MM/YYYY'),
          //   momentObj: repairDate,
          // }
        }
        if(data.repairCompleteDate != null){
          this.repair.repairCompleteDate = moment(data.repairCompleteDate).toDate();
          // let repairCompleteDate = moment(data.repairCompleteDate);
          // this.repair.repairCompleteDate = {
          //   day: repairCompleteDate.format('DD'),month: repairCompleteDate.format('MM'), year: repairCompleteDate.format('YYYY'),
          //   formatted: repairCompleteDate.format('DD/MM/YYYY'),
          //   momentObj: repairCompleteDate,
          // }
        }
   
        // this.repair
        // this.repair.sparePaths = [{ sparePathsName: '' }];
        // this.repair.userRepair = [{ userName: '' }];
      },
      error => console.log(Error)
      );


  }
};
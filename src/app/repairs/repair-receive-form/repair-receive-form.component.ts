import { Component, OnInit } from '@angular/core';
import { Repair } from '../shared/repair.model';
import { RepairService } from '../shared/repair.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Auth } from '../../core/auth.service';

@Component({
  selector: 'repair-recive-form',
  templateUrl: './repair-receive-form.component.html',
  styleUrls: ['./repair-receive-form.component.css']
})
export class RepairReceiveFormComponent implements OnInit {
  repair = new Repair();
  isComplete: boolean = false;
  constructor(
    private repairService: RepairService,
    private route: ActivatedRoute,
    private auth: Auth,
    private router: Router
  ) {

  }

  ngOnInit() {
    this.getRepair(this.route.snapshot.params['repairNo']);
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
        // this.repair
        // this.repair.sparePaths = [{ sparePathsName: '' }];
        // this.repair.userRepair = [{ userName: '' }];
      },
      error => console.log(Error)
      );


  }
};
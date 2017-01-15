import { Component, OnInit, ViewChild } from '@angular/core';
import { Repair } from '../shared/repair.model';
import { RepairService } from '../shared/repair.service';
import { NgbPaginationConfig } from '@ng-bootstrap/ng-bootstrap';
import { Auth } from '../../core/auth.service';
import { ModalDirective } from 'ng2-bootstrap';
@Component({
  selector: 'repair-list',
  templateUrl: './repair-list.component.html',
  styleUrls: ['./repair-list.component.css']
})
export class RepairListComponent implements OnInit {
  repairs: Repair[] = [];
  statusSearch = 'ทั้งหมด';
  constructor(
    private repairService: RepairService,
    private auth: Auth
  ) {
    this.getAllRepair();
  }

  isAdmin() {
    if (this.auth.userProfile['user_metadata']['department'] == 'admin') {
      return true;
    } else {
      return false;
    }
  }

  ngOnInit() {
    this.getAllRepair();
  }

  getAllRepair() {
    this.repairService.getRepairs()
      .subscribe(
      data => { 
        this.repairs = data
      },
      error => console.log(Error)
      );
  }
  selectedRepairNo:string;
  @ViewChild('staticModal') public staticModal:ModalDirective;
   
   public showChildModal(selectedRepairNo:string):void {
    this.selectedRepairNo = selectedRepairNo;
    this.staticModal.show();
  }

  @ViewChild('deleteModal') public deleteModal:ModalDirective;
   public showDeleteModal(selectedRepairNo:string):void {
    this.selectedRepairNo = selectedRepairNo;
    this.deleteModal.show();
  }

  deleteRepair(){
    this.repairService.deleteRepair(this.selectedRepairNo)
      .subscribe(
      data => {
        if (data.message === '1') {
          this.deleteModal.hide();
          this.getAllRepair()
        }
      },
      error => console.log(Error)
      )
  }    

   max: number = 5;
   rate: number = 1;

   overStar: number;
   percent: number;

   ratingStates: any = [
    { stateOn: 'fa fa-star fa-6', stateOff: 'fa fa-star-o' },
    { stateOn: 'fa fa-star', stateOff: 'fa fa-star-o' },
    { stateOn: 'fa fa-star', stateOff: 'fa fa-star-o' },
    { stateOn: 'fa fa-star', stateOff: 'fa fa-star-o' },
    { stateOn: 'fa fa-star', stateOff: 'fa fa-star-o' }
  //   { stateOn: 'fa fa-star', stateOff: 'fa fa-star-o' },
  //   { stateOn: 'fa fa-star', stateOff: 'fa fa-star-o' },
  //   { stateOn: 'fa fa-star', stateOff: 'fa fa-star-o' },
  //   { stateOn: 'fa fa-star', stateOff: 'fa fa-star-o' },
  //   { stateOn: 'fa fa-star', stateOff: 'fa fa-star-o' }
  ];

   hoveringOver(value: number): void {
    this.overStar = value;
    this.percent = 100 * (value / this.max);
  };

   resetStar(): void {
    this.overStar = void 0;
  }

  saveEvaluation() {
    this.repairService.saveEvaluation(this.selectedRepairNo,this.rate)
       .subscribe(
      data => {
        if (data.message === '1') {
          this.getAllRepair();
          this.staticModal.hide();
        }
      },
      error => console.log(Error)
      )
  }
  // statusColor(){
  //   return "{'color': 'blue', 'font-size': '24px', 'font-weight': 'bold'}";
  // }
};
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
  items:any = [];
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
    this.items = [
            {label: 'Angular.io', icon: 'fa-link', url: 'http://angular.io'},
            {label: 'Theming', icon: 'fa-paint-brush', routerLink: ['/theming']}
        ];
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
   e1: number = 0;
   e2: number = 0;
   e3: number = 0;
   e4: number = 0;
   e5: number = 0;

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
    let evaluation = this.e1.toString()+this.e2.toString()+this.e3.toString()+this.e4.toString()+this.e5.toString();
    this.repairService.saveEvaluation(this.selectedRepairNo,evaluation)
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
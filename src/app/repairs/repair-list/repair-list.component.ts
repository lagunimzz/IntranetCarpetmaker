import { Component, OnInit } from '@angular/core';
import { Repair } from '../shared/repair.model';
import { RepairService } from '../shared/repair.service';
import { NgbPaginationConfig } from '@ng-bootstrap/ng-bootstrap';
import { Auth } from '../../core/auth.service';

@Component({
  selector: 'repair-list',
  templateUrl: './repair-list.component.html'
})
export class RepairListComponent implements OnInit {
  repairs: Repair[] = [];
  constructor(
    private repairService: RepairService,
    private auth: Auth
  ) {
    this.getAllRepair();
  }

  isAdmin() {
    if(this.auth.userProfile['user_metadata']['department'] == 'Admin'){
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
      data => this.repairs = data,
      error => console.log(Error)
      );
  }
};
import { Component, OnInit } from '@angular/core';
import { Repair } from '../shared/repair.model';
import { RepairService } from '../shared/repair.service';
import { NgbPaginationConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'repair-list',
  templateUrl: './repair-list.component.html'
})
export class RepairListComponent implements OnInit{
    repairs = [];
    constructor(private repairService: RepairService
    //,config: NgbPaginationConfig
    ) { 
      this.getAllRepair();
      // config.size = 'sm';
      // config.boundaryLinks = true;
    }

    ngOnInit(){
        this.getAllRepair();    
    }
    
    getAllRepair(){
    this.repairService.getRepairs()
      .subscribe(
        data => this.repairs = data,
        error => console.log()
      );
    }
};
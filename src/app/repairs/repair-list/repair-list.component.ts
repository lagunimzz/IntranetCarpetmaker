import { Component, OnInit } from '@angular/core';
import { Repair } from '../shared/repair.model';
import { RepairService } from '../shared/repair.service';

@Component({
  selector: 'repair-list',
  templateUrl: './repair-list.component.html'
})
export class RepairListComponent implements OnInit{
    repairs = [];
    constructor(private repairService: RepairService) { }

    ngOnInit(){
        this.getAllRepair();    
    }
    
    getAllRepair(){
    this.repairService.getRepairAPI()
    .subscribe(
      data => this.repairs = data,
      error => console.log()
    );
  }
};
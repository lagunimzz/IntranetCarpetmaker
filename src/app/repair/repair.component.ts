import { Component, OnInit } from '@angular/core';
import { Repair } from '../repair';
import { RepairService } from '../repair.service';

@Component({
  selector: 'app-repair',
  templateUrl: './repair.component.html',
  styleUrls: ['./repair.component.css']
})
export class RepairComponent implements OnInit {

  newRepair = new Repair('','','','','','','','','','');
  
  ngOnInit() {   
    this.getAllRepair(); 
    this.getAllEquipmentType();
  }
  constructor(private repairService: RepairService) { }
  repairType = '';
  repairs = [];
  equipmentTypes = [];
  getAllRepair(){
    this.repairService.getRepairAPI()
    .subscribe(
      data => this.repairs = data,
      error => console.log()
    );
  }

  getAllEquipmentType(){
     this.repairService.getEquipmentTypeAPI()
    .subscribe(
      data => this.equipmentTypes = data,
      error => console.log()
    );   
  }

  createRepair(newRepair : Repair){
    this.repairService.createRepair(newRepair).subscribe();
  }

  

}

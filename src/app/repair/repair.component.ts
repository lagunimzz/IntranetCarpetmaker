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
    //Form Load  
    this.getAllRepair(); 
  }
  constructor(private repairService: RepairService) { }
  repairType = '';
  repairs = [];
  equipmentTypes = [];

  changeRepairType(type:string){
    this.repairType = type;
    switch(type){
      case 'คอมพิวเตอร์':
        this.getAllEquipmentType('IT');
      break;
      case 'สาธารณูปโภค':
        this.getAllEquipmentType('Public');
      break;
      default:
        this.equipmentTypes = [];
      break;
    }
  }

  getAllRepair(){
    this.repairService.getRepairAPI()
    .subscribe(
      data => this.repairs = data,
      error => console.log()
    );
  }

  getAllEquipmentType(type:string){
     this.repairService.getEquipmentTypeAPI(type)
    .subscribe(
      data => this.equipmentTypes = data,
      error => console.log()
    );   
  }

  createRepair(newRepair : Repair){
    this.repairService.createRepair(newRepair).subscribe();
  }

  

}

import { Component, OnInit, Input } from '@angular/core';
import { Repair } from '../shared/repair.model';
import { RepairService } from '../shared/repair.service';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'repair-create-form',
  templateUrl: './repair-create-form.component.html',
})
export class RepairCreateFormComponent implements OnInit {
  summitted = false;
  newRepair = new Repair('','','','','','','','','','','');

  repairs = [];
  equipmentTypes = [];
  
  constructor(
    private repairService: RepairService,
    private route: ActivatedRoute,
    ) { }

  ngOnInit() { 
    this.route.params
    this.newRepair.repairType = this.route.snapshot.params['repairType'];
    this.getAllEquipmentType(this.newRepair.repairType);
  }  

  onSubmit(){
    this.createRepair(this.newRepair);
  }

  cancle(){
    this.newRepair = new Repair('','','','--- กรุณาเลือก ---','','','','','','','');
  }

  getAllEquipmentType(repairType:string){
     this.repairService.getEquipmentTypeAPI(repairType)
    .subscribe(
      data => this.equipmentTypes = data,
      error => console.log()
    );   
  }

  createRepair(repair : Repair){
    this.repairService.createRepair(repair).subscribe();
  }

  

}

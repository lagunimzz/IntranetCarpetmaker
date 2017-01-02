import { Component, OnInit, Input } from '@angular/core';
import { Repair } from '../shared/repair.model';
import { RepairService } from '../shared/repair.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Auth } from '../../core/auth.service';
@Component({
  selector: 'repair-create-form',
  templateUrl: './repair-create-form.component.html',
})
export class RepairCreateFormComponent implements OnInit {
  summitted = false;
  newRepair = new Repair('','','','','','',this.auth.userProfile['user_metadata']['department'],'','','',this.auth.userProfile['email']);
  profile:any;
  repairs = [];
  equipmentTypes = [];
  
  constructor(
    private repairService: RepairService,
    private route: ActivatedRoute,
    private router: Router,
    private auth: Auth
    ) { 
    }

  ngOnInit() { 
    this.route.params
    this.newRepair.repairType = this.route.snapshot.params['repairType'];
    this.getAllEquipmentType(this.newRepair.repairType);
  }  

  onSubmit(){
    this.createRepair(this.newRepair);
    this.router.navigate(['/repairs']);
  }

  cancle(){ 
    this.newRepair = new Repair('','','','','','',this.auth.userProfile['user_metadata']['department'],'','','',this.auth.userProfile['email']);
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

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
  newRepair = new Repair();
  profile:any;
  equipmentTypes = [];
  
  constructor(
    private repairService: RepairService,
    private route: ActivatedRoute,
    private auth: Auth,
    private router: Router
    ) { 
    }

  ngOnInit() { 

    this.newRepair.repairType = this.route.snapshot.params['repairType'];
    this.newRepair.department = this.auth.userProfile['user_metadata']['department'];
    this.newRepair.user = this.auth.userProfile['email'];
    this.newRepair.status = 'ส่งข้อมูลให้เจ้าหน้าที่';
    this.getAllEquipmentType(this.newRepair.repairType);
    switch(this.newRepair.repairType){
      case 'IT':
        this.newRepair.repairType = 'คอมพิวเตอร์';
        this.newRepair.place = '';
      break;
      case 'Public':
        this.newRepair.repairType = 'สาธารณูปโภค';
        this.newRepair.equipmentNumber = '';
      break;
      default:
    }
   

  }  

  onSubmit(){
    this.createRepair(this.newRepair)
  }

  cancle(){ 
    this.newRepair = new Repair();
  }

  getAllEquipmentType(repairType:string){
     this.repairService.getEquipments(repairType)
    .subscribe(
      data => this.equipmentTypes = data,
      error => console.log()
    );   
  }

  createRepair(repair : Repair){

    this.repairService.createRepair(repair).subscribe(
      data => {
        if(data.message === '1'){
          this.router.navigate(['/repairs']);
        }  
      },
      error => console.log(Error)
    );
  }
}

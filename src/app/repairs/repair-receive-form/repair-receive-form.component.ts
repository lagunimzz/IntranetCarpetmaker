import { Component, OnInit } from '@angular/core';
import { Repair } from '../shared/repair.model';
import { RepairService } from '../shared/repair.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Auth } from '../../core/auth.service';

@Component({
  selector: 'repair-recive-form',
  templateUrl: './repair-receive-form.component.html'
})
export class RepairReceiveFormComponent implements OnInit{
    repair:Repair;
    
    constructor(
      private repairService: RepairService,
      private route: ActivatedRoute,
      private auth: Auth
      ) { 
    }

    ngOnInit(){
      this.getRepair(this.route.snapshot.params['repairType']);
    }
    
    getRepair(repairNo:string){
    this.repairService.getRepair(repairNo)
    .subscribe(
      data => this.repair = data,
      error => console.log()
    );
    }
};
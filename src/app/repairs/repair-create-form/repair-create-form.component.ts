import { Component, OnInit, Input,ViewChild } from '@angular/core';
import { Repair } from '../shared/repair.model';
import { EquipmentType } from '../shared/equipment-type.model';
import { MachineType } from '../shared/machine.model';
import { RepairService } from '../shared/repair.service';
import { MachineTypeService } from '../shared/machine.service';
import { EquipmentTypeService } from '../shared/equipment-type.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Auth } from '../../core/auth.service';
import { ModalModule } from 'ng2-bootstrap/modal';
import { ModalDirective } from 'ng2-bootstrap';
import * as moment from 'moment';

@Component({
  selector: 'repair-create-form',
  templateUrl: './repair-create-form.component.html',
})
export class RepairCreateFormComponent implements OnInit {
  @ViewChild('machineModal') public machineModal:ModalDirective;
  summitted = false;
  newRepair = new Repair();
  equipmentTypes: EquipmentType[] = [];
  machines: MachineType[] = [];
  minDate: Date = void 0;

  constructor(
    private repairService: RepairService,
    private equipmentTypeService: EquipmentTypeService,
    private machineTypeService: MachineTypeService,
    private route: ActivatedRoute,
    private auth: Auth,
    private router: Router
  ) {
    (this.minDate = new Date()).setDate(this.minDate.getDate() - 1000);
  }

  ngOnInit() {

    this.newRepair.repairType = this.route.snapshot.params['repairType'];
    this.newRepair.department = this.auth.userProfile['user_metadata']['department'];
    this.newRepair.user = this.auth.userProfile['email'];
    this.newRepair.status = 'ส่งข้อมูลให้เจ้าหน้าที่';
    this.getAllEquipmentType(this.newRepair.repairType);
    this.getAllMachine();
    switch (this.newRepair.repairType) {
      case 'IT':
        this.newRepair.repairType = 'คอมพิวเตอร์';
        this.newRepair.place = '';
        break;
      case 'Public':
        this.newRepair.repairType = 'สาธารณูปโภค';
        this.newRepair.equipmentNumber = '';
        break;
      case 'Machine':
        this.newRepair.repairType = 'เครื่องจักร';
        break;
      default:
    }


  }

  selectedMachine(selected:string){
   this.newRepair.equipmentType = selected;
   this.machineModal.hide();
  }

  onSubmit() {
    this.createRepair(this.newRepair)
  }

  cancle() {
    this.newRepair = new Repair();
  }
  getAllEquipmentType(repairType: string) {
    this.equipmentTypeService.getEquipments(repairType)
      .subscribe(
      data => this.equipmentTypes = data,
      error => console.log()
      );

  }
  getAllMachine() {
    this.machineTypeService.getMachines()
      .subscribe(
      data => this.machines = data,
      error => console.log()
      );
  }
  
  createRepair(repair: Repair) {

    this.repairService.createRepair(repair).subscribe(
      data => {
        if (data.message === '1') {
          this.router.navigate(['/repairs']);
        }
      },
      error => console.log(Error)
    );
  }
}

import { Component, OnInit, Input, ViewChild } from '@angular/core';
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
  styleUrls: ['./repair-create-form.component.css']
})
export class RepairCreateFormComponent implements OnInit {
  @ViewChild('machineModal') public machineModal: ModalDirective;
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
    this.newRepair.repairNo = this.route.snapshot.params['repairNo'];
    this.newRepair.repairType = this.route.snapshot.params['repairType'];
    if (this.newRepair.repairNo != '') {
      switch (this.newRepair.repairType) {
        case 'คอมพิวเตอร์':
          this.newRepair.repairType = 'IT';
          break;
        case 'สาธารณูปโภค':
          this.newRepair.repairType = 'Public';
          this.newRepair.equipmentNumber = '';
          break;
        case 'เครื่องจักร':
          this.newRepair.repairType = 'Machine';
          break;
        default:
      }
    }
    this.newRepair.wasteDate =  new Date();
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

    if (this.newRepair.repairNo != '') {
      this.getRepair(this.newRepair.repairNo);
    }


  }
 getDate() {
    return this.newRepair.wasteDate;
  }
  selectedMachine(selected: string) {
    this.newRepair.equipmentType = selected;
    this.machineModal.hide();
  }

  onSubmit() {
    
    console.log(this.newRepair.wasteDate.toLocaleDateString());
    if (this.newRepair.repairNo != '') {
      this.editRepair(this.newRepair);
    } else {
      this.createRepair(this.newRepair);
    }
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
  getRepair(repairNo: string) {
    this.repairService.getRepair(repairNo)
      .subscribe(
      data => {
        this.newRepair = data
      },
      error => console.log(Error)
      );
  }
    editRepair(repair: Repair) {
    this.repairService.editRepair(repair)
      .subscribe(
      data => {
        if (data.message === '1') {
          this.router.navigate(['/repairs']);
        }
      },
      error => console.log(Error)
      )
  }
}

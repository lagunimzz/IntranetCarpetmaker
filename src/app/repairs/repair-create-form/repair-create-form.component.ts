import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { Repair } from '../shared/repair.model';
import { EquipmentType } from '../shared/equipment-type.model';
import { MachineType } from '../shared/machine.model';
import { RepairService } from '../shared/repair.service';
import { th } from '../../shared/calendar-localization';
import { MachineTypeService } from '../shared/machine.service';
import { EquipmentTypeService } from '../shared/equipment-type.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Auth } from '../../core/auth.service';
import { ModalModule } from 'ng2-bootstrap/modal';
import { ModalDirective } from 'ng2-bootstrap';
import { CalendarModule } from 'primeng/primeng';
import { InputTextModule } from 'primeng/primeng';
import {DropdownModule} from 'primeng/primeng';
import * as moment from 'moment';

@Component({
  selector: 'repair-create-form',
  templateUrl: './repair-create-form.component.html',
  styleUrls: ['./repair-create-form.component.css']
})
export class RepairCreateFormComponent implements OnInit {
  @ViewChild('machineModal') public machineModal: ModalDirective;
  locale: any;
  summitted = false;
  newRepair = new Repair();
  equipmentTypes: EquipmentType[] = [];
  machines: MachineType[] = [];
  minDate: Date = void 0;
  machineKeyword: string = '';
  constructor(
    private repairService: RepairService,
    private equipmentTypeService: EquipmentTypeService,
    private machineTypeService: MachineTypeService,
    private route: ActivatedRoute,
    private auth: Auth,
    private router: Router
  ) {
    (
      this.minDate = new Date()).setDate(this.minDate.getDate() - 1000

      )
    //this.locale = calendarLocalization.th;

  }
  ngOnInit() {
    this.locale = th;
    // {
    //         firstDayOfWeek: 0,
    //         dayNames: ["อาทิตย์", "จันทร์", "อังคาร", "พุธ", "พฤหัสบดี", "ศุกร์", "เสาร์"],
    //         dayNamesShort: ["อา.", "จ.", "อ.", "พ.", "พฤ.", "ศ.", "ส."],
    //         dayNamesMin: ["อา.", "จ.", "อ.", "พ.", "พฤ.", "ศ.", "ส."],
    //         monthNames: ["มกราคม", "กุมภาพันธ์ ", "มีนาคม", "เมษายน ", "พฤษภาคม", "มิถุนายน", "กรกฎาคม", "สิงหาคม", "กันยายน", "ตุลาคม", "พฤศจิกายน", "ธันวาคม"],
    //         monthNamesShort: ["ม.ค.", "ก.พ.", "มี.ค.", "เม.ย.", "พ.ค.", "มิ.ย.", "ก.ค.", "ส.ค.", "ก.ย.", "ต.ค.", "พ.ย.", "ธ.ค."]
    //     };
    this.newRepair.repairNo = this.route.snapshot.params['repairNo'];
    this.newRepair.repairType = this.route.snapshot.params['repairType'];
    if (this.newRepair.repairNo != 'new') {
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
    this.newRepair.name = '';
    this.newRepair.remark = '';

    this.newRepair.department = this.auth.userProfile['user_metadata']['department'];
    this.newRepair.equipmentNumber = '';
    this.newRepair.user = this.auth.userProfile['email'];
    this.newRepair.status = 'ส่งข้อมูลให้เจ้าหน้าที่';
    this.newRepair.equipmentType = '';
    this.newRepair.place = '';
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

    if (this.newRepair.repairNo != 'new') {
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
    if (this.newRepair.repairNo != 'new') {
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
    let wasteDate = moment(repair.wasteDate);
    repair.wasteDate = wasteDate.format('YYYY-MM-DD');
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
        this.newRepair = data;
        // let wasteDate = moment(data.wasteDate);
        this.newRepair.user = this.auth.userProfile['email'];
        // console.log(data.wasteDate);
        // (//moment(data.wasteDate).toISOString());

        this.newRepair.wasteDate = moment(data.wasteDate).toDate();
        // {
        //   day: wasteDate.format('DD'), month: wasteDate.format('MM'), year: wasteDate.format('YYYY'),
        //   formatted: wasteDate.format('DD/MM/YYYY'),
        //   momentObj: wasteDate,
        // }

        //= moment(data.wasteDate);

      },
      error => console.log(Error)
      );
  }
  editRepair(repair: Repair) {
    
    let wasteDate = moment(repair.wasteDate);
    repair.wasteDate = wasteDate.format('YYYY-MM-DD');
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

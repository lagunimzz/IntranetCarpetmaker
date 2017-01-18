import { Component, OnInit, ViewChild } from '@angular/core';
import { MachineType } from '../shared/machine.model';
import { MachineTypeService } from '../shared/machine.service';
import { NgbPaginationConfig } from '@ng-bootstrap/ng-bootstrap';
import { Auth } from '../../core/auth.service';
import { ModalDirective } from 'ng2-bootstrap';
import { Repair } from '../shared/repair.model';
import { RepairService } from '../shared/repair.service';

@Component({
  selector: 'machine-report',
  templateUrl: './machine-report.component.html',
  styleUrls: ['./machine-report.component.css']
})
export class MachineReportComponent implements OnInit {
  machines: MachineType[] = [];
  constructor(
    private machineTypeService: MachineTypeService,
    private auth: Auth,
    private repairService: RepairService
  ) {

  }
  @ViewChild('historyModal') public historyModal:ModalDirective;
   
   public showHistoryModal(selectedMachine:string):void {
    this.selectedMachine = selectedMachine;
    this.getHistory();
    this.historyModal.show();
  }
  selectedMachine:string = '';
  machineKeyword:string = '';
  historys:Repair[];
  ngOnInit() {
    this.getAllMachine();
    this.historys = [];
  }

  getAllMachine() {
    this.machineTypeService.getMachines()
      .subscribe(
      data => this.machines = data,
      error => console.log()
      );
  }
  getHistory(){
    this.repairService.getHistoryMachine(this.selectedMachine)
      .subscribe(
      data => this.historys = data,
      error => console.log()
      );   
  }
};
import { Component, OnInit } from '@angular/core';
import { MachineType } from '../shared/machine.model';
import { MachineTypeService } from '../shared/machine.service';
import { NgbPaginationConfig } from '@ng-bootstrap/ng-bootstrap';
import { Auth } from '../../core/auth.service';

@Component({
  selector: 'machine-report',
  templateUrl: './machine-report.component.html'
})
export class MachineReportComponent implements OnInit {
  machines: MachineType[] = [];
  constructor(
    private machineTypeService: MachineTypeService,
    private auth: Auth
  ) {

  }



  ngOnInit() {
    this.getAllMachine();
  }

  getAllMachine() {
    this.machineTypeService.getMachines()
      .subscribe(
      data => this.machines = data,
      error => console.log()
      );
  }
};
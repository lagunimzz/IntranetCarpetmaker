import { Component, OnInit } from '@angular/core';
import { Repair } from '../repair'

@Component({
  selector: 'app-repair',
  templateUrl: './repair.component.html',
  styleUrls: ['./repair.component.css']
})
export class RepairComponent implements OnInit {
  title = 'InRepairApp';

  newRepair = new Repair('','','','','','','','','','');
  constructor() { }

  ngOnInit() {
  }

}

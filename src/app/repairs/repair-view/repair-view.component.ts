import { Component, OnInit } from '@angular/core';
import { Repair } from '../shared/repair.model';
import { RepairService } from '../shared/repair.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Auth } from '../../core/auth.service';
declare var jsPDF: any; 
@Component({
  selector: 'repair-recive-form',
  templateUrl: './repair-view.component.html',
  styleUrls: ['./repair-view.component.css']
})
export class RepairViewComponent implements OnInit {
  repair = {};

  constructor(
    private repairService: RepairService,
    private route: ActivatedRoute,
    private auth: Auth,
  ) {
    var doc = new jsPDF('p', 'pt');
  }

  ngOnInit() {
    this.getRepair(this.route.snapshot.params['repairNo']);
  }

  getRepair(repairNo: string) {
    this.repairService.getRepair(repairNo)
      .subscribe(
      data => this.repair = data,
      error => console.log(Error)
      );

  }

  genPDF() {
    let doc = new jsPDF('p', 'pt');
    doc.text(20, 20, 'Hello world');
    doc.save('Test.pdf');
  }
};
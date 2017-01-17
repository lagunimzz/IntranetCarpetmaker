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
  e1:string;
  e2:string;
  e3:string;
  e4:string;
  e5:string;
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
      data => { 
        let es = data.evaluation.toString().split('')
        this.e1 = es[0];
        this.e2 = es[1];
        this.e3 = es[2];
        this.e4 = es[3];
        this.e5 = es[4];
        this.repair = data;
        
      },
      error => console.log(Error)
      );

  }

  genPDF() {
    let doc = new jsPDF('p', 'pt');
    doc.text(20, 20, 'Hello world');
    doc.save('Test.pdf');
  }
  max:number = 5;
  ratingStates: any = [
    { stateOn: 'fa fa-star fa-6', stateOff: 'fa fa-star-o' },
    { stateOn: 'fa fa-star', stateOff: 'fa fa-star-o' },
    { stateOn: 'fa fa-star', stateOff: 'fa fa-star-o' },
    { stateOn: 'fa fa-star', stateOff: 'fa fa-star-o' },
  { stateOn: 'fa fa-star', stateOff: 'fa fa-star-o' }];
};
import { Component, OnInit } from '@angular/core';
import { Auth } from '../core/auth.service';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  
  constructor(private auth: Auth){}
  pdfSrc: string = 'assets/pdf/rptpclprint.pdf';
  page: number = 1;
  ngOnInit() {
  }

}



  import { Component, OnInit } from '@angular/core';
import { Auth } from '../core/auth.service';
@Component({
  selector: 'app-pdf',
  template: `
    <div>
      <label>PDF src</label>
      <input type="text" placeholder="PDF src" [(ngModel)]="pdfSrc">
  </div>
  <div>
      <label>Page:</label>
      <input type="number" placeholder="Page" [(ngModel)]="page">
  </div>
  <pdf-viewer [src]="pdfSrc" 
              [page]="page" 
              [original-size]="true" 
              style="display: block;"
  ></pdf-viewer>
  `
})
export class DashboardPdfComponent implements OnInit {

  
  constructor(){}
  pdfSrc: string = 'assets/pdf/rptpclprint.pdf';
  page: number = 1;
  ngOnInit() {
  }

}

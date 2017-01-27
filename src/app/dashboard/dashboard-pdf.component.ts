

  import { Component, OnInit } from '@angular/core';
import { Auth } from '../core/auth.service';
@Component({
  selector: 'app-pdf',
  template: `
  <a href="http://www.google.co.th" class="btn btn-primary">Download</a>
  <pdf-viewer [src]="pdfSrc" 
              [page]="page" 
              [original-size]="true" 
              style="display: block;"
              [zoom]="2"
  ></pdf-viewer>
  
  `
})
//  <div>
//       <label>PDF src</label>
//       <input type="text" placeholder="PDF src" [(ngModel)]="pdfSrc">
//   </div>
//   <div>
//       <label>Page:</label>
//       <input type="number" placeholder="Page" [(ngModel)]="page">
//   </div>
export class DashboardPdfComponent implements OnInit {

  
  constructor(){}
  pdfSrc: string = 'assets/pdf/rptpclprint.pdf';
  page: number = 1;
  ngOnInit() {
  }

}

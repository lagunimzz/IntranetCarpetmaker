

  import { Component, OnInit } from '@angular/core';
import { Auth } from '../core/auth.service';
@Component({
  selector: 'app-pdf',
  template: `
  <a href="http://www.google.co.th" class="btn btn-primary">Download</a>
  <pdf-viewer [src]="pdfSrc" 
              style="display: block;"
              [show-all]="true"
              [zoom]="2"
  ></pdf-viewer>
  
  `
})
 
export class DashboardPdfComponent implements OnInit {

  
  constructor(){}
  // pdfSrc: string = 'https://vadimdez.github.io/ng2-pdf-viewer/pdf-test.pdf'; 
  pdfSrc: string = 'assets/pdf/rptpclprint.pdf'; 
  //'assets/pdf/rptpclprint.pdf';
  // page: number = 1;
  ngOnInit() {
  }

}

import { Component } from '@angular/core';
import { Auth } from './auth.service';
import {BrowserXhr} from '@angular/http';
import {Injectable} from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})



export class AppComponent {
  constructor(private auth: Auth){}

}

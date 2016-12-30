import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { DashboardComponent } from '../dashboard/dashboard.component';

import { RepairService } from '../repairs/shared/repair.service';
import { routing } from './app.routing'
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { RepairComponent } from '../repairs/repair.component';
import { RepairListComponent } from '../repairs/repair-list/repair-list.component';
import { RepairCreateFormComponent } from '../repairs/repair-create-form/repair-create-form.component';
@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    RepairComponent,
    RepairListComponent,
    RepairCreateFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    NgbModule.forRoot()
  ],
  providers: [RepairService],
  bootstrap: [AppComponent]
})
export class AppModule { }

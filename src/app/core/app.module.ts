import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, Http, RequestOptions } from '@angular/http';
import { AppComponent } from './app.component';
import { DashboardComponent } from '../dashboard/dashboard.component';

import { ModalModule } from 'ng2-bootstrap/modal';
// import { DatepickerModule } from 'ng2-bootstrap/datepicker';
import { DatePickerModule } from 'ng2-datepicker';
import { routing } from './app.routing'
import { NgbModule, NgbPaginationConfig } from '@ng-bootstrap/ng-bootstrap';
import { RatingModule } from 'ng2-bootstrap/rating';
import { Auth } from './auth.service';

import { RepairComponent } from '../repairs/repair.component';
import { RepairListComponent } from '../repairs/repair-list/repair-list.component';
import { RepairCreateFormComponent } from '../repairs/repair-create-form/repair-create-form.component';
import { RepairReceiveFormComponent } from '../repairs/repair-receive-form/repair-receive-form.component';
import { RepairViewComponent } from '../repairs/repair-view/repair-view.component';
import { RepairDepartmentPipe } from '../repairs/shared/repair-department.pipe';
import { RepairStatusPipe } from '../repairs/shared/repair-status.pipe';
import { RepairMachinePipe } from '../repairs/shared/repair-machine.pipe';
import { RepairGlobalPipe } from '../repairs/shared/repair-global.pipe';


import { MachineReportComponent } from '../repairs/machine-report/machine-report.component';
import { ProfileComponent } from '../profiles/profile.component';

import { DepartmentService } from '../shared/department.service';
import { RepairService } from '../repairs/shared/repair.service';
import { EquipmentTypeService } from '../repairs/shared/equipment-type.service';
import { MachineTypeService } from '../repairs/shared/machine.service';
import { provideAuth, AuthHttp, AuthConfig } from 'angular2-jwt';
import { AUTH_PROVIDERS } from 'angular2-jwt';
import { AuthGuard } from './auth.guard';
import { AuthOption } from './auth.option';
import { InputTextModule } from 'primeng/primeng';
import {DropdownModule} from 'primeng/primeng';
import {InputTextareaModule} from 'primeng/primeng';
import {PanelModule} from 'primeng/primeng';
// import { AdminComponent } from '../admins/admin.component';
import {CalendarModule} from 'primeng/primeng';
import {PaginatorModule} from 'primeng/primeng';
import {DataTableModule,SharedModule} from 'primeng/primeng';
import {SplitButtonModule} from 'primeng/primeng';
import {DialogModule} from 'primeng/primeng';
export function authHttpServiceFactory(http: Http, options: RequestOptions) {
  return new AuthHttp(new AuthConfig({}), http, options);
}

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    RepairComponent,
    RepairListComponent,
    RepairCreateFormComponent,
    RepairReceiveFormComponent,
    RepairDepartmentPipe,
    RepairViewComponent,
    RepairStatusPipe,
    RepairMachinePipe,
    RepairGlobalPipe,
    MachineReportComponent,
    ProfileComponent,
    

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    NgbModule.forRoot(),
    ModalModule.forRoot(),
    DatePickerModule,
    RatingModule.forRoot(),
    InputTextModule,
    DropdownModule,
    CalendarModule,
    InputTextareaModule,
    PanelModule,
    DataTableModule,SharedModule,
    PaginatorModule,
    SplitButtonModule,
    DialogModule
    
  ],
  providers: [
    {
      provide: AuthHttp,
      useFactory: authHttpServiceFactory,
      deps: [Http, RequestOptions]
    },
    DepartmentService,
    RepairService,
    EquipmentTypeService,
    MachineTypeService,
    Auth, AuthGuard, NgbPaginationConfig, AuthOption
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

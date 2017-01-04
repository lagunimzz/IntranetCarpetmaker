import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { DashboardComponent } from '../dashboard/dashboard.component';

import { RepairService } from '../repairs/shared/repair.service';
import { routing } from './app.routing'
import { NgbModule,NgbPaginationConfig } from '@ng-bootstrap/ng-bootstrap';
import { Auth } from './auth.service';

import { RepairComponent } from '../repairs/repair.component';
import { RepairListComponent } from '../repairs/repair-list/repair-list.component';
import { RepairCreateFormComponent } from '../repairs/repair-create-form/repair-create-form.component';
import { RepairReceiveFormComponent } from '../repairs/repair-receive-form/repair-receive-form.component';

import { ProfileComponent} from '../profiles/profile.component';

import { AUTH_PROVIDERS } from 'angular2-jwt';
import { AuthGuard } from './auth.guard';

import { AdminComponent } from '../admins/admin.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    RepairComponent,
    RepairListComponent,
    RepairCreateFormComponent,
    RepairReceiveFormComponent,
    ProfileComponent,
    AdminComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    NgbModule.forRoot()
  ],
  providers: [RepairService,AUTH_PROVIDERS,Auth,AuthGuard,NgbPaginationConfig],
  bootstrap: [AppComponent]
})
export class AppModule { }

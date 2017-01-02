import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { DashboardComponent } from '../dashboard/dashboard.component';

import { RepairService } from '../repairs/shared/repair.service';
import { routing } from './app.routing'
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Auth } from './auth.service';

import { RepairComponent } from '../repairs/repair.component';
import { RepairListComponent } from '../repairs/repair-list/repair-list.component';
import { RepairCreateFormComponent } from '../repairs/repair-create-form/repair-create-form.component';

import { ProfileComponent} from '../profiles/profile.component';

import { AUTH_PROVIDERS } from 'angular2-jwt';
import { AuthGuard } from './auth.guard';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    RepairComponent,
    RepairListComponent,
    RepairCreateFormComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    NgbModule.forRoot()
  ],
  providers: [RepairService,AUTH_PROVIDERS,Auth,AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }

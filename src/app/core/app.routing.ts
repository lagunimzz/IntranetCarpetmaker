import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from '../dashboard/dashboard.component';
import { RepairComponent } from '../repairs/repair.component';
import { RepairCreateFormComponent } from '../repairs/repair-create-form/repair-create-form.component';
import { RepairReceiveFormComponent } from '../repairs/repair-receive-form/repair-receive-form.component';

import { ProfileComponent } from '../profiles/profile.component';
import { AuthGuard } from './auth.guard';

const appRoutes: Routes = [
    {
        path: '',
        component: DashboardComponent
    },
    {
        path:'repairs',
        component: RepairComponent,
        canActivate: [AuthGuard]
    },
    {
        path:'repairCreateForm/:repairType',
        component: RepairCreateFormComponent,
        canActivate: [AuthGuard]
    },
    {
        path:'repairReceiveForm/:repairNo',
        component: RepairReceiveFormComponent,
        canActivate: [AuthGuard]
    },
    {
        path:'profiles',
        component: ProfileComponent,
        canActivate: [AuthGuard]
    }
];

export const routing : ModuleWithProviders =  RouterModule.forRoot(appRoutes);
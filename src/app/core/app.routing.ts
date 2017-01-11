import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from '../dashboard/dashboard.component';
import { RepairComponent } from '../repairs/repair.component';
import { RepairCreateFormComponent } from '../repairs/repair-create-form/repair-create-form.component';
import { RepairReceiveFormComponent } from '../repairs/repair-receive-form/repair-receive-form.component';
import { RepairViewComponent } from '../repairs/repair-view/repair-view.component';
// import { RepairEvaluationForm } from '../repairs/repair-evaluation-form/repair-evaluation-form.component';

import { ProfileComponent } from '../profiles/profile.component';
import { AuthGuard } from './auth.guard';
import { AdminComponent } from '../admins/admin.component';


import { MachineReportComponent } from '../repairs/machine-report/machine-report.component';

const appRoutes: Routes = [
    {
        path: '',
        component: DashboardComponent
    },
    {
        path: 'repairs',
        component: RepairComponent,
        canActivate: [AuthGuard]
    },
    {
        path: 'repairCreateForm/:repairType',
        component: RepairCreateFormComponent,
        canActivate: [AuthGuard]
    },
    {
        path: 'repairReceiveForm/:repairNo',
        component: RepairReceiveFormComponent,
        canActivate: [AuthGuard]
    },
    // {
    //     path: 'repairEvaluationForm/:repairNo',
    //     component: RepairEvaluationForm,
    //     canActivate: [AuthGuard]
    // },
    {
        path: 'repairView/:repairNo',
        component: RepairViewComponent,
        canActivate: [AuthGuard]
    },
    {
        path: 'profiles',
        component: ProfileComponent,
        canActivate: [AuthGuard]
    },
    {
        path: 'admins',
        component: AdminComponent,
        canActivate: [AuthGuard]
    },
    {
        path: 'report/machine',
        component: MachineReportComponent
    }

];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {DashboardComponent} from '../dashboard/dashboard.component';
import {RepairComponent} from '../repairs/repair.component';
import {RepairCreateFormComponent} from '../repairs/repair-create-form/repair-create-form.component';

const appRoutes: Routes = [
    {
        path: '',
        component: DashboardComponent
    },
    {
        path:'repairs',
        component: RepairComponent  
    },
    {
        path:'repairCreateForm/:repairType',
        component: RepairCreateFormComponent  
    }
];

export const routing : ModuleWithProviders =  RouterModule.forRoot(appRoutes);
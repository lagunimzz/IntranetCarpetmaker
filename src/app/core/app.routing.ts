import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {DashboardComponent} from '../dashboard/dashboard.component';
import {RepairComponent} from '../repairs/repair.component';

const appRoutes: Routes = [
    {
        path: '',
        component: DashboardComponent
    },
    {
        path:'repairs',
        component: RepairComponent  
    }
];

export const routing : ModuleWithProviders =  RouterModule.forRoot(appRoutes);
import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {StocksComponent} from './stocks.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {RepairComponent} from './repair/repair.component';

const appRoutes: Routes = [
    {
        path: '',
        component: DashboardComponent
    },
    {
        path:'stocks',
        component: StocksComponent  
    },
    {
        path:'repairs',
        component: RepairComponent  
    }
];

export const routing : ModuleWithProviders =  RouterModule.forRoot(appRoutes);
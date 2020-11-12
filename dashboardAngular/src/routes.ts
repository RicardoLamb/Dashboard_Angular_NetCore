import { SectionsSalesComponent } from './app/sections/sections-sales/sections-sales.component';
import { SectionsOrdersComponent } from './app/sections/sections-orders/sections-orders.component';
import { SectionsHealthComponent } from './app/sections/sections-health/sections-health.component';
import { Routes } from '@angular/router';

export const appRoutes: Routes = [
    { path: 'sales', component: SectionsSalesComponent },
    { path: 'orders', component: SectionsOrdersComponent },
    { path: 'health', component: SectionsHealthComponent },

    { path: '', redirectTo: '/sales',  pathMatch: 'full' }
];

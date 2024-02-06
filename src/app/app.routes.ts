import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadComponent: () => import('./home-customer/home-customer.component')
    },
    {
        path: 'create',
        loadComponent: () => import('./create-customer/create-customer.component')
    }
];

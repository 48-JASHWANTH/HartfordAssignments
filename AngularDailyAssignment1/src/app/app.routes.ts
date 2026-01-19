import { Routes } from '@angular/router';

import { AddCustomer } from './components/add-customer/add-customer';
import { ViewCustomer } from './components/view-customer/view-customer';
import { UpdateCustomer } from './components/update-customer/update-customer';


export const routes: Routes = [
  { path: '', redirectTo: 'customers', pathMatch: 'full' },

  { path: 'customers', component: ViewCustomer },
  { path: 'add', component: AddCustomer },
  { path: 'edit/:id', component: UpdateCustomer },

  // optional wildcard
  { path: '**', redirectTo: 'customers' }
];

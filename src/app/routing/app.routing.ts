import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import { HomeComponent } from '../components/home';
import { AboutComponent } from '../components/about/about.component';
import { RecordsComponent } from '../components/records/records';
import { WebshopComponent } from '../components/webshop/webshop';
import { CheckoutComponent } from "../components/webshop/checkout/checkout";
import { CsvComponent } from "../components/csv/csv";

const appRoutes: Routes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full',
    data: { state: 'home'}
  },
  {
    path: 'about',
    component: AboutComponent,
    data: { state: 'about'}
  },
  {
    path: 'records',
    component: RecordsComponent,
    data: { state: 'records'}
  },
  {
    path: 'webshop',
    component: WebshopComponent,
    data: { state: 'webshop'}
  },
  {
    path: "webshop/checkout",
    component: CheckoutComponent ,
    data: { state: 'webshop'}
  },
  {
    path: 'csv',
    component: CsvComponent
  },
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes, {
  useHash: true
});

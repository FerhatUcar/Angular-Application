import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import { HomeComponent } from './components/home';
import { AboutComponent } from './components/about/about.component';
import { RecordsComponent } from './components/records/records';
import { WebshopComponent } from './components/webshop/webshop';
import { CheckoutComponent } from "./components/webshop/checkout/checkout";

const appRoutes: Routes = [
  {
    path: 'home',
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
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes, {
  useHash: true
});

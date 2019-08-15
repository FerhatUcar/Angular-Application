// main imports
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { routing } from './routing/app.routing';

// components
import { AppComponent }  from './app.component';
import { RecordsComponent }  from './components/records/records';
import { InputErrorComponent }  from './components/records/inputvalidate';
import { AboutComponent }  from './components/about/about.component';
import { WebshopComponent }  from './components/webshop/webshop';
import { HomeComponent }  from './components/home';
import { ProductComponent } from "./components/webshop/products/products";
import { NavigationComponent } from './components/navigation/navigation';
import { ProductFilter } from './components/webshop/product-filter/product-filter';
import { ShoppingCart } from './components/webshop/shopping-cart/shopping-cart';
import { ProductCard } from './components/webshop/product-card/product-card';
import { CheckoutComponent } from './components/webshop/checkout/checkout';
import {CsvComponent} from './components/csv/csv';
import {CsvService} from './components/csv/csv.service';
import {FilterPipe} from './components/csv/filters/filter';

// materials
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MaterialModule } from './modules/material.module';
import { MatTableModule } from "@angular/material";

// services
import { ProductsService } from "./components/webshop/products/products.service";
import { ShoppingCartService } from "./components/webshop/shopping-cart/shopping-cart.service";



@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    routing,
    BrowserAnimationsModule,
    MaterialModule,
    MatSidenavModule,
    ReactiveFormsModule
  ],
  declarations: [
    AppComponent,
    CsvComponent,
    RecordsComponent,
    InputErrorComponent,
    HomeComponent,
    AboutComponent,
    ProductComponent,
    WebshopComponent,
    NavigationComponent,
    ProductFilter,
    ProductCard,
    ShoppingCart,
    CheckoutComponent,
    FilterPipe
  ],
  bootstrap: [AppComponent],
  providers: [
    ProductsService,
    ShoppingCartService,
    CsvService
  ],
})
export class AppModule { }

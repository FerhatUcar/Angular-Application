// main imports
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { routing } from './app.routing';

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

// materials
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MaterialModule } from './material.module';

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
    RecordsComponent,
    InputErrorComponent,
    HomeComponent,
    AboutComponent,
    ProductComponent,
    WebshopComponent,
    NavigationComponent,
    ProductFilter,
    ProductCard,
    ShoppingCart
  ],
  bootstrap: [AppComponent],
  providers: [
    ProductsService,
    ShoppingCartService
  ],
})
export class AppModule { }

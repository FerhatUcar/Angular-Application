import { AppComponent } from './app.component';

import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserModule, By } from '@angular/platform-browser';
import {CUSTOM_ELEMENTS_SCHEMA, DebugElement} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

// services
import { ProductsService } from './components/webshop/products/products.service';
import { ShoppingCartService } from './components/webshop/shopping-cart/shopping-cart.service';
import { CsvService } from './components/csv/csv.service';

import { routing } from './routing/app.routing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './modules/material.module';
import { RouterModule } from '@angular/router';
import { CsvComponent } from './components/csv/csv';
import { RecordsComponent } from './components/records/records';
import { InputErrorComponent } from './components/records/common/inputvalidate';
import { HomeComponent } from './components/home';
import { AboutComponent } from './components/about/about.component';
import { ProductComponent } from './components/webshop/products/products';
import { WebshopComponent } from './components/webshop/webshop';
import { NavigationComponent } from './components/navigation/navigation';
import { ProductFilter } from './components/webshop/product-filter/product-filter';
import { ProductCard } from './components/webshop/product-card/product-card';
import { ShoppingCart } from './components/webshop/shopping-cart/shopping-cart';
import { CheckoutComponent } from './components/webshop/checkout/checkout';
import { FilterPipe } from './components/csv/filters/filter';

////////  SPECS  /////////////
describe('AppComponent', () => {
  let de: DebugElement;
  let comp: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        ReactiveFormsModule,
        FormsModule,
        BrowserModule,
        MaterialModule,
        routing,
        BrowserAnimationsModule,
        RouterModule.forRoot([]),
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
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
      providers: [
        ProductsService,
        ShoppingCartService,
        CsvService
      ],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    comp = fixture.componentInstance;
    de = fixture.debugElement.query(By.css('h1'));
  });

  it('should create component', () => expect(comp).toBeDefined() );

});

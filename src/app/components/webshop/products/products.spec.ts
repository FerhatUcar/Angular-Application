import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductComponent } from './products';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MaterialModule} from '../../../modules/material.module';
import {RouterModule} from '@angular/router';
import {ProductsService} from './products.service';
import {ShoppingCartService} from '../shopping-cart/shopping-cart.service';
import {CsvService} from '../../csv/csv.service';
import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {HttpClient, HttpHandler} from '@angular/common/http';
import {HttpClientTestingModule} from '@angular/common/http/testing';

describe('ProductComponent', () => {
  let component: ProductComponent;
  let fixture: ComponentFixture<ProductComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule,
        MaterialModule,
        ReactiveFormsModule,
        HttpClientTestingModule,
        RouterModule.forRoot([]),
      ],
      declarations: [ ProductComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      providers: [
        ProductsService,
        ShoppingCartService
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create component', () => {
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      expect(component).toBeTruthy();
    });
  });
});

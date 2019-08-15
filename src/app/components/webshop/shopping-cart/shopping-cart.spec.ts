import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoppingCart } from './shopping-cart';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../../../modules/material.module';
import { RouterModule } from '@angular/router';
import {ProductsService} from '../products/products.service';
import {ShoppingCartService} from './shopping-cart.service';
import {CsvService} from '../../csv/csv.service';

describe('ShoppingCartComponent', () => {
  let component: ShoppingCart;
  let fixture: ComponentFixture<ShoppingCart>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        MaterialModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule.forRoot([]),
      ],
      declarations: [ ShoppingCart ],
      providers: [
        ProductsService,
        ShoppingCartService
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShoppingCart);
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

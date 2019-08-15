import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductFilter } from './product-filter';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../../../modules/material.module';
import { RouterModule } from '@angular/router';
import {ProductsService} from '../products/products.service';
import {ShoppingCartService} from '../shopping-cart/shopping-cart.service';
import {CsvService} from '../../csv/csv.service';

describe('ProductFilterComponent', () => {
  let component: ProductFilter;
  let fixture: ComponentFixture<ProductFilter>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule,
        MaterialModule,
        ReactiveFormsModule,
        RouterModule.forRoot([]),
      ],
      declarations: [ ProductFilter ],
      providers: [
        ProductsService,
        ShoppingCartService
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductFilter);
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

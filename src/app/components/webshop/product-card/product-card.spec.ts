import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductCard } from './product-card';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../../../modules/material.module';
import { RouterModule } from '@angular/router';
import { ShoppingCartService } from '../shopping-cart/shopping-cart.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('ProductCardComponent', () => {
  let component: ProductCard;
  let fixture: ComponentFixture<ProductCard>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        MaterialModule,
        ReactiveFormsModule,
        HttpClientTestingModule,
        RouterModule.forRoot([]),
      ],
      declarations: [ ProductCard ],
      providers: [
        ShoppingCartService
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductCard);
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

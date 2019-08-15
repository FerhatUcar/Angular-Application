import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductCard } from './product-card';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../../../modules/material.module';
import { RouterModule } from '@angular/router';

describe('ShoppingCartComponent', () => {
  let component: ProductCard;
  let fixture: ComponentFixture<ProductCard>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule,
        MaterialModule,
        ReactiveFormsModule,
        RouterModule.forRoot([]),
      ],
      declarations: [ ProductCard ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductCard);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

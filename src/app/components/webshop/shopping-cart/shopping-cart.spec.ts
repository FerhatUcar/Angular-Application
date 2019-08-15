import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoppingCart } from './shopping-cart';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../../../modules/material.module';
import { RouterModule } from '@angular/router';

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
      declarations: [ ShoppingCart ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShoppingCart);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

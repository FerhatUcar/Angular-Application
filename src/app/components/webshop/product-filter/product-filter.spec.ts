import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductFilter } from './product-filter';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../../../modules/material.module';
import { RouterModule } from '@angular/router';

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
      declarations: [ ProductFilter ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductFilter);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

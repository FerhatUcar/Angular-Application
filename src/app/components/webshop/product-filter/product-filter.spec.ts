import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductFilter } from './product-filter';

describe('ProductFilterComponent', () => {
  let component: ProductFilter;
  let fixture: ComponentFixture<ProductFilter>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
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

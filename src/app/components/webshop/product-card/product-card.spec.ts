import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductCard } from './product-card';

describe('ShoppingCartComponent', () => {
  let component: ProductCard;
  let fixture: ComponentFixture<ProductCard>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
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

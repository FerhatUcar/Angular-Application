import {Component, Inject, Input} from '@angular/core';
import { DOCUMENT } from "@angular/common";

// components
import { ProductComponent } from "../products/products";

// services
import { ShoppingCartService } from "../shopping-cart/shopping-cart.service";

// entities
import { Product } from "../entities/product.entity";

// animations
import {
  trigger,
  stagger,
  animate,
  style,
  state,
  keyframes,
  query,
  transition
} from '@angular/animations';


@Component({
  selector: 'product-card',
  templateUrl: './product-card.html',
})


export class ProductCard {
  @Input('product') product: Product;

  constructor(private cartService: ShoppingCartService) {}

  public AddProduct(): void {
    this.cartService.addProduct(this.product);
  }
}

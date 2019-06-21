import {
  Component,
  Input,
  ChangeDetectionStrategy,
  ChangeDetectorRef
} from '@angular/core';

import { ActivatedRoute } from "@angular/router";
import { Subscription} from "rxjs/index";
import { reduce, switchMap } from "rxjs/internal/operators";

// services
import { ShoppingCartService, CartState } from "./shopping-cart.service";

// entities
import { ProductInCart } from "../entities/productincart.entity";


@Component({
  moduleId: module.id,
  selector: 'shopping-cart',
  templateUrl: './shopping-cart.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class ShoppingCart {
  public productsInCart: ProductInCart[] = [];
  public quantity: number;
  public subscription: Subscription;
  public total: number = 0;
  public checkOut: string = 'CHECK OUT';
  public clearShoppingCart: string = 'CLEAR CART';
  public resetShoppingCart: string = 'RESET CART';
  public shippingCostCart: string;
  public shippingCartEmpty: string = 'Your shopping cart is empty';

  constructor(
    private _cartService: ShoppingCartService,
    private changeDedectionRef: ChangeDetectorRef
  ) {}

  RemoveProduct(_product: ProductInCart) {
    this.total = 0;
    this._cartService.removeProduct(_product.name);
  }

  getTotal() {
    this.total = 0;
    for (let i = 0; i < this.productsInCart.length; i++){
      let items = this.productsInCart[i];
      this.total += items.price * items.quantity;
    }
    return this.total;
  }

  clearCart(_name: ProductInCart) {
    this.resetCart();
    this.productsInCart.splice(0, 30);
  }

  resetCart() {
    this.total = 0;
    for(let i = 0; i < this.productsInCart.length; i++){
      this.productsInCart[i].quantity = 0;
    }
  }

  shippingCost() {
    if (this.total <= 15) this.shippingCostCart = '€15';
    else this.shippingCostCart = 'Free shipping';

    return this.shippingCostCart;
  }

  increase(_product: ProductInCart) {
    this._cartService.updateCartItems(_product.quantity++);
  }

  decrease(_product: ProductInCart) {
    this._cartService.updateCartItems(_product.quantity--);
  }

  ngOnInit() {
    this.subscription = this._cartService.CartState
      .subscribe((state: CartState) => this.productsInCart = state.products);

    this._cartService.getCartItems()
      .subscribe(value => this.quantity = value);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  ngAfterContentChecked(): void {
    this.changeDedectionRef.detectChanges();
  }
}



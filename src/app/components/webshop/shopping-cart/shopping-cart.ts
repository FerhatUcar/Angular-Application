import {
  Component,
  Input,
  ChangeDetectionStrategy,
  ChangeDetectorRef
} from '@angular/core';

import { ActivatedRoute } from "@angular/router";


// rxjs
import { Subscription} from "rxjs/index";
import { reduce, switchMap } from "rxjs/internal/operators";


// animations
import {
  trigger,
  stagger,
  animate,
  style,
  group,
  state,
  query as q,
  transition,
  keyframes
} from '@angular/animations';


// services
import { ShoppingCartService } from "./shopping-cart.service";


// entities
import { ProductInCart } from "../entities/productincart.entity";
import { Product } from "../entities/product.entity";
import { CartState } from "../entities/cartstate.entity";


@Component({
  moduleId: module.id,
  selector: 'shopping-cart',
  templateUrl: './shopping-cart.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    trigger('panelInOut', [
      transition('void => *', [
        style({transform: 'translateY(50%)'}),
        animate(150)
      ]),
      transition('* => void', [
        animate(150, style({transform: 'translateY(50%)'}))
      ])
    ])
  ]
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
  public badge: number;

  constructor(
    private _cartService: ShoppingCartService,
    private changeDedectionRef: ChangeDetectorRef
  ) {}

  public RemoveProduct(_product: ProductInCart): void {
    this.total = 0;
    this._cartService.removeProduct(_product.name);
  }

  public update() {
    this.badge = 0;
    this.productsInCart.map((product) => {
      this.badge += product.quantity;
      return product;
    })
    return this.badge;
  }

  public getTotal() {
    this.total = 0;
    this.productsInCart.map((product) => {
      this.total += product.price * product.quantity;
      return product;
    })
    return this.total;
  }

  public clearCart(_name: ProductInCart): void {
    this.resetCart();
    this.productsInCart.splice(0, 30);
  }

  public resetCart(): void {
    this.total = 0;

    this.productsInCart.map((product) => {
      product.quantity = 0;
      return product;
    })
  }


  public shippingCost() {
    if (this.total <= 15) this.shippingCostCart = '€15';
    else this.shippingCostCart = 'Free shipping';

    return this.shippingCostCart;
  }


  public increase(_product: ProductInCart): void {
    this._cartService.updateCartItems(_product.quantity++);
  }


  public decrease(_product: ProductInCart): void {
    this._cartService.updateCartItems(_product.quantity--);
  }


  public ngOnInit(): void {
    this.subscription = this._cartService.CartState
      .subscribe((state: CartState) => this.productsInCart = state.products);

    this._cartService.getCartItems()
      .subscribe(value => this.quantity = value);
  }


  public ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }


  public ngAfterContentChecked(): void {
    this.changeDedectionRef.detectChanges();
  }
}



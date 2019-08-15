import {
  Component,
  HostListener,
  Inject,
  Output,
  EventEmitter,
  ChangeDetectionStrategy,
  ChangeDetectorRef
} from '@angular/core';
import { DOCUMENT } from '@angular/common';


// rxjs
import { Subscription } from 'rxjs/index';


// entities
import { Product } from '../entities/product.entity';
import { ProductInCart } from '../entities/productincart.entity';
import { CartState } from '../entities/cartstate.entity';


// services
import { ShoppingCartService } from '../shopping-cart/shopping-cart.service';



@Component({
  moduleId: module.id,
  selector: 'product-filter',
  templateUrl: './product-filter.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})


export class ProductFilter {
  @Inject(DOCUMENT) document: any;
  public productsInCart: ProductInCart[] = [];
  public badge: number;
  public quantity: number;
  public subscription: Subscription;


  constructor(
    private _cartService: ShoppingCartService,
    private changeDedectionRef: ChangeDetectorRef
  ) {}


  // update badge symbol with quantity
  public update() {
    this.badge = 0;

    if (this.productsInCart.length >= 1) {
      this.productsInCart.map((product) => {
        this.badge += product.quantity;
        return product;
      })
      return this.badge;
    }
  }


  // makes category menu sticky on scroll
  @HostListener('window:scroll', ['$event']) onWindowScroll() {
    const element: HTMLDivElement = document.querySelector('.webshop__buttons');

    if (window.pageYOffset > 150) element.classList.add('webshop__sticky');
    else element.classList.remove('webshop__sticky');
  }


  // toggle menu with cart icon on mobile
  @HostListener('window:click', ['$event']) toggleCart(event: any) {
    const cartIcon: HTMLButtonElement = document.querySelector('.webshop__cartIcon');
    const element: HTMLDivElement = document.querySelector('.webshop__cart');

    if (!element.classList.contains('is-visible'))
      cartIcon.addEventListener('click',() => {
        element.classList.add('is-visible')
      });
    else
      cartIcon.addEventListener('click',() => {
        element.classList.remove('is-visible')
      });
  }


  public ngOnInit(): void {
    this.subscription = this._cartService.CartState
      .subscribe((state: CartState) => this.productsInCart = state.products);
  }


  public ngAfterContentChecked(): void {
    this.changeDedectionRef.detectChanges();
  }
}

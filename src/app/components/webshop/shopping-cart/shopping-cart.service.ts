import { Injectable } from '@angular/core';
import { Observable, Subject, BehaviorSubject } from "rxjs/index";

// entities
import { Product } from "../entities/product.entity";
import { CartState } from "../entities/cartstate.entity";

// components
import { ProductComponent } from "../products/products";


@Injectable()
export class ShoppingCartService {
  public totalProductItem: BehaviorSubject<number> = new BehaviorSubject<number>(0);
  public cartSubject = new Subject<CartState>();
  public products: Product[] = [];
  public quantity: number = 1;
  public CartState = this.cartSubject.asObservable();


  constructor() {}


  public addProduct(_product: Product): void {
    let isDuplicate = false;

    this.products.map((product) => {
      if (_product.name == product.name) isDuplicate = true;
      return product;
    });

    // adds product to cart if product is not same
    if (!isDuplicate) this.products.push(_product);

    // updates product quantity
    this.updateCartItems(_product.quantity++);

    this.cartSubject.next(<CartState>{
      loaded: true,
      products: this.products
    });
  }


  public removeProduct(_name: any): void {
    this.products.map((product) => {
      if (_name == product.name) product.quantity = 0
      return product;
    })

    this.products = this.products.filter((_item: any) => _item.name !== _name);

    this.cartSubject.next(<CartState>{
      loaded: false,
      products: this.products
    });
  }


  public getCartItems() {
    return this.totalProductItem.asObservable();
  }


  public updateCartItems(items: number): void {
    this.totalProductItem.next(items);
  }
}

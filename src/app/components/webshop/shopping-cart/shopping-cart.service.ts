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

    for(let i = 0; i < this.products.length; i++){
      if (_product.name == this.products[i].name){
        isDuplicate = true;
        break;
      }
    }

    // adds product to cart if product is not duplicated
    if (!isDuplicate) this.products.push(_product);

    this.updateCartItems(_product.quantity++);
    this.cartSubject.next(<CartState>{
      loaded: true,
      products: this.products
    });
  }


  public removeProduct(_name: any): void {
    for(let i = 0; i < this.products.length; i++){
      if (_name == this.products[i].name){
        this.products[i].quantity = 0;
      }
    }

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

import { Injectable } from '@angular/core';
import { Observable, Subject, BehaviorSubject } from "rxjs/index";

// entities
import { Product } from "../entities/product.entity";

// components
import { ProductComponent } from "../products/products";


export interface CartState {
  loaded: boolean;
  products: Product[];
}


@Injectable()
export class ShoppingCartService {
  private totalProductItem: BehaviorSubject<number> = new BehaviorSubject<number>(0);
  private cartSubject = new Subject<CartState>();
  private products: Product[] = [];
  private quantity: number = 1;

  constructor() {}

  CartState = this.cartSubject.asObservable();

  addProduct(_product: Product) {
    let isDuplicate = false;

    for(let i = 0; i < this.products.length; i++){
      if (_product.name == this.products[i].name){
        isDuplicate = true;
        break;
      }
    }

    if (!isDuplicate) this.products.push(_product);

    this.updateCartItems(_product.quantity++);

    this.cartSubject.next(<CartState>{
      loaded: true,
      products: this.products
    });
  }

  removeProduct(_name: any) {
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

  getCartItems() {
    return this.totalProductItem.asObservable();
  }

  updateCartItems(items: number) {
    this.totalProductItem.next(items);
  }
}

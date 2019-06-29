import { Component } from '@angular/core';
import { Pipe, PipeTransform } from '@angular/core';
import { ActivatedRoute } from "@angular/router";

// rxjs
import { filter, switchMap } from "rxjs/internal/operators";

// entities
import { Product } from "../entities/product.entity";

// services
import { ProductsService } from './products.service';


@Component({
  moduleId: module.id,
  selector: 'products',
  templateUrl: 'products.html'
})


export class ProductComponent {
  public products: Product[];
  public filteredProducts: Product[];
  public category: string;

  constructor(_productService: ProductsService, route: ActivatedRoute) {
    _productService
      .getProduct()
      .pipe(switchMap((products: Product[]) => {
        this.products = products;
        this.filteredProducts = this.products;
        return route.queryParamMap;
      }))
      .subscribe(params => {
        this.category = params.get('category');
        if (!this.filteredProducts) return [];
        this.filteredProducts = (this.category)
          ? this.products.filter((p: Product) => p.category === this.category)
          : this.products;
      })
    }
}

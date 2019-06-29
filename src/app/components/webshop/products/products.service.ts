import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Product } from "../entities/product.entity";

import { Observable } from 'rxjs';
import { catchError } from 'rxjs/internal/operators';
import { throwError } from 'rxjs/index';


@Injectable()
export class ProductsService {
  private _url: string = "assets/json/data.json";

  constructor(private http: HttpClient) {}

  public getProduct(): Observable<Product[]> {
    return this.http.get<Product[]>(this._url).pipe(
      catchError(this.errorHandler));
  }

  public errorHandler(error: HttpErrorResponse) {
    return throwError(error.message || 'Server error');
  }
}

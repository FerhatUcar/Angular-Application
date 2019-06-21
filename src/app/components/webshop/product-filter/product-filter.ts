import { Component, HostListener, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
  moduleId: module.id,
  selector: 'product-filter',
  templateUrl: './product-filter.html'
})

export class ProductFilter {
  @Inject(DOCUMENT) document: any;

  constructor() { }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll(): void {
    const element: HTMLDivElement = document.querySelector('.webshop__buttons');

    if (window.pageYOffset > 150) element.classList.add('webshop__sticky');
    else element.classList.remove('webshop__sticky');
  }


  @HostListener('window:click', ['$event'])
  toggleCart(event: any): void {
    const cartIcon: HTMLButtonElement = document.querySelector('.webshop__cartIcon');
    const element: HTMLDivElement = document.querySelector('.webshop__cart');

    if (!element.classList.contains('is-visible'))
      cartIcon.addEventListener('click',() => element.classList.add('is-visible'));
    else
      cartIcon.addEventListener('click',() => element.classList.remove('is-visible'));
  }
}

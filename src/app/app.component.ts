import {Component, OnInit} from '@angular/core';
import { routerTransition } from './components/router.animations';
import * as $ from 'jquery';


@Component({
  selector: 'my-app',
  animations: [ routerTransition ],
  template: `
    <navigation></navigation>
    <main [@routerTransition]="getState(o)">
      <router-outlet #o="outlet"></router-outlet>
    </main>
  `,
})
export class AppComponent implements OnInit {
  getState(outlet: any) {
    return outlet.activatedRouteData.state;
  }
  public ngOnInit() {
    $('button.hamburger').on('click', (e) => {
      $(e.currentTarget).toggleClass('active');
      $('.container, .navbar').toggleClass('push__right');
      $(".navbar__side").toggleClass('navbar__side--active');
    });

    $('.navbar__link').on('click', () => {
      $('.container').addClass('push__right');
    });
  }
}

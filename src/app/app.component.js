"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_animations_1 = require("./routing/router.animations");
// import * as $ from 'jquery';
var AppComponent = (function () {
    function AppComponent() {
    }
    AppComponent.prototype.getState = function (outlet) {
        return outlet.activatedRouteData.state;
    };
    AppComponent.prototype.ngOnInit = function () {
        $('button.hamburger').on('click', function (e) {
            $(e.currentTarget).toggleClass('active');
            $('.container, .navbar').toggleClass('push__right');
            $(".navbar__side").toggleClass('navbar__side--active');
        });
        $('.navbar__link').on('click', function () {
            $('.container').addClass('push__right');
        });
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            animations: [router_animations_1.routerTransition],
            template: "\n      <navigation></navigation>\n      <main [@routerTransition]=\"getState(o)\">\n          <router-outlet #o=\"outlet\"></router-outlet>\n      </main>\n    ",
        })
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map

"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var animations_1 = require("@angular/animations");
var query = function (s, a, o) {
    if (o === void 0) { o = { optional: true }; }
    return animations_1.query(s, a, o);
};
exports.homeTransition = animations_1.trigger('homeTransition', [
    animations_1.transition(':enter', [
        query('.block', animations_1.style({ opacity: 0 })),
        query('.block', animations_1.stagger(25, [
            animations_1.style({
                transform: 'translateY(100px)'
            }),
            animations_1.animate('1s cubic-bezier(.75,-0.48,.26,1.52)', animations_1.style({
                transform: 'translateY(0px)',
                opacity: 1
            })),
        ])),
    ]),
    animations_1.transition(':leave', [
        query('.block', animations_1.stagger(25, [
            animations_1.style({
                transform: 'translateY(0px)',
                opacity: 1
            }),
            animations_1.animate('1s cubic-bezier(.75,-0.48,.26,1.52)', animations_1.style({
                transform: 'translateY(100px)',
                opacity: 0
            })),
        ])),
    ])
]);
var HomeComponent = (function () {
    function HomeComponent() {
        this.Arr = Array;
        this.num = 25;
        this.header_title = 'Ucar Creations';
    }
    HomeComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'home',
            templateUrl: 'index.html',
            animations: [exports.homeTransition],
            host: {
                '[@homeTransition]': 'true'
            }
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent;
//# sourceMappingURL=home.js.map
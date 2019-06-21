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
var product_service_1 = require("./product.service");
var ProductComponent = (function () {
    function ProductComponent(_productService) {
        this._productService = _productService;
        this.products = [];
    }
    ProductComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._productService.getProduct()
            .subscribe(function (data) { return _this.products = data; });
    };
    ProductComponent = __decorate([
        core_1.Component({
            selector: 'products',
            template: "\n        <mat-card class=\"webshop__card\" *ngFor=\"let product of products\">\n            <mat-card-header>\n                <mat-card-title>{{ product.name }}</mat-card-title>\n            </mat-card-header>\n            <img src=\"../../../img/webshop/fruit/sinaasappel.jpg\" alt=\"Sinaasappel\">\n            <mat-card-actions>\n                <div class=\"webshop__price\">\u20AC {{ product.price }}</div>\n                <button mat-raised-button color=\"primary\">Voeg toe</button>\n            </mat-card-actions>\n        </mat-card>\n    "
        }),
        __metadata("design:paramtypes", [product_service_1.ProductCardService])
    ], ProductComponent);
    return ProductComponent;
}());
exports.ProductComponent = ProductComponent;
//# sourceMappingURL=product.js.map

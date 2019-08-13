"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var MyErrorStateModule = (function () {
    function MyErrorStateModule() {
    }
    MyErrorStateModule_1 = MyErrorStateModule;
    MyErrorStateModule.prototype.isErrorState = function (control, form) {
        var isSubmitted = form && form.submitted;
        return (control && control.invalid && (control.dirty || control.touched || isSubmitted));
    };
    MyErrorStateModule = MyErrorStateModule_1 = __decorate([
        core_1.NgModule({
            exports: [MyErrorStateModule_1]
        })
    ], MyErrorStateModule);
    return MyErrorStateModule;
    var MyErrorStateModule_1;
}());
exports.MyErrorStateModule = MyErrorStateModule;
//# sourceMappingURL=validator.module.js.map
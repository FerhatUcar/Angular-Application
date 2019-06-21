"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/common/http");
var app_routing_1 = require("./app.routing");
// components
var app_component_1 = require("./app.component");
var records_1 = require("./components/records/records");
var about_component_1 = require("./components/about/about.component");
var webshop_1 = require("./components/webshop/webshop");
var home_1 = require("./components/home");
var navigation_1 = require("./components/navigation/navigation");
// materials
var animations_1 = require("@angular/platform-browser/animations");
var material_module_1 = require("./material.module");
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                forms_1.FormsModule,
                http_1.HttpClientModule,
                app_routing_1.routing,
                animations_1.BrowserAnimationsModule,
                material_module_1.MaterialModule,
                forms_1.ReactiveFormsModule
            ],
            declarations: [
                app_component_1.AppComponent,
                records_1.RecordsComponent,
                home_1.HomeComponent,
                about_component_1.AboutComponent,
                webshop_1.WebshopComponent,
                navigation_1.NavigationComponent,
                records_1.InputErrorComponent,
            ],
            bootstrap: [
                app_component_1.AppComponent
            ]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map
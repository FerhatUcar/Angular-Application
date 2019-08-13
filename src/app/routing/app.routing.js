"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = require("@angular/router");
var home_1 = require("../components/home");
var about_component_1 = require("../components/about/about.component");
var records_1 = require("../components/records/records");
var webshop_1 = require("../components/webshop/webshop");
var appRoutes = [
    {
        path: '',
        component: home_1.HomeComponent,
        pathMatch: 'full',
        data: { state: 'home' }
    },
    {
        path: 'about',
        component: about_component_1.AboutComponent,
        data: { state: 'about' }
    },
    {
        path: 'records',
        component: records_1.RecordsComponent,
        data: { state: 'records' }
    },
    {
        path: 'webshop',
        component: webshop_1.WebshopComponent,
        data: { state: 'webshop' }
    }
];
exports.routing = router_1.RouterModule.forRoot(appRoutes, {
    useHash: true
});
//# sourceMappingURL=app.routing.js.map

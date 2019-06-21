"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var forms_1 = require("@angular/forms");
var validator_module_1 = require("../../validator.module");
var InputErrorComponent = (function () {
    function InputErrorComponent() {
        this.controls = {
            name: new forms_1.FormControl('', [forms_1.Validators.required]),
            street: new forms_1.FormControl('', [forms_1.Validators.required]),
            number: new forms_1.FormControl('', [forms_1.Validators.required]),
            code: new forms_1.FormControl('', [forms_1.Validators.required]),
            city: new forms_1.FormControl('', [forms_1.Validators.required]),
        };
        this.matcher = new validator_module_1.MyErrorStateModule();
    }
    InputErrorComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'user',
            templateUrl: 'records.html'
        })
    ], InputErrorComponent);
    return InputErrorComponent;
}());
exports.InputErrorComponent = InputErrorComponent;
var Contact = (function () {
    function Contact(ct) {
        ct.name = '';
        ct.street = '';
        ct.code = '';
        ct.city = '';
    }
    return Contact;
}());
var RecordsComponent = (function (_super) {
    __extends(RecordsComponent, _super);
    function RecordsComponent() {
        var _this = _super.call(this) || this;
        _this.pushRecord = function () {
            if (_this.form.valid) {
                _this.records.push(_this.form.value);
                _this.form.resetForm();
            }
        };
        _this.removeRecord = function (index) {
            _this.records.splice(index, 1);
        };
        _this.records = [{
                name: 'Kezban Ucar',
                street: 'Matenaspad',
                number: 65,
                code: '3311ZL',
                city: 'Dordrecht'
            }];
        _this.newContactForm = new forms_1.FormGroup(_this.controls);
        return _this;
    }
    __decorate([
        core_1.ViewChild(forms_1.FormGroupDirective),
        __metadata("design:type", Object)
    ], RecordsComponent.prototype, "form", void 0);
    return RecordsComponent;
}(InputErrorComponent));
exports.RecordsComponent = RecordsComponent;
//# sourceMappingURL=records.js.map
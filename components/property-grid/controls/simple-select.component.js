"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var SimpleSelectComponent = /** @class */ (function () {
    function SimpleSelectComponent() {
        this.valueChange = new core_1.EventEmitter();
    }
    SimpleSelectComponent.prototype.optionLabel = function (v) {
        if (typeof v === 'string') {
            return v;
        }
        if (v.text) {
            return v.text;
        }
        if (v.label) {
            return v.label;
        }
        return v;
    };
    SimpleSelectComponent.prototype.optionValue = function (v) {
        return v && v.value ? v.value : v;
    };
    SimpleSelectComponent = __decorate([
        core_1.Component({
            selector: 'simple-select-component',
            template: "\n        <select (change)=\"valueChange.emit($event.target.value)\">\n            <option [value]=\"optionValue(option)\" *ngFor=\"let option of options\">{{optionLabel(option)}}</option>\n        </select>\n    ",
        })
    ], SimpleSelectComponent);
    return SimpleSelectComponent;
}());
exports.SimpleSelectComponent = SimpleSelectComponent;
//# sourceMappingURL=simple-select.component.js.map
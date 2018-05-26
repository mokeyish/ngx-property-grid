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
var CustomComponent = /** @class */ (function () {
    function CustomComponent(componentFactoryResolver) {
        var _this = this;
        this.componentFactoryResolver = componentFactoryResolver;
        this.valueChange = new core_1.EventEmitter();
        this._controlValueChangeFn = function (value) { return _this.onValueChange(value); };
    }
    Object.defineProperty(CustomComponent.prototype, "value", {
        get: function () {
            return this._value;
        },
        set: function (v) {
            this._value = v;
            if (this.component) {
                this.component.instance.value = v;
            }
        },
        enumerable: true,
        configurable: true
    });
    CustomComponent.prototype.ngOnInit = function () {
        this.buildComponent();
    };
    CustomComponent.prototype.onValueChange = function (e) {
        this._value = e;
        this.valueChange.emit(e);
    };
    CustomComponent.prototype.buildComponent = function () {
        if (!this.componentType) {
            return;
        }
        try {
            this.destroyComponent();
            // this.entry.clear();
            var componentFactory = this.componentFactoryResolver.resolveComponentFactory(this.componentType);
            var component = this.entry.createComponent(componentFactory, 0);
            this.initComponent(component);
            this.component = component;
        }
        catch (e) {
            console.error('load component error.');
            console.error(e);
        }
    };
    CustomComponent.prototype.initComponent = function (component) {
        component.instance.value = this._value;
        if (component.instance.registerOnChange) {
            component.instance.registerOnChange(this._controlValueChangeFn);
        }
        if (component.instance.valueChange) {
            component.instance.valueChange.subscribe(this._controlValueChangeFn);
        }
        if (this.componentOptions) {
            Object.assign(component.instance, this.componentOptions);
        }
    };
    CustomComponent.prototype.destroyComponent = function () {
        if (this.component) {
            this.component.destroy();
        }
    };
    __decorate([
        core_1.ViewChild('container', { read: core_1.ViewContainerRef }),
        __metadata("design:type", Object)
    ], CustomComponent.prototype, "entry", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", core_1.Type)
    ], CustomComponent.prototype, "componentType", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], CustomComponent.prototype, "componentOptions", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], CustomComponent.prototype, "value", null);
    __decorate([
        core_1.Output(),
        __metadata("design:type", core_1.EventEmitter)
    ], CustomComponent.prototype, "valueChange", void 0);
    CustomComponent = __decorate([
        core_1.Component({
            selector: 'custom-component',
            template: '<ng-container #container></ng-container>',
        }),
        __metadata("design:paramtypes", [core_1.ComponentFactoryResolver])
    ], CustomComponent);
    return CustomComponent;
}());
exports.CustomComponent = CustomComponent;
//# sourceMappingURL=custom.component.js.map
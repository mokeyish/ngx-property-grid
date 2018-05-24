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
var DynamicComponent = /** @class */ (function () {
    function DynamicComponent(componentFactoryResolver) {
        this.componentFactoryResolver = componentFactoryResolver;
        this.valueChange = new core_1.EventEmitter();
    }
    Object.defineProperty(DynamicComponent.prototype, "value", {
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
    DynamicComponent.prototype.ngOnInit = function () {
        this.buildComponent();
    };
    DynamicComponent.prototype.onValueChange = function (e) {
        this._value = e;
        this.valueChange.emit(e);
    };
    DynamicComponent.prototype.buildComponent = function () {
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
    DynamicComponent.prototype.initComponent = function (component) {
        var _this = this;
        component.instance.value = this._value;
        if (component.instance.valueChange) {
            component.instance.valueChange.subscribe(function (e) { return _this.onValueChange(e); });
        }
        else {
            component.instance.valueChange = new core_1.EventEmitter();
            component.instance.valueChange.subscribe(function (e) { return _this.onValueChange(e); });
        }
    };
    DynamicComponent.prototype.destroyComponent = function () {
        if (this.component) {
            this.component.destroy();
        }
    };
    __decorate([
        core_1.ViewChild('container', { read: core_1.ViewContainerRef }),
        __metadata("design:type", Object)
    ], DynamicComponent.prototype, "entry", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", core_1.Type)
    ], DynamicComponent.prototype, "componentType", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], DynamicComponent.prototype, "value", null);
    __decorate([
        core_1.Output(),
        __metadata("design:type", core_1.EventEmitter)
    ], DynamicComponent.prototype, "valueChange", void 0);
    DynamicComponent = __decorate([
        core_1.Component({
            selector: 'dynamic-component',
            template: '<ng-container #container></ng-container>',
        }),
        __metadata("design:paramtypes", [core_1.ComponentFactoryResolver])
    ], DynamicComponent);
    return DynamicComponent;
}());
exports.DynamicComponent = DynamicComponent;
//# sourceMappingURL=dynamic-component.js.map
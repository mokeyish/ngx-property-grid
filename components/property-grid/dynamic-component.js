"use strict";
/**
 * Created by YISH on 2018/01/12.
 */
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
    function DynamicComponent(componentFactoryResolver, entry) {
        this.componentFactoryResolver = componentFactoryResolver;
        this.entry = entry;
    }
    DynamicComponent.prototype.ngOnInit = function () {
        this.buildComponent();
    };
    DynamicComponent.prototype.ngDoCheck = function () {
        if (this.component) {
            if (this.component.componentType !== this.componentType) {
                this.buildComponent();
            }
            // if (!_.isEqual(this.component.instance.options, this.componentOptions)) {
            //     this.options.componentOptions = this.componentOptions = this.component.instance.options;
            // }
        }
    };
    DynamicComponent.prototype.ngOnChanges = function (changes) {
        // if (changes.options && changes.options.currentValue) {
        //     if (changes.options.currentValue.componentOptions !== this.componentOptions) {
        //         this.componentOptions = changes.options.currentValue.componentOptions;
        //         if (this.component) {
        //             this.component.instance.options = this.componentOptions;
        //         }
        //     }
        // }
    };
    DynamicComponent.prototype.buildComponent = function () {
        if (!this.componentType) {
            return;
        }
        try {
            if (this.component) {
                this.component.destroy();
            }
            // this.entry.clear();
            var componentFactory = this.componentFactoryResolver.resolveComponentFactory(this.componentType);
            var component = this.entry.createComponent(componentFactory);
            // component.instance.options = this.componentOptions;
            this.component = component;
        }
        catch (e) {
            console.error('load component error.');
            console.error(e);
        }
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", core_1.Type)
    ], DynamicComponent.prototype, "componentType", void 0);
    DynamicComponent = __decorate([
        core_1.Component({
            selector: 'dynamic-component',
            template: "",
        }),
        __metadata("design:paramtypes", [core_1.ComponentFactoryResolver, core_1.ViewContainerRef])
    ], DynamicComponent);
    return DynamicComponent;
}());
exports.DynamicComponent = DynamicComponent;
//# sourceMappingURL=dynamic-component.js.map
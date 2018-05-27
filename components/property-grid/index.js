"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var common_1 = require("@angular/common");
var core_1 = require("@angular/core");
var custom_component_1 = require("./custom.component");
var property_grid_component_1 = require("./property-grid.component");
var property_grid_control_provider_1 = require("./property-grid-control-provider");
var animations_1 = require("@angular/platform-browser/animations");
var property_item_template_directive_1 = require("./property-item-template.directive");
var property_grid_component_2 = require("./property-grid.component");
exports.PropertyGridComponent = property_grid_component_2.PropertyGridComponent;
exports.PropertyValue = property_grid_component_2.PropertyValue;
var property_item_meta_1 = require("./property-item-meta");
exports.meta = property_item_meta_1.meta;
var PropertyGridModule = /** @class */ (function () {
    function PropertyGridModule() {
    }
    PropertyGridModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule, animations_1.BrowserAnimationsModule,
            ],
            entryComponents: property_grid_control_provider_1.defaultProvider.components,
            declarations: [
                property_grid_component_1.PropertyGridComponent,
                custom_component_1.CustomComponent,
                property_item_template_directive_1.PropertyItemTemplateDirective,
            ],
            providers: [{ provide: property_grid_control_provider_1.PropertyGridControlProvider, useValue: property_grid_control_provider_1.defaultProvider }],
            exports: [
                property_grid_component_1.PropertyGridComponent, property_item_template_directive_1.PropertyItemTemplateDirective
            ]
        })
    ], PropertyGridModule);
    return PropertyGridModule;
}());
exports.PropertyGridModule = PropertyGridModule;
//# sourceMappingURL=index.js.map
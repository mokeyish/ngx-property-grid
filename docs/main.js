(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<ngx-property-grid [width]=\"'350px'\" [options]=\"editor\"></ngx-property-grid>\n\n\n<code>\n    {{data}}\n</code>\n\n\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent, SimpleTextEditorComponent, ExampleEditorOptions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SimpleTextEditorComponent", function() { return SimpleTextEditorComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExampleEditorOptions", function() { return ExampleEditorOptions; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _components_property_grid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/property-grid */ "./src/app/components/property-grid/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.editor = new ExampleEditorOptions();
    }
    Object.defineProperty(AppComponent.prototype, "data", {
        get: function () {
            return JSON.stringify(this.editor);
        },
        enumerable: true,
        configurable: true
    });
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], AppComponent);
    return AppComponent;
}());

var SimpleTextEditorComponent = /** @class */ (function () {
    function SimpleTextEditorComponent() {
        this.valueChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    SimpleTextEditorComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-text-editor',
            template: "<input type=\"text\" [value]=\"value\" (change)=\"valueChange.emit($event.target.value)\"/>"
        })
    ], SimpleTextEditorComponent);
    return SimpleTextEditorComponent;
}());

var ExampleEditorOptions = /** @class */ (function () {
    function ExampleEditorOptions() {
        this.font = 'Source Code Pro';
        this.fontSize = 14;
        this.fontColor = '#51f41c';
        this.jQuery = true;
        this.modernizr = false;
        this.framework = 'None';
    }
    __decorate([
        Object(_components_property_grid__WEBPACK_IMPORTED_MODULE_1__["meta"])({ name: 'Font', description: 'The font editor to use', componentType: SimpleTextEditorComponent, group: 'Editor', hidden: false }),
        __metadata("design:type", Object)
    ], ExampleEditorOptions.prototype, "font", void 0);
    __decorate([
        Object(_components_property_grid__WEBPACK_IMPORTED_MODULE_1__["meta"])({ name: 'Font size', group: 'Editor', type: 'number', valueConvert: parseInt }),
        __metadata("design:type", Object)
    ], ExampleEditorOptions.prototype, "fontSize", void 0);
    __decorate([
        Object(_components_property_grid__WEBPACK_IMPORTED_MODULE_1__["meta"])({ name: 'Font color', group: 'Editor', type: 'color' }),
        __metadata("design:type", Object)
    ], ExampleEditorOptions.prototype, "fontColor", void 0);
    __decorate([
        Object(_components_property_grid__WEBPACK_IMPORTED_MODULE_1__["meta"])({ name: 'jQuery', group: 'Plugins', type: 'checkbox' }),
        __metadata("design:type", Object)
    ], ExampleEditorOptions.prototype, "jQuery", void 0);
    __decorate([
        Object(_components_property_grid__WEBPACK_IMPORTED_MODULE_1__["meta"])({ name: 'modernizr', description: 'Whether or not to include modernizr on the page', group: 'Plugins', type: 'checkbox' }),
        __metadata("design:type", Object)
    ], ExampleEditorOptions.prototype, "modernizr", void 0);
    __decorate([
        Object(_components_property_grid__WEBPACK_IMPORTED_MODULE_1__["meta"])({
            name: 'Framework',
            description: 'Whether to include any additional framework',
            type: 'options',
            options: ['None', { text: 'AngularJS', value: 'angular' }, { text: 'Backbone.js', value: 'backbone' }]
        }),
        __metadata("design:type", Object)
    ], ExampleEditorOptions.prototype, "framework", void 0);
    return ExampleEditorOptions;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_property_grid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/property-grid */ "./src/app/components/property-grid/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _components_property_grid__WEBPACK_IMPORTED_MODULE_3__["PropertyGridModule"]
            ],
            entryComponents: [_app_component__WEBPACK_IMPORTED_MODULE_2__["SimpleTextEditorComponent"]],
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"], _app_component__WEBPACK_IMPORTED_MODULE_2__["SimpleTextEditorComponent"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/property-grid/dynamic-component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/property-grid/dynamic-component.ts ***!
  \***************************************************************/
/*! exports provided: DynamicComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DynamicComponent", function() { return DynamicComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DynamicComponent = /** @class */ (function () {
    function DynamicComponent(componentFactoryResolver) {
        this.componentFactoryResolver = componentFactoryResolver;
        this.valueChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
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
            component.instance.valueChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
            component.instance.valueChange.subscribe(function (e) { return _this.onValueChange(e); });
        }
    };
    DynamicComponent.prototype.destroyComponent = function () {
        if (this.component) {
            this.component.destroy();
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('container', { read: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"] }),
        __metadata("design:type", Object)
    ], DynamicComponent.prototype, "entry", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["Type"])
    ], DynamicComponent.prototype, "componentType", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], DynamicComponent.prototype, "value", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], DynamicComponent.prototype, "valueChange", void 0);
    DynamicComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'dynamic-component',
            template: '<ng-container #container></ng-container>',
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"]])
    ], DynamicComponent);
    return DynamicComponent;
}());



/***/ }),

/***/ "./src/app/components/property-grid/index.ts":
/*!***************************************************!*\
  !*** ./src/app/components/property-grid/index.ts ***!
  \***************************************************/
/*! exports provided: PropertyGridComponent, meta, PropertyGridModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PropertyGridModule", function() { return PropertyGridModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _dynamic_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dynamic-component */ "./src/app/components/property-grid/dynamic-component.ts");
/* harmony import */ var _property_grid_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./property-grid.component */ "./src/app/components/property-grid/property-grid.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PropertyGridComponent", function() { return _property_grid_component__WEBPACK_IMPORTED_MODULE_3__["PropertyGridComponent"]; });

/* harmony import */ var _property_grid_item_meta__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./property-grid-item-meta */ "./src/app/components/property-grid/property-grid-item-meta.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "meta", function() { return _property_grid_item_meta__WEBPACK_IMPORTED_MODULE_4__["meta"]; });

var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var PropertyGridModule = /** @class */ (function () {
    function PropertyGridModule() {
    }
    PropertyGridModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"]
            ],
            declarations: [
                _property_grid_component__WEBPACK_IMPORTED_MODULE_3__["PropertyGridComponent"],
                _dynamic_component__WEBPACK_IMPORTED_MODULE_2__["DynamicComponent"]
            ],
            exports: [
                _property_grid_component__WEBPACK_IMPORTED_MODULE_3__["PropertyGridComponent"],
            ]
        })
    ], PropertyGridModule);
    return PropertyGridModule;
}());



/***/ }),

/***/ "./src/app/components/property-grid/property-grid-item-meta.ts":
/*!*********************************************************************!*\
  !*** ./src/app/components/property-grid/property-grid-item-meta.ts ***!
  \*********************************************************************/
/*! exports provided: meta */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "meta", function() { return meta; });
var meta = function (m) {
    return function (target, key) {
        if (!target.__meta) {
            target.__meta = {};
        }
        target.__meta[key] = m;
    };
};


/***/ }),

/***/ "./src/app/components/property-grid/property-grid.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/components/property-grid/property-grid.component.ts ***!
  \*********************************************************************/
/*! exports provided: PropertyGridComponent, InternalGroup */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PropertyGridComponent", function() { return PropertyGridComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InternalGroup", function() { return InternalGroup; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PropertyGridComponent = /** @class */ (function () {
    function PropertyGridComponent() {
    }
    Object.defineProperty(PropertyGridComponent.prototype, "meta", {
        get: function () {
            return this._meta;
        },
        set: function (v) {
            this._meta = v;
            this.initMeta();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PropertyGridComponent.prototype, "options", {
        get: function () {
            return this._options;
        },
        set: function (v) {
            if (v.__meta) {
                this.meta = v.__meta;
            }
            this._options = v;
        },
        enumerable: true,
        configurable: true
    });
    PropertyGridComponent.prototype.ngOnInit = function () {
    };
    PropertyGridComponent.prototype.change = function (e) {
        console.log(e);
    };
    PropertyGridComponent.prototype.convertValue = function (meta, val) {
        this.options[meta.key] = meta.valueConvert ? meta.valueConvert(val) : val;
    };
    PropertyGridComponent.prototype.optionLabel = function (v) {
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
    PropertyGridComponent.prototype.optionValue = function (v) {
        return v && v.value ? v.value : v;
    };
    PropertyGridComponent.prototype.initMeta = function () {
        var meta = this.meta;
        this.rows = [];
        if (!meta) {
            return;
        }
        var groups = [new InternalGroup(undefined)];
        var _loop_1 = function (i) {
            if (!meta.hasOwnProperty(i)) {
                return "continue";
            }
            var v = meta[i];
            if (v.hidden) {
                return "continue";
            }
            v.key = i;
            if (!v.type && !v.componentType) {
                v.type = 'text';
            }
            var group = groups.find(function (o) { return o.name === v.group; });
            if (!group) {
                group = new InternalGroup(v.group);
                groups.push(group);
            }
            group.items.push(v);
        };
        for (var i in meta) {
            _loop_1(i);
        }
        var rows = [];
        for (var _i = 0, groups_1 = groups; _i < groups_1.length; _i++) {
            var g = groups_1[_i];
            if (g.name) {
                rows.push(g);
            }
            g.items.forEach(function (o) { return rows.push(o); });
        }
        this.rows = rows;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], PropertyGridComponent.prototype, "width", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], PropertyGridComponent.prototype, "meta", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], PropertyGridComponent.prototype, "options", null);
    PropertyGridComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ngx-property-grid',
            template: "\n        <div class=\"property-grid\">\n            <table class=\"property-grid-table\" [ngStyle]=\"{width: width}\">\n                <tbody>\n                <tr [ngSwitch]=\"row.type\" *ngFor=\"let row of rows\"\n                    [ngClass]=\"row.type == 'group'? 'property-grid-group-row':'property-grid-row'\">\n                    <!--<td [attr.colspan]=\"row.colspan\"></td>-->\n                    <td *ngSwitchCase=\"'group'\" colspan=\"2\" class=\"property-grid-group\">{{row.name}}</td>\n                    <td *ngSwitchDefault colspan=\"1\" class=\"property-grid-label\">{{row.name}}\n                        <span *ngIf=\"row.description\" [title]=\"row.description\">[?]</span>\n                    </td>\n                    <td [ngSwitch]=\"row.type\" *ngSwitchDefault colspan=\"1\" class=\"property-grid-control\">\n\n                        <input *ngSwitchCase=\"'checkbox'\" type=\"checkbox\" [checked]=\"options[row.key]\"\n                               (change)=\"convertValue(row, $event.target.checked)\"/>\n\n                        <input *ngSwitchCase=\"'color'\" type=\"color\" [value]=\"options[row.key]\"\n                               (change)=\"convertValue(row, $event.target.value)\"/>\n\n                        <input *ngSwitchCase=\"'number'\" type=\"text\" [value]=\"options[row.key]\"\n                               (change)=\"convertValue(row, $event.target.value)\"/>\n\n                        <input *ngSwitchCase=\"'text'\" type=\"text\" [value]=\"options[row.key]\"\n                               (change)=\"convertValue(row, $event.target.value)\"/>\n\n                        <select *ngSwitchCase=\"'options'\" (change)=\"convertValue(row, $event.target.value)\">\n                            <option [value]=\"optionValue(option)\" *ngFor=\"let option of row.options\">{{optionLabel(option)}}</option>\n                        </select>\n\n                        <label *ngSwitchCase=\"'label'\">{{options[row.key]}}</label>\n\n\n                        <dynamic-component *ngSwitchDefault\n                                           [componentType]=\"row.componentType\"\n                                           [value]=\"options[row.key]\"\n                                           (valueChange)=\"convertValue(row, $event)\">\n\n                        </dynamic-component>\n                    </td>\n                </tr>\n                </tbody>\n            </table>\n        </div>\n    ",
            styles: [
                "\n            .property-grid-table {\n                border: solid 1px #95B8E7;\n                border-spacing: 0;\n            }\n\n            .property-grid-group {\n                background-color: #368bffeb;\n                font-weight: bold;\n                color: white;\n            }\n\n            .property-grid-label, .property-grid-control {\n                border: dotted 1px #ccc;\n                padding: 2px 5px;\n            }\n        "
            ]
        }),
        __metadata("design:paramtypes", [])
    ], PropertyGridComponent);
    return PropertyGridComponent;
}());

var InternalGroup = /** @class */ (function () {
    function InternalGroup(name) {
        this.name = name;
        this.items = [];
        this.type = 'group';
    }
    return InternalGroup;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/yish/workspace/ngx-property-grid/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map
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

/***/ "./src/app/components/property-grid/custom.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/components/property-grid/custom.component.ts ***!
  \**************************************************************/
/*! exports provided: CustomComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomComponent", function() { return CustomComponent; });
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

var CustomComponent = /** @class */ (function () {
    function CustomComponent(componentFactoryResolver) {
        var _this = this;
        this.componentFactoryResolver = componentFactoryResolver;
        this.valueChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
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
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('container', { read: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"] }),
        __metadata("design:type", Object)
    ], CustomComponent.prototype, "entry", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["Type"])
    ], CustomComponent.prototype, "componentType", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], CustomComponent.prototype, "componentOptions", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], CustomComponent.prototype, "value", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], CustomComponent.prototype, "valueChange", void 0);
    CustomComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'custom-component',
            template: '<ng-container #container></ng-container>',
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"]])
    ], CustomComponent);
    return CustomComponent;
}());



/***/ }),

/***/ "./src/app/components/property-grid/index.ts":
/*!***************************************************!*\
  !*** ./src/app/components/property-grid/index.ts ***!
  \***************************************************/
/*! exports provided: PropertyGridComponent, PropertyValue, meta, PropertyGridModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PropertyGridModule", function() { return PropertyGridModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _custom_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./custom.component */ "./src/app/components/property-grid/custom.component.ts");
/* harmony import */ var _property_grid_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./property-grid.component */ "./src/app/components/property-grid/property-grid.component.ts");
/* harmony import */ var _property_grid_control_provider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./property-grid-control-provider */ "./src/app/components/property-grid/property-grid-control-provider.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var ngx_template__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-template */ "./node_modules/ngx-template/dist/index.js");
/* harmony import */ var ngx_template__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(ngx_template__WEBPACK_IMPORTED_MODULE_6__);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PropertyGridComponent", function() { return _property_grid_component__WEBPACK_IMPORTED_MODULE_3__["PropertyGridComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PropertyValue", function() { return _property_grid_component__WEBPACK_IMPORTED_MODULE_3__["PropertyValue"]; });

/* harmony import */ var _property_item_meta__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./property-item-meta */ "./src/app/components/property-grid/property-item-meta.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "meta", function() { return _property_item_meta__WEBPACK_IMPORTED_MODULE_7__["meta"]; });

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
                _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"], ngx_template__WEBPACK_IMPORTED_MODULE_6__["NgxTemplateModule"]
            ],
            entryComponents: _property_grid_control_provider__WEBPACK_IMPORTED_MODULE_4__["defaultProvider"].components,
            declarations: [
                _property_grid_component__WEBPACK_IMPORTED_MODULE_3__["PropertyGridComponent"],
                _custom_component__WEBPACK_IMPORTED_MODULE_2__["CustomComponent"],
            ],
            providers: [{ provide: _property_grid_control_provider__WEBPACK_IMPORTED_MODULE_4__["PropertyGridControlProvider"], useValue: _property_grid_control_provider__WEBPACK_IMPORTED_MODULE_4__["defaultProvider"] }],
            exports: [
                _property_grid_component__WEBPACK_IMPORTED_MODULE_3__["PropertyGridComponent"]
            ]
        })
    ], PropertyGridModule);
    return PropertyGridModule;
}());



/***/ }),

/***/ "./src/app/components/property-grid/property-grid-control-provider.ts":
/*!****************************************************************************!*\
  !*** ./src/app/components/property-grid/property-grid-control-provider.ts ***!
  \****************************************************************************/
/*! exports provided: PropertyGridControlProvider, defaultProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PropertyGridControlProvider", function() { return PropertyGridControlProvider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultProvider", function() { return defaultProvider; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var PropertyGridControlProvider = /** @class */ (function () {
    function PropertyGridControlProvider() {
        this._map = new Map();
        this.components = [];
    }
    PropertyGridControlProvider.prototype.register = function (type, componentType) {
        this._map.set(type, componentType);
        this.components.push(componentType);
    };
    PropertyGridControlProvider.prototype.getComponentType = function (type) {
        return this._map.get(type);
    };
    PropertyGridControlProvider = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()
    ], PropertyGridControlProvider);
    return PropertyGridControlProvider;
}());

var defaultProvider = new PropertyGridControlProvider();


/***/ }),

/***/ "./src/app/components/property-grid/property-grid.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/components/property-grid/property-grid.component.ts ***!
  \*********************************************************************/
/*! exports provided: PropertyGridComponent, PropertyValue, InternalGroup */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PropertyGridComponent", function() { return PropertyGridComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PropertyValue", function() { return PropertyValue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InternalGroup", function() { return InternalGroup; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");
/* harmony import */ var ngx_template__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-template */ "./node_modules/ngx-template/dist/index.js");
/* harmony import */ var ngx_template__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(ngx_template__WEBPACK_IMPORTED_MODULE_2__);
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
    function PropertyGridComponent(el, cdr) {
        this.cdr = cdr;
        this.templateMap = {};
        this.state = 'visible';
        this.labelWidth = '120px';
        this.cardStyle = true;
        this.isInternal = el.nativeElement.parentElement && el.nativeElement.parentElement.classList &&
            el.nativeElement.parentElement.classList.contains('internal-property-grid');
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
            this._options = v;
            if (v.__meta__) {
                this.meta = v.__meta__;
            }
        },
        enumerable: true,
        configurable: true
    });
    PropertyGridComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        if (this.defaultTemplates) {
            this.defaultTemplates.forEach(function (item) {
                if (!_this.templateMap.hasOwnProperty(item.name)) {
                    _this.templateMap[item.name] = item.template;
                }
            });
            this.cdr.detectChanges();
        }
    };
    PropertyGridComponent.prototype.ngAfterContentInit = function () {
        var _this = this;
        this.templates.forEach(function (item) {
            _this.templateMap[item.name] = item.template;
        });
    };
    PropertyGridComponent.prototype.getTemplate = function (type) {
        if (this.templateMap) {
            return type ? this.templateMap[type] : this.templateMap['default'];
        }
        else {
            return null;
        }
    };
    PropertyGridComponent.prototype.propertyValue = function (meta) {
        return new PropertyValue(this.options, meta);
    };
    PropertyGridComponent.prototype.toggle = function () {
        this.state = this.state === 'visible' ? 'hidden' : 'visible';
    };
    PropertyGridComponent.prototype.convertValue = function (meta, val) {
        this.options[meta.key] = meta.valueConvert ? meta.valueConvert(val) : val;
    };
    PropertyGridComponent.prototype.initMeta = function () {
        var meta = this.meta;
        if (!meta) {
            this.rows = [];
            this.subItems = [];
            return;
        }
        var groups = [new InternalGroup(undefined)];
        var subItems = [];
        var _loop_1 = function (i) {
            if (!meta.hasOwnProperty(i)) {
                return "continue";
            }
            var v = meta[i];
            if (v.hidden) {
                return "continue";
            }
            if (v.type === 'subItems') {
                subItems.push(v);
                return "continue";
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
        groups.forEach(function (o) { return o.items.sort(function (a, b) { return a.order - b.order; }); });
        var rows = [];
        for (var _i = 0, groups_1 = groups; _i < groups_1.length; _i++) {
            var g = groups_1[_i];
            if (g.name) {
                rows.push(g);
            }
            g.items.forEach(function (o) { return rows.push(o); });
        }
        this.rows = rows;
        this.subItems = subItems;
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
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], PropertyGridComponent.prototype, "templateMap", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], PropertyGridComponent.prototype, "state", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], PropertyGridComponent.prototype, "width", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], PropertyGridComponent.prototype, "labelWidth", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], PropertyGridComponent.prototype, "cardStyle", void 0);
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
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChildren"])(ngx_template__WEBPACK_IMPORTED_MODULE_2__["NgxTemplate"]),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["QueryList"])
    ], PropertyGridComponent.prototype, "defaultTemplates", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChildren"])(ngx_template__WEBPACK_IMPORTED_MODULE_2__["NgxTemplate"]),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["QueryList"])
    ], PropertyGridComponent.prototype, "templates", void 0);
    PropertyGridComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ngx-property-grid',
            template: "\n        <div class=\"property-grid\" [ngClass]=\"!isInternal && !cardStyle ? 'property-grid-border': null\" [style.width]=\"width\">\n            <div [ngClass]=\"cardStyle ? 'card' : null\">\n                <table class=\"property-grid-table\" [style.width]=\"width\">\n                    <tbody>\n                    <tr *ngFor=\"let row of rows\" [ngClass]=\"row.type == 'group'? 'property-grid-group-row':'property-grid-row'\">\n\n                        <!--<td [attr.colspan]=\"row.colspan\"></td>-->\n                        <td *ngIf=\"row.type == 'group'\" colspan=\"2\" class=\"property-grid-group\">{{row.name}}</td>\n                        <td *ngIf=\"row.type != 'group' && row.colSpan2 != true\" [width]=\"labelWidth\" colspan=\"1\"\n                            class=\"property-grid-label\">\n                            {{row.name}}\n                            <span *ngIf=\"row.description\" [title]=\"row.description\">[?]</span>\n                        </td>\n                        <td *ngIf=\"row.type != 'group'\" [attr.colspan]=\"row.colSpan2 == true ? 2 : 1\" class=\"property-grid-control\">\n                            <custom-component\n                                *ngIf=\"!getTemplate(row.type)\"\n                                [componentType]=\"row.type\"\n                                [componentOptions]=\"row.options\"\n                                [value]=\"options[row.key]\"\n                                (valueChange)=\"convertValue(row, $event)\">\n                            </custom-component>\n                            <ng-container *ngTemplateOutlet=\"getTemplate(row.type); context: {$implicit: propertyValue(row)}\">\n                            </ng-container>\n                        </td>\n                    </tr>\n                    </tbody>\n                </table>\n            </div>\n\n            <div *ngFor=\"let item of subItems\" class=\"internal-property-grid\" [ngClass]=\"cardStyle ? 'card' : null\">\n                <div (click)=\"pg.toggle()\" class=\"property-grid-header\"\n                     [ngClass]=\"cardStyle ? null : 'property-grid-header-margin'\">\n                    <b>{{item.name}}</b>\n                </div>\n                <ngx-property-grid\n                    [state]=\"item.initState\"\n                    [@internalPropertyGrid]=\"pg.state\"\n                    [options]=\"options[item.key]\"\n                    [width]=\"width\"\n                    [labelWidth]=\"labelWidth\"\n                    [templateMap]=\"templateMap\"\n                    style=\"display: block;overflow: hidden\"\n                    #pg>\n                </ngx-property-grid>\n            </div>\n        </div>\n        <div *ngIf=\"!isInternal\">\n            <ng-template ngxTemplate=\"checkbox\" let-p>\n                <input type=\"checkbox\" [checked]=\"p.value\" (change)=\"p.value = $event.target.checked\" />\n            </ng-template>\n\n            <ng-template ngxTemplate=\"color\" let-p>\n                <input type=\"color\" [value]=\"p.value\" (change)=\"p.value = $event.target.value\"/>\n            </ng-template>\n\n            <ng-template ngxTemplate=\"date\" let-p>\n                <input type=\"date\" [value]=\"p.value\" (change)=\"p.value = $event.target.value\"/>\n            </ng-template>\n\n            <ng-template ngxTemplate=\"label\" let-p>\n                <label>{{p.value}}</label>\n            </ng-template>\n\n            <ng-template ngxTemplate=\"text\" let-p>\n                <input type=\"text\" [value]=\"p.value\" (change)=\"p.value = $event.target.value\"/>\n            </ng-template>\n\n            <ng-template ngxTemplate=\"options\" let-p>\n                <select (change)=\"p.value = $event.target.value\" >\n                    <option [value]=\"optionValue(option)\" *ngFor=\"let option of p.meta.options\">\n                        {{optionLabel(option)}}\n                    </option>\n                </select>\n            </ng-template>\n        </div>\n    ",
            styles: [
                "\n            .property-grid {\n                /*border: solid 1px #95B8E7;*/\n            }\n            .property-grid-border {\n                border: 1px solid #d6d6d678\n            }\n\n            .property-grid-table {\n                border-spacing: 0;\n                padding: 5px\n            }\n\n            .property-grid-group {\n                background-color: white;\n                font-weight: bold;\n                color: #616161;\n                padding-top: 8px;\n                padding-bottom: 5px;\n            }\n\n            .property-grid-label, .property-grid-control {\n                border: dotted 1px #ccc;\n                padding: 2px 5px;\n            }\n\n            .internal-property-grid {\n                margin-top: 12px;\n            }\n\n            .internal-property-grid .property-grid {\n                border-width: 0;\n            }\n\n            .internal-property-grid .property-grid-header {\n                margin-bottom: 5px;\n                background-color: #f5f5f5;\n                padding-bottom: 5px;\n                padding-top: 5px;\n                padding-left: 5px;\n                box-shadow: 0 2px 3px rgba(10, 10, 10, 0.1), 0 0 0 1px rgba(10, 10, 10, 0.1);\n                -webkit-box-shadow: 0 2px 3px rgba(10, 10, 10, 0.1), 0 0 0 1px rgba(10, 10, 10, 0.1);\n                width: 100%;\n            }\n            .internal-property-grid .property-grid-header-margin {\n                margin-left: 5px;\n                margin-right: 5px;\n                width: unset;\n            }\n\n            .internal-property-grid .property-grid-table {\n                border-width: 0;\n                /*border-top: 1px solid #dbdbdb;*/\n            }\n\n            .card {\n                background-color: #fff;\n                box-shadow: 0 6px 10px 0 rgba(0, 0, 0, .14), 0 1px 18px 0 rgba(0, 0, 0, .12), 0 3px 5px -1px rgba(0, 0, 0, .2);\n                display: flex;\n                flex-flow: row wrap;\n                /*margin: 5px 20px;*/\n                padding: 0;\n            }\n            .internal-property-grid ngx-property-grid .card {\n                background-color: unset;\n                box-shadow: unset;\n                display: unset;\n                flex-flow: unset;\n                /*margin: 5px 20px;*/\n                padding: unset;\n            }\n        "
            ],
            animations: [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('internalPropertyGrid', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('hidden', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
                        height: '0',
                    })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('visible', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
                        height: '*'
                    })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('visible <=> hidden', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('400ms cubic-bezier(0.86, 0, 0.07, 1)'))
                ])
            ]
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]])
    ], PropertyGridComponent);
    return PropertyGridComponent;
}());

var PropertyValue = /** @class */ (function () {
    function PropertyValue(o, meta) {
        this.o = o;
        this.meta = meta;
    }
    Object.defineProperty(PropertyValue.prototype, "value", {
        get: function () {
            return this.o[this.meta.key];
        },
        set: function (val) {
            this.o[this.meta.key] = this.meta.valueConvert ? this.meta.valueConvert(val) : val;
        },
        enumerable: true,
        configurable: true
    });
    return PropertyValue;
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

/***/ "./src/app/components/property-grid/property-item-meta.ts":
/*!****************************************************************!*\
  !*** ./src/app/components/property-grid/property-item-meta.ts ***!
  \****************************************************************/
/*! exports provided: meta */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "meta", function() { return meta; });
var meta = function (itemMeta) {
    return function (target, key) {
        // region [adjust]
        itemMeta.key = key;
        if (typeof itemMeta.type === 'string') {
        }
        else {
        }
        if (!itemMeta.type) {
            itemMeta.type = 'text';
        }
        if (itemMeta.type === 'number' && !itemMeta.valueConvert) {
            itemMeta.valueConvert = parseInt;
        }
        if (!itemMeta.initState) {
            itemMeta.initState = 'hidden';
        }
        if (!itemMeta.order) {
            itemMeta.order = Number.MAX_VALUE;
        }
        // endregion
        var __meta__ = target.__meta__;
        if (!__meta__) {
            __meta__ = {};
            target.__meta__ = __meta__;
        }
        else if (target.__proto__.__meta__ === __meta__) {
            var subMeta_1 = Object.create(Object.getPrototypeOf(__meta__));
            Object.getOwnPropertyNames(__meta__).forEach(function (name) {
                Object.defineProperty(subMeta_1, name, Object.getOwnPropertyDescriptor(__meta__, name));
            });
            __meta__ = subMeta_1;
            target.__meta__ = __meta__;
        }
        Object.defineProperty(__meta__, key, {
            enumerable: true,
            get: function () { return itemMeta; },
            set: function (v) { return itemMeta = v; }
        });
    };
};


/***/ }),

/***/ "./src/app/showcase/app.component.html":
/*!*********************************************!*\
  !*** ./src/app/showcase/app.component.html ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n    <h1 style=\"text-align: center\">Property Grid Example</h1>\n    <div style=\"display: flex; flex-direction: row\">\n\n        <ngx-property-grid [width]=\"'400px'\" [options]=\"student\" [cardStyle]=\"student.editor.cardStyle\">\n            <ng-template ngxTemplate=\"text\" let-p>\n                <input type=\"text\" [value]=\"p.value\" (change)=\"p.value = $event.target.value\">\n            </ng-template>\n            <ng-template ngxTemplate=\"fontSize\" let-pp>\n                <input matInput type=\"number\" placeholder=\"Value\" [(ngModel)]=\"pp.value\">\n                <!--<span>字体大小</span>-->\n            </ng-template>\n\n            <ng-template ngxTemplate=\"date\" let-p>\n                <input matInput [matDatepicker]=\"picker\" placeholder=\"Choose a date\" [(ngModel)]=\"p.value\">\n                <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\n                <mat-datepicker #picker></mat-datepicker>\n            </ng-template>\n\n            <ng-template ngxTemplate=\"sex\" let-p>\n                <mat-radio-group  [(ngModel)]=\"p.value\">\n                    <mat-radio-button value=\"male\">male</mat-radio-button>\n                    <mat-radio-button value=\"female\">female</mat-radio-button>\n                </mat-radio-group>\n            </ng-template>\n        </ngx-property-grid>\n\n        <div style=\"margin-left: 50px; flex: 1\">\n            <div> <h3>The Object：</h3> </div>\n\n            <ngx-json-viewer [json]=\"data\"></ngx-json-viewer>\n        </div>\n    </div>\n\n</div>\n"

/***/ }),

/***/ "./src/app/showcase/app.component.scss":
/*!*********************************************!*\
  !*** ./src/app/showcase/app.component.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/showcase/app.component.ts":
/*!*******************************************!*\
  !*** ./src/app/showcase/app.component.ts ***!
  \*******************************************/
/*! exports provided: AppComponent, SimpleTextEditorComponent, ExampleEditorOptions, ExampleStudentOptions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SimpleTextEditorComponent", function() { return SimpleTextEditorComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExampleEditorOptions", function() { return ExampleEditorOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExampleStudentOptions", function() { return ExampleStudentOptions; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _components_property_grid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/property-grid */ "./src/app/components/property-grid/index.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
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
        this.student = new ExampleStudentOptions();
    }
    Object.defineProperty(AppComponent.prototype, "data", {
        get: function () {
            return JSON.parse(JSON.stringify(this.student));
        },
        enumerable: true,
        configurable: true
    });
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/showcase/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/showcase/app.component.scss")]
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
        this.cardStyle = true;
        this.modernizr = false;
        this.framework = 'None';
    }
    __decorate([
        Object(_components_property_grid__WEBPACK_IMPORTED_MODULE_1__["meta"])({
            name: 'Font', description: 'The font editor to use', colSpan2: false,
            type: SimpleTextEditorComponent, group: 'Editor', hidden: false
        }),
        __metadata("design:type", Object)
    ], ExampleEditorOptions.prototype, "font", void 0);
    __decorate([
        Object(_components_property_grid__WEBPACK_IMPORTED_MODULE_1__["meta"])({ name: 'Font size', group: 'Editor', valueConvert: parseInt, type: 'fontSize' }),
        __metadata("design:type", Object)
    ], ExampleEditorOptions.prototype, "fontSize", void 0);
    __decorate([
        Object(_components_property_grid__WEBPACK_IMPORTED_MODULE_1__["meta"])({ name: 'Font color', group: 'Editor', type: 'color' }),
        __metadata("design:type", Object)
    ], ExampleEditorOptions.prototype, "fontColor", void 0);
    __decorate([
        Object(_components_property_grid__WEBPACK_IMPORTED_MODULE_1__["meta"])({ name: 'jQuery', group: 'Plugins', type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatCheckbox"] }),
        __metadata("design:type", Object)
    ], ExampleEditorOptions.prototype, "jQuery", void 0);
    __decorate([
        Object(_components_property_grid__WEBPACK_IMPORTED_MODULE_1__["meta"])({ name: 'Card Style', group: 'Style', type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatCheckbox"] }),
        __metadata("design:type", Object)
    ], ExampleEditorOptions.prototype, "cardStyle", void 0);
    __decorate([
        Object(_components_property_grid__WEBPACK_IMPORTED_MODULE_1__["meta"])({
            name: 'modernizr',
            description: 'Whether or not to include modernizr on the page',
            group: 'Plugins',
            type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSlideToggle"]
        }),
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

var ExampleStudentOptions = /** @class */ (function () {
    function ExampleStudentOptions() {
        this.birth = '2018-05-08';
        this.name = 'Lily';
        this.age = 19;
        this.gender = 'male';
        this.editor = new ExampleEditorOptions();
    }
    __decorate([
        Object(_components_property_grid__WEBPACK_IMPORTED_MODULE_1__["meta"])({ name: 'Birth', group: 'Basic Information', type: 'date', order: 4 }),
        __metadata("design:type", Object)
    ], ExampleStudentOptions.prototype, "birth", void 0);
    __decorate([
        Object(_components_property_grid__WEBPACK_IMPORTED_MODULE_1__["meta"])({ name: 'Name', group: 'Basic Information', type: 'text', order: 1 }),
        __metadata("design:type", Object)
    ], ExampleStudentOptions.prototype, "name", void 0);
    __decorate([
        Object(_components_property_grid__WEBPACK_IMPORTED_MODULE_1__["meta"])({ name: 'Age', group: 'Basic Information', valueConvert: parseInt, type: 'text', order: 2 }),
        __metadata("design:type", Object)
    ], ExampleStudentOptions.prototype, "age", void 0);
    __decorate([
        Object(_components_property_grid__WEBPACK_IMPORTED_MODULE_1__["meta"])({ name: 'Telephone', type: 'telephone', group: 'Basic Information', hidden: true }),
        __metadata("design:type", Object)
    ], ExampleStudentOptions.prototype, "telephone", void 0);
    __decorate([
        Object(_components_property_grid__WEBPACK_IMPORTED_MODULE_1__["meta"])({ name: 'Gender', group: 'Basic Information', type: 'sex', order: 3 }),
        __metadata("design:type", Object)
    ], ExampleStudentOptions.prototype, "gender", void 0);
    __decorate([
        Object(_components_property_grid__WEBPACK_IMPORTED_MODULE_1__["meta"])({ name: 'Editor Preference', type: 'subItems', initState: 'visible' }),
        __metadata("design:type", ExampleEditorOptions)
    ], ExampleStudentOptions.prototype, "editor", void 0);
    return ExampleStudentOptions;
}());



/***/ }),

/***/ "./src/app/showcase/showcase.module.ts":
/*!*********************************************!*\
  !*** ./src/app/showcase/showcase.module.ts ***!
  \*********************************************/
/*! exports provided: ShowcaseModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShowcaseModule", function() { return ShowcaseModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/showcase/app.component.ts");
/* harmony import */ var _components_property_grid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/property-grid */ "./src/app/components/property-grid/index.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_json_viewer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-json-viewer */ "./node_modules/ngx-json-viewer/ngx-json-viewer.es5.js");
/* harmony import */ var ngx_template__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-template */ "./node_modules/ngx-template/dist/index.js");
/* harmony import */ var ngx_template__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(ngx_template__WEBPACK_IMPORTED_MODULE_8__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var ShowcaseModule = /** @class */ (function () {
    function ShowcaseModule() {
    }
    ShowcaseModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"]],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["NoopAnimationsModule"], _components_property_grid__WEBPACK_IMPORTED_MODULE_3__["PropertyGridModule"], ngx_template__WEBPACK_IMPORTED_MODULE_8__["NgxTemplateModule"],
                ngx_json_viewer__WEBPACK_IMPORTED_MODULE_7__["NgxJsonViewerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatCheckboxModule"], _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSliderModule"], _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatDatepickerModule"], _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSlideToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatNativeDateModule"], _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatRadioModule"], _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatInputModule"]
            ],
            entryComponents: [_app_component__WEBPACK_IMPORTED_MODULE_2__["SimpleTextEditorComponent"], _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatCheckbox"], _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSlider"], _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatDatepicker"], _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSlideToggle"]],
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"], _app_component__WEBPACK_IMPORTED_MODULE_2__["SimpleTextEditorComponent"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        })
    ], ShowcaseModule);
    return ShowcaseModule;
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
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _app_showcase_showcase_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/showcase/showcase.module */ "./src/app/showcase/showcase.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_showcase_showcase_module__WEBPACK_IMPORTED_MODULE_3__["ShowcaseModule"])
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
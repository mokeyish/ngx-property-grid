function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./projects/ngx-property-grid/src/lib/dynamic-component-load.directive.ts":
  /*!********************************************************************************!*\
    !*** ./projects/ngx-property-grid/src/lib/dynamic-component-load.directive.ts ***!
    \********************************************************************************/

  /*! exports provided: DynamicComponentLoadDirective */

  /***/
  function projectsNgxPropertyGridSrcLibDynamicComponentLoadDirectiveTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DynamicComponentLoadDirective", function () {
      return DynamicComponentLoadDirective;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _property_value__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./property-value */
    "./projects/ngx-property-grid/src/lib/property-value.ts");

    var DynamicComponentLoadDirective = /*#__PURE__*/function () {
      function DynamicComponentLoadDirective(entry, componentFactoryResolver) {
        var _this = this;

        _classCallCheck(this, DynamicComponentLoadDirective);

        this.entry = entry;
        this.componentFactoryResolver = componentFactoryResolver;

        this._controlValueChangeFn = function (value) {
          return _this.propertyValue.value = value;
        };
      }

      _createClass(DynamicComponentLoadDirective, [{
        key: "ngOnChanges",
        value: function ngOnChanges(changes) {
          if (changes.options) {
            this.propertyValue = new _property_value__WEBPACK_IMPORTED_MODULE_1__["PropertyValue"](changes.options.currentValue, this.meta);
          }
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          this.buildComponent();
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.destroyComponent();
        }
      }, {
        key: "buildComponent",
        value: function buildComponent() {
          if (!this.componentType) {
            return;
          }

          try {
            this.destroyComponent(); // this.entry.clear();

            var componentFactory = this.componentFactoryResolver.resolveComponentFactory(this.componentType);
            var component = this.entry.createComponent(componentFactory, 0);
            this.initComponent(component);
            this.component = component;
          } catch (e) {
            console.error('load component error.');
            console.error(e);
          }
        }
      }, {
        key: "initComponent",
        value: function initComponent(component) {
          component.instance.value = this.propertyValue.value;

          if (component.instance.registerOnChange) {
            component.instance.registerOnChange(this._controlValueChangeFn);
          }

          if (component.instance.valueChange) {
            component.instance.valueChange.subscribe(this._controlValueChangeFn);
          }

          if (this.meta.options) {
            Object.assign(component.instance, this.meta.options);
          }
        }
      }, {
        key: "destroyComponent",
        value: function destroyComponent() {
          if (this.component) {
            this.component.destroy();
          }
        }
      }, {
        key: "componentType",
        get: function get() {
          return this.meta.type;
        }
      }]);

      return DynamicComponentLoadDirective;
    }();

    DynamicComponentLoadDirective.ɵfac = function DynamicComponentLoadDirective_Factory(t) {
      return new (t || DynamicComponentLoadDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"]));
    };

    DynamicComponentLoadDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
      type: DynamicComponentLoadDirective,
      selectors: [["", "dynamicComponentLoad", ""]],
      inputs: {
        meta: ["dynamicComponentLoad", "meta"],
        options: "options"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DynamicComponentLoadDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
          selector: '[dynamicComponentLoad]'
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"]
        }];
      }, {
        meta: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
          args: ['dynamicComponentLoad']
        }],
        options: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./projects/ngx-property-grid/src/lib/property-grid.component.ts":
  /*!***********************************************************************!*\
    !*** ./projects/ngx-property-grid/src/lib/property-grid.component.ts ***!
    \***********************************************************************/

  /*! exports provided: PropertyGridComponent, InternalGroup */

  /***/
  function projectsNgxPropertyGridSrcLibPropertyGridComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PropertyGridComponent", function () {
      return PropertyGridComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "InternalGroup", function () {
      return InternalGroup;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/animations */
    "./node_modules/@angular/animations/__ivy_ngcc__/fesm2015/animations.js");
    /* harmony import */


    var ngx_template__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ngx-template */
    "./node_modules/ngx-template/__ivy_ngcc__/fesm2015/ngx-template.js");
    /* harmony import */


    var _property_value__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./property-value */
    "./projects/ngx-property-grid/src/lib/property-value.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _dynamic_component_load_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./dynamic-component-load.directive */
    "./projects/ngx-property-grid/src/lib/dynamic-component-load.directive.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");

    function PropertyGridComponent_ng_container_4_tr_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PropertyGridComponent_ng_container_4_tr_1_Template_td_click_1_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9);

          var group_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r8.groupCollapse && group_r5.toggle();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var group_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](group_r5.name);
      }
    }

    function PropertyGridComponent_ng_container_4_ng_container_2_tr_1_span_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "[?]");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var item_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("title", item_r12.description);
      }
    }

    function PropertyGridComponent_ng_container_4_ng_container_2_tr_1_ng_container_4_ng_container_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
      }
    }

    var _c0 = function _c0(a0) {
      return {
        $implicit: a0
      };
    };

    function PropertyGridComponent_ng_container_4_ng_container_2_tr_1_ng_container_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PropertyGridComponent_ng_container_4_ng_container_2_tr_1_ng_container_4_ng_container_1_Template, 1, 0, "ng-container", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var item_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", _r2)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c0, item_r12));
      }
    }

    function PropertyGridComponent_ng_container_4_ng_container_2_tr_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PropertyGridComponent_ng_container_4_ng_container_2_tr_1_Template_td_click_1_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r22);

          var item_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          var ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r20.openLink(item_r12.link);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, PropertyGridComponent_ng_container_4_ng_container_2_tr_1_span_3_Template, 2, 1, "span", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, PropertyGridComponent_ng_container_4_ng_container_2_tr_1_ng_container_4_Template, 2, 4, "ng-container", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var item_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("cursor", item_r12.link ? "pointer" : null);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("colspan", item_r12.colSpan2 == true ? 2 : 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r12.name, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r13.showHelp && item_r12.showHelp && item_r12.description);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !item_r12.colSpan2);
      }
    }

    function PropertyGridComponent_ng_container_4_ng_container_2_tr_2_ng_container_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
      }
    }

    function PropertyGridComponent_ng_container_4_ng_container_2_tr_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PropertyGridComponent_ng_container_4_ng_container_2_tr_2_ng_container_1_Template, 1, 0, "ng-container", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var item_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", _r2)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c0, item_r12));
      }
    }

    function PropertyGridComponent_ng_container_4_ng_container_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PropertyGridComponent_ng_container_4_ng_container_2_tr_1_Template, 5, 6, "tr", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, PropertyGridComponent_ng_container_4_ng_container_2_tr_2_Template, 2, 4, "tr", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var item_r12 = ctx.$implicit;

        var group_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", group_r5.state);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", group_r5.state && item_r12.colSpan2);
      }
    }

    function PropertyGridComponent_ng_container_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PropertyGridComponent_ng_container_4_tr_1_Template, 3, 1, "tr", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, PropertyGridComponent_ng_container_4_ng_container_2_Template, 3, 2, "ng-container", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var group_r5 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", group_r5.name);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", group_r5.items);
      }
    }

    function PropertyGridComponent_div_5_Template(rf, ctx) {
      if (rf & 1) {
        var _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PropertyGridComponent_div_5_Template_div_click_1_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r30);

          var _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](5);

          return _r28.toggle();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "b");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "ngx-property-grid", 14, 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var item_r27 = ctx.$implicit;

        var _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](5);

        var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r1.cardStyle ? "card" : null);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r1.cardStyle ? null : "property-grid-header-margin");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r27.name);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("showHelp", ctx_r1.showHelp)("state", item_r27.initState)("@collapseAnimation", _r28.state)("options", ctx_r1.options[item_r27.key])("width", ctx_r1.width)("labelWidth", ctx_r1.labelWidth)("templateMap", ctx_r1.templateMap);
      }
    }

    function PropertyGridComponent_ng_template_6_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "this is ignored");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function PropertyGridComponent_ng_template_6_ng_template_2_ng_container_0_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
      }
    }

    function PropertyGridComponent_ng_template_6_ng_template_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, PropertyGridComponent_ng_template_6_ng_template_2_ng_container_0_Template, 1, 0, "ng-container", 11);
      }

      if (rf & 2) {
        var item_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        var ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r34.templateLoaded && ctx_r34.getTemplate(item_r31.type))("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c0, ctx_r34.propertyValue(item_r31)));
      }
    }

    function PropertyGridComponent_ng_template_6_ng_template_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0, 20);
      }

      if (rf & 2) {
        var item_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        var ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dynamicComponentLoad", item_r31)("options", ctx_r36.options);
      }
    }

    function PropertyGridComponent_ng_template_6_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PropertyGridComponent_ng_template_6_div_1_Template, 2, 0, "div", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, PropertyGridComponent_ng_template_6_ng_template_2_Template, 1, 4, "ng-template", null, 18, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, PropertyGridComponent_ng_template_6_ng_template_4_Template, 1, 2, "ng-template", null, 19, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var item_r31 = ctx.$implicit;

        var _r33 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);

        var _r35 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](5);

        var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("colspan", item_r31.colSpan2 == true ? 2 : 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.templateLoaded && ctx_r3.getTemplate(item_r31.type))("ngIfThen", _r33)("ngIfElse", _r35);
      }
    }

    function PropertyGridComponent_ng_container_8_ng_template_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r48 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "input", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function PropertyGridComponent_ng_container_8_ng_template_1_Template_input_ngModelChange_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r48);

          var p_r46 = ctx.$implicit;
          return p_r46.value = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var p_r46 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", p_r46.value);
      }
    }

    function PropertyGridComponent_ng_container_8_ng_template_2_Template(rf, ctx) {
      if (rf & 1) {
        var _r51 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "input", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function PropertyGridComponent_ng_container_8_ng_template_2_Template_input_ngModelChange_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r51);

          var p_r49 = ctx.$implicit;
          return p_r49.value = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var p_r49 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", p_r49.value);
      }
    }

    function PropertyGridComponent_ng_container_8_ng_template_3_Template(rf, ctx) {
      if (rf & 1) {
        var _r54 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "input", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function PropertyGridComponent_ng_container_8_ng_template_3_Template_input_ngModelChange_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r54);

          var p_r52 = ctx.$implicit;
          return p_r52.value = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var p_r52 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", p_r52.value);
      }
    }

    function PropertyGridComponent_ng_container_8_ng_template_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var p_r55 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](p_r55.value);
      }
    }

    function PropertyGridComponent_ng_container_8_ng_template_5_Template(rf, ctx) {
      if (rf & 1) {
        var _r58 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "input", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function PropertyGridComponent_ng_container_8_ng_template_5_Template_input_ngModelChange_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r58);

          var p_r56 = ctx.$implicit;
          return p_r56.value = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var p_r56 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", p_r56.value);
      }
    }

    function PropertyGridComponent_ng_container_8_ng_template_6_option_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var option_r61 = ctx.$implicit;

        var ctx_r60 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx_r60.optionValue(option_r61));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r60.optionLabel(option_r61), " ");
      }
    }

    function PropertyGridComponent_ng_container_8_ng_template_6_Template(rf, ctx) {
      if (rf & 1) {
        var _r63 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "select", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function PropertyGridComponent_ng_container_8_ng_template_6_Template_select_ngModelChange_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r63);

          var p_r59 = ctx.$implicit;
          return p_r59.value = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PropertyGridComponent_ng_container_8_ng_template_6_option_1_Template, 2, 2, "option", 32);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var p_r59 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", p_r59.value);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", p_r59.meta.options);
      }
    }

    function PropertyGridComponent_ng_container_8_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PropertyGridComponent_ng_container_8_ng_template_1_Template, 1, 1, "ng-template", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, PropertyGridComponent_ng_container_8_ng_template_2_Template, 1, 1, "ng-template", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, PropertyGridComponent_ng_container_8_ng_template_3_Template, 1, 1, "ng-template", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, PropertyGridComponent_ng_container_8_ng_template_4_Template, 2, 1, "ng-template", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, PropertyGridComponent_ng_container_8_ng_template_5_Template, 1, 1, "ng-template", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, PropertyGridComponent_ng_container_8_ng_template_6_Template, 2, 2, "ng-template", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }
    }

    var PropertyGridComponent = /*#__PURE__*/function () {
      function PropertyGridComponent(el, cdr) {
        _classCallCheck(this, PropertyGridComponent);

        this.cdr = cdr;
        this._templateLoaded = false;
        this.isInternal = false;
        this.state = 'visible';
        this.labelWidth = '120px';
        this.cardStyle = true;
        this.groupCollapse = false;
        this.showHelp = true;
        this.isInternal = el.nativeElement.parentElement && el.nativeElement.parentElement.classList && el.nativeElement.parentElement.classList.contains('internal-property-grid');
      }

      _createClass(PropertyGridComponent, [{
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          var _this2 = this;

          if (this.isInternal) {
            this._templateLoaded = true;
          } else {
            if (this.defaultTemplates) {
              this.defaultTemplates.forEach(function (item) {
                if (!_this2.templateMap.hasOwnProperty(item.name)) {
                  _this2.templateMap[item.name] = item.template;
                }
              });
              this._templateLoaded = true;
              this.cdr.detectChanges();
            }
          }
        }
      }, {
        key: "ngAfterContentInit",
        value: function ngAfterContentInit() {
          var _this3 = this;

          if (!this.isInternal) {
            if (!this.templateMap) {
              this.templateMap = {};
            }

            this.templates.forEach(function (item) {
              _this3.templateMap[item.name] = item.template;
            });
          }
        }
      }, {
        key: "openLink",
        value: function openLink(link) {
          if (link) {
            window.open(link, '_blank');
          }
        }
      }, {
        key: "getTemplate",
        value: function getTemplate(type) {
          if (typeof type === 'string' && this.templateMap) {
            return type ? this.templateMap[type] : this.templateMap["default"];
          } else {
            return undefined;
          }
        }
      }, {
        key: "propertyValue",
        value: function propertyValue(meta) {
          return new _property_value__WEBPACK_IMPORTED_MODULE_3__["PropertyValue"](this.options, meta);
        }
      }, {
        key: "toggle",
        value: function toggle() {
          this.state = this.state === 'visible' ? 'hidden' : 'visible';
        }
      }, {
        key: "initMeta",
        value: function initMeta() {
          var meta = this.meta;

          if (!meta) {
            this.subItems = [];
            return;
          }

          var groups = [new InternalGroup(undefined)];
          var subItems = [];

          var _loop = function _loop(i) {
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

            var group = groups.find(function (o) {
              return o.name === v.group;
            });

            if (!group) {
              group = new InternalGroup(v.group);
              groups.push(group);
            }

            group.items.push(v);
          };

          for (var i in meta) {
            var _ret = _loop(i);

            if (_ret === "continue") continue;
          }

          groups.forEach(function (o) {
            return o.items.sort(function (a, b) {
              return a.order - b.order;
            });
          });
          this.groups = groups.filter(function (o) {
            return o.items.length > 0;
          });
          this.subItems = subItems;
        }
      }, {
        key: "optionLabel",
        value: function optionLabel(v) {
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
        }
      }, {
        key: "optionValue",
        value: function optionValue(v) {
          return v && v.value ? v.value : v;
        }
      }, {
        key: "templateLoaded",
        get: function get() {
          return this._templateLoaded;
        }
      }, {
        key: "meta",
        set: function set(v) {
          this._meta = v;
          this.initMeta();
        },
        get: function get() {
          return this._meta;
        }
      }, {
        key: "options",
        set: function set(v) {
          this._options = v;

          if (v.__meta__) {
            this.meta = v.__meta__;
          }
        },
        get: function get() {
          return this._options;
        }
      }]);

      return PropertyGridComponent;
    }();

    PropertyGridComponent.ɵfac = function PropertyGridComponent_Factory(t) {
      return new (t || PropertyGridComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]));
    };

    PropertyGridComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: PropertyGridComponent,
      selectors: [["ngx-property-grid"]],
      contentQueries: function PropertyGridComponent_ContentQueries(rf, ctx, dirIndex) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, ngx_template__WEBPACK_IMPORTED_MODULE_2__["NgxTemplate"], false);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.templates = _t);
        }
      },
      viewQuery: function PropertyGridComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](ngx_template__WEBPACK_IMPORTED_MODULE_2__["NgxTemplate"], true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.defaultTemplates = _t);
        }
      },
      inputs: {
        templateMap: "templateMap",
        state: "state",
        width: "width",
        labelWidth: "labelWidth",
        cardStyle: "cardStyle",
        groupCollapse: "groupCollapse",
        showHelp: "showHelp",
        meta: "meta",
        options: "options"
      },
      decls: 9,
      vars: 9,
      consts: [[1, "property-grid", 3, "ngClass"], [3, "ngClass"], [1, "property-grid-table"], [4, "ngFor", "ngForOf"], ["class", "internal-property-grid", 3, "ngClass", 4, "ngFor", "ngForOf"], ["controlTemplate", ""], [4, "ngIf"], ["colspan", "2", 1, "property-grid-group", 3, "click"], [1, "property-grid-label", 3, "click"], [3, "title", 4, "ngIf"], [3, "title"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "internal-property-grid", 3, "ngClass"], [1, "property-grid-header", 3, "ngClass", "click"], [2, "display", "block", "overflow", "hidden", 3, "showHelp", "state", "options", "width", "labelWidth", "templateMap"], ["pg", ""], [1, "property-grid-control"], [4, "ngIf", "ngIfThen", "ngIfElse"], ["thenBlock", ""], ["elseBlock", ""], [3, "dynamicComponentLoad", "options"], ["ngxTemplate", "checkbox"], ["ngxTemplate", "color"], ["ngxTemplate", "date"], ["ngxTemplate", "label"], ["ngxTemplate", "text"], ["ngxTemplate", "options"], ["type", "checkbox", 3, "ngModel", "ngModelChange"], ["type", "color", 3, "ngModel", "ngModelChange"], ["type", "date", 3, "ngModel", "ngModelChange"], ["type", "text", 3, "ngModel", "ngModelChange"], [3, "ngModel", "ngModelChange"], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"]],
      template: function PropertyGridComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "table", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "tbody");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, PropertyGridComponent_ng_container_4_Template, 3, 2, "ng-container", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, PropertyGridComponent_div_5_Template, 6, 10, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, PropertyGridComponent_ng_template_6_Template, 6, 4, "ng-template", null, 5, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, PropertyGridComponent_ng_container_8_Template, 7, 0, "ng-container", 6);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("width", ctx.width);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", !ctx.isInternal && !ctx.cardStyle ? "property-grid-border" : null);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.cardStyle ? "card" : null);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("width", ctx.width);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.groups);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.subItems);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isInternal);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgTemplateOutlet"], PropertyGridComponent, _dynamic_component_load_directive__WEBPACK_IMPORTED_MODULE_5__["DynamicComponentLoadDirective"], ngx_template__WEBPACK_IMPORTED_MODULE_2__["NgxTemplate"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["CheckboxControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵangular_packages_forms_forms_x"]],
      styles: [".property-grid[_ngcontent-%COMP%] {\n        \n      }\n\n      .property-grid-border[_ngcontent-%COMP%] {\n        border: 1px solid #d6d6d678\n      }\n\n      .property-grid-table[_ngcontent-%COMP%] {\n        border-spacing: 0;\n        padding: 5px\n      }\n\n      .property-grid-group[_ngcontent-%COMP%] {\n        background-color: white;\n        font-weight: bold;\n        color: #616161;\n        padding-top: 8px;\n        padding-bottom: 5px;\n      }\n\n      .property-grid-label[_ngcontent-%COMP%], .property-grid-control[_ngcontent-%COMP%] {\n        border: dotted 1px #ccc;\n        padding: 2px 5px;\n      }\n\n      .internal-property-grid[_ngcontent-%COMP%] {\n        margin-top: 12px;\n      }\n\n      .internal-property-grid[_ngcontent-%COMP%]   .property-grid[_ngcontent-%COMP%] {\n        border-width: 0;\n      }\n\n      .internal-property-grid[_ngcontent-%COMP%]   .property-grid-header[_ngcontent-%COMP%] {\n        margin-bottom: 5px;\n        background-color: #f5f5f5;\n        padding-bottom: 5px;\n        padding-top: 5px;\n        padding-left: 5px;\n        box-shadow: 0 2px 3px rgba(10, 10, 10, 0.1), 0 0 0 1px rgba(10, 10, 10, 0.1);\n        -webkit-box-shadow: 0 2px 3px rgba(10, 10, 10, 0.1), 0 0 0 1px rgba(10, 10, 10, 0.1);\n        width: 100%;\n      }\n\n      .internal-property-grid[_ngcontent-%COMP%]   .property-grid-header-margin[_ngcontent-%COMP%] {\n        margin-left: 5px;\n        margin-right: 5px;\n        width: unset;\n      }\n\n      .internal-property-grid[_ngcontent-%COMP%]   .property-grid-table[_ngcontent-%COMP%] {\n        border-width: 0;\n        \n      }\n\n      .card[_ngcontent-%COMP%] {\n        background-color: #fff;\n        box-shadow: 0 6px 10px 0 rgba(0, 0, 0, .14), 0 1px 18px 0 rgba(0, 0, 0, .12), 0 3px 5px -1px rgba(0, 0, 0, .2);\n        display: flex;\n        flex-flow: row wrap;\n        \n        padding: 0;\n      }\n\n      .internal-property-grid[_ngcontent-%COMP%]   ngx-property-grid[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%] {\n        background-color: unset;\n        box-shadow: unset;\n        display: unset;\n        flex-flow: unset;\n        \n        padding: unset;\n      }"],
      data: {
        animation: [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('collapseAnimation', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('hidden', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
          height: '0'
        })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('visible', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
          height: '*'
        })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('visible <=> hidden', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('400ms cubic-bezier(0.86, 0, 0.07, 1)'))]), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('flyInOut', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
          transform: 'translateX(0)'
        })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('void => *', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
          transform: 'translateX(-100%)'
        }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])(100)]), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('* => void', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])(100, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
          transform: 'translateX(100%)'
        }))])])]
      }
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PropertyGridComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'ngx-property-grid',
          template: "\n    <div class=\"property-grid\" [ngClass]=\"!isInternal && !cardStyle ? 'property-grid-border': null\" [style.width]=\"width\">\n      <div [ngClass]=\"cardStyle ? 'card' : null\">\n        <table class=\"property-grid-table\" [style.width]=\"width\">\n          <tbody>\n          <ng-container *ngFor=\"let group of groups\">\n            <tr *ngIf=\"group.name\">\n              <td colspan=\"2\" class=\"property-grid-group\" (click)=\"groupCollapse && group.toggle()\">{{group.name}}</td>\n            </tr>\n\n            <ng-container *ngFor=\"let item of group.items\">\n              <tr *ngIf=\"group.state\">\n                <td [attr.colspan]=\"item.colSpan2 == true ? 2 : 1\"\n                    class=\"property-grid-label\"\n                    [style.cursor]=\"item.link ? 'pointer' : null\"\n                    (click)=\"openLink(item.link)\">\n                  {{item.name}}\n                  <span *ngIf=\"showHelp && item.showHelp && item.description\" [title]=\"item.description\">[?]</span>\n                </td>\n                <ng-container *ngIf=\"!item.colSpan2\">\n                  <ng-container\n                    *ngTemplateOutlet=\"controlTemplate; context: {$implicit: item}\">\n                  </ng-container>\n                </ng-container>\n              </tr>\n              <tr *ngIf=\"group.state && item.colSpan2\">\n                <ng-container *ngTemplateOutlet=\"controlTemplate; context: {$implicit: item}\"></ng-container>\n              </tr>\n            </ng-container>\n          </ng-container>\n          </tbody>\n        </table>\n      </div>\n\n      <div *ngFor=\"let item of subItems\" class=\"internal-property-grid\" [ngClass]=\"cardStyle ? 'card' : null\">\n        <div (click)=\"pg.toggle()\" class=\"property-grid-header\"\n             [ngClass]=\"cardStyle ? null : 'property-grid-header-margin'\">\n          <b>{{item.name}}</b>\n        </div>\n        <ngx-property-grid\n          [showHelp]=\"showHelp\"\n          [state]=\"item.initState\"\n          [@collapseAnimation]=\"pg.state\"\n          [options]=\"options[item.key]\"\n          [width]=\"width\"\n          [labelWidth]=\"labelWidth\"\n          [templateMap]=\"templateMap\"\n          style=\"display: block;overflow: hidden\"\n          #pg>\n        </ngx-property-grid>\n      </div>\n    </div>\n\n\n    <ng-template #controlTemplate let-item>\n      <td [attr.colspan]=\"item.colSpan2 == true ? 2 : 1\" class=\"property-grid-control\">\n        <div *ngIf=\"templateLoaded && getTemplate(item.type); then thenBlock; else elseBlock\">this is ignored</div>\n        <ng-template #thenBlock>\n          <ng-container *ngTemplateOutlet=\"templateLoaded && getTemplate(item.type); context: {$implicit: propertyValue(item)}\">\n          </ng-container>\n        </ng-template>\n        <ng-template #elseBlock>\n          <ng-container\n            [dynamicComponentLoad]=\"item\"\n            [options]=\"options\">\n          </ng-container>\n        </ng-template>\n      </td>\n    </ng-template>\n\n\n    <ng-container *ngIf=\"!isInternal\">\n\n      <ng-template ngxTemplate=\"checkbox\" let-p>\n        <input type=\"checkbox\" [(ngModel)]=\"p.value\"/>\n      </ng-template>\n\n      <ng-template ngxTemplate=\"color\" let-p>\n        <input type=\"color\" [(ngModel)]=\"p.value\"/>\n      </ng-template>\n\n      <ng-template ngxTemplate=\"date\" let-p>\n        <input type=\"date\" [(ngModel)]=\"p.value\"/>\n      </ng-template>\n\n      <ng-template ngxTemplate=\"label\" let-p>\n        <label>{{p.value}}</label>\n      </ng-template>\n\n      <ng-template ngxTemplate=\"text\" let-p>\n        <input type=\"text\" [(ngModel)]=\"p.value\"/>\n      </ng-template>\n\n      <ng-template ngxTemplate=\"options\" let-p>\n        <select [(ngModel)]=\"p.value\">\n          <option [value]=\"optionValue(option)\" *ngFor=\"let option of p.meta.options\">\n            {{optionLabel(option)}}\n          </option>\n        </select>\n      </ng-template>\n    </ng-container>\n  ",
          styles: ["\n      .property-grid {\n        /*border: solid 1px #95B8E7;*/\n      }\n\n      .property-grid-border {\n        border: 1px solid #d6d6d678\n      }\n\n      .property-grid-table {\n        border-spacing: 0;\n        padding: 5px\n      }\n\n      .property-grid-group {\n        background-color: white;\n        font-weight: bold;\n        color: #616161;\n        padding-top: 8px;\n        padding-bottom: 5px;\n      }\n\n      .property-grid-label, .property-grid-control {\n        border: dotted 1px #ccc;\n        padding: 2px 5px;\n      }\n\n      .internal-property-grid {\n        margin-top: 12px;\n      }\n\n      .internal-property-grid .property-grid {\n        border-width: 0;\n      }\n\n      .internal-property-grid .property-grid-header {\n        margin-bottom: 5px;\n        background-color: #f5f5f5;\n        padding-bottom: 5px;\n        padding-top: 5px;\n        padding-left: 5px;\n        box-shadow: 0 2px 3px rgba(10, 10, 10, 0.1), 0 0 0 1px rgba(10, 10, 10, 0.1);\n        -webkit-box-shadow: 0 2px 3px rgba(10, 10, 10, 0.1), 0 0 0 1px rgba(10, 10, 10, 0.1);\n        width: 100%;\n      }\n\n      .internal-property-grid .property-grid-header-margin {\n        margin-left: 5px;\n        margin-right: 5px;\n        width: unset;\n      }\n\n      .internal-property-grid .property-grid-table {\n        border-width: 0;\n        /*border-top: 1px solid #dbdbdb;*/\n      }\n\n      .card {\n        background-color: #fff;\n        box-shadow: 0 6px 10px 0 rgba(0, 0, 0, .14), 0 1px 18px 0 rgba(0, 0, 0, .12), 0 3px 5px -1px rgba(0, 0, 0, .2);\n        display: flex;\n        flex-flow: row wrap;\n        /*margin: 5px 20px;*/\n        padding: 0;\n      }\n\n      .internal-property-grid ngx-property-grid .card {\n        background-color: unset;\n        box-shadow: unset;\n        display: unset;\n        flex-flow: unset;\n        /*margin: 5px 20px;*/\n        padding: unset;\n      }\n    "],
          animations: [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('collapseAnimation', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('hidden', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
            height: '0'
          })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('visible', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
            height: '*'
          })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('visible <=> hidden', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('400ms cubic-bezier(0.86, 0, 0.07, 1)'))]), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('flyInOut', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
            transform: 'translateX(0)'
          })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('void => *', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
            transform: 'translateX(-100%)'
          }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])(100)]), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('* => void', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])(100, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
            transform: 'translateX(100%)'
          }))])])]
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]
        }];
      }, {
        templateMap: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        state: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        width: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        labelWidth: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        cardStyle: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        groupCollapse: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        showHelp: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        meta: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        options: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        defaultTemplates: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChildren"],
          args: [ngx_template__WEBPACK_IMPORTED_MODULE_2__["NgxTemplate"]]
        }],
        templates: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChildren"],
          args: [ngx_template__WEBPACK_IMPORTED_MODULE_2__["NgxTemplate"]]
        }]
      });
    })();

    var InternalGroup = /*#__PURE__*/function () {
      function InternalGroup(name) {
        _classCallCheck(this, InternalGroup);

        this.name = name;
        this.items = [];
        this.type = 'group';
        this.state = true;
      }

      _createClass(InternalGroup, [{
        key: "toggle",
        value: function toggle() {
          this.state = !this.state;
        }
      }]);

      return InternalGroup;
    }();
    /***/

  },

  /***/
  "./projects/ngx-property-grid/src/lib/property-grid.module.ts":
  /*!********************************************************************!*\
    !*** ./projects/ngx-property-grid/src/lib/property-grid.module.ts ***!
    \********************************************************************/

  /*! exports provided: PropertyGridModule */

  /***/
  function projectsNgxPropertyGridSrcLibPropertyGridModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PropertyGridModule", function () {
      return PropertyGridModule;
    });
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _dynamic_component_load_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./dynamic-component-load.directive */
    "./projects/ngx-property-grid/src/lib/dynamic-component-load.directive.ts");
    /* harmony import */


    var _property_grid_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./property-grid.component */
    "./projects/ngx-property-grid/src/lib/property-grid.component.ts");
    /* harmony import */


    var ngx_template__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ngx-template */
    "./node_modules/ngx-template/__ivy_ngcc__/fesm2015/ngx-template.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");

    var PropertyGridModule = function PropertyGridModule() {
      _classCallCheck(this, PropertyGridModule);
    };

    PropertyGridModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: PropertyGridModule
    });
    PropertyGridModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function PropertyGridModule_Factory(t) {
        return new (t || PropertyGridModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], ngx_template__WEBPACK_IMPORTED_MODULE_4__["NgxTemplateModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](PropertyGridModule, {
        declarations: [_property_grid_component__WEBPACK_IMPORTED_MODULE_3__["PropertyGridComponent"], _dynamic_component_load_directive__WEBPACK_IMPORTED_MODULE_2__["DynamicComponentLoadDirective"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], ngx_template__WEBPACK_IMPORTED_MODULE_4__["NgxTemplateModule"]],
        exports: [_property_grid_component__WEBPACK_IMPORTED_MODULE_3__["PropertyGridComponent"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](PropertyGridModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], ngx_template__WEBPACK_IMPORTED_MODULE_4__["NgxTemplateModule"]],
          declarations: [_property_grid_component__WEBPACK_IMPORTED_MODULE_3__["PropertyGridComponent"], _dynamic_component_load_directive__WEBPACK_IMPORTED_MODULE_2__["DynamicComponentLoadDirective"]],
          exports: [_property_grid_component__WEBPACK_IMPORTED_MODULE_3__["PropertyGridComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./projects/ngx-property-grid/src/lib/property-item-meta.ts":
  /*!******************************************************************!*\
    !*** ./projects/ngx-property-grid/src/lib/property-item-meta.ts ***!
    \******************************************************************/

  /*! exports provided: meta */

  /***/
  function projectsNgxPropertyGridSrcLibPropertyItemMetaTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "meta", function () {
      return meta;
    });

    var meta = function meta(itemMeta) {
      return function (target, key) {
        // region [adjust]
        itemMeta.key = key;

        if (typeof itemMeta.type === 'string') {} else {}

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

        if (itemMeta.showHelp === undefined) {
          itemMeta.showHelp = true;
        } // endregion


        var __meta__ = target.__meta__;

        if (!__meta__) {
          __meta__ = {};
          target.__meta__ = __meta__;
        } else if (target.__proto__.__meta__ === __meta__) {
          var subMeta = Object.create(Object.getPrototypeOf(__meta__));
          Object.getOwnPropertyNames(__meta__).forEach(function (name) {
            Object.defineProperty(subMeta, name, Object.getOwnPropertyDescriptor(__meta__, name));
          });
          __meta__ = subMeta;
          target.__meta__ = __meta__;
        }

        Object.defineProperty(__meta__, key, {
          enumerable: true,
          get: function get() {
            return itemMeta;
          },
          set: function set(v) {
            return itemMeta = v;
          }
        });
      };
    };
    /***/

  },

  /***/
  "./projects/ngx-property-grid/src/lib/property-value.ts":
  /*!**************************************************************!*\
    !*** ./projects/ngx-property-grid/src/lib/property-value.ts ***!
    \**************************************************************/

  /*! exports provided: PropertyValue */

  /***/
  function projectsNgxPropertyGridSrcLibPropertyValueTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PropertyValue", function () {
      return PropertyValue;
    });

    var PropertyValue = /*#__PURE__*/function () {
      function PropertyValue(o, meta) {
        _classCallCheck(this, PropertyValue);

        this.o = o;
        this.meta = meta;
      }

      _createClass(PropertyValue, [{
        key: "value",
        get: function get() {
          return this.o[this.meta.key];
        },
        set: function set(val) {
          this.o[this.meta.key] = this.meta.valueConvert ? this.meta.valueConvert(val) : val;
        }
      }]);

      return PropertyValue;
    }();
    /***/

  },

  /***/
  "./projects/ngx-property-grid/src/public-api.ts":
  /*!******************************************************!*\
    !*** ./projects/ngx-property-grid/src/public-api.ts ***!
    \******************************************************/

  /*! exports provided: PropertyGridModule, PropertyGridComponent, InternalGroup, meta, PropertyValue */

  /***/
  function projectsNgxPropertyGridSrcPublicApiTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _lib_property_grid_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./lib/property-grid.module */
    "./projects/ngx-property-grid/src/lib/property-grid.module.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "PropertyGridModule", function () {
      return _lib_property_grid_module__WEBPACK_IMPORTED_MODULE_0__["PropertyGridModule"];
    });
    /* harmony import */


    var _lib_property_grid_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./lib/property-grid.component */
    "./projects/ngx-property-grid/src/lib/property-grid.component.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "PropertyGridComponent", function () {
      return _lib_property_grid_component__WEBPACK_IMPORTED_MODULE_1__["PropertyGridComponent"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "InternalGroup", function () {
      return _lib_property_grid_component__WEBPACK_IMPORTED_MODULE_1__["InternalGroup"];
    });
    /* harmony import */


    var _lib_property_item_meta__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./lib/property-item-meta */
    "./projects/ngx-property-grid/src/lib/property-item-meta.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "meta", function () {
      return _lib_property_item_meta__WEBPACK_IMPORTED_MODULE_2__["meta"];
    });
    /* harmony import */


    var _lib_property_value__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./lib/property-value */
    "./projects/ngx-property-grid/src/lib/property-value.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "PropertyValue", function () {
      return _lib_property_value__WEBPACK_IMPORTED_MODULE_3__["PropertyValue"];
    });
    /*
     * Public API Surface of ngx-property-grid
     */

    /***/

  },

  /***/
  "./src/app/showcase/app.component.ts":
  /*!*******************************************!*\
    !*** ./src/app/showcase/app.component.ts ***!
    \*******************************************/

  /*! exports provided: AppComponent, SimpleTextEditorComponent, ExampleEditorOptions, ExampleStudentOptions */

  /***/
  function srcAppShowcaseAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SimpleTextEditorComponent", function () {
      return SimpleTextEditorComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ExampleEditorOptions", function () {
      return ExampleEditorOptions;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ExampleStudentOptions", function () {
      return ExampleStudentOptions;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material/checkbox */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/checkbox.js");
    /* harmony import */


    var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material/slide-toggle */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/slide-toggle.js");
    /* harmony import */


    var ngx_property_grid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ngx-property-grid */
    "./projects/ngx-property-grid/src/public-api.ts");
    /* harmony import */


    var _projects_ngx_property_grid_src_lib_property_grid_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../../projects/ngx-property-grid/src/lib/property-grid.component */
    "./projects/ngx-property-grid/src/lib/property-grid.component.ts");
    /* harmony import */


    var ngx_template__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ngx-template */
    "./node_modules/ngx-template/__ivy_ngcc__/fesm2015/ngx-template.js");
    /* harmony import */


    var ng_json_view__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ng-json-view */
    "./node_modules/ng-json-view/__ivy_ngcc__/fesm2015/ng-json-view.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/material/datepicker */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/datepicker.js");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/material/form-field */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
    /* harmony import */


    var _angular_material_radio__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/material/radio */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/radio.js");

    function AppComponent_ng_template_5_Template(rf, ctx) {
      if (rf & 1) {
        var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "input", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function AppComponent_ng_template_5_Template_input_change_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r6);

          var p_r4 = ctx.$implicit;
          return p_r4.value = $event.target.value;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var p_r4 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", p_r4.value);
      }
    }

    function AppComponent_ng_template_6_Template(rf, ctx) {
      if (rf & 1) {
        var _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "input", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function AppComponent_ng_template_6_Template_input_ngModelChange_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r9);

          var pp_r7 = ctx.$implicit;
          return pp_r7.value = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var pp_r7 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", pp_r7.value);
      }
    }

    function AppComponent_ng_template_7_Template(rf, ctx) {
      if (rf & 1) {
        var _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "input", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function AppComponent_ng_template_7_Template_input_ngModelChange_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r13);

          var p_r10 = ctx.$implicit;
          return p_r10.value = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "mat-datepicker-toggle", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "mat-datepicker", null, 13);
      }

      if (rf & 2) {
        var p_r10 = ctx.$implicit;

        var _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matDatepicker", _r11)("ngModel", p_r10.value);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("for", _r11);
      }
    }

    function AppComponent_ng_template_8_Template(rf, ctx) {
      if (rf & 1) {
        var _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-radio-group", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function AppComponent_ng_template_8_Template_mat_radio_group_ngModelChange_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r16);

          var p_r14 = ctx.$implicit;
          return p_r14.value = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-radio-button", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "male");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "mat-radio-button", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "female");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var p_r14 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", p_r14.value);
      }
    }

    var AppComponent = /*#__PURE__*/function () {
      function AppComponent() {
        _classCallCheck(this, AppComponent);

        this.student = new ExampleStudentOptions();
      }

      _createClass(AppComponent, [{
        key: "data",
        get: function get() {
          return JSON.parse(JSON.stringify(this.student));
        }
      }]);

      return AppComponent;
    }();

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)();
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 14,
      vars: 7,
      consts: [[2, "text-align", "center"], [2, "display", "flex", "flex-direction", "row"], [3, "width", "options", "showHelp", "groupCollapse", "cardStyle"], ["ngxTemplate", "text"], ["ngxTemplate", "fontSize"], ["ngxTemplate", "date"], ["ngxTemplate", "sex"], [2, "margin-left", "50px", "flex", "1"], [3, "data", "levelOpen"], ["type", "text", 3, "value", "change"], ["matInput", "", "type", "number", "placeholder", "Value", 3, "ngModel", "ngModelChange"], ["matInput", "", "placeholder", "Choose a date", 3, "matDatepicker", "ngModel", "ngModelChange"], ["matSuffix", "", 3, "for"], ["picker", ""], [3, "ngModel", "ngModelChange"], ["value", "male"], ["value", "female"]],
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h1", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Property Grid Example");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "ngx-property-grid", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, AppComponent_ng_template_5_Template, 1, 1, "ng-template", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, AppComponent_ng_template_6_Template, 1, 1, "ng-template", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, AppComponent_ng_template_7_Template, 4, 3, "ng-template", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, AppComponent_ng_template_8_Template, 5, 1, "ng-template", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "The Object\uFF1A");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](13, "ngx-json-view", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("width", "400px")("options", ctx.student)("showHelp", true)("groupCollapse", true)("cardStyle", ctx.student.editor.cardStyle);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("data", ctx.data)("levelOpen", 1);
        }
      },
      directives: [_projects_ngx_property_grid_src_lib_property_grid_component__WEBPACK_IMPORTED_MODULE_5__["PropertyGridComponent"], ngx_template__WEBPACK_IMPORTED_MODULE_6__["NgxTemplate"], ng_json_view__WEBPACK_IMPORTED_MODULE_7__["NgxJsonViewComponent"], _angular_material_input__WEBPACK_IMPORTED_MODULE_8__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NumberValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgModel"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_10__["MatDatepickerInput"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_10__["MatDatepickerToggle"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__["MatSuffix"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_10__["MatDatepicker"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_12__["MatRadioGroup"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_12__["MatRadioButton"]],
      encapsulation: 2
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
          selector: 'app-root',
          templateUrl: './app.component.html'
        }]
      }], function () {
        return [];
      }, null);
    })();

    var SimpleTextEditorComponent = function SimpleTextEditorComponent() {
      _classCallCheck(this, SimpleTextEditorComponent);

      this.valueChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    };

    SimpleTextEditorComponent.ɵfac = function SimpleTextEditorComponent_Factory(t) {
      return new (t || SimpleTextEditorComponent)();
    };

    SimpleTextEditorComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: SimpleTextEditorComponent,
      selectors: [["app-text-editor"]],
      decls: 1,
      vars: 1,
      consts: [["type", "text", 3, "value", "change"]],
      template: function SimpleTextEditorComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "input", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function SimpleTextEditorComponent_Template_input_change_0_listener($event) {
            return ctx.valueChange.emit($event.target.value);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", ctx.value);
        }
      },
      encapsulation: 2
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](SimpleTextEditorComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
          selector: 'app-text-editor',
          template: "<input type=\"text\" [value]=\"value\" (change)=\"valueChange.emit($event.target.value)\"/>"
        }]
      }], null, null);
    })();

    var ExampleEditorOptions = function ExampleEditorOptions() {
      _classCallCheck(this, ExampleEditorOptions);

      this.font = 'Source Code Pro';
      this.fontSize = 14;
      this.fontColor = '#51f41c';
      this.jQuery = true;
      this.cardStyle = true;
      this.modernizr = false;
      this.framework = 'None';
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(ngx_property_grid__WEBPACK_IMPORTED_MODULE_4__["meta"])({
      name: 'Font',
      description: 'The font editor to use',
      colSpan2: false,
      type: SimpleTextEditorComponent,
      group: 'Editor',
      hidden: false
    })], ExampleEditorOptions.prototype, "font", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(ngx_property_grid__WEBPACK_IMPORTED_MODULE_4__["meta"])({
      name: 'Font size',
      group: 'Editor',
      valueConvert: parseInt,
      type: 'fontSize'
    })], ExampleEditorOptions.prototype, "fontSize", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(ngx_property_grid__WEBPACK_IMPORTED_MODULE_4__["meta"])({
      name: 'Font color',
      group: 'Editor',
      type: 'color'
    })], ExampleEditorOptions.prototype, "fontColor", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(ngx_property_grid__WEBPACK_IMPORTED_MODULE_4__["meta"])({
      name: 'jQuery',
      group: 'Plugins',
      type: _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_2__["MatCheckbox"]
    })], ExampleEditorOptions.prototype, "jQuery", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(ngx_property_grid__WEBPACK_IMPORTED_MODULE_4__["meta"])({
      name: 'Card Style',
      group: 'Style',
      type: _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_2__["MatCheckbox"]
    })], ExampleEditorOptions.prototype, "cardStyle", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(ngx_property_grid__WEBPACK_IMPORTED_MODULE_4__["meta"])({
      name: 'modernizr',
      description: 'Whether or not to include modernizr on the page',
      group: 'Plugins',
      type: _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_3__["MatSlideToggle"]
    })], ExampleEditorOptions.prototype, "modernizr", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(ngx_property_grid__WEBPACK_IMPORTED_MODULE_4__["meta"])({
      name: 'Framework',
      description: 'Whether to include any additional framework',
      type: 'options',
      options: ['None', {
        text: 'AngularJS',
        value: 'angular'
      }, {
        text: 'Backbone.js',
        value: 'backbone'
      }]
    })], ExampleEditorOptions.prototype, "framework", void 0);

    var ExampleStudentOptions = function ExampleStudentOptions() {
      _classCallCheck(this, ExampleStudentOptions);

      this.birth = '2018-05-08';
      this.name = 'Lily';
      this.age = 19;
      this.gender = 'male';
      this.editor = new ExampleEditorOptions();
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(ngx_property_grid__WEBPACK_IMPORTED_MODULE_4__["meta"])({
      name: 'Birth',
      group: 'Basic Information',
      type: 'date',
      order: 4
    })], ExampleStudentOptions.prototype, "birth", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(ngx_property_grid__WEBPACK_IMPORTED_MODULE_4__["meta"])({
      name: 'Name',
      group: 'Basic Information',
      type: 'text',
      order: 1,
      link: 'http://www.baidu.com'
    })], ExampleStudentOptions.prototype, "name", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(ngx_property_grid__WEBPACK_IMPORTED_MODULE_4__["meta"])({
      name: 'Age',
      group: 'Basic Information1',
      valueConvert: parseInt,
      type: 'text',
      order: 2
    })], ExampleStudentOptions.prototype, "age", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(ngx_property_grid__WEBPACK_IMPORTED_MODULE_4__["meta"])({
      name: 'Telephone',
      type: 'telephone',
      group: 'Basic Information1',
      hidden: true
    })], ExampleStudentOptions.prototype, "telephone", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(ngx_property_grid__WEBPACK_IMPORTED_MODULE_4__["meta"])({
      name: 'Gender',
      group: 'Basic Information',
      type: 'sex',
      order: 3
    })], ExampleStudentOptions.prototype, "gender", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(ngx_property_grid__WEBPACK_IMPORTED_MODULE_4__["meta"])({
      name: 'Editor Preference',
      type: 'subItems',
      initState: 'visible'
    })], ExampleStudentOptions.prototype, "editor", void 0);
    /***/
  },

  /***/
  "./src/app/showcase/showcase.module.ts":
  /*!*********************************************!*\
    !*** ./src/app/showcase/showcase.module.ts ***!
    \*********************************************/

  /*! exports provided: ShowcaseModule */

  /***/
  function srcAppShowcaseShowcaseModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ShowcaseModule", function () {
      return ShowcaseModule;
    });
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/showcase/app.component.ts");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var ngx_template__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ngx-template */
    "./node_modules/ngx-template/__ivy_ngcc__/fesm2015/ngx-template.js");
    /* harmony import */


    var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/checkbox */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/checkbox.js");
    /* harmony import */


    var _angular_material_slider__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material/slider */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/slider.js");
    /* harmony import */


    var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/material/datepicker */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/datepicker.js");
    /* harmony import */


    var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/material/slide-toggle */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/slide-toggle.js");
    /* harmony import */


    var _angular_material_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/material/core */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_material_radio__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/material/radio */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/radio.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
    /* harmony import */


    var ng_json_view__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ng-json-view */
    "./node_modules/ng-json-view/__ivy_ngcc__/fesm2015/ng-json-view.js");
    /* harmony import */


    var ngx_property_grid__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ngx-property-grid */
    "./projects/ngx-property-grid/src/public-api.ts");

    var ShowcaseModule = function ShowcaseModule() {
      _classCallCheck(this, ShowcaseModule);
    };

    ShowcaseModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: ShowcaseModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
    });
    ShowcaseModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function ShowcaseModule_Factory(t) {
        return new (t || ShowcaseModule)();
      },
      providers: [],
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["NoopAnimationsModule"], ngx_property_grid__WEBPACK_IMPORTED_MODULE_14__["PropertyGridModule"], ngx_template__WEBPACK_IMPORTED_MODULE_5__["NgxTemplateModule"], ng_json_view__WEBPACK_IMPORTED_MODULE_13__["NgxJsonViewModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_6__["MatCheckboxModule"], _angular_material_slider__WEBPACK_IMPORTED_MODULE_7__["MatSliderModule"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_8__["MatDatepickerModule"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_9__["MatSlideToggleModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_10__["MatNativeDateModule"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_11__["MatRadioModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_12__["MatInputModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](ShowcaseModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"], _app_component__WEBPACK_IMPORTED_MODULE_2__["SimpleTextEditorComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["NoopAnimationsModule"], ngx_property_grid__WEBPACK_IMPORTED_MODULE_14__["PropertyGridModule"], ngx_template__WEBPACK_IMPORTED_MODULE_5__["NgxTemplateModule"], ng_json_view__WEBPACK_IMPORTED_MODULE_13__["NgxJsonViewModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_6__["MatCheckboxModule"], _angular_material_slider__WEBPACK_IMPORTED_MODULE_7__["MatSliderModule"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_8__["MatDatepickerModule"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_9__["MatSlideToggleModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_10__["MatNativeDateModule"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_11__["MatRadioModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_12__["MatInputModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ShowcaseModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["NoopAnimationsModule"], ngx_property_grid__WEBPACK_IMPORTED_MODULE_14__["PropertyGridModule"], ngx_template__WEBPACK_IMPORTED_MODULE_5__["NgxTemplateModule"], ng_json_view__WEBPACK_IMPORTED_MODULE_13__["NgxJsonViewModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_6__["MatCheckboxModule"], _angular_material_slider__WEBPACK_IMPORTED_MODULE_7__["MatSliderModule"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_8__["MatDatepickerModule"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_9__["MatSlideToggleModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_10__["MatNativeDateModule"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_11__["MatRadioModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_12__["MatInputModule"]],
          entryComponents: [_app_component__WEBPACK_IMPORTED_MODULE_2__["SimpleTextEditorComponent"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_6__["MatCheckbox"], _angular_material_slider__WEBPACK_IMPORTED_MODULE_7__["MatSlider"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_8__["MatDatepicker"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_9__["MatSlideToggle"]],
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"], _app_component__WEBPACK_IMPORTED_MODULE_2__["SimpleTextEditorComponent"]],
          providers: [],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_showcase_showcase_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/showcase/showcase.module */
    "./src/app/showcase/showcase.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_showcase_showcase_module__WEBPACK_IMPORTED_MODULE_2__["ShowcaseModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/

  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! /Users/yish/work/ngx-property-grid/src/main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map
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
var animations_1 = require("@angular/animations");
var property_item_template_directive_1 = require("./property-item-template.directive");
var PropertyGridComponent = /** @class */ (function () {
    function PropertyGridComponent(el, cdr) {
        this.cdr = cdr;
        this.templateMap = {};
        this.state = 'visible';
        this.labelWidth = '120px';
        this.isInternal = el.nativeElement.parentElement.classList.contains('internal-property-grid');
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
        core_1.Input(),
        __metadata("design:type", Object)
    ], PropertyGridComponent.prototype, "templateMap", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], PropertyGridComponent.prototype, "state", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], PropertyGridComponent.prototype, "width", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], PropertyGridComponent.prototype, "labelWidth", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], PropertyGridComponent.prototype, "meta", null);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], PropertyGridComponent.prototype, "options", null);
    __decorate([
        core_1.ViewChildren(property_item_template_directive_1.PropertyItemTemplateDirective),
        __metadata("design:type", core_1.QueryList)
    ], PropertyGridComponent.prototype, "defaultTemplates", void 0);
    __decorate([
        core_1.ContentChildren(property_item_template_directive_1.PropertyItemTemplateDirective),
        __metadata("design:type", core_1.QueryList)
    ], PropertyGridComponent.prototype, "templates", void 0);
    PropertyGridComponent = __decorate([
        core_1.Component({
            selector: 'ngx-property-grid',
            template: "\n        <div class=\"property-grid\" [style.width]=\"width\">\n            <div class=\"card\">\n                <table class=\"property-grid-table\" [style.width]=\"width\">\n                    <tbody>\n                    <tr *ngFor=\"let row of rows\" [ngClass]=\"row.type == 'group'? 'property-grid-group-row':'property-grid-row'\">\n\n                        <!--<td [attr.colspan]=\"row.colspan\"></td>-->\n                        <td *ngIf=\"row.type == 'group'\" colspan=\"2\" class=\"property-grid-group\">{{row.name}}</td>\n                        <td *ngIf=\"row.type != 'group' && row.colSpan2 != true\" [width]=\"labelWidth\" colspan=\"1\"\n                            class=\"property-grid-label\">\n                            {{row.name}}\n                            <span *ngIf=\"row.description\" [title]=\"row.description\">[?]</span>\n                        </td>\n                        <td *ngIf=\"row.type != 'group'\" [attr.colspan]=\"row.colSpan2 == true ? 2 : 1\" class=\"property-grid-control\">\n                            <custom-component\n                                *ngIf=\"!getTemplate(row.type)\"\n                                [componentType]=\"row.componentType\"\n                                [componentOptions]=\"row.componentOptions\"\n                                [value]=\"options[row.key]\"\n                                (valueChange)=\"convertValue(row, $event)\">\n                            </custom-component>\n                            <ng-container *ngTemplateOutlet=\"getTemplate(row.type); context: {$implicit: propertyValue(row)}\">\n                            </ng-container>\n                        </td>\n                    </tr>\n                    </tbody>\n                </table>\n            </div>\n\n            <div *ngFor=\"let item of subItems\" class=\"internal-property-grid card\">\n                <div (click)=\"pg.toggle()\" class=\"property-grid-header\" [style.width]=\"'100%'\"><b>{{item.name}}</b></div>\n                <ngx-property-grid\n                    [state]=\"item.initState\"\n                    [@internalPropertyGrid]=\"pg.state\"\n                    [options]=\"options[item.key]\"\n                    [width]=\"width\"\n                    [labelWidth]=\"labelWidth\"\n                    [templateMap]=\"templateMap\"\n                    style=\"display: block;overflow: hidden\"\n                    #pg>\n                </ngx-property-grid>\n            </div>\n        </div>\n        <div *ngIf=\"!isInternal\">\n            <ng-template propertyType=\"checkbox\" let-p>\n                <input type=\"checkbox\" [checked]=\"p.value\" (change)=\"p.value = $event.target.checked\" />\n            </ng-template>\n\n            <ng-template propertyType=\"color\" let-p>\n                <input type=\"color\" [value]=\"p.value\" (change)=\"p.value = $event.target.value\"/>\n            </ng-template>\n\n            <ng-template propertyType=\"date\" let-p>\n                <input type=\"date\" [value]=\"p.value\" (change)=\"p.value = $event.target.value\"/>\n            </ng-template>\n\n            <ng-template propertyType=\"label\" let-p>\n                <label>{{p.value}}</label>\n            </ng-template>\n\n            <ng-template propertyType=\"text\" let-p>\n                <input type=\"text\" [value]=\"p.value\" (change)=\"p.value = $event.target.value\"/>\n            </ng-template>\n\n            <ng-template propertyType=\"options\" let-p>\n                <select (change)=\"p.value = $event.target.value\">\n                    <option [value]=\"optionValue(option)\" *ngFor=\"let option of p.meta.componentOptions.options\">\n                        {{optionLabel(option)}}\n                    </option>\n                </select>\n            </ng-template>\n        </div>\n    ",
            styles: [
                "\n            .property-grid {\n                /*border: solid 1px #95B8E7;*/\n            }\n\n            .property-grid-table {\n                border-spacing: 0;\n                border-top: 1px solid #dbdbdb;\n                padding: 5px\n            }\n\n            .property-grid-group {\n                background-color: white;\n                font-weight: bold;\n                color: #616161;\n                padding-top: 8px;\n                padding-bottom: 5px;\n            }\n\n            .property-grid-label, .property-grid-control {\n                border: dotted 1px #ccc;\n                padding: 2px 5px;\n            }\n\n            .internal-property-grid {\n                margin-top: 12px;\n            }\n\n            .internal-property-grid .property-grid {\n                border-width: 0;\n            }\n\n            .internal-property-grid .property-grid-header {\n                margin-bottom: 5px;\n                background-color: #f5f5f5;\n                padding-bottom: 5px;\n                padding-top: 5px;\n                padding-left: 5px;\n                box-shadow: 0 2px 3px rgba(10, 10, 10, 0.1), 0 0 0 1px rgba(10, 10, 10, 0.1);\n                -webkit-box-shadow: 0 2px 3px rgba(10, 10, 10, 0.1), 0 0 0 1px rgba(10, 10, 10, 0.1);\n            }\n\n            .internal-property-grid .property-grid-table {\n                border-width: 0;\n                /*border-top: 1px solid #dbdbdb;*/\n            }\n\n            .card {\n                background-color: #fff;\n                box-shadow: 0 6px 10px 0 rgba(0, 0, 0, .14), 0 1px 18px 0 rgba(0, 0, 0, .12), 0 3px 5px -1px rgba(0, 0, 0, .2);\n                display: flex;\n                flex-flow: row wrap;\n                /*margin: 5px 20px;*/\n                padding: 0;\n            }\n            .internal-property-grid ngx-property-grid .card {\n                background-color: unset;\n                box-shadow: unset;\n                display: unset;\n                flex-flow: unset;\n                /*margin: 5px 20px;*/\n                padding: unset;\n            }\n        "
            ],
            animations: [
                animations_1.trigger('internalPropertyGrid', [
                    animations_1.state('hidden', animations_1.style({
                        height: '0',
                    })),
                    animations_1.state('visible', animations_1.style({
                        height: '*'
                    })),
                    animations_1.transition('visible <=> hidden', animations_1.animate('400ms cubic-bezier(0.86, 0, 0.07, 1)'))
                ])
            ]
        }),
        __metadata("design:paramtypes", [core_1.ElementRef, core_1.ChangeDetectorRef])
    ], PropertyGridComponent);
    return PropertyGridComponent;
}());
exports.PropertyGridComponent = PropertyGridComponent;
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
exports.PropertyValue = PropertyValue;
var InternalGroup = /** @class */ (function () {
    function InternalGroup(name) {
        this.name = name;
        this.items = [];
        this.type = 'group';
    }
    return InternalGroup;
}());
exports.InternalGroup = InternalGroup;
//# sourceMappingURL=property-grid.component.js.map
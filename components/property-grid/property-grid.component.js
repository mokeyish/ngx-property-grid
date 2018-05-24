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
        core_1.Input(),
        __metadata("design:type", Object)
    ], PropertyGridComponent.prototype, "width", void 0);
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
    PropertyGridComponent = __decorate([
        core_1.Component({
            selector: 'ngx-property-grid',
            template: "\n        <div class=\"property-grid\">\n            <table class=\"property-grid-table\" [ngStyle]=\"{width: width}\">\n                <tbody>\n                <tr [ngSwitch]=\"row.type\" *ngFor=\"let row of rows\"\n                    [ngClass]=\"row.type == 'group'? 'property-grid-group-row':'property-grid-row'\">\n                    <!--<td [attr.colspan]=\"row.colspan\"></td>-->\n                    <td *ngSwitchCase=\"'group'\" colspan=\"2\" class=\"property-grid-group\">{{row.name}}</td>\n                    <td *ngSwitchDefault colspan=\"1\" class=\"property-grid-label\">{{row.name}}<span *ngIf=\"row.description\"\n                                                                                                   [title]=\"row.description\">[?]</span></td>\n                    <td [ngSwitch]=\"row.type\" *ngSwitchDefault colspan=\"1\" class=\"property-grid-control\">\n\n                        <input *ngSwitchCase=\"'checkbox'\" type=\"checkbox\" [checked]=\"options[row.key]\"\n                               (change)=\"convertValue(row, $event.target.checked)\"/>\n\n                        <input *ngSwitchCase=\"'color'\" type=\"color\" [value]=\"options[row.key]\"\n                               (change)=\"convertValue(row, $event.target.value)\"/>\n\n                        <input *ngSwitchCase=\"'number'\" type=\"text\" [value]=\"options[row.key]\"\n                               (change)=\"convertValue(row, $event.target.value)\"/>\n\n                        <input *ngSwitchCase=\"'text'\" type=\"text\" [value]=\"options[row.key]\"\n                               (change)=\"convertValue(row, $event.target.value)\"/>\n\n                        <select *ngSwitchCase=\"'options'\" (change)=\"convertValue(row, $event.target.value)\">\n                            <option [value]=\"optionValue(option)\" *ngFor=\"let option of row.options\">{{optionLabel(option)}}</option>\n                        </select>\n\n                        <label *ngSwitchCase=\"'label'\">{{options[row.key]}}</label>\n\n\n                        <dynamic-component *ngSwitchDefault [componentType]=\"row.meta.componentType\"></dynamic-component>\n                    </td>\n                </tr>\n                </tbody>\n            </table>\n        </div>\n    ",
            styleUrls: ['./property-grid.component.scss']
        }),
        __metadata("design:paramtypes", [])
    ], PropertyGridComponent);
    return PropertyGridComponent;
}());
exports.PropertyGridComponent = PropertyGridComponent;
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
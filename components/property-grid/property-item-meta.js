"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var property_grid_control_provider_1 = require("./property-grid-control-provider");
exports.meta = function (m) {
    return function (target, key) {
        var xMeta = m;
        if (!target.__meta__) {
            target.__meta__ = {};
        }
        if (!xMeta.componentType) {
            if (!xMeta.type) {
                xMeta.componentType = property_grid_control_provider_1.defaultProvider.getComponentType('text');
            }
            else if (xMeta.type === 'boolean') {
                xMeta.componentType = property_grid_control_provider_1.defaultProvider.getComponentType('checkbox');
            }
            else {
                xMeta.componentType = property_grid_control_provider_1.defaultProvider.getComponentType(m.type);
            }
            if (xMeta.type === 'number' && !xMeta.valueConvert) {
                xMeta.valueConvert = parseInt;
            }
        }
        if (!xMeta.initState) {
            xMeta.initState = 'hidden';
        }
        if (!xMeta.order) {
            xMeta.order = 0;
        }
        xMeta.key = key;
        target.__meta__[key] = xMeta;
    };
};
//# sourceMappingURL=property-item-meta.js.map
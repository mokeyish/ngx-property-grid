"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var property_grid_control_provider_1 = require("./property-grid-control-provider");
exports.meta = function (m) {
    return function (target, key) {
        var xMeta = m;
        if (!target.__meta) {
            target.__meta = {};
        }
        if (!xMeta.componentType) {
            if (!xMeta.type) {
                xMeta.type = 'text';
            }
            xMeta.componentType = property_grid_control_provider_1.defaultProvider.getComponentType(m.type);
        }
        if (!xMeta.initState) {
            xMeta.initState = 'hidden';
        }
        xMeta.key = key;
        target.__meta[key] = xMeta;
    };
};
//# sourceMappingURL=property-grid-item-meta.js.map
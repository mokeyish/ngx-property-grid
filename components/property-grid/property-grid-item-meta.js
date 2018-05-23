"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.$meta = function (meta) {
    return function (target, key) {
        if (!target.__meta) {
            target.__meta = {};
        }
        target.__meta[key] = meta;
    };
};
//# sourceMappingURL=property-grid-item-meta.js.map
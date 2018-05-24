"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.meta = function (m) {
    return function (target, key) {
        if (!target.__meta) {
            target.__meta = {};
        }
        target.__meta[key] = m;
    };
};
//# sourceMappingURL=property-grid-item-meta.js.map
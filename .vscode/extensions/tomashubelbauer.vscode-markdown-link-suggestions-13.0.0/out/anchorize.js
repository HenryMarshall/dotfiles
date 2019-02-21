"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function anchorize(header) {
    return header.replace(/^#+/g, '').trim().replace(/ /g, '-').replace(/[^a-zA-Z0-9-]/g, '').toLowerCase();
}
exports.default = anchorize;
//# sourceMappingURL=anchorize.js.map
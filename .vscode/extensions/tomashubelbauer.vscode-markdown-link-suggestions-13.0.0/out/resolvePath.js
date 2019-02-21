"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = require("path");
function resolvePath(textDocument, linkPath) {
    const relativePath = linkPath || path_1.basename(textDocument.fileName); // Fragment-only self-link
    const documentDirectoryPath = path_1.dirname(textDocument.uri.fsPath);
    const absolutePath = path_1.resolve(documentDirectoryPath, relativePath);
    return absolutePath;
}
exports.default = resolvePath;
//# sourceMappingURL=resolvePath.js.map
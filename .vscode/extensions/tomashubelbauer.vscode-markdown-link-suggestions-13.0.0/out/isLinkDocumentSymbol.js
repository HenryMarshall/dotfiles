"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vscode_1 = require("vscode");
function isLinkDocumentSymbol(symbol) {
    // Filter down only link symbols - string symbol with exactly one other string symbol child
    return symbol.kind === vscode_1.SymbolKind.String && symbol.children.length === 1 && symbol.children[0].kind === vscode_1.SymbolKind.String && symbol.children[0].detail === symbol.name;
}
exports.default = isLinkDocumentSymbol;
//# sourceMappingURL=isLinkDocumentSymbol.js.map
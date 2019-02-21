"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vscode_1 = require("vscode");
const isLinkDocumentSymbol_1 = require("./isLinkDocumentSymbol");
// Note that this function can provide false positives, we do not have much to go on except the symbol kind being string
// Note that we do not want to check that the text starts with "#" because those are only ATX headers, Setext headers are underlined
function extractHeaders(symbols, results = []) {
    for (let symbol of symbols) {
        // Ignore link symbols so that we don't get false positives where "# header" and "[#link path]" would look the same (string with "# content")
        if (isLinkDocumentSymbol_1.default(symbol) || symbol.kind !== vscode_1.SymbolKind.String) {
            continue;
        }
        results.push(symbol);
        extractHeaders(symbol.children, results);
    }
    return results;
}
exports.default = extractHeaders;
//# sourceMappingURL=extractHeaders.js.map
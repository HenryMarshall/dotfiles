"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const vscode_1 = require("vscode");
const resolvePath_1 = require("./resolvePath");
const isLinkDocumentSymbol_1 = require("./isLinkDocumentSymbol");
class MarkDownLinkDocumentLinkProvider {
    provideDocumentLinks(document, _token) {
        return __awaiter(this, void 0, void 0, function* () {
            const symbols = (yield vscode_1.commands.executeCommand('vscode.executeDocumentSymbolProvider', document.uri));
            if (symbols === undefined) {
                return [];
            }
            const links = [];
            for (const symbol of symbols) {
                if (!isLinkDocumentSymbol_1.default(symbol)) {
                    continue;
                }
                const path = symbol.children[0].name;
                const uri = vscode_1.Uri.parse(path);
                if (uri.scheme && uri.scheme !== 'file') {
                    continue;
                }
                links.push(new vscode_1.DocumentLink(symbol.children[0].selectionRange, vscode_1.Uri.file(resolvePath_1.default(document, path))));
            }
            return links;
        });
    }
}
exports.default = MarkDownLinkDocumentLinkProvider;
//# sourceMappingURL=MarkDownLinkDocumentLinkProvider.js.map
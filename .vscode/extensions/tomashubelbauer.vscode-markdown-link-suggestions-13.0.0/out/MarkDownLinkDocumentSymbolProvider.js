"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vscode_1 = require("vscode");
class MarkDownLinkDocumentSymbolProvider {
    provideDocumentSymbols(document, _token) {
        let isInCodeBlock = false;
        const symbols = [];
        for (let index = 0; index < document.lineCount; index++) {
            const line = document.lineAt(index);
            // TODO: Replace this logic with MarkDownDOM when ready
            if (line.text.trim().startsWith('```')) {
                isInCodeBlock = !isInCodeBlock;
                continue;
            }
            if (isInCodeBlock) {
                continue;
            }
            // TODO: Get rid of these hack by MarkDownDOM when ready
            const text = line.text
                // Do not confuse the regex by checkboxes by blanking them out
                .replace(/\[[ xX]\](.?)/g, '   $1')
                // Do not consufe the regex by inline code spans by blacking them out
                .replace(/`[^`]*`/g, match => ' '.repeat(match.length));
            const regex = /\[([^\]]*)\]\(([^\)]*)\)/g;
            let match;
            // https://stackoverflow.com/q/50234481/2715716 when used with `AsyncIterableIterator<Diagnostic>`
            while ((match = regex.exec(text)) !== null) {
                const text = match[1];
                const path = match[2];
                if (text === undefined || path === undefined) {
                    continue;
                }
                const textRange = new vscode_1.Range(index, match.index, index, match.index + 1 + text.length + 1);
                const textSelectionRange = new vscode_1.Range(index, match.index + 1, index, match.index + 1 + text.length);
                const textSymbol = new vscode_1.DocumentSymbol(text || '(no text)', '', vscode_1.SymbolKind.String, textRange, textSelectionRange);
                symbols.push(textSymbol);
                const pathRange = new vscode_1.Range(index, match.index + 1 + text.length + 1, index, match.index + 1 + text.length + 1 + path.length + 1);
                const pathSelectionRange = new vscode_1.Range(index, match.index + 1 + text.length + 2, index, match.index + 1 + text.length + 1 + path.length);
                const pathSymbol = new vscode_1.DocumentSymbol(path || '(no path)', text || '(no text)', vscode_1.SymbolKind.String, pathRange, pathSelectionRange);
                textSymbol.children.push(pathSymbol);
            }
        }
        return symbols;
    }
}
exports.default = MarkDownLinkDocumentSymbolProvider;
//# sourceMappingURL=MarkDownLinkDocumentSymbolProvider.js.map
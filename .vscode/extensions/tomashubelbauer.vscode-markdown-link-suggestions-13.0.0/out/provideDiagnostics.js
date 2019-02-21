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
const fs_extra_1 = require("fs-extra");
const anchorize_1 = require("./anchorize");
const telemetry_1 = require("./telemetry");
const isLinkDocumentSymbol_1 = require("./isLinkDocumentSymbol");
const extractHeaders_1 = require("./extractHeaders");
function provideDiagnostics(document) {
    return __awaiter(this, void 0, void 0, function* () {
        const diagnostics = [];
        const symbols = (yield vscode_1.commands.executeCommand('vscode.executeDocumentSymbolProvider', document.uri));
        if (symbols === undefined) {
            return diagnostics;
        }
        for (const symbol of symbols) {
            // Filter down only link symbols - string symbol with exactly one other string symbol child
            if (!isLinkDocumentSymbol_1.default(symbol)) {
                continue;
            }
            const linkPath = symbol.children[0].name;
            const { scheme, path, fragment } = vscode_1.Uri.parse(linkPath);
            if (scheme && scheme !== 'file') {
                continue;
            }
            const absolutePath = resolvePath_1.default(document, path);
            const relativePath = vscode_1.workspace.asRelativePath(absolutePath);
            const range = symbol.children[0].selectionRange;
            if (!(yield fs_extra_1.pathExists(absolutePath))) {
                const diagnostic = new vscode_1.Diagnostic(range, `The path ${relativePath} doesn't exist on the disk.`, vscode_1.DiagnosticSeverity.Error);
                diagnostic.source = 'MarkDown Link Suggestions';
                // TODO: Similar enough path exists? Use `code` and suggest rewriting.
                // TODO: Use `code` and suggest creating.
                diagnostic.code = 'no-file;' + absolutePath; // TODO: Unhack this passage of path, do it somehow righter
                diagnostics.push(diagnostic);
            }
            else if (fragment !== '' && (yield fs_extra_1.stat(absolutePath)).isFile()) {
                let headers;
                try {
                    headers = extractHeaders_1.default((yield vscode_1.commands.executeCommand('vscode.executeDocumentSymbolProvider', vscode_1.Uri.file(absolutePath))) || []);
                }
                catch (error) {
                    telemetry_1.default.sendTelemetryEvent('provideDiagnostics-executeDocumentSymbolProvider-error');
                    continue;
                }
                // Remove periods in fragment because the extension used to not remove them and thus generated fragments which are now invalid
                const header = headers.find(symbol => symbol.kind === vscode_1.SymbolKind.String && anchorize_1.default(symbol.name) === anchorize_1.default(fragment));
                if (header === undefined) {
                    const diagnostic = new vscode_1.Diagnostic(range, `The header ${fragment} doesn't exist in file ${relativePath}.`, vscode_1.DiagnosticSeverity.Error);
                    diagnostic.source = 'MarkDown Link Suggestions';
                    // TODO: Similar enough path exists? Use `code` and `relatedInformation` and suggest rewriting.
                    // TODO: Use `code` and suggest appending to the file (maybe quick pick after which header).
                    diagnostics.push(diagnostic);
                }
            }
        }
        return diagnostics;
    });
}
exports.default = provideDiagnostics;
//# sourceMappingURL=provideDiagnostics.js.map
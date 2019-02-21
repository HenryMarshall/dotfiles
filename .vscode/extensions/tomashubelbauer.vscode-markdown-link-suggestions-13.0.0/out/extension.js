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
const MarkDownLinkDocumentSymbolProvider_1 = require("./MarkDownLinkDocumentSymbolProvider");
const MarkDownLinkDocumentLinkProvider_1 = require("./MarkDownLinkDocumentLinkProvider");
const MarkDownLinkCompletionItemProvider_1 = require("./MarkDownLinkCompletionItemProvider");
const findNonIgnoredFiles_1 = require("./findNonIgnoredFiles");
const provideDiagnostics_1 = require("./provideDiagnostics");
const MarkDownLinkCodeActionProvider_1 = require("./MarkDownLinkCodeActionProvider");
const vscode_1 = require("vscode");
const fs_extra_1 = require("fs-extra");
const telemetry_1 = require("./telemetry");
function activate(context) {
    return __awaiter(this, void 0, void 0, function* () {
        context.subscriptions.push(telemetry_1.default);
        // Ignore files opened without a folder.
        if (vscode_1.workspace.workspaceFolders === undefined) {
            return;
        }
        const markDownDocumentSelector = { scheme: 'file', language: 'markdown' };
        const { allowFullSuggestMode, allowSuggestionsForHeaders } = vscode_1.workspace.getConfiguration('markdown-link-suggestions');
        const linkCompletionItemProvider = new MarkDownLinkCompletionItemProvider_1.default(allowFullSuggestMode, allowSuggestionsForHeaders);
        context.subscriptions.push(vscode_1.languages.registerCompletionItemProvider(markDownDocumentSelector, linkCompletionItemProvider, '[', '(', '#'));
        // Spike:
        // context.subscriptions.push(languages.registerCompletionItemProvider(markDownDocumentSelector, linkCompletionItemProvider, ...LinkContextRecognizerBase.getTriggerCharacters()));
        context.subscriptions.push(vscode_1.languages.registerDocumentSymbolProvider(markDownDocumentSelector, new MarkDownLinkDocumentSymbolProvider_1.default()));
        context.subscriptions.push(vscode_1.languages.registerDocumentLinkProvider(markDownDocumentSelector, new MarkDownLinkDocumentLinkProvider_1.default()));
        context.subscriptions.push(vscode_1.languages.registerCodeActionsProvider(markDownDocumentSelector, new MarkDownLinkCodeActionProvider_1.default()));
        const diagnosticCollection = vscode_1.languages.createDiagnosticCollection('MarkDown Links');
        context.subscriptions.push(diagnosticCollection);
        const watcher = vscode_1.workspace.createFileSystemWatcher('**/*.md');
        context.subscriptions.push(watcher);
        watcher.onDidChange((uri) => __awaiter(this, void 0, void 0, function* () {
            try {
                const textDocument = yield vscode_1.workspace.openTextDocument(uri);
                diagnosticCollection.set(uri, yield provideDiagnostics_1.default(textDocument));
            }
            catch (error) {
                // Ignore an attempt to open a binary file
            }
        }));
        watcher.onDidCreate((uri) => __awaiter(this, void 0, void 0, function* () {
            try {
                const textDocument = yield vscode_1.workspace.openTextDocument(uri);
                diagnosticCollection.set(uri, yield provideDiagnostics_1.default(textDocument));
            }
            catch (error) {
                // Ignore an attempt to open a binary file
            }
        }));
        watcher.onDidDelete(uri => diagnosticCollection.delete(uri));
        // TODO: Replace this with the VS Code built-in command
        vscode_1.commands.registerCommand('extension.createMissingFile', (missingFilePath, reportingDocumentUri) => __awaiter(this, void 0, void 0, function* () {
            yield fs_extra_1.writeFile(missingFilePath, '');
            // TODO: Unhack
            const textDocument = yield vscode_1.workspace.openTextDocument(reportingDocumentUri);
            diagnosticCollection.set(reportingDocumentUri, yield provideDiagnostics_1.default(textDocument));
        }));
        vscode_1.workspace.onDidChangeConfiguration(event => {
            if (event.affectsConfiguration('markdown-link-suggestions')) {
                const { allowFullSuggestMode, allowSuggestionsForHeaders } = vscode_1.workspace.getConfiguration('markdown-link-suggestions');
                linkCompletionItemProvider.allowFullSuggestMode = allowFullSuggestMode;
                linkCompletionItemProvider.allowSuggestionsForHeaders = allowSuggestionsForHeaders;
            }
        });
        const files = yield findNonIgnoredFiles_1.default('**/*.md');
        for (const file of files) {
            try {
                const textDocument = yield vscode_1.workspace.openTextDocument(file);
                diagnosticCollection.set(file, yield provideDiagnostics_1.default(textDocument));
            }
            catch (error) {
                telemetry_1.default.sendTelemetryEvent('error-openTextDocument');
            }
        }
    });
}
exports.activate = activate;
function deactivate() {
    telemetry_1.default.dispose();
}
exports.deactivate = deactivate;
//# sourceMappingURL=extension.js.map
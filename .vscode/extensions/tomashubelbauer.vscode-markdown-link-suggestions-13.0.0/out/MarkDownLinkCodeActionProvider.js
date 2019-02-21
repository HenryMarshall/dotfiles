"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vscode_1 = require("vscode");
// TODO: Test this.
class MarkDownLinkCodeActionProvider {
    provideCodeActions(document, range, context, _token) {
        const codeActions = [];
        for (const diagnostic of context.diagnostics) {
            if (diagnostic.range.intersection(range) === undefined) {
                continue;
            }
            // TODO: Unhack
            if (diagnostic.source === 'MarkDown Link Suggestions' && diagnostic.code && diagnostic.code.toString().startsWith('no-file;')) {
                const filePath = diagnostic.code.toString().substr('no-file;'.length);
                const codeAction = new vscode_1.CodeAction('Create the missing file', vscode_1.CodeActionKind.Empty);
                // TODO: Use VS Code command
                codeAction.command = { title: '', command: 'extension.createMissingFile', tooltip: '', arguments: [filePath, document.uri] };
                codeActions.push(codeAction);
            }
        }
        return codeActions;
    }
}
exports.default = MarkDownLinkCodeActionProvider;
//# sourceMappingURL=MarkDownLinkCodeActionProvider.js.map
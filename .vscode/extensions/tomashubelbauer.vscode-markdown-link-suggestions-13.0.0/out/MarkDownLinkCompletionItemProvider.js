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
const path_1 = require("path");
const anchorize_1 = require("./anchorize");
const findNonIgnoredFiles_1 = require("./findNonIgnoredFiles");
const telemetry_1 = require("./telemetry");
const extractHeaders_1 = require("./extractHeaders");
class MarkDownLinkCompletionItemProvider {
    constructor(allowFullSuggestMode, allowSuggestionsForHeaders) {
        this.allowFullSuggestMode = false;
        this.allowSuggestionsForHeaders = true;
        // TODO: Cache workspace files
        // TODO: Update cache when workspace file is saved (`workspace.onDidSaveTextDocument`)
        this.allowFullSuggestMode = allowFullSuggestMode;
        this.allowSuggestionsForHeaders = allowSuggestionsForHeaders;
    }
    provideCompletionItems(document, position, _token, context) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                telemetry_1.default.sendTelemetryEvent('suggest');
                const character = context.triggerCharacter || /* Ctrl + Space */ document.getText(new vscode_1.Range(position.translate(0, -1), position));
                // TODO: Extend to be able to handle suggestions after backspacing (see if this fires but we already have some text)
                const fullSuggestMode = character === '[';
                if (fullSuggestMode && !this.allowFullSuggestMode) {
                    return;
                }
                const documentDirectoryPath = path_1.dirname(document.uri.fsPath);
                const items = [];
                let fullSuggestModeBraceCompleted = false;
                let partialSuggestModeBraceCompleted = false;
                const braceCompletionRange = new vscode_1.Range(position, position.translate(0, 1));
                if (fullSuggestMode) {
                    fullSuggestModeBraceCompleted = document.getText(braceCompletionRange) === ']';
                }
                else {
                    // TODO: Handle a case where there is only '(' on the line
                    const linkConfirmationRange = new vscode_1.Range(position.translate(0, -2), position);
                    if (character === '(') {
                        if (document.getText(linkConfirmationRange) === '](') {
                            partialSuggestModeBraceCompleted = document.getText(braceCompletionRange) === ')';
                            // TODO: Read the link text to be able to rank items matching it higher
                        }
                        else {
                            // Bail if this is just a regular parentheses, not MarkDown link
                            return;
                        }
                    }
                    else {
                        const headerLinkConfirmationRange = new vscode_1.Range(position.translate(0, -3), position);
                        // TODO: Integrate this in a bit nicer if possible
                        if (character === '#' && document.getText(headerLinkConfirmationRange) === '](#') {
                            partialSuggestModeBraceCompleted = document.getText(braceCompletionRange) === ')';
                            // Only suggest local file headers
                            const symbols = (yield vscode_1.commands.executeCommand('vscode.executeDocumentSymbolProvider', document.uri));
                            if (symbols !== undefined) {
                                const headers = extractHeaders_1.default(symbols); // VS Code API detected headers
                                for (const header of headers) {
                                    const item = this.item(vscode_1.CompletionItemKind.Reference, document.uri.fsPath, header, documentDirectoryPath, fullSuggestMode, fullSuggestModeBraceCompleted, partialSuggestModeBraceCompleted, braceCompletionRange, true);
                                    item.filterText = item.insertText + ';' + item.filterText;
                                    items.push(item);
                                }
                            }
                            telemetry_1.default.sendTelemetryEvent('suggest-headers');
                            return items;
                        }
                        else {
                            // Bail if we are in neither full suggest mode nor partial (link target) suggest mode nor header mode
                            telemetry_1.default.sendTelemetryEvent('suggest-invalid');
                            return;
                        }
                    }
                }
                const files = yield findNonIgnoredFiles_1.default('**/*');
                for (const file of files) {
                    items.push(this.item(vscode_1.CompletionItemKind.File, file.fsPath, null, documentDirectoryPath, fullSuggestMode, fullSuggestModeBraceCompleted, partialSuggestModeBraceCompleted, braceCompletionRange));
                    if (path_1.extname(file.fsPath).toUpperCase() === '.MD' && this.allowSuggestionsForHeaders) {
                        try {
                            const symbols = (yield vscode_1.commands.executeCommand('vscode.executeDocumentSymbolProvider', file));
                            if (symbols !== undefined) {
                                const headers = extractHeaders_1.default(symbols); // VS Code API detected headers
                                for (const header of headers) {
                                    items.push(this.item(vscode_1.CompletionItemKind.Reference, file.fsPath, header, documentDirectoryPath, fullSuggestMode, fullSuggestModeBraceCompleted, partialSuggestModeBraceCompleted, braceCompletionRange));
                                }
                            }
                        }
                        catch (error) {
                            // TODO: Figure out what causes the *Error: Illegal argument: resource* error
                            telemetry_1.default.sendTelemetryEvent('suggest-resource', { error: error.toString() });
                        }
                    }
                }
                const directories = files.reduce((directoryPaths, filePath) => {
                    const directoryPath = path_1.dirname(filePath.fsPath);
                    if (!directoryPaths.includes(directoryPath)) {
                        directoryPaths.push(directoryPath);
                    }
                    return directoryPaths;
                }, []);
                for (const directory of directories) {
                    items.push(this.item(vscode_1.CompletionItemKind.Folder, directory, null, documentDirectoryPath, fullSuggestMode, fullSuggestModeBraceCompleted, partialSuggestModeBraceCompleted, braceCompletionRange));
                }
                telemetry_1.default.sendTelemetryEvent('suggest-full-partial');
                return items;
            }
            catch (error) {
                telemetry_1.default.sendTelemetryEvent('suggest-failure', { error: error.toString() });
            }
            return [];
        });
    }
    item(kind, absoluteFilePath, header, absoluteDocumentDirectoryPath, fullSuggestMode, fullSuggestModeBraceCompleted, partialSuggestModeBraceCompleted, braceCompletionRange, hack) {
        // Extract and join the file name with header (if any) for displaying in the label
        const fileName = path_1.basename(absoluteFilePath);
        let fileNameWithHeader = fileName;
        if (header !== null) {
            fileNameWithHeader = hack ? header.name : (fileNameWithHeader + ' ' + header.name);
        }
        // Put together a label in a `name#header (directory if not current)` format
        let label = fileNameWithHeader;
        const relativeDirectoryPath = path_1.relative(absoluteDocumentDirectoryPath, path_1.dirname(absoluteFilePath));
        if (relativeDirectoryPath !== '') {
            label += ` (${relativeDirectoryPath})`;
        }
        // Construct the completion item based on the label and the provided kind
        const item = new vscode_1.CompletionItem(label, kind);
        // Display standalone header, otherwise fall back to displaying the name we then know doesn't have fragment (header)
        item.detail = header ? header.name : fileName;
        // Display expanded and normalized absolute path for inspection
        item.documentation = path_1.normalize(absoluteFilePath);
        // Derive anchorized version of the header to ensure working linkage
        const anchor = header === null ? '' : anchorize_1.default(header.name);
        // Compute suggested file path relative to the currently edited file's directory path
        let relativeFilePath = path_1.relative(absoluteDocumentDirectoryPath, absoluteFilePath) || '.';
        // TODO: URL encode path minimally (to make VS Code work, like replacing + sign and other otherwise linkage breaking characters)
        relativeFilePath = relativeFilePath; // TODO
        // Insert either relative file path with anchor only or file name without anchor in the MarkDown link syntax if in full suggest mode
        if (fullSuggestMode) {
            item.insertText = `${fileName}](${relativeFilePath}${anchor ? '#' + anchor : ''})`;
        }
        else {
            item.insertText = hack ? anchor : (anchor ? relativeFilePath + '#' + anchor : relativeFilePath);
            if (!partialSuggestModeBraceCompleted) {
                item.insertText += ')';
            }
        }
        // Sort by the relative path name to the document the link being suggested for is in
        item.sortText = relativeFilePath;
        if (header !== null) {
            // Sort headers in the document order
            item.sortText += `:${header.range.start.line.toString().padStart(5, '0')}`;
        }
        // Offer both forwards slash and backwards slash filter paths so that the user can type regardless of the platform
        item.filterText = [path_1.posix.normalize(absoluteFilePath), path_1.win32.normalize(absoluteFilePath)].join();
        // Remove brace-completed closing square bracket if any (may be turned off) when in full suggest mode because we insert our own and then some
        if (fullSuggestMode && fullSuggestModeBraceCompleted) {
            item.additionalTextEdits = [vscode_1.TextEdit.delete(braceCompletionRange)];
        }
        return item;
    }
}
exports.default = MarkDownLinkCompletionItemProvider;
//# sourceMappingURL=MarkDownLinkCompletionItemProvider.js.map
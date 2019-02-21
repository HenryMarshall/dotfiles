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
const LinkContextRecognizer_g_1 = require("./LinkContextRecognizer.g");
const path_1 = require("path");
const anchorize_1 = require("./anchorize");
const findNonIgnoredFiles_1 = require("./findNonIgnoredFiles");
class SpikeCompletionItemProvider {
    constructor(allowFullSuggestMode, allowSuggestionsForHeaders) {
        // TODO: Revisit these
        this.allowFullSuggestMode = false;
        this.allowSuggestionsForHeaders = true;
        // TODO: Cache workspace files
        // TODO: Update cache when workspace file is saved (`workspace.onDidSaveTextDocument`)
        this.allowFullSuggestMode = allowFullSuggestMode;
        this.allowSuggestionsForHeaders = allowSuggestionsForHeaders;
    }
    provideCompletionItems(document, position, _token, _context) {
        return __awaiter(this, void 0, void 0, function* () {
            // Parse out the MarkDown link context we are in
            const { text, path, query, fragment } = new LinkContextRecognizer_g_1.default(document.lineAt(position.line).text, position.character);
            const items = [];
            // Suggest headers
            if (fragment !== null) {
                console.log('Suggest headers', JSON.stringify(path));
                const uri = path === null ? document.uri : undefined; // TODO
                const symbols = yield vscode_1.commands.executeCommand('vscode.executeWorkspaceSymbolProvider', '');
                if (symbols !== undefined) {
                    const headers = symbols.filter(symbol => symbol.location.uri === uri && symbol.kind === vscode_1.SymbolKind.String);
                    console.log(headers);
                }
                return undefined; // TODO
            }
            // Skip suggesting on query
            if (query !== null) {
                return;
            }
            // Suggest paths based on path components
            if (path !== null) {
                console.log('Suggest paths');
                // TODO: Check for scheme or better yet add it to the parser
                console.log(path);
                throw new Error();
            }
            // Suggest paths based on text
            if (text !== null) {
                console.log('Suggest links');
                throw new Error();
            }
            const documentDirectoryPath = path_1.dirname(document.uri.fsPath);
            const files = yield findNonIgnoredFiles_1.default('**/*');
            for (const file of files) {
                items.push(this.makeFileCompletionItem(file.fsPath, documentDirectoryPath));
                if (path_1.extname(file.fsPath).toUpperCase() === '.MD') {
                    const symbols = yield vscode_1.commands.executeCommand('vscode.executeWorkspaceSymbolProvider', '');
                    if (symbols !== undefined) {
                        const headers = symbols.filter(symbol => symbol.location.uri === file && symbol.kind === vscode_1.SymbolKind.String);
                        for (const header of headers) {
                            items.push(new vscode_1.CompletionItem(file + '#' + header.name, vscode_1.CompletionItemKind.File));
                        }
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
                items.push(this.makeDirectoryCompletionItem(directory, documentDirectoryPath));
            }
            return items;
        });
    }
    /* TODO: URL encode insert paths minimally (to make VS Code work, like replacing + sign and other otherwise linkage breaking characters) */
    makeDirectoryCompletionItem(itemDirectoryPath, documentDirectoryPath) {
        const relativePath = path_1.relative(documentDirectoryPath, itemDirectoryPath);
        const label = relativePath === '' ? path_1.basename(itemDirectoryPath) : `${path_1.basename(itemDirectoryPath)} (${relativePath})`;
        const item = new vscode_1.CompletionItem(label, vscode_1.CompletionItemKind.Folder);
        item.detail = path_1.basename(itemDirectoryPath);
        item.documentation = path_1.normalize(itemDirectoryPath);
        item.insertText = relativePath || '.';
        item.sortText = relativePath;
        item.filterText = [path_1.win32.normalize(itemDirectoryPath), path_1.posix.normalize(itemDirectoryPath)].join('\n');
        return item;
    }
    makeFileCompletionItem(itemFilePath, documentDirectoryPath) {
        const relativePath = path_1.relative(documentDirectoryPath, itemFilePath);
        const label = relativePath === '' ? path_1.basename(itemFilePath) : `${path_1.basename(itemFilePath)} (${relativePath})`;
        const item = new vscode_1.CompletionItem(label, vscode_1.CompletionItemKind.File);
        item.detail = path_1.basename(itemFilePath);
        item.documentation = path_1.normalize(itemFilePath);
        item.insertText = relativePath || '.';
        item.sortText = relativePath;
        item.filterText = [path_1.win32.normalize(itemFilePath), path_1.posix.normalize(itemFilePath)].join('\n');
        return item;
    }
    // @ts-ignore
    item(kind, absoluteFilePath, headerSymbol, absoluteDocumentDirectoryPath, hack) {
        // Extract and join the file name with header (if any) for displaying in the label
        const fileName = path_1.basename(absoluteFilePath);
        let fileNameWithHeader = fileName;
        if (headerSymbol !== null) {
            fileNameWithHeader = hack ? headerSymbol.name : (fileNameWithHeader + ' # ' + headerSymbol.name);
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
        item.detail = headerSymbol !== null ? headerSymbol.name : fileName;
        // Display expanded and normalized absolute path for inspection
        item.documentation = path_1.normalize(absoluteFilePath);
        // Derive anchorized version of the header to ensure working linkage
        const anchor = headerSymbol === null ? '' : anchorize_1.default(headerSymbol.name);
        // Compute suggested file path relative to the currently edited file's directory path
        let relativeFilePath = path_1.relative(absoluteDocumentDirectoryPath, absoluteFilePath) || '.';
        // TODO: URL encode path minimally (to make VS Code work, like replacing + sign and other otherwise linkage breaking characters)
        relativeFilePath = relativeFilePath; // TODO
        // Insert either relative file path with anchor only or file name without anchor in the MarkDown link syntax if in full suggest mode
        if ('fullSuggestMode') {
            item.insertText = `${fileName}](${relativeFilePath}${anchor ? '#' + anchor : ''})`;
        }
        else {
            item.insertText = hack ? anchor : (anchor ? relativeFilePath + '#' + anchor : relativeFilePath);
            if (!'partialSuggestModeBraceCompleted') {
                item.insertText += ')';
            }
        }
        // Sort by the relative path name for now (predictable but not amazingly helpful)
        // TODO: Contribute a setting for sorting by timestamp then by this
        item.sortText = relativeFilePath; // TODO
        if (headerSymbol !== null) {
            // Sort headers in the document order
            const linePadded = headerSymbol.location.range.start.line.toString().padStart(5, '0');
            const characterPadded = headerSymbol.location.range.start.character.toString().padStart(5, '0');
            item.sortText += ` ${linePadded}${characterPadded} # ${headerSymbol.name}`;
        }
        // Offer both forwards slash and backwards slash filter paths so that the user can type regardless of the platform
        item.filterText = [absoluteFilePath.replace(/\\/g, '/'), absoluteFilePath.replace(/\//g, '\\')].join();
        // Remove brace-completed closing square bracket if any (may be turned off) when in full suggest mode because we insert our own and then some
        if ('fullSuggestMode' && 'fullSuggestModeBraceCompleted') {
            //item.additionalTextEdits = [TextEdit.delete(braceCompletionRange)];
        }
        return item;
    }
}
exports.default = SpikeCompletionItemProvider;
//# sourceMappingURL=SpikeCompletionItemProvider.js.map
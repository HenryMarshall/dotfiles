"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class OpeningSquareBracketPath {
    handle(recognizer) {
        // `[hello`
        if (recognizer.cursor === undefined) {
            recognizer.cursor = 'text';
            recognizer.text = recognizer.nonTriggerCharacterPath.charactersReverse.reverse().join('');
            return null;
        }
        throw new Error(recognizer.cursor);
    }
}
exports.default = OpeningSquareBracketPath;
//# sourceMappingURL=OpeningSquareBracketPath.js.map
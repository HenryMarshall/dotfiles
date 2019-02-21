"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class OpeningSquareBracketText {
    handle(recognizer) {
        console.log(recognizer.nonTriggerCharacterText.charactersReverse);
        recognizer.text = recognizer.nonTriggerCharacterText.charactersReverse.reverse().join('');
        return null;
    }
}
exports.default = OpeningSquareBracketText;
//# sourceMappingURL=OpeningSquareBracketText.js.map
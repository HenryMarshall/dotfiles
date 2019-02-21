"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class NonTriggerCharacterText {
    constructor() {
        this.charactersReverse = [];
    }
    handle(_recognizer, character) {
        this.charactersReverse.push(character);
        return;
    }
}
exports.default = NonTriggerCharacterText;
//# sourceMappingURL=NonTriggerCharacterText.js.map
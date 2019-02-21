"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class NonTriggerCharacterPath {
    constructor() {
        this.charactersReverse = [];
    }
    handle(_recognizer, character) {
        this.charactersReverse.push(character);
        return;
    }
}
exports.default = NonTriggerCharacterPath;
//# sourceMappingURL=NonTriggerCharacterPath.js.map
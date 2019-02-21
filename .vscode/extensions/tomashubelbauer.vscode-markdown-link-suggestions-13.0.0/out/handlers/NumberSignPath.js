"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class NumberSignPath {
    handle(recognizer) {
        recognizer.fragment = recognizer.nonTriggerCharacterPath.charactersReverse.reverse().join('');
        if (recognizer.path !== undefined) {
            recognizer.fragment += recognizer.path.join('');
            recognizer.path = undefined;
        }
        recognizer.nonTriggerCharacterPath.charactersReverse = [];
        recognizer.cursor = 'fragment';
        return 'path';
    }
}
exports.default = NumberSignPath;
//# sourceMappingURL=NumberSignPath.js.map
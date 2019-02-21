"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class BackwardSlashPath {
    handle(recognizer) {
        const path = recognizer.nonTriggerCharacterPath.charactersReverse.reverse().join('');
        recognizer.nonTriggerCharacterPath.charactersReverse = [];
        if (recognizer.path === undefined) {
            recognizer.path = [];
        }
        recognizer.path.unshift('\\' + path);
        return;
    }
}
exports.default = BackwardSlashPath;
//# sourceMappingURL=BackwardSlashPath.js.map
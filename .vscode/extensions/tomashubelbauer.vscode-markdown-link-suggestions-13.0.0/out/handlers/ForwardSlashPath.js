"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ForwardSlashPath {
    handle(recognizer) {
        const path = recognizer.nonTriggerCharacterPath.charactersReverse.reverse().join('');
        recognizer.nonTriggerCharacterPath.charactersReverse = [];
        if (recognizer.path === undefined) {
            recognizer.path = [];
        }
        recognizer.path.unshift('/' + path);
        return;
    }
}
exports.default = ForwardSlashPath;
//# sourceMappingURL=ForwardSlashPath.js.map
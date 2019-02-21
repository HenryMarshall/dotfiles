"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class QuestionMarkPath {
    handle(recognizer) {
        recognizer.query = recognizer.nonTriggerCharacterPath.charactersReverse.reverse().join('');
        if (recognizer.path !== undefined) {
            recognizer.query += recognizer.path.join('');
            recognizer.path = undefined;
        }
        recognizer.nonTriggerCharacterPath.charactersReverse = [];
        recognizer.cursor = 'query';
        return 'path';
    }
}
exports.default = QuestionMarkPath;
//# sourceMappingURL=QuestionMarkPath.js.map
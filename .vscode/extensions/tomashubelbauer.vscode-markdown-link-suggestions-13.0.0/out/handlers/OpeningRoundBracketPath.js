"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class OpeningRoundBracket {
    handle(recognizer) {
        if (recognizer.path === undefined) {
            const path = recognizer.nonTriggerCharacterPath.charactersReverse.reverse().join('');
            recognizer.path = [path];
        }
        else {
            const path = recognizer.nonTriggerCharacterPath.charactersReverse.reverse().join('');
            recognizer.path.unshift(path);
        }
        recognizer.cursor = recognizer.cursor || 'path';
        return 'pathTransition';
    }
}
exports.default = OpeningRoundBracket;
//# sourceMappingURL=OpeningRoundBracketPath.js.map
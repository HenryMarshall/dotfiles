"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class SpacePathTransition {
    handle(recognizer) {
        // `)` not followed by `[` -> not a link
        recognizer.cursor = undefined;
        recognizer.path = undefined;
        return null;
    }
}
exports.default = SpacePathTransition;
//# sourceMappingURL=SpacePathTransition.js.map
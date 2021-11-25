"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ValidateError = void 0;
class ValidateError extends Error {
    Fields = [];
    constructor(message) {
        super(message); // (1)
        this.name = "ValidationError"; // (2)
    }
}
exports.ValidateError = ValidateError;
//# sourceMappingURL=ValidateError.js.map
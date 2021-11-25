"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TokenHelper = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
class TokenHelper {
    _key;
    constructor(secureKey) {
        this._key = secureKey;
    }
    CreateToken(body, expires = 300, scope) {
        const token = jsonwebtoken_1.default.sign({ ...body, scope }, this._key, {
            expiresIn: 300, // expires in 5min
        });
        return token;
    }
    GetPayload(strtoken, key) {
        const bearer = strtoken.split(" ");
        const token = bearer[1];
        const decode = jsonwebtoken_1.default.decode(token);
        return decode[key];
    }
}
exports.TokenHelper = TokenHelper;
//# sourceMappingURL=TokenHelper.js.map
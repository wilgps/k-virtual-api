"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.expressAuthentication = void 0;
const jsonwebtoken_1 = require("jsonwebtoken");
const secret = process.env.JWT_SECRET || "my@#$secret";
function expressAuthentication(request, securityName, scopes) {
    if (securityName === "bearer") {
        const header = request.headers.authorization;
        return new Promise((resolve, reject) => {
            if (!header) {
                reject(new Error("No token provided"));
            }
            const bearer = header.split(" ");
            const token = bearer[1];
            (0, jsonwebtoken_1.verify)(token, secret, (err, decoded) => {
                if (err) {
                    reject(err);
                }
                else {
                    if (scopes) {
                        // Check if JWT contains all required scopes
                        for (const scope of scopes) {
                            if (!decoded.scopes.includes(scope)) {
                                reject(new Error("JWT does not contain required scope."));
                            }
                        }
                        resolve(decoded);
                    }
                }
            });
        });
    }
    return Promise.reject({});
}
exports.expressAuthentication = expressAuthentication;
//# sourceMappingURL=authentication.js.map
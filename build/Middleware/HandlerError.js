"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.JsonErrorHandler = void 0;
const tsoa_1 = require("tsoa");
const logger_1 = __importDefault(require("../configs/logger"));
const JsonErrorHandler = async (err, req, res, next) => {
    if (err instanceof tsoa_1.ValidateError) {
        // const stError = JSON.stringify({msg:err?.message,stack: err?.stack,Fields:err?.Fields});
        // logger.log("error", stError);
        return res.status(422).json({
            message: "Validation Failed",
            details: err?.fields,
        });
    }
    if (err instanceof Error) {
        logger_1.default.log("error", { msg: err?.message, stack: err?.stack });
        return res.status(500).json({
            message: err.message,
        });
    }
    next();
};
exports.JsonErrorHandler = JsonErrorHandler;
//# sourceMappingURL=HandlerError.js.map
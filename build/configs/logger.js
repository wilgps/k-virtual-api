"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const winston_1 = __importDefault(require("winston"));
const app_root_path_1 = __importDefault(require("app-root-path"));
const options = {
    file: {
        level: "error",
        filename: `${app_root_path_1.default}/logs/app.log`,
        handleExceptions: true,
        json: true,
        maxsize: 5242880,
        maxFiles: 5,
        colorize: false,
    },
    console: {
        level: "debug",
        handleExceptions: true,
        json: false,
        colorize: true,
    },
};
const logger = winston_1.default.createLogger({
    format: winston_1.default.format.json(),
    transports: [
        //
        // - Write all logs with level `error` and below to `error.log`
        // - Write all logs with level `info` and below to `combined.log`
        //
        new winston_1.default.transports.File(options.file),
        new winston_1.default.transports.Console(options.console),
    ],
});
exports.default = logger;
//# sourceMappingURL=logger.js.map
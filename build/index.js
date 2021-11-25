"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const swagger_ui_express_1 = __importDefault(require("swagger-ui-express"));
const cors_1 = __importDefault(require("cors"));
const helmet_1 = __importDefault(require("helmet"));
const dotenv = __importStar(require("dotenv"));
const db_1 = require("./data/db");
const routes_1 = require("./routes");
const swagger_json_1 = __importDefault(require("./swagger.json"));
const HandlerError_1 = require("./Middleware/HandlerError");
const app = (0, express_1.default)();
// define a route handler for the default home page
dotenv.config();
if (!process.env.PORT) {
    console.log("env 'PORT' não configurada");
    process.exit(1);
}
app.use((0, helmet_1.default)());
app.use((0, cors_1.default)());
app.use(express_1.default.json());
// start the Express server
const PORT = parseInt(process.env.PORT, 10);
(async () => {
    await (0, db_1.sync)();
})();
const options = {
    explorer: true,
    swagger: "2.0",
};
// Generate by tsoa
(0, routes_1.RegisterRoutes)(app);
app.use(HandlerError_1.JsonErrorHandler);
app.use("/swagger", swagger_ui_express_1.default.serve, swagger_ui_express_1.default.setup(swagger_json_1.default, { swaggerOptions: options }));
// app.get("/swagger", swaggerUi.setup(swaggerDocument,{ swaggerOptions: options }));
app.listen(PORT, () => console.log(`Example app listening at http://localhost:${PORT}`));
//# sourceMappingURL=index.js.map
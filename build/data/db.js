"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.sync = void 0;
const sequelize_1 = __importDefault(require("sequelize"));
const db = new sequelize_1.default.Sequelize({
    dialect: "sqlite",
    storage: "./database.sqlite",
});
const sync = async () => {
    try {
        const result = await db.sync();
    }
    catch (error) {
        console.log(error);
    }
};
exports.sync = sync;
exports.default = db;
//# sourceMappingURL=db.js.map
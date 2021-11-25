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
const sequelize_1 = __importStar(require("sequelize"));
const db_1 = __importDefault(require("../data/db"));
class Verbs extends sequelize_1.Model {
    Id;
    Verb;
}
Verbs.init({
    Id: {
        type: sequelize_1.default.BIGINT,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
    },
    Verb: { type: sequelize_1.default.STRING, allowNull: false },
}, {
    sequelize: db_1.default,
    modelName: "Verbs",
    indexes: [{ unique: true, fields: ["Verb"] }],
});
exports.default = Verbs;
//# sourceMappingURL=Verbs.js.map
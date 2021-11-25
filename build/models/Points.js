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
const user_1 = __importDefault(require("./user"));
class Point extends sequelize_1.Model {
    User;
    Id;
    Session;
    UserId;
    Points;
    GameName;
}
Point.init({
    Id: {
        type: sequelize_1.default.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
    },
    UserId: { type: sequelize_1.default.INTEGER },
    Points: { type: sequelize_1.default.INTEGER },
    GameName: { type: sequelize_1.default.STRING },
}, {
    sequelize: db_1.default,
    modelName: "Point",
});
Point.belongsTo(user_1.default);
exports.default = Point;
//# sourceMappingURL=Points.js.map
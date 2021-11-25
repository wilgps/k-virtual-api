"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = __importDefault(require("sequelize"));
const db_1 = __importDefault(require("../data/db"));
class User extends sequelize_1.default.Model {
    Id;
    Name;
    Email;
    Password;
    get InvalidFields() {
        const inValidFields = [];
        if (!this.Name)
            inValidFields.push("Name");
        if (!this.Email)
            inValidFields.push("Email");
        if (!this.Password)
            inValidFields.push("Password");
        return inValidFields;
    }
    get IsValid() {
        return this.InvalidFields.length === 0;
    }
}
User.init({
    Id: {
        type: sequelize_1.default.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
    },
    Name: {
        type: sequelize_1.default.STRING,
        allowNull: true,
    },
    Email: {
        type: sequelize_1.default.STRING,
        allowNull: false,
    },
    Password: {
        type: sequelize_1.default.STRING,
        allowNull: false,
    },
}, {
    sequelize: db_1.default,
    modelName: "User",
    indexes: [{ unique: true, fields: ["Email"] }],
});
exports.default = User;
//# sourceMappingURL=user.js.map
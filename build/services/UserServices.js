"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const user_1 = __importDefault(require("../models/user"));
class UserService {
    async GetUserById(id) {
        return user_1.default.findOne({ where: { Id: id } });
    }
    async AddUser(user) {
        if (!user.Id) {
            const created = {
                Name: user.Name,
                Email: user.Email,
                Password: user.Password,
            };
            user.Id = (await user_1.default.create(created)).Id;
        }
        else {
            const updated = {
                Id: user.Id,
                Name: user.Name,
                Email: user.Email,
                Password: user.Password,
            };
            await user_1.default.update(updated, { where: { Id: user.Id } });
        }
        return user;
    }
}
exports.default = UserService;
//# sourceMappingURL=UserServices.js.map
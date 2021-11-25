"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = __importDefault(require("sequelize"));
const Points_1 = __importDefault(require("../models/Points"));
const user_1 = __importDefault(require("../models/user"));
class PointService {
    async ListRank(game) {
        const result = await Points_1.default.findAll({
            attributes: { exclude: ["User.Password"] },
            where: { GameName: game, Id: { [sequelize_1.default.Op.not]: 0 } },
            include: [{ model: user_1.default, required: true, isMultiAssociation: true }],
            limit: 10,
            order: [["Points", "DESC"]],
            nest: true,
            mapToModel: true,
            raw: true,
        });
        return result.map((x) => {
            x.User.Password = undefined;
            return x;
        });
    }
    async AddOrUpdate(point) {
        if (!point.Id) {
            const created = {
                UserId: point.UserId,
                Points: point.Points,
                GameName: point.GameName,
            };
            point.Id = (await Points_1.default.create(created)).Id;
        }
        else
            await Points_1.default.update(point, { where: { Id: point.Id } });
        return point;
    }
}
exports.default = PointService;
//# sourceMappingURL=PointService.js.map
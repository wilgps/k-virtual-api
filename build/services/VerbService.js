"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.VerbService = void 0;
const db_1 = __importDefault(require("../data/db"));
const Verbs_1 = __importDefault(require("../models/Verbs"));
class VerbService {
    async ListVerbs() {
        return await Verbs_1.default.findAll({ raw: true });
    }
    async AddOrUpdate(verbs) {
        const create = verbs.filter((x) => !x.Id && x.Id !== 0);
        const update = verbs.filter((x) => !!x.Id || x.Id === 0);
        db_1.default.query("delete from Verbs where Id not in (" + update.map((x) => x.Id).join(",") + ")");
        if (update.length > 0) {
            for (const item of update) {
                await Verbs_1.default.update(item, { where: { Id: item.Id } });
            }
        }
        if (create.length > 0)
            Verbs_1.default.bulkCreate(create);
    }
}
exports.VerbService = VerbService;
//# sourceMappingURL=VerbService.js.map
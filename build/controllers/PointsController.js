"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PointsController = void 0;
const express_1 = __importDefault(require("express"));
const tsoa_1 = require("tsoa");
const TokenHelper_1 = require("../helpers/TokenHelper");
const PointService_1 = __importDefault(require("../services/PointService"));
let PointsController = class PointsController extends tsoa_1.Controller {
    async Get(game) {
        const result = await new PointService_1.default().ListRank(game);
        return result;
    }
    async Post(req, body) {
        const point = await new PointService_1.default().AddOrUpdate({
            ...body,
            UserId: new TokenHelper_1.TokenHelper(process.env.SECRET).GetPayload(req.headers.authorization, "Id"),
        });
        return {
            Id: point.Id,
            UserId: point.UserId,
            Points: point.Points,
            GameName: point.GameName,
        };
    }
};
__decorate([
    (0, tsoa_1.Get)(),
    __param(0, (0, tsoa_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], PointsController.prototype, "Get", null);
__decorate([
    (0, tsoa_1.Post)(),
    __param(0, (0, tsoa_1.Request)()),
    __param(1, (0, tsoa_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], PointsController.prototype, "Post", null);
PointsController = __decorate([
    (0, tsoa_1.Route)("/Points"),
    (0, tsoa_1.Tags)("Points")
], PointsController);
exports.PointsController = PointsController;
//# sourceMappingURL=PointsController.js.map
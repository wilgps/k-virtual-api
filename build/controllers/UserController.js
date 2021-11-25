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
exports.UserController = void 0;
const UserServices_1 = __importDefault(require("../services/UserServices"));
const tsoa_1 = require("tsoa");
const express_1 = __importDefault(require("express"));
const TokenHelper_1 = require("../helpers/TokenHelper");
let UserController = class UserController extends tsoa_1.Controller {
    async getUser(userId, name) {
        return {};
    }
    async Post(requestBody) {
        new UserServices_1.default().AddUser(requestBody);
    }
    async Get(req) {
        const id = new TokenHelper_1.TokenHelper(process.env.SECRET).GetPayload(req.headers.authorization, "Id");
        return new UserServices_1.default().GetUserById(id);
    }
};
__decorate([
    (0, tsoa_1.Get)("/{userId}"),
    (0, tsoa_1.Security)("bearer"),
    __param(0, (0, tsoa_1.Path)()),
    __param(1, (0, tsoa_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, String]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "getUser", null);
__decorate([
    (0, tsoa_1.SuccessResponse)("200", "Created") // Custom success response
    ,
    (0, tsoa_1.Post)(),
    __param(0, (0, tsoa_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "Post", null);
__decorate([
    (0, tsoa_1.Get)(),
    __param(0, (0, tsoa_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "Get", null);
UserController = __decorate([
    (0, tsoa_1.Route)("/user"),
    (0, tsoa_1.Tags)("User")
], UserController);
exports.UserController = UserController;
//# sourceMappingURL=UserController.js.map
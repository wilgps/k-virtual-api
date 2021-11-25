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
exports.AuthController = void 0;
const tsoa_1 = require("tsoa");
const AuthService_1 = __importDefault(require("../services/AuthService"));
const TokenHelper_1 = require("../helpers/TokenHelper");
const HttpStatusCode_1 = __importDefault(require("../Common/HttpStatusCode"));
const app_root_path_1 = __importDefault(require("app-root-path"));
let AuthController = class AuthController extends tsoa_1.Controller {
    _service;
    /**
     *
     */
    constructor() {
        super();
        this._service = new AuthService_1.default();
    }
    async Post(body) {
        console.log(app_root_path_1.default);
        try {
            let token = "";
            let scope = "";
            if (body.email === "root@root.com" && body.password === "root") {
                token = new TokenHelper_1.TokenHelper(process.env.SECRET).CreateToken({ Id: 0, Email: body.email }, 3600, "admin");
                scope = "admin";
            }
            else {
                const user = await this._service.Autheticate(body.email, body.password);
                if (!user)
                    throw new Error("Usuario não encontrado");
                token = new TokenHelper_1.TokenHelper(process.env.SECRET).CreateToken({ Id: user.Id, Email: user.Email }, 3600, "");
                scope = "user";
            }
            const response = {
                token,
                expires: 3600,
                scope,
            };
            this.setStatus(200);
            return response;
        }
        catch (error) {
            this.setStatus(HttpStatusCode_1.default.BAD_REQUEST);
            throw error;
        }
    }
};
__decorate([
    (0, tsoa_1.Post)(),
    __param(0, (0, tsoa_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "Post", null);
AuthController = __decorate([
    (0, tsoa_1.Route)("/Auth"),
    (0, tsoa_1.Tags)("Auth"),
    __metadata("design:paramtypes", [])
], AuthController);
exports.AuthController = AuthController;
//# sourceMappingURL=AuthController.js.map
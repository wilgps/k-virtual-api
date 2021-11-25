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
Object.defineProperty(exports, "__esModule", { value: true });
exports.VerbController = void 0;
const tsoa_1 = require("tsoa");
const VerbService_1 = require("../services/VerbService");
let VerbController = class VerbController extends tsoa_1.Controller {
    async Get() {
        const verbs = await new VerbService_1.VerbService().ListVerbs();
        const response = verbs.map((x) => {
            return { Id: x.Id, Verb: x.Verb };
        });
        return response;
    }
    async Post(body) {
        await new VerbService_1.VerbService().AddOrUpdate(body);
    }
};
__decorate([
    (0, tsoa_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], VerbController.prototype, "Get", null);
__decorate([
    (0, tsoa_1.Post)(),
    __param(0, (0, tsoa_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Array]),
    __metadata("design:returntype", Promise)
], VerbController.prototype, "Post", null);
VerbController = __decorate([
    (0, tsoa_1.Route)("verb"),
    (0, tsoa_1.Tags)("verb")
], VerbController);
exports.VerbController = VerbController;
//# sourceMappingURL=VerbController.js.map
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
exports.GamesController = void 0;
const common_1 = require("@nestjs/common");
const games_service_1 = require("./games.service");
const players_dto_1 = require("./dto/players.dto");
const api_response_1 = require("../constants/api-response");
let GamesController = class GamesController {
    constructor(gamesService) {
        this.gamesService = gamesService;
    }
    save(payload) {
        return this.gamesService.saveGame(payload);
    }
    async findAll(res) {
        try {
            const games = await this.gamesService.getGames();
            const apiResponse = new api_response_1.ApiResponse('Success', common_1.HttpStatus.OK, games);
            res.status(common_1.HttpStatus.OK).json(apiResponse);
        }
        catch (error) {
            const apiResponse = new api_response_1.ApiResponse('Something went wrong', common_1.HttpStatus.INTERNAL_SERVER_ERROR, []);
            res.status(common_1.HttpStatus.INTERNAL_SERVER_ERROR).json(apiResponse);
        }
    }
};
exports.GamesController = GamesController;
__decorate([
    (0, common_1.Post)('save'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [players_dto_1.PlayersDto]),
    __metadata("design:returntype", void 0)
], GamesController.prototype, "save", null);
__decorate([
    (0, common_1.Get)('games'),
    __param(0, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], GamesController.prototype, "findAll", null);
exports.GamesController = GamesController = __decorate([
    (0, common_1.Controller)('api'),
    __metadata("design:paramtypes", [games_service_1.GamesService])
], GamesController);
//# sourceMappingURL=games.controller.js.map
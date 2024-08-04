import { GamesService } from './games.service';
import { PlayersDto } from './dto/players.dto';
import { Response } from 'express';
export declare class GamesController {
    private readonly gamesService;
    constructor(gamesService: GamesService);
    save(payload: PlayersDto): Promise<import("mongoose").Document<unknown, {}, import("../schemas/players.schema").Players> & import("../schemas/players.schema").Players & Required<{
        _id: unknown;
    }>>;
    findAll(res: Response): Promise<void>;
}

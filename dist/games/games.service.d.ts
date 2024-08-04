import { Model } from 'mongoose';
import { Players } from 'src/schemas/players.schema';
import { PlayersDto } from './dto/players.dto';
export declare class GamesService {
    private playersModel;
    constructor(playersModel: Model<Players>);
    saveGame(players: PlayersDto): Promise<import("mongoose").Document<unknown, {}, Players> & Players & Required<{
        _id: unknown;
    }>>;
    getGames(): Promise<PlayersDto[]>;
}

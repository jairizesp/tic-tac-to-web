import { PlayerDetails } from './player-details.schema';
import { Document } from 'mongoose';
export declare class Players extends Document {
    player1: PlayerDetails;
    player2: PlayerDetails;
    date: Date;
}
export declare const PlayersSchema: import("mongoose").Schema<Players, import("mongoose").Model<Players, any, any, any, Document<unknown, any, Players> & Players & Required<{
    _id: unknown;
}>, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Players, Document<unknown, {}, import("mongoose").FlatRecord<Players>> & import("mongoose").FlatRecord<Players> & Required<{
    _id: unknown;
}>>;

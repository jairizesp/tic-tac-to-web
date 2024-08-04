export declare class PlayerDetails {
    name: string;
    wins: number;
    losses: number;
}
export declare const PlayerDetailSchema: import("mongoose").Schema<PlayerDetails, import("mongoose").Model<PlayerDetails, any, any, any, import("mongoose").Document<unknown, any, PlayerDetails> & PlayerDetails & {
    _id: import("mongoose").Types.ObjectId;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, PlayerDetails, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<PlayerDetails>> & import("mongoose").FlatRecord<PlayerDetails> & {
    _id: import("mongoose").Types.ObjectId;
}>;

import { Module } from '@nestjs/common';
import { GamesService } from './games.service';
import { GamesController } from './games.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Players, PlayersSchema } from 'src/schemas/players.schema';
import {
  PlayerDetails,
  PlayerDetailSchema,
} from 'src/schemas/player-details.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Players.name,
        schema: PlayersSchema,
      },
      {
        name: PlayerDetails.name,
        schema: PlayerDetailSchema,
      },
    ]),
  ],
  controllers: [GamesController],
  providers: [GamesService],
})
export class GamesModule {}

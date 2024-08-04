import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Players } from 'src/schemas/players.schema';
import { PlayersDto } from './dto/players.dto';

@Injectable()
export class GamesService {
  constructor(
    @InjectModel(Players.name) private playersModel: Model<Players>,
  ) {}

  saveGame(players: PlayersDto) {
    const newGame = new this.playersModel(players);

    return newGame.save();
  }

  async getGames(): Promise<PlayersDto[]> {
    const games = await this.playersModel
      .find()
      .sort({ date: -1 })
      .lean()
      .exec();
    return games;
  }
}

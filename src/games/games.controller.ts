import { Body, Controller, Get, HttpStatus, Post, Res } from '@nestjs/common';
import { GamesService } from './games.service';
import { PlayersDto } from './dto/players.dto';
import { ApiResponse } from 'src/constants/api-response';
import { Response } from 'express';

@Controller('api')
export class GamesController {
  constructor(private readonly gamesService: GamesService) {}

  @Post('save')
  save(@Body() payload: PlayersDto) {
    return this.gamesService.saveGame(payload);
  }

  @Get('games')
  async findAll(@Res() res: Response): Promise<void> {
    try {
      const games = await this.gamesService.getGames();
      const apiResponse = new ApiResponse<PlayersDto[]>(
        'Success',
        HttpStatus.OK,
        games,
      );

      // Set status code and send JSON response
      res.status(HttpStatus.OK).json(apiResponse);
    } catch (error) {
      const apiResponse = new ApiResponse<PlayersDto[]>(
        'Something went wrong',
        HttpStatus.INTERNAL_SERVER_ERROR,
        [],
      );
      res.status(HttpStatus.INTERNAL_SERVER_ERROR).json(apiResponse);
    }
  }
}

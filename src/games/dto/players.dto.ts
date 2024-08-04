import { IsDate, IsNotEmpty, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';
import { PlayerDetailsDto } from './player-details.dto';

export class PlayersDto {
  @ValidateNested()
  @Type(() => PlayerDetailsDto)
  @IsNotEmpty()
  player1: PlayerDetailsDto;

  @ValidateNested()
  @Type(() => PlayerDetailsDto)
  @IsNotEmpty()
  player2: PlayerDetailsDto;

  @IsDate()
  date?: Date;
}

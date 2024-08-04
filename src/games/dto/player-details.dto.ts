import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class PlayerDetailsDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNumber({}, { each: true })
  wins: number;

  @IsNumber({}, { each: true })
  losses: number;
}

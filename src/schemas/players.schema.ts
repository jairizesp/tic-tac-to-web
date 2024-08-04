import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { PlayerDetails, PlayerDetailSchema } from './player-details.schema';
import { Document } from 'mongoose';

@Schema()
export class Players extends Document {
  @Prop({ type: PlayerDetailSchema, required: true })
  player1: PlayerDetails;
  @Prop({ type: PlayerDetailSchema, required: true })
  player2: PlayerDetails;

  @Prop({ default: () => new Date() })
  date: Date;
}

export const PlayersSchema = SchemaFactory.createForClass(Players);

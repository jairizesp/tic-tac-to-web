import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class PlayerDetails {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  wins: number;

  @Prop({ required: true })
  losses: number;
}

export const PlayerDetailSchema = SchemaFactory.createForClass(PlayerDetails);

import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

// export const TablerateSchema = new mongoose.Schema({
//   age: Number,
//   rate: Number,
//   term: Number,
// });
export type TablerateDocument = HydratedDocument<Tablerate>;
@Schema()
export class Tablerate {
  @Prop()
  term: number;

  @Prop()
  age: number;

  @Prop()
  rate: number;
}
export const TablerateSchema = SchemaFactory.createForClass(Tablerate);

import { Document } from 'mongoose';

export interface Tablerate extends Document {
  readonly age: number;
  readonly term: number;
  readonly rate: number;
}

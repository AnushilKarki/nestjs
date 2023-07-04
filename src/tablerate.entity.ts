import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Tablerate {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  age: number;

  @Column()
  rate: number;

  @Column()
  term: number;
}

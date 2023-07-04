// import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from './prisma.service';
import { Tablerate } from '@prisma/client';
// import { InjectModel } from '@nestjs/mongoose';
// import { CreateTablerateDto } from './create-tablerate.dto';
// import { Tablerate } from './schemas/tablerate.schema';
@Injectable()
export class TablerateService {
  constructor(private prisma: PrismaService) {}
  //   constructor(private tablerateModel: Model<Tablerate>) {}
  //   constructor(
  // @InjectModel(Tablerate.name) private tablerateModel: Model<Tablerate>,
  //   ) {}
  //   async create(createTablerateDto: CreateTablerateDto): Promise<Tablerate> {
  //     const createdTablerate = new this.tablerateModel(createTablerateDto);
  //     return createdTablerate.save();
  //   }
  async createUser(data: Prisma.TablerateCreateInput): Promise<Tablerate> {
    return this.prisma.tablerate.create({
      data,
    });
  }
}

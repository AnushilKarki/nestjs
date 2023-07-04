import { Module } from '@nestjs/common';
import { TablerateController } from './tablerates.controller';
import { FilesControllerController } from './files-controller/files-controller.controller';
// import { Tablerate } from './tablerate.entity';
import { TablerateService } from './tablerates.service';
import { PrismaService } from './prisma.service';
// import { tablerateProviders } from './tablerate.providers';
// import { DatabaseModule } from './database.module';
// import { MongooseModule } from '@nestjs/mongoose';
// import { TablerateSchema } from './schemas/tablerate.schema';

@Module({
  imports: [
    // DatabaseModule,
    // MongooseModule.forFeature([
    //   { name: Tablerate.name, schema: TablerateSchema },
    // ]),
  ],
  controllers: [TablerateController, FilesControllerController],
  providers: [
    TablerateService,
    PrismaService,
    // , ...tablerateProviders
  ],
})
export class TableratesModule {}

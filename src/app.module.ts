import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaService } from './prisma.service';
import { TableratesModule } from './tablerates.module';
import { TablerateService } from './tablerates.service';
// import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    TableratesModule,
    // MongooseModule.forRoot('mongodb://localhost/nest'),
  ],
  controllers: [AppController],
  providers: [AppService, PrismaService, TablerateService],
})
export class AppModule {}

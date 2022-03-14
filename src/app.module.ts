import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmConfigService } from './shared/typeorm.service';
import { AppController } from './app.controller';
import { PlaceModule } from './place/place.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRootAsync({ useClass: TypeOrmConfigService }),
    PlaceModule,
  ],
  controllers: [AppController],
})
export class AppModule {}

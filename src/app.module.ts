import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { dbConfig } from 'configs/db.config';
import { TelephoneModule } from './telephone/telephone.module';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: dbConfig,
    }),
    TelephoneModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}

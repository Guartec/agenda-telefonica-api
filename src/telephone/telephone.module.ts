import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { TelephoneService } from './telephone.service';
import { TelephoneController } from './telephone.controller';
import { Telephone } from './entities/telephone.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Telephone])],
  controllers: [TelephoneController],
  providers: [TelephoneService],
})
export class TelephoneModule {}

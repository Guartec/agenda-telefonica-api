import { Module } from '@nestjs/common';
import { TelephoneService } from './telephone.service';
import { TelephoneController } from './telephone.controller';

@Module({
  controllers: [TelephoneController],
  providers: [TelephoneService]
})
export class TelephoneModule {}

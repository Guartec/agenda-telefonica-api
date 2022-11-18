import { Module } from '@nestjs/common';
import { TelephoneModule } from './telephone/telephone.module';

@Module({
  imports: [TelephoneModule],
  controllers: [],
  providers: [],
})
export class AppModule {}

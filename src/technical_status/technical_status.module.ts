import { Module } from '@nestjs/common';
import { TechnicalStatusService } from './technical_status.service';
import { TechnicalStatusResolver } from './technical_status.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TechnicalStatus } from './entities/technical_status.entity';

@Module({
  providers: [TechnicalStatusResolver, TechnicalStatusService],
  imports: [TypeOrmModule.forFeature([TechnicalStatus])],
})
export class TechnicalStatusModule {}

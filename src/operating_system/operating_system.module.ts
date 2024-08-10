import { Module } from '@nestjs/common';
import { OperatingSystemService } from './operating_system.service';
import { OperatingSystemResolver } from './operating_system.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OperatingSystem } from './entities/operating_system.entity';

@Module({
  providers: [OperatingSystemResolver, OperatingSystemService],
  imports: [TypeOrmModule.forFeature([OperatingSystem])],
})
export class OperatingSystemModule {}

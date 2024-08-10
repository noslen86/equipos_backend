import { Module } from '@nestjs/common';
import { HardDiskService } from './hard_disk.service';
import { HardDiskResolver } from './hard_disk.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { HardDisk } from './entities/hard_disk.entity';

@Module({
  providers: [HardDiskResolver, HardDiskService],
  imports: [TypeOrmModule.forFeature([HardDisk])],
})
export class HardDiskModule {}

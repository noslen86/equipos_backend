import { Module } from '@nestjs/common';
import { NomHardDiskTypeService } from './nom-hard-disk-type.service';
import { NomHardDiskTypeResolver } from './nom-hard-disk-type.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { NomHardDiskType } from './entities/nom-hard-disk-type.entity';

@Module({
  providers: [NomHardDiskTypeResolver, NomHardDiskTypeService],
  imports: [TypeOrmModule.forFeature([NomHardDiskType])],
})
export class NomHardDiskTypeModule {}

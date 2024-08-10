import { Module } from '@nestjs/common';
import { NomHardDiskModelService } from './nom-hard-disk-model.service';
import { NomHardDiskModelResolver } from './nom-hard-disk-model.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { NomHardDiskModel } from './entities/nom-hard-disk-model.entity';
import { NomHardDiskBrand } from '../nom-hard-disk-brand/entities/nom-hard-disk-brand.entity';

@Module({
  providers: [NomHardDiskModelResolver, NomHardDiskModelService],
  imports: [TypeOrmModule.forFeature([NomHardDiskModel, NomHardDiskBrand])],
})
export class NomHardDiskModelModule {}

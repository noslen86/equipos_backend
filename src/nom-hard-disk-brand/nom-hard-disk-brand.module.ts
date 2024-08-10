import { Module } from '@nestjs/common';
import { NomHardDiskBrandService } from './nom-hard-disk-brand.service';
import { NomHardDiskBrandResolver } from './nom-hard-disk-brand.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { NomHardDiskBrand } from './entities/nom-hard-disk-brand.entity';

@Module({
  providers: [NomHardDiskBrandResolver, NomHardDiskBrandService],
  imports: [TypeOrmModule.forFeature([NomHardDiskBrand])],
})
export class NomHardDiskBrandModule {}

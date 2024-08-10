import { Injectable } from '@nestjs/common';
import { CreateNomHardDiskBrandInput } from './dto/create-nom-hard-disk-brand.input';
import { UpdateNomHardDiskBrandInput } from './dto/update-nom-hard-disk-brand.input';
import { InjectRepository } from '@nestjs/typeorm';
import { NomHardDiskBrand } from './entities/nom-hard-disk-brand.entity';
import { Repository } from 'typeorm';

@Injectable()
export class NomHardDiskBrandService {
  constructor(
    @InjectRepository(NomHardDiskBrand)
    private nomHardDiskBrandRepository: Repository<NomHardDiskBrand>,
  ) {}

  async create(
    createNomHardDiskBrandInput: CreateNomHardDiskBrandInput,
  ): Promise<boolean> {
    const nomHardDiskBrand: NomHardDiskBrand =
      this.nomHardDiskBrandRepository.create(createNomHardDiskBrandInput);
    await this.nomHardDiskBrandRepository.save(nomHardDiskBrand);
    return true;
  }

  async findAll(): Promise<NomHardDiskBrand[]> {
    return await this.nomHardDiskBrandRepository.find();
  }

  async findOne(id: number) {
    return await this.nomHardDiskBrandRepository.findOneBy({ id });
  }

  async update(
    id: number,
    updateNomHardDiskBrandInput: UpdateNomHardDiskBrandInput,
  ) {
    const nomHardDiskBrand: NomHardDiskBrand = await this.findOne(id);
    nomHardDiskBrand.name = updateNomHardDiskBrandInput.name;
    await this.nomHardDiskBrandRepository.save(nomHardDiskBrand);
    return true;
  }

  remove(id: number) {
    return `This action removes a #${id} nomHardDiskBrand`;
  }
}

import { Injectable } from '@nestjs/common';
import { CreateNomHardDiskTypeInput } from './dto/create-nom-hard-disk-type.input';
import { UpdateNomHardDiskTypeInput } from './dto/update-nom-hard-disk-type.input';
import { InjectRepository } from '@nestjs/typeorm';
import { NomHardDiskType } from './entities/nom-hard-disk-type.entity';
import { Repository } from 'typeorm';

@Injectable()
export class NomHardDiskTypeService {
  constructor(
    @InjectRepository(NomHardDiskType)
    private nomHardDiskTypeRepository: Repository<NomHardDiskType>,
  ) {}

  create(
    createNomHardDiskTypeInput: CreateNomHardDiskTypeInput,
  ): Promise<NomHardDiskType> {
    const nomHardDiskType: NomHardDiskType =
      this.nomHardDiskTypeRepository.create(createNomHardDiskTypeInput);
    return this.nomHardDiskTypeRepository.save(nomHardDiskType);
  }

  findAll(): Promise<NomHardDiskType[]> {
    return this.nomHardDiskTypeRepository.find();
  }

  findOne(id: number): Promise<NomHardDiskType> {
    return this.nomHardDiskTypeRepository.findOneBy({ id });
  }

  update(id: number, updateNomHardDiskTypeInput: UpdateNomHardDiskTypeInput) {
    return `This action updates a #${id} nomHardDiskType`;
  }

  remove(id: number) {
    return `This action removes a #${id} nomHardDiskType`;
  }
}

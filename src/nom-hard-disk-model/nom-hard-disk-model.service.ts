import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateNomHardDiskModelInput } from './dto/create-nom-hard-disk-model.input';
import { UpdateNomHardDiskModelInput } from './dto/update-nom-hard-disk-model.input';
import { InjectRepository } from '@nestjs/typeorm';
import { NomHardDiskModel } from './entities/nom-hard-disk-model.entity';
import { Repository } from 'typeorm';
import { NomHardDiskBrand } from '../nom-hard-disk-brand/entities/nom-hard-disk-brand.entity';

@Injectable()
export class NomHardDiskModelService {
  constructor(
    @InjectRepository(NomHardDiskModel)
    private nomHardDiskModelRepository: Repository<NomHardDiskModel>,
    @InjectRepository(NomHardDiskBrand)
    private nomHardDiskBrandRepository: Repository<NomHardDiskBrand>,
  ) {}

  async create(
    createNomHardDiskModelInput: CreateNomHardDiskModelInput,
    nomHardDiskBrandId: number,
  ): Promise<NomHardDiskModel> {
    const nomHardDiskBrand: NomHardDiskBrand =
      await this.nomHardDiskBrandRepository.findOneBy({
        id: nomHardDiskBrandId,
      });
    if (!nomHardDiskBrand) {
      throw new NotFoundException(
        'El nomenclador de marca de disco duro no se encuentra en el sistema.',
      );
    }

    const nomHardDiskModel: NomHardDiskModel =
      this.nomHardDiskModelRepository.create({
        ...createNomHardDiskModelInput,
        nomHardDiskBrand,
      });
    return await this.nomHardDiskModelRepository.save(nomHardDiskModel);
  }

  async findAll(): Promise<NomHardDiskModel[]> {
    return await this.nomHardDiskModelRepository.find();
  }

  async findOne(id: number): Promise<NomHardDiskModel> {
    return await this.nomHardDiskModelRepository.findOneBy({ id });
  }

  update(id: number, updateNomHardDiskModelInput: UpdateNomHardDiskModelInput) {
    return `This action updates a #${id} nomHardDiskModel`;
  }

  remove(id: number) {
    return `This action removes a #${id} nomHardDiskModel`;
  }
}

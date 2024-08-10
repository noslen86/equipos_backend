import { Injectable } from '@nestjs/common';
import { CreateHardDiskInput } from './dto/create-hard_disk.input';
import { UpdateHardDiskInput } from './dto/update-hard_disk.input';
import { InjectRepository } from '@nestjs/typeorm';
import { HardDisk } from './entities/hard_disk.entity';
import { Repository } from 'typeorm';

@Injectable()
export class HardDiskService {
  constructor(
    @InjectRepository(HardDisk)
    private hardDiskRepository: Repository<HardDisk>,
  ) {}

  async create(createHardDiskInput: CreateHardDiskInput): Promise<HardDisk> {
    const hardDisk: HardDisk =
      this.hardDiskRepository.create(createHardDiskInput);
    return await this.hardDiskRepository.save(hardDisk);
  }

  async findAll(): Promise<HardDisk[]> {
    return await this.hardDiskRepository.find();
  }

  async findOne(id: number): Promise<HardDisk> {
    return await this.hardDiskRepository.findOneBy({ id });
  }

  update(id: number, updateHardDiskInput: UpdateHardDiskInput) {
    return `This action updates a #${id} hardDisk`;
  }

  remove(id: number) {
    return `This action removes a #${id} hardDisk`;
  }
}

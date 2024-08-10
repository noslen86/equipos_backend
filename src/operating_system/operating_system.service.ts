import { Injectable } from '@nestjs/common';
import { CreateOperatingSystemInput } from './dto/create-operating_system.input';
import { UpdateOperatingSystemInput } from './dto/update-operating_system.input';
import { InjectRepository } from '@nestjs/typeorm';
import { OperatingSystem } from './entities/operating_system.entity';
import { Repository } from 'typeorm';

@Injectable()
export class OperatingSystemService {
  constructor(
    @InjectRepository(OperatingSystem)
    private operatingSystemRepository: Repository<OperatingSystem>,
  ) {}

  create(
    createOperatingSystemInput: CreateOperatingSystemInput,
  ): Promise<OperatingSystem> {
    const operatingSystem: OperatingSystem =
      this.operatingSystemRepository.create(createOperatingSystemInput);
    return this.operatingSystemRepository.save(operatingSystem);
  }

  findAll(): Promise<OperatingSystem[]> {
    return this.operatingSystemRepository.find();
  }

  findOne(id: number): Promise<OperatingSystem> {
    return this.operatingSystemRepository.findOneBy({ id });
  }

  update(id: number, updateOperatingSystemInput: UpdateOperatingSystemInput) {
    return `This action updates a #${id} operatingSystem`;
  }

  remove(id: number) {
    return `This action removes a #${id} operatingSystem`;
  }
}

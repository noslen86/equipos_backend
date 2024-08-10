import { Injectable } from '@nestjs/common';
import { CreateRamMemoryInput } from './dto/create-ram_memory.input';
import { UpdateRamMemoryInput } from './dto/update-ram_memory.input';
import { InjectRepository } from '@nestjs/typeorm';
import { RamMemory } from './entities/ram_memory.entity';
import { Repository } from 'typeorm';

@Injectable()
export class RamMemoryService {
  constructor(
    @InjectRepository(RamMemory)
    private ramMemoryRepository: Repository<RamMemory>,
  ) {}

  create(createRamMemoryInput: CreateRamMemoryInput): Promise<RamMemory> {
    const ramMemory: RamMemory =
      this.ramMemoryRepository.create(createRamMemoryInput);
    return this.ramMemoryRepository.save(ramMemory);
  }

  findAll(): Promise<RamMemory[]> {
    return this.ramMemoryRepository.find();
  }

  findOne(id: number): Promise<RamMemory> {
    return this.ramMemoryRepository.findOneBy({ id });
  }

  update(id: number, updateRamMemoryInput: UpdateRamMemoryInput) {
    return `This action updates a #${id} ramMemory`;
  }

  remove(id: number) {
    return `This action removes a #${id} ramMemory`;
  }
}

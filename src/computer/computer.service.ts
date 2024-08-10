import { Injectable } from '@nestjs/common';
import { CreateComputerInput } from './dto/create-computer.input';
import { UpdateComputerInput } from './dto/update-computer.input';
import { InjectRepository } from '@nestjs/typeorm';
import { Computer } from './entities/computer.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ComputerService {
  constructor(
    @InjectRepository(Computer)
    private computerRepository: Repository<Computer>,
  ) {}

  create(createComputerInput: CreateComputerInput): Promise<Computer> {
    const computer: Computer =
      this.computerRepository.create(createComputerInput);
    return this.computerRepository.save(computer);
  }

  findAll(): Promise<Computer[]> {
    return this.computerRepository.find();
  }

  findOne(id: number): Promise<Computer> {
    return this.computerRepository.findOneBy({ id });
  }

  update(id: number, updateComputerInput: UpdateComputerInput) {
    return `This action updates a #${id} computer`;
  }

  remove(id: number) {
    return `This action removes a #${id} computer`;
  }
}

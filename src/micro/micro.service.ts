import { Injectable } from '@nestjs/common';
import { CreateMicroInput } from './dto/create-micro.input';
import { UpdateMicroInput } from './dto/update-micro.input';
import { InjectRepository } from '@nestjs/typeorm';
import { Micro } from './entities/micro.entity';
import { Repository } from 'typeorm';

@Injectable()
export class MicroService {
  constructor(
    @InjectRepository(Micro) private microRepository: Repository<Micro>,
  ) {}

  create(createMicroInput: CreateMicroInput): Promise<Micro> {
    const micro: Micro = this.microRepository.create(createMicroInput);
    return this.microRepository.save(micro);
  }

  findAll(): Promise<Micro[]> {
    return this.microRepository.find();
  }

  findOne(id: number): Promise<Micro> {
    return this.microRepository.findOneBy({ id });
  }

  update(id: number, updateMicroInput: UpdateMicroInput) {
    return `This action updates a #${id} micro`;
  }

  remove(id: number) {
    return `This action removes a #${id} micro`;
  }
}

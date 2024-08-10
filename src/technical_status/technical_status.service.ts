import { Injectable } from '@nestjs/common';
import { CreateTechnicalStatusInput } from './dto/create-technical_status.input';
import { UpdateTechnicalStatusInput } from './dto/update-technical_status.input';
import { TechnicalStatus } from './entities/technical_status.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class TechnicalStatusService {
  constructor(
    @InjectRepository(TechnicalStatus)
    private technicalStatusRepository: Repository<TechnicalStatus>,
  ) {}

  create(
    createTechnicalStatusInput: CreateTechnicalStatusInput,
  ): Promise<TechnicalStatus> {
    const technicalStatus: TechnicalStatus =
      this.technicalStatusRepository.create(createTechnicalStatusInput);
    return this.technicalStatusRepository.save(technicalStatus);
  }

  findAll(): Promise<TechnicalStatus[]> {
    return this.technicalStatusRepository.find();
  }

  findOne(id: number): Promise<TechnicalStatus> {
    return this.technicalStatusRepository.findOneBy({ id });
  }

  update(id: number, updateTechnicalStatusInput: UpdateTechnicalStatusInput) {
    return `This action updates a #${id} technicalStatus`;
  }

  remove(id: number) {
    return `This action removes a #${id} technicalStatus`;
  }
}

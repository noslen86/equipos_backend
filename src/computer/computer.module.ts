import { Module } from '@nestjs/common';
import { ComputerService } from './computer.service';
import { ComputerResolver } from './computer.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Computer } from './entities/computer.entity';

@Module({
  providers: [ComputerResolver, ComputerService],
  imports: [TypeOrmModule.forFeature([Computer])],
})
export class ComputerModule {}

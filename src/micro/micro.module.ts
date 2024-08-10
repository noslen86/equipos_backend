import { Module } from '@nestjs/common';
import { MicroService } from './micro.service';
import { MicroResolver } from './micro.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Micro } from './entities/micro.entity';

@Module({
  providers: [MicroResolver, MicroService],
  imports: [TypeOrmModule.forFeature([Micro])],
})
export class MicroModule {}

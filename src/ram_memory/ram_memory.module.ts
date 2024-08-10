import { Module } from '@nestjs/common';
import { RamMemoryService } from './ram_memory.service';
import { RamMemoryResolver } from './ram_memory.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RamMemory } from './entities/ram_memory.entity';

@Module({
  providers: [RamMemoryResolver, RamMemoryService],
  imports: [TypeOrmModule.forFeature([RamMemory])],
})
export class RamMemoryModule {}

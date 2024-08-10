import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { RamMemoryService } from './ram_memory.service';
import { RamMemory } from './entities/ram_memory.entity';
import { CreateRamMemoryInput } from './dto/create-ram_memory.input';
import { UpdateRamMemoryInput } from './dto/update-ram_memory.input';

@Resolver(() => RamMemory)
export class RamMemoryResolver {
  constructor(private readonly ramMemoryService: RamMemoryService) {}

  @Mutation(() => RamMemory)
  createRamMemory(
    @Args('createRamMemoryInput') createRamMemoryInput: CreateRamMemoryInput,
  ): Promise<RamMemory> {
    return this.ramMemoryService.create(createRamMemoryInput);
  }

  @Query(() => [RamMemory], { name: 'ram_memories' })
  async findAll(): Promise<RamMemory[]> {
    return this.ramMemoryService.findAll();
  }

  @Query(() => RamMemory, { name: 'ram_memory' })
  async findOne(@Args('id', { type: () => Int }) id: number): Promise<RamMemory> {
    return this.ramMemoryService.findOne(id);
  }

  @Mutation(() => RamMemory)
  updateRamMemory(
    @Args('updateRamMemoryInput') updateRamMemoryInput: UpdateRamMemoryInput,
  ) {
    return this.ramMemoryService.update(
      updateRamMemoryInput.id,
      updateRamMemoryInput,
    );
  }

  @Mutation(() => RamMemory)
  removeRamMemory(@Args('id', { type: () => Int }) id: number) {
    return this.ramMemoryService.remove(id);
  }
}

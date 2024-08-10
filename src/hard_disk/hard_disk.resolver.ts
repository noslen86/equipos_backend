import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { HardDiskService } from './hard_disk.service';
import { HardDisk } from './entities/hard_disk.entity';
import { CreateHardDiskInput } from './dto/create-hard_disk.input';
import { UpdateHardDiskInput } from './dto/update-hard_disk.input';

@Resolver(() => HardDisk)
export class HardDiskResolver {
  constructor(private readonly hardDiskService: HardDiskService) {}

  @Mutation(() => HardDisk)
  createHardDisk(
    @Args('createHardDiskInput') createHardDiskInput: CreateHardDiskInput,
  ): Promise<HardDisk> {
    return this.hardDiskService.create(createHardDiskInput);
  }

  @Query(() => [HardDisk], { name: 'hard_disks' })
  async findAll(): Promise<HardDisk[]> {
    return this.hardDiskService.findAll();
  }

  @Query(() => HardDisk, { name: 'hard_disk' })
  async findOne(@Args('id', { type: () => Int }) id: number): Promise<HardDisk> {
    return this.hardDiskService.findOne(id);
  }

  @Mutation(() => HardDisk)
  updateHardDisk(
    @Args('updateHardDiskInput') updateHardDiskInput: UpdateHardDiskInput,
  ) {
    return this.hardDiskService.update(
      updateHardDiskInput.id,
      updateHardDiskInput,
    );
  }

  @Mutation(() => HardDisk)
  removeHardDisk(@Args('id', { type: () => Int }) id: number) {
    return this.hardDiskService.remove(id);
  }
}

import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { OperatingSystemService } from './operating_system.service';
import { OperatingSystem } from './entities/operating_system.entity';
import { CreateOperatingSystemInput } from './dto/create-operating_system.input';
import { UpdateOperatingSystemInput } from './dto/update-operating_system.input';

@Resolver(() => OperatingSystem)
export class OperatingSystemResolver {
  constructor(
    private readonly operatingSystemService: OperatingSystemService,
  ) {}

  @Mutation(() => OperatingSystem)
  createOperatingSystem(
    @Args('createOperatingSystemInput')
    createOperatingSystemInput: CreateOperatingSystemInput,
  ): Promise<OperatingSystem> {
    return this.operatingSystemService.create(createOperatingSystemInput);
  }

  @Query(() => [OperatingSystem], { name: 'operating_systems' })
  async findAll(): Promise<OperatingSystem[]> {
    return this.operatingSystemService.findAll();
  }

  @Query(() => OperatingSystem, { name: 'operating_system' })
  async findOne(@Args('id', { type: () => Int }) id: number): Promise<OperatingSystem> {
    return this.operatingSystemService.findOne(id);
  }

  @Mutation(() => OperatingSystem)
  updateOperatingSystem(
    @Args('updateOperatingSystemInput')
    updateOperatingSystemInput: UpdateOperatingSystemInput,
  ) {
    return this.operatingSystemService.update(
      updateOperatingSystemInput.id,
      updateOperatingSystemInput,
    );
  }

  @Mutation(() => OperatingSystem)
  removeOperatingSystem(@Args('id', { type: () => Int }) id: number) {
    return this.operatingSystemService.remove(id);
  }
}

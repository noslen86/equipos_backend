import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { ComputerService } from './computer.service';
import { Computer } from './entities/computer.entity';
import { CreateComputerInput } from './dto/create-computer.input';
import { UpdateComputerInput } from './dto/update-computer.input';

@Resolver(() => Computer)
export class ComputerResolver {
  constructor(private readonly computerService: ComputerService) {}

  @Mutation(() => Computer)
  createComputer(
    @Args('createComputerInput') createComputerInput: CreateComputerInput,
  ): Promise<Computer> {
    return this.computerService.create(createComputerInput);
  }

  @Query(() => [Computer], { name: 'computers' })
  async findAll(): Promise<Computer[]> {
    return this.computerService.findAll();
  }

  @Query(() => Computer, { name: 'computer' })
  async findOne(@Args('id', { type: () => Int }) id: number): Promise<Computer> {
    return this.computerService.findOne(id);
  }

  @Mutation(() => Computer)
  updateComputer(
    @Args('updateComputerInput') updateComputerInput: UpdateComputerInput,
  ) {
    return this.computerService.update(
      updateComputerInput.id,
      updateComputerInput,
    );
  }

  @Mutation(() => Computer)
  removeComputer(@Args('id', { type: () => Int }) id: number) {
    return this.computerService.remove(id);
  }
}

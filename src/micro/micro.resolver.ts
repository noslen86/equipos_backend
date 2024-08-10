import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { MicroService } from './micro.service';
import { Micro } from './entities/micro.entity';
import { CreateMicroInput } from './dto/create-micro.input';
import { UpdateMicroInput } from './dto/update-micro.input';

@Resolver(() => Micro)
export class MicroResolver {
  constructor(private readonly microService: MicroService) {}

  @Mutation(() => Micro)
  createMicro(
    @Args('createMicroInput') createMicroInput: CreateMicroInput,
  ): Promise<Micro> {
    return this.microService.create(createMicroInput);
  }

  @Query(() => [Micro], { name: 'micros' })
  findAll(): Promise<Micro[]> {
    return this.microService.findAll();
  }

  @Query(() => Micro, { name: 'micro' })
  findOne(@Args('id', { type: () => Int }) id: number): Promise<Micro> {
    return this.microService.findOne(id);
  }

  @Mutation(() => Micro)
  updateMicro(@Args('updateMicroInput') updateMicroInput: UpdateMicroInput) {
    return this.microService.update(updateMicroInput.id, updateMicroInput);
  }

  @Mutation(() => Micro)
  removeMicro(@Args('id', { type: () => Int }) id: number) {
    return this.microService.remove(id);
  }
}

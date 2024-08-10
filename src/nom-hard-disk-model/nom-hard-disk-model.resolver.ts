import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { NomHardDiskModelService } from './nom-hard-disk-model.service';
import { NomHardDiskModel } from './entities/nom-hard-disk-model.entity';
import { CreateNomHardDiskModelInput } from './dto/create-nom-hard-disk-model.input';
import { UpdateNomHardDiskModelInput } from './dto/update-nom-hard-disk-model.input';

@Resolver(() => NomHardDiskModel)
export class NomHardDiskModelResolver {
  constructor(
    private readonly nomHardDiskModelService: NomHardDiskModelService,
  ) {}

  @Mutation(() => NomHardDiskModel)
  async createNomHardDiskModel(
    @Args('createNomHardDiskModelInput')
    createNomHardDiskModelInput: CreateNomHardDiskModelInput,
    @Args('nomHardDiskBrandId')
    nomHardDiskBrandId: number,
  ): Promise<NomHardDiskModel> {
    return this.nomHardDiskModelService.create(
      createNomHardDiskModelInput,
      nomHardDiskBrandId,
    );
  }

  @Query(() => [NomHardDiskModel], { name: 'nomHardDiskModelList' })
  async findAll(): Promise<NomHardDiskModel[]> {
    return this.nomHardDiskModelService.findAll();
  }

  @Query(() => NomHardDiskModel, { name: 'nomHardDiskModel' })
  async findOne(
    @Args('id', { type: () => Int }) id: number,
  ): Promise<NomHardDiskModel> {
    return this.nomHardDiskModelService.findOne(id);
  }

  @Mutation(() => NomHardDiskModel)
  updateNomHardDiskModel(
    @Args('updateNomHardDiskModelInput')
    updateNomHardDiskModelInput: UpdateNomHardDiskModelInput,
  ): string {
    return this.nomHardDiskModelService.update(
      updateNomHardDiskModelInput.id,
      updateNomHardDiskModelInput,
    );
  }

  @Mutation(() => NomHardDiskModel)
  removeNomHardDiskModel(@Args('id', { type: () => Int }) id: number) {
    return this.nomHardDiskModelService.remove(id);
  }
}

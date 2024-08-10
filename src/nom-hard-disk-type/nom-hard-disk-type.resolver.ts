import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { NomHardDiskTypeService } from './nom-hard-disk-type.service';
import { NomHardDiskType } from './entities/nom-hard-disk-type.entity';
import { CreateNomHardDiskTypeInput } from './dto/create-nom-hard-disk-type.input';
import { UpdateNomHardDiskTypeInput } from './dto/update-nom-hard-disk-type.input';

@Resolver(() => NomHardDiskType)
export class NomHardDiskTypeResolver {
  constructor(
    private readonly nomHardDiskTypeService: NomHardDiskTypeService,
  ) {}

  @Mutation(() => NomHardDiskType)
  createNomHardDiskType(
    @Args('createNomHardDiskTypeInput')
    createNomHardDiskTypeInput: CreateNomHardDiskTypeInput,
  ): Promise<NomHardDiskType> {
    return this.nomHardDiskTypeService.create(createNomHardDiskTypeInput);
  }

  @Query(() => [NomHardDiskType], { name: 'nomHardDiskTypeList' })
  findAll(): Promise<NomHardDiskType[]> {
    return this.nomHardDiskTypeService.findAll();
  }

  @Query(() => NomHardDiskType, { name: 'nomHardDiskType' })
  findOne(@Args('id', { type: () => Int }) id: number): Promise<NomHardDiskType> {
    return this.nomHardDiskTypeService.findOne(id);
  }

  @Mutation(() => NomHardDiskType)
  updateNomHardDiskType(
    @Args('updateNomHardDiskTypeInput')
    updateNomHardDiskTypeInput: UpdateNomHardDiskTypeInput,
  ): string {
    return this.nomHardDiskTypeService.update(
      updateNomHardDiskTypeInput.id,
      updateNomHardDiskTypeInput,
    );
  }

  @Mutation(() => NomHardDiskType)
  removeNomHardDiskType(@Args('id', { type: () => Int }) id: number): string {
    return this.nomHardDiskTypeService.remove(id);
  }
}

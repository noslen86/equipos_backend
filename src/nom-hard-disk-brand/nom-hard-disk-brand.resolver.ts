import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { NomHardDiskBrandService } from './nom-hard-disk-brand.service';
import { NomHardDiskBrand } from './entities/nom-hard-disk-brand.entity';
import { CreateNomHardDiskBrandInput } from './dto/create-nom-hard-disk-brand.input';
import { UpdateNomHardDiskBrandInput } from './dto/update-nom-hard-disk-brand.input';

@Resolver(() => NomHardDiskBrand)
export class NomHardDiskBrandResolver {
  constructor(
    private readonly nomHardDiskBrandService: NomHardDiskBrandService,
  ) {}

  @Mutation(() => Boolean)
  async createNomHardDiskBrand(
    @Args('createNomHardDiskBrandInput')
    createNomHardDiskBrandInput: CreateNomHardDiskBrandInput,
  ): Promise<boolean> {
    return await this.nomHardDiskBrandService.create(
      createNomHardDiskBrandInput,
    );
  }

  @Query(() => [NomHardDiskBrand], { name: 'nomHardDiskBrandList' })
  async findAll(): Promise<NomHardDiskBrand[]> {
    return this.nomHardDiskBrandService.findAll();
  }

  @Query(() => NomHardDiskBrand, { name: 'nomHardDiskBrand' })
  async findOne(
    @Args('id', { type: () => Int }) id: number,
  ): Promise<NomHardDiskBrand> {
    return this.nomHardDiskBrandService.findOne(id);
  }

  @Mutation(() => Boolean)
  async updateNomHardDiskBrand(
    @Args('updateNomHardDiskBrandInput')
    updateNomHardDiskBrandInput: UpdateNomHardDiskBrandInput,
  ): Promise<boolean> {
    return await this.nomHardDiskBrandService.update(
      updateNomHardDiskBrandInput.id,
      updateNomHardDiskBrandInput,
    );
  }

  @Mutation(() => Boolean)
  async removeNomHardDiskBrand(
    @Args('id', { type: () => Int }) id: number,
  ): Promise<boolean> {
    return this.nomHardDiskBrandService.remove(id);
  }
}

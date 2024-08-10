import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { TechnicalStatusService } from './technical_status.service';
import { TechnicalStatus } from './entities/technical_status.entity';
import { CreateTechnicalStatusInput } from './dto/create-technical_status.input';
import { UpdateTechnicalStatusInput } from './dto/update-technical_status.input';

@Resolver(() => TechnicalStatus)
export class TechnicalStatusResolver {
  constructor(
    private readonly technicalStatusService: TechnicalStatusService,
  ) {}

  @Mutation(() => TechnicalStatus)
  createTechnicalStatus(
    @Args('createTechnicalStatusInput')
    createTechnicalStatusInput: CreateTechnicalStatusInput,
  ): Promise<TechnicalStatus> {
    return this.technicalStatusService.create(createTechnicalStatusInput);
  }

  @Query(() => [TechnicalStatus], { name: 'technical_statuses' })
  async findAll(): Promise<TechnicalStatus[]> {
    return this.technicalStatusService.findAll();
  }

  @Query(() => TechnicalStatus, { name: 'technicalStatus' })
  async findOne(@Args('id', { type: () => Int }) id: number): Promise<TechnicalStatus> {
    return this.technicalStatusService.findOne(id);
  }

  @Mutation(() => TechnicalStatus)
  updateTechnicalStatus(
    @Args('updateTechnicalStatusInput')
    updateTechnicalStatusInput: UpdateTechnicalStatusInput,
  ) {
    return this.technicalStatusService.update(
      updateTechnicalStatusInput.id,
      updateTechnicalStatusInput,
    );
  }

  @Mutation(() => TechnicalStatus)
  removeTechnicalStatus(@Args('id', { type: () => Int }) id: number) {
    return this.technicalStatusService.remove(id);
  }
}

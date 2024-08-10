import { CreateComputerInput } from './create-computer.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateComputerInput extends PartialType(CreateComputerInput) {
  @Field(() => Int)
  id: number;
}

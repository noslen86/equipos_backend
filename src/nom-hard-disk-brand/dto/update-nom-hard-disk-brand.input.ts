import { CreateNomHardDiskBrandInput } from './create-nom-hard-disk-brand.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';
import { IsNotEmpty, MaxLength, MinLength } from 'class-validator';

@InputType()
export class UpdateNomHardDiskBrandInput extends PartialType(
  CreateNomHardDiskBrandInput,
) {
  @Field(() => Int)
  id: number;

  @Field({ name: 'name' })
  name: string;
}

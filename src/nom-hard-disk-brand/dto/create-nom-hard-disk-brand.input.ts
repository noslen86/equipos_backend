import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreateNomHardDiskBrandInput {
  @Field({ name: 'name' })
  name: string;
}

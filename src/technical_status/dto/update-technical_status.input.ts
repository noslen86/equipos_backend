import { CreateTechnicalStatusInput } from './create-technical_status.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';
import { IsNotEmpty, MaxLength, MinLength } from 'class-validator';

@InputType()
export class UpdateTechnicalStatusInput extends PartialType(
  CreateTechnicalStatusInput,
) {
  @Field(() => Int)
  id: number;

  @IsNotEmpty({
    message: 'Este campo es obligatorio.',
  })
  @MinLength(5, {
    message: 'El campo no cumple la cantidad mínima de caracteres.',
  })
  @MaxLength(10, {
    message: 'El campo no cumple la cantidad máxima de caracteres.',
  })
  @Field({ description: 'Nombre' })
  name: string;
}

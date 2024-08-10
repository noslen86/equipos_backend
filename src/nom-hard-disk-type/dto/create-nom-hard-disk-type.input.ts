import { InputType, Field } from '@nestjs/graphql';
import { IsNotEmpty, MaxLength, MinLength } from 'class-validator';

@InputType()
export class CreateNomHardDiskTypeInput {
  @IsNotEmpty({
    message: 'Este campo es obligatorio.',
  })
  @MinLength(3, {
    message: 'El campo no cumple la cantidad mínima de caracteres.',
  })
  @MaxLength(5, {
    message: 'El campo no cumple la cantidad máxima de caracteres.',
  })
  @Field({ description: 'Nombre' })
  name: string;
}

import { InputType, Field, Int } from '@nestjs/graphql';
import { IsNotEmpty, MaxLength, MinLength } from 'class-validator';

@InputType()
export class CreateNomHardDiskModelInput {
  @IsNotEmpty({
    message: 'Este campo es obligatorio.',
  })
  @MinLength(10, {
    message: 'El campo no cumple la cantidad mínima de caracteres.',
  })
  @MaxLength(50, {
    message: 'El campo no cumple la cantidad máxima de caracteres.',
  })
  @Field(() => String, { description: 'Nombre' })
  name: string;

  @IsNotEmpty({
    message: 'Este campo es obligatorio.',
  })
  @Field(() => Int, { description: 'Id de la marca de disco duro' })
  nomHardDiskBrandId: number;
}

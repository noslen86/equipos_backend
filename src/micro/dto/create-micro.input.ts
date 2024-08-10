import { InputType, Field } from '@nestjs/graphql';
import { IsNotEmpty, MaxLength, MinLength } from 'class-validator';

@InputType()
export class CreateMicroInput {
  @IsNotEmpty({
    message: 'Este campo es obligatorio.',
  })
  @MinLength(10, {
    message: 'El campo no cumple la cantidad mínima de caracteres.',
  })
  @MaxLength(15, {
    message: 'El campo no cumple la cantidad máxima de caracteres.',
  })
  @Field({ description: 'Nombre' })
  name: string;

  @IsNotEmpty({
    message: 'Este campo es obligatorio.',
  })
  @MinLength(5, {
    message: 'El campo no cumple la cantidad mínima de caracteres.',
  })
  @MaxLength(10, {
    message: 'El campo no cumple la cantidad máxima de caracteres.',
  })
  @Field({ description: 'Velocidad' })
  speed: string;
}

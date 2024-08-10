import { InputType, Field } from '@nestjs/graphql';
import { IsNotEmpty, MaxLength, MinLength } from 'class-validator';

@InputType()
export class CreateRamMemoryInput {
  @IsNotEmpty({
    message: 'Este campo es obligatorio.',
  })
  @MinLength(4, {
    message: 'El campo no cumple la cantidad mínima de caracteres.',
  })
  @MaxLength(6, {
    message: 'El campo no cumple la cantidad máxima de caracteres.',
  })
  @Field({ description: 'Capacidad' })
  capacity: string;

  @IsNotEmpty({
    message: 'Este campo es obligatorio.',
  })
  @MinLength(3, {
    message: 'El campo no cumple la cantidad mínima de caracteres.',
  })
  @MaxLength(3, {
    message: 'El campo no cumple la cantidad máxima de caracteres.',
  })
  @Field({ description: 'Tipo de memoria RAM' })
  type: string;
}

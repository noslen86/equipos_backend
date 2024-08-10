import { InputType, Field } from '@nestjs/graphql';
import { IsNotEmpty, MaxLength, MinLength } from 'class-validator';

@InputType()
export class CreateHardDiskInput {
  @IsNotEmpty({
    message: 'Este campo es obligatorio.',
  })
  @MinLength(4, {
    message: 'El campo no cumple la cantidad mínima de caracteres.',
  })
  @MaxLength(8, {
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
  @MaxLength(10, {
    message: 'El campo no cumple la cantidad máxima de caracteres.',
  })
  @Field({ description: 'Marca' })
  brand: string;

  @Field({ description: 'Modelo', nullable: true })
  model?: string;

  @IsNotEmpty({
    message: 'Este campo es obligatorio.',
  })
  @MinLength(2, {
    message: 'El campo no cumple la cantidad mínima de caracteres.',
  })
  @MaxLength(5, {
    message: 'El campo no cumple la cantidad máxima de caracteres.',
  })
  @Field({ description: 'Tipo' })
  type: string;
}

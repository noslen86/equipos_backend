import { CreateOperatingSystemInput } from './create-operating_system.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';
import { IsNotEmpty, MaxLength, MinLength } from 'class-validator';

@InputType()
export class UpdateOperatingSystemInput extends PartialType(
  CreateOperatingSystemInput,
) {
  @Field(() => Int)
  id: number;

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
  @MinLength(3, {
    message: 'El campo no cumple la cantidad mínima de caracteres.',
  })
  @MaxLength(10, {
    message: 'El campo no cumple la cantidad máxima de caracteres.',
  })
  @Field({ description: 'Versión' })
  version: string;

  @IsNotEmpty({
    message: 'Este campo es obligatorio.',
  })
  @MinLength(3, {
    message: 'El campo no cumple la cantidad mínima de caracteres.',
  })
  @MaxLength(3, {
    message: 'El campo no cumple la cantidad máxima de caracteres.',
  })
  @Field({ description: 'Tipo de arquitectura' })
  architecture: string;
}

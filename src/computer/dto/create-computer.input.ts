import { InputType, Field } from '@nestjs/graphql';
import { IsInt, IsNotEmpty, IsNumber, MaxLength } from 'class-validator';

@InputType()
export class CreateComputerInput {
  @IsNotEmpty({
    message: 'Este campo es obligatorio.',
  })
  @IsNumber({
    maxDecimalPlaces: 0,
  })
  @IsInt({
    message: 'El valor proporcionado no es un número válido.',
  })
  @MaxLength(6, {
    message: 'El campo no cumple la cantidad máxima de caracteres.',
  })
  @Field({ description: 'Inventario' })
  inventory: number;

  @MaxLength(255, {
    message: 'El campo no cumple la cantidad máxima de caracteres.',
  })
  @Field({ description: 'Información adicional', nullable: true })
  description?: string;

  @IsNotEmpty({
    message: 'Este campo es obligatorio.',
  })
  @Field({ description: 'Ubicación' })
  location: string;
}

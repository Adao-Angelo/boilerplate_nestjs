import { ApiProperty } from '@nestjs/swagger';
import {
  IsNotEmpty,
  IsNumber,
  IsString,
  IsUUID,
  MaxLength,
  Min,
  MinLength,
} from 'class-validator';

export class CreateProductDto {
  @ApiProperty({
    example: 'Notebook HP 15',
    description: 'The name of the product',
  })
  @IsString({ message: 'The product name must be a string.' })
  @IsNotEmpty({ message: 'The product name is required.' })
  @MinLength(2, {
    message: 'The product name must be at least 2 characters long.',
  })
  @MaxLength(100, {
    message: 'The product name must not exceed 100 characters.',
  })
  name: string;

  @ApiProperty({
    example: 'Notebook with 16GB RAM and 512GB SSD',
    description: 'Detailed description of the product',
  })
  @IsString({ message: 'The description must be a string.' })
  @IsNotEmpty({ message: 'The description is required.' })
  @MaxLength(255, {
    message: 'The description must not exceed 255 characters.',
  })
  description: string;

  @ApiProperty({
    example: 4599.99,
    description: 'The price of the product',
  })
  @IsNumber({}, { message: 'The price must be a number.' })
  @Min(0, { message: 'The price must be at least 0.' })
  price: number;

  @ApiProperty({
    example: 50,
    description: 'Available stock for the product',
  })
  @IsNumber({}, { message: 'The stock must be a number.' })
  @Min(0, { message: 'The stock must be at least 0.' })
  stock: number;

  @ApiProperty({
    example: 'b5936621-17af-43b4-a12e-e4a27eb2bb41',
    description: 'UUID of the company this product belongs to',
  })
  @IsUUID('4', { message: 'The companyId must be a valid UUID.' })
  @IsNotEmpty({ message: 'The companyId is required.' })
  companyId: string;
}

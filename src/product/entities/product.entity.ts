import {
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  IsUUID,
  MaxLength,
  Min,
  MinLength,
} from 'class-validator';

export class Product {
  @IsOptional()
  @IsUUID('4', { message: 'The ID must be a valid UUID.' })
  id: string;

  @IsString({ message: 'The product name must be a string.' })
  @IsNotEmpty({ message: 'The product name is required.' })
  @MinLength(2, {
    message: 'The product name must be at least 2 characters long.',
  })
  @MaxLength(100, {
    message: 'The product name must not exceed 100 characters.',
  })
  name: string;

  @IsOptional()
  @IsString({ message: 'The description must be a string.' })
  description?: string;

  @IsNumber({}, { message: 'The price must be a number.' })
  @Min(0, { message: 'The price must be at least 0.' })
  price: number;

  @IsNumber({}, { message: 'The stock must be a number.' })
  @Min(0, { message: 'The stock must be at least 0.' })
  stock: number;

  @IsUUID('4', { message: 'The companyId must be a valid UUID.' })
  @IsNotEmpty({ message: 'The companyId is required.' })
  companyId: string;
}

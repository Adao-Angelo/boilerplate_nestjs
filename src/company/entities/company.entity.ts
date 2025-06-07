import {
  IsNotEmpty,
  IsOptional,
  IsString,
  IsUUID,
  MaxLength,
  MinLength,
} from 'class-validator';

export class Company {
  @IsOptional()
  @IsUUID('4', { message: 'The ID must be a valid UUID.' })
  id: string;

  @IsString({ message: 'The company name must be a string.' })
  @IsNotEmpty({ message: 'The company name is required.' })
  @MinLength(2, {
    message: 'The company name must be at least 2 characters long.',
  })
  @MaxLength(100, {
    message: 'The company name must not exceed 100 characters.',
  })
  name: string;

  @IsString({ message: 'The CNPJ must be a string.' })
  @IsNotEmpty({ message: 'The CNPJ is required.' })
  @MinLength(14, { message: 'The CNPJ must be at least 14 characters long.' })
  @MaxLength(18, { message: 'The CNPJ must not exceed 18 characters.' })
  cnpj: string;

  @IsOptional()
  @IsString({ message: 'The address must be a string.' })
  address?: string;
}

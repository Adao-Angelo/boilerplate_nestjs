import { IsNotEmpty, IsString, MaxLength, MinLength } from 'class-validator';

export class CreateCompanyDto {
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

  @IsString({ message: 'The address must be a string.' })
  @IsNotEmpty({ message: 'The address is required.' })
  @MaxLength(200, { message: 'The address must not exceed 200 characters.' })
  address: string;
}

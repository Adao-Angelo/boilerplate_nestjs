import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, MaxLength, MinLength } from 'class-validator';

export class CreateCompanyDto {
  @ApiProperty({ example: 'Tech Solutions Inc', description: 'Company name' })
  @IsString({ message: 'The company name must be a string.' })
  @IsNotEmpty({ message: 'The company name is required.' })
  @MinLength(2, {
    message: 'The company name must be at least 2 characters long.',
  })
  @MaxLength(100, {
    message: 'The company name must not exceed 100 characters.',
  })
  name: string;

  @ApiProperty({ example: '12.345.678/0001-99', description: 'Company CNPJ' })
  @IsString({ message: 'The CNPJ must be a string.' })
  @IsNotEmpty({ message: 'The CNPJ is required.' })
  @MinLength(14, { message: 'The CNPJ must be at least 14 characters long.' })
  @MaxLength(18, { message: 'The CNPJ must not exceed 18 characters.' })
  cnpj: string;

  @ApiProperty({
    example: 'Rua Principal, 123',
    description: 'Company address',
  })
  @IsString({ message: 'The address must be a string.' })
  @IsNotEmpty({ message: 'The address is required.' })
  @MaxLength(200, { message: 'The address must not exceed 200 characters.' })
  address: string;
}

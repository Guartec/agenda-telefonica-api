import { IsArray, IsNotEmpty } from 'class-validator';

export class CreateTelephoneDto {
  @IsNotEmpty()
  telephoneNumber: string;

  @IsNotEmpty()
  name: string;

  @IsArray()
  branch: string[];
}

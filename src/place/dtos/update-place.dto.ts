import { IsOptional, IsString, IsNumber } from 'class-validator';

export class UpdatePlaceDto {
  @IsString()
  @IsOptional()
  name: string;

  @IsString()
  @IsOptional()
  location: string;

  @IsNumber()
  @IsOptional()
  priceRange: number;
}

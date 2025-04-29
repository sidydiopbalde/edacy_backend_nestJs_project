import { IsString, IsNumber, IsOptional, IsNotEmpty } from 'class-validator';

export class UpdateProductDto {
  @IsOptional()
  @IsNotEmpty({ message: 'Le nom du produit ne peut pas être vide.' })
  @IsString({ message: 'Le nom du produit doit être une chaîne de caractères.' })
  name?: string;

  @IsOptional()
  @IsNotEmpty({ message: 'Le prix ne peut pas être vide.' })
  @IsNumber({}, { message: 'Le prix doit être un nombre.' })
  price?: number;

  @IsOptional()
  @IsNotEmpty({ message: 'La quantité ne peut pas être vide.' })
  @IsNumber({}, { message: 'La quantité doit être un nombre.' })
  quantity?: number;
}

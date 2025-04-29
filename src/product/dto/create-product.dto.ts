import { IsString, IsNumber, IsNotEmpty } from 'class-validator';

export class CreateProductDto {
  @IsNotEmpty({ message: 'Le nom du produit est requis.' })
  @IsString({ message: 'Le nom du produit doit être une chaîne de caractères.' })
  name: string;

  @IsNotEmpty({ message: 'Le prix est requis.' })
  @IsNumber({}, { message: 'Le prix doit être un nombre.' })
  price: number;

  @IsNotEmpty({ message: 'La quantité est requise.' })
  @IsNumber({}, { message: 'La quantité doit être un nombre.' })
  quantity: number;
}

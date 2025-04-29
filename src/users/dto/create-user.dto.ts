import { IsString, IsEmail, IsNotEmpty } from 'class-validator';

export class CreateUserDto {
  @IsNotEmpty({ message: 'Le prénom est requis.' })
  @IsString({ message: 'Le prénom doit être une chaîne de caractères.' })
  firstname: string;

  @IsNotEmpty({ message: 'Le nom est requis.' })
  @IsString({ message: 'Le nom doit être une chaîne de caractères.' })
  lastname: string;

  @IsNotEmpty({ message: 'L\'adresse est requise.' })
  @IsString({ message: 'L\'adresse doit être une chaîne de caractères.' })
  adresse: string;

  @IsNotEmpty({ message: 'L\'email est requis.' })
  @IsEmail({}, { message: 'Email invalide.' })
  email: string;

  @IsNotEmpty({ message: 'Le mot de passe est requis.' })
  @IsString({ message: 'Le mot de passe doit être une chaîne de caractères.' })
  password: string;
}

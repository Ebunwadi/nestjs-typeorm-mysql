import { IsString, IsNotEmpty, MinLength } from 'class-validator';

export class UpdateUserDto {
  username: string;
  password: string;
}

export class CreateUserProfileDto {
  firstName: string;
  lastName: string;
  age: number;
  dob: string;
}

export class CreateUserPostDto {
  title: string;
  description: string;
}

export class CreateUserDto {
  @IsString()
  @IsNotEmpty()
  username: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(5)
  password: string;

  @IsString()
  confirmPassword: string;
}

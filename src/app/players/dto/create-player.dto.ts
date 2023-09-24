import { IsNotEmpty, IsPositive } from 'class-validator';

export class CreatePlayerDto {
  @IsNotEmpty()
  @IsPositive()
  accountId: number;
  personaname?: string;
  avatarfull?: string;
  loccountrycode?: string;
}

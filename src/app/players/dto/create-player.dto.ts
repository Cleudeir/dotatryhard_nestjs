import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsPositive } from 'class-validator';

export class CreatePlayerDto {
  @IsNotEmpty()
  @IsPositive()
  @ApiProperty()
  accountId: number;

  @ApiProperty()
  personaname?: string;

  @ApiProperty()
  avatarfull?: string;

  @ApiProperty()
  loccountrycode?: string;
}

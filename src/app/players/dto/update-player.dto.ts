import { ApiProperty } from '@nestjs/swagger';

export class UpdatePlayerDto {
  @ApiProperty({ nullable: true })
  personaname?: string;

  @ApiProperty({ nullable: true })
  avatarfull?: string;

  @ApiProperty({ nullable: true })
  loccountrycode?: string;
}

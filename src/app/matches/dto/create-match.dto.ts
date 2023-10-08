import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsPositive } from 'class-validator';

export class CreateMatchDto {
  @IsNotEmpty()
  @IsPositive()
  @ApiProperty()
  matchId: bigint;

  @IsNotEmpty()
  @ApiProperty()
  startTime: bigint;

  @IsNotEmpty()
  @ApiProperty()
  cluster: string;

  @IsNotEmpty()
  @ApiProperty()
  direScore: number;

  @IsNotEmpty()
  @ApiProperty()
  radiantScore: number;

  @IsNotEmpty()
  @ApiProperty()
  duration: number;
}

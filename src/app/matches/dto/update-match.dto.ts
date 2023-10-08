import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class UpdateMatchDto {
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

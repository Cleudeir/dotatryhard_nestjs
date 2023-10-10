import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsPositive } from 'class-validator';

export class CreatePlayersMatchDto {
  @IsNotEmpty()
  @IsPositive()
  @ApiProperty()
  accountId: number;

  @IsNotEmpty()
  @IsPositive()
  @ApiProperty()
  matchId: number;

  @IsPositive()
  @ApiProperty()
  @IsNumber()
  assists: number;

  @IsPositive()
  @ApiProperty()
  @IsNumber()
  deaths: number;

  @IsPositive()
  @ApiProperty()
  @IsNumber()
  denies: number;

  @IsPositive()
  @ApiProperty()
  @IsNumber()
  goldPerMin: number;

  @IsPositive()
  @ApiProperty()
  @IsNumber()
  heroDamage: number;

  @IsPositive()
  @ApiProperty()
  @IsNumber()
  heroHealing: number;

  @IsPositive()
  @ApiProperty()
  @IsNumber()
  kills: number;

  @IsPositive()
  @ApiProperty()
  @IsNumber()
  lastHits: number;

  @IsPositive()
  @ApiProperty()
  @IsNumber()
  netWorth: number;

  @IsPositive()
  @ApiProperty()
  @IsNumber()
  towerDamage: number;

  @IsPositive()
  @ApiProperty()
  @IsNumber()
  xpPerMin: number;

  @IsPositive()
  @ApiProperty()
  @IsNumber()
  win: number;

  @IsPositive()
  @ApiProperty()
  ability0: string;

  @IsPositive()
  @ApiProperty()
  ability1: string;

  @IsPositive()
  @ApiProperty()
  ability2: string;

  @IsPositive()
  @ApiProperty()
  ability3: string;

  @IsPositive()
  @ApiProperty()
  @IsNumber()
  HeroLevel: number;

  @IsPositive()
  @ApiProperty()
  @IsNumber()
  team: number;

  @IsPositive()
  @ApiProperty()
  @IsNumber()
  leaverStatus: number;

  @IsPositive()
  @ApiProperty()
  @IsNumber()
  aghanimsScepter: number;

  @IsPositive()
  @ApiProperty()
  @IsNumber()
  aghanimsShard: number;

  @IsPositive()
  @ApiProperty()
  @IsNumber()
  backpack0: number;

  @IsPositive()
  @ApiProperty()
  @IsNumber()
  backpack1: number;

  @IsPositive()
  @ApiProperty()
  @IsNumber()
  backpack2: number;

  @IsPositive()
  @ApiProperty()
  item0: string;

  @IsPositive()
  @ApiProperty()
  item1: string;

  @IsPositive()
  @ApiProperty()
  item2: string;

  @IsPositive()
  @ApiProperty()
  item3: string;

  @IsPositive()
  @ApiProperty()
  item4: string;

  @IsPositive()
  @ApiProperty()
  item5: string;

  @IsPositive()
  @ApiProperty()
  @IsNumber()
  itemNeutral: number;

  @IsPositive()
  @ApiProperty()
  @IsNumber()
  moonShard: number;

  @IsPositive()
  @ApiProperty()
  heroId: string;

  @IsPositive()
  @ApiProperty()
  @IsNumber()
  playerSlot: number;
}

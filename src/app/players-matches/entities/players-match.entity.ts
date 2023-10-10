import { MatchEntity } from 'src/app/matches/entities/match.entity';
import { PlayerEntity } from 'src/app/players/entities/player.entity';
import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';

@Entity({ name: 'PlayersMatch' })
export class PlayersMatch {
  @Column({ name: 'account_id', primary: true, nullable: false, unique: true })
  accountId: number;

  @ManyToOne(() => PlayerEntity, (players) => players.playersMatches)
  @JoinColumn({ name: 'account_id' }) // Specify the join column
  player: PlayerEntity;

  @Column({ name: 'match_id', primary: true, nullable: false, unique: true })
  matchId: number;

  @ManyToOne(() => MatchEntity, (match) => match.playersMatches)
  @JoinColumn({ name: 'match_id' }) // Specify the join column
  match: MatchEntity;

  @Column({ nullable: true })
  assists: number;

  @Column({ nullable: true })
  deaths: number;

  @Column({ nullable: true })
  denies: number;

  @Column({ name: 'gold_per_min', nullable: true })
  goldPerMin: number;

  @Column({ name: 'hero_damage', nullable: true })
  heroDamage: number;

  @Column({ name: 'hero_healing', nullable: true })
  heroHealing: number;

  @Column({ nullable: true })
  kills: number;

  @Column({ name: 'last_hits', nullable: true })
  lastHits: number;

  @Column({ name: 'net_worth', nullable: true })
  netWorth: number;

  @Column({ name: 'tower_damage', nullable: true })
  towerDamage: number;

  @Column({ name: 'xp_per_min', nullable: true })
  xpPerMin: number;

  @Column({ nullable: true })
  win: number;

  @Column({ name: 'ability_0', nullable: true })
  ability0: string;

  @Column({ name: 'ability_1', nullable: true })
  ability1: string;

  @Column({ name: 'ability_2', nullable: true })
  ability2: string;

  @Column({ name: 'ability_3', nullable: true })
  ability3: string;

  @Column({ name: 'Hero_level', nullable: true })
  HeroLevel: number;

  @Column({ nullable: true })
  team: number;

  @Column({ name: 'leaver_status', nullable: true })
  leaverStatus: number;

  @Column({ name: 'aghanims_scepter', nullable: true })
  aghanimsScepter: number;

  @Column({ name: 'aghanims_shard', nullable: true })
  aghanimsShard: number;

  @Column({ name: 'backpack_0', nullable: true })
  backpack0: number;

  @Column({ name: 'backpack_1', nullable: true })
  backpack1: number;

  @Column({ name: 'backpack_2', nullable: true })
  backpack2: number;

  @Column({ name: 'item_0', nullable: true })
  item0: string;

  @Column({ name: 'item_1', nullable: true })
  item1: string;

  @Column({ name: 'item_2', nullable: true })
  item2: string;

  @Column({ name: 'item_3', nullable: true })
  item3: string;

  @Column({ name: 'item_4', nullable: true })
  item4: string;

  @Column({ name: 'item_5', nullable: true })
  item5: string;

  @Column({ name: 'item_neutral', nullable: true })
  itemNeutral: number;

  @Column({ name: 'moonshard', nullable: true })
  moonShard: number;

  @Column({ name: 'hero_id', nullable: true })
  heroId: string;

  @Column({ name: 'player_slot', nullable: true })
  playerSlot: number;
}

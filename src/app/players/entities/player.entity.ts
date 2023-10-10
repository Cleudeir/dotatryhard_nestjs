import { PlayersMatch } from 'src/app/players-matches/entities/players-match.entity';
import { Column, Entity, OneToMany } from 'typeorm';

@Entity({ name: 'players' })
export class PlayerEntity {
  @Column({ name: 'account_id', primary: true, nullable: false, unique: true })
  accountId: number;
  @OneToMany(() => PlayersMatch, (playersMatch) => playersMatch.player)
  playersMatches: PlayersMatch[];

  @Column({ nullable: true })
  personaname: string;

  @Column({ nullable: true })
  avatarfull: string;

  @Column({ nullable: true })
  loccountrycode: string;
}

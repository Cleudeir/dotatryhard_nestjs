import { PlayersMatch } from 'src/app/players-matches/entities/players-match.entity';
import { Column, Entity, OneToMany } from 'typeorm';

@Entity({ name: 'matches' })
export class MatchEntity {
  @Column({ name: 'match_id', primary: true, nullable: false, unique: true })
  matchId: number;
  @OneToMany(() => PlayersMatch, (playersMatch) => playersMatch.match)
  playersMatches: PlayersMatch[];

  @Column({ name: 'start_time' })
  startTime: number;

  @Column({ nullable: true })
  cluster: string;

  @Column({ name: 'dire_score', nullable: true })
  direScore: number;

  @Column({ name: 'radiant_score', nullable: true })
  radiantScore: number;

  @Column({ nullable: true })
  duration: number;
}

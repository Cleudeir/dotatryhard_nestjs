import { Column, Entity } from 'typeorm';

@Entity({ name: 'matches' })
export class MatchEntity {
  @Column({ name: 'match_id', primary: true, nullable: false, unique: true })
  matchId: number;

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

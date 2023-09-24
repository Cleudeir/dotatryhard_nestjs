import { Column, Entity } from 'typeorm';

@Entity({ name: 'players' })
export class PlayerEntity {
  @Column({ name: 'account_id', primary: true, nullable: false, unique: true })
  accountId: number;

  @Column({ nullable: true })
  personaname: string;

  @Column({ nullable: true })
  avatarfull: string;

  @Column({ nullable: true })
  loccountrycode: string;
}

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MatchesModule } from './app/matches/matches.module';
import { PlayersMatchesModule } from './app/players-matches/players-matches.module';
import { PlayersModule } from './app/players/players.module';
import { env } from './conf/.env';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: env.DB_HOST,
      password: String(env.DB_PASSWORD),
      username: env.DB_USERNAME,
      database: env.DB_DATABASE,
      port: Number(env.DB_PORT),
      entities: [__dirname + '/**/*.entity{.js,.ts}'],
      synchronize: true,
      logging: true,
    }),

    PlayersModule,

    MatchesModule,

    PlayersMatchesModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}

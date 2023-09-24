import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MatchesModule } from './app/matches/matches.module';
import { PlayersModule } from './app/players/players.module';
import { env } from './conf/.env';

console.log('port:>>>>>>>>>>>> ', env.PORT);

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
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

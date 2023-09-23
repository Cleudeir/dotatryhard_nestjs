import { Module } from '@nestjs/common';

import { TypeOrmModule } from '@nestjs/typeorm';
import { env } from '../ .env';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TasksModule } from './tasks/tasks.module';
import { TweetsModule } from './tweets/tweets.module';

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
    TasksModule,
    TweetsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

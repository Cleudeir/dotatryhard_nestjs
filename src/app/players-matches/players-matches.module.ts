import { Module } from '@nestjs/common';
import { PlayersMatchesService } from './players-matches.service';
import { PlayersMatchesController } from './players-matches.controller';

@Module({
  controllers: [PlayersMatchesController],
  providers: [PlayersMatchesService],
})
export class PlayersMatchesModule {}

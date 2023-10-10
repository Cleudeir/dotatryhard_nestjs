import { Test, TestingModule } from '@nestjs/testing';
import { PlayersMatchesController } from './players-matches.controller';
import { PlayersMatchesService } from './players-matches.service';

describe('PlayersMatchesController', () => {
  let controller: PlayersMatchesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PlayersMatchesController],
      providers: [PlayersMatchesService],
    }).compile();

    controller = module.get<PlayersMatchesController>(PlayersMatchesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

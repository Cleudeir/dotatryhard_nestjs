import { Test, TestingModule } from '@nestjs/testing';
import { PlayersMatchesService } from './players-matches.service';

describe('PlayersMatchesService', () => {
  let service: PlayersMatchesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PlayersMatchesService],
    }).compile();

    service = module.get<PlayersMatchesService>(PlayersMatchesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

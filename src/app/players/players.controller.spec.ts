import { Test, TestingModule } from '@nestjs/testing';
import { CreatePlayerDto } from './dto/create-player.dto';
import { PlayerEntity } from './entities/player.entity';
import { PlayersController } from './players.controller';
import { PlayersService } from './players.service';

describe('PlayersController', () => {
  let playersController: PlayersController;
  let playersService: PlayersService;
  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PlayersController],
      providers: [
        PlayersService,
        {
          provide: PlayersService,
          useValue: {
            create: jest.fn(),
          },
        },
      ],
    }).compile();

    playersController = module.get<PlayersController>(PlayersController);
    playersService = module.get<PlayersService>(PlayersService);
  });

  it('should be defined', () => {
    expect(playersController).toBeDefined();
    expect(playersService).toBeDefined();
  });

  describe('create', () => {
    it('should be save player', async () => {
      const data: CreatePlayerDto = {
        accountId: 1,
        avatarfull: 'avatar.image.com.br',
        loccountrycode: 'Brazil',
        personaname: 'Avatar',
      };
      const playerEntityMock = data as PlayerEntity;

      jest
        .spyOn(playersService, 'create')
        .mockResolvedValueOnce(playerEntityMock);

      const result = await playersController.create(data);
      expect(result).toBeDefined();
      expect(playersService.create).toBeCalledTimes(1);
    });
  });
});

import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreatePlayerDto } from './dto/create-player.dto';
import { PlayerEntity } from './entities/player.entity';
import { PlayersService } from './players.service';

describe('PlayersService', () => {
  let service: PlayersService;
  let playerRepository: Repository<PlayerEntity>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        PlayersService,
        {
          provide: getRepositoryToken(PlayerEntity),
          useValue: {
            create: jest.fn(),
            save: jest.fn(),
          },
        },
      ],
    }).compile();

    service = module.get<PlayersService>(PlayersService);
    playerRepository = module.get<Repository<PlayerEntity>>(
      getRepositoryToken(PlayerEntity),
    );
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
    expect(playerRepository).toBeDefined();
  });

  describe('create', () => {
    it('should create a player', async () => {
      const data: CreatePlayerDto = {
        accountId: 1,
        avatarfull: 'avatar.image.com.br',
        loccountrycode: 'Brazil',
        personaname: 'Avatar',
      };
      const playerEntityMock = data as PlayerEntity;

      jest
        .spyOn(playerRepository, 'create')
        .mockReturnValueOnce(playerEntityMock);

      jest
        .spyOn(playerRepository, 'save')
        .mockResolvedValueOnce(playerEntityMock);

      const result = await service.create(data);
      expect(result).toBeDefined();
      expect(playerRepository.create).toBeCalledTimes(1);
      expect(playerRepository.save).toBeCalledTimes(1);
    });
  });
});

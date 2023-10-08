import { NotFoundException } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreatePlayerDto } from './dto/create-player.dto';
import { PlayerEntity } from './entities/player.entity';
import { PlayersService } from './players.service';

describe('PlayersService', () => {
  let playersService: PlayersService;
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
            find: jest.fn(),
            findOneByOrFail: jest.fn(),
          },
        },
      ],
    }).compile();

    playersService = module.get<PlayersService>(PlayersService);
    playerRepository = module.get<Repository<PlayerEntity>>(
      getRepositoryToken(PlayerEntity),
    );
  });

  it('should be defined', () => {
    expect(playersService).toBeDefined();
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

      const result = await playersService.create(data);
      expect(result).toBeDefined();
      expect(playerRepository.create).toBeCalledTimes(1);
      expect(playerRepository.save).toBeCalledTimes(1);
    });
  });

  describe('findAll', () => {
    it('should create a player', async () => {
      const data: CreatePlayerDto[] = [
        {
          accountId: 1,
          avatarfull: 'avatar.image.com.br',
          loccountrycode: 'Brazil',
          personaname: 'Avatar',
        },
      ];
      const playerEntityMock = data as PlayerEntity[];

      jest.spyOn(playerRepository, 'find').mockResolvedValue(playerEntityMock);
      const result = await playersService.findAll();
      expect(result).toBeDefined();
      expect(playerRepository.find).toBeCalledTimes(1);
    });
  });

  describe('find', () => {
    it('should success to find a player 1', async () => {
      const data: CreatePlayerDto = {
        accountId: 1,
        avatarfull: 'avatar.image.com.br',
        loccountrycode: 'Brazil',
        personaname: 'Avatar',
      };
      const playerEntityMock = data as PlayerEntity;

      jest
        .spyOn(playerRepository, 'findOneByOrFail')
        .mockResolvedValue(playerEntityMock);
      const result = await playersService.findOne(1);
      expect(result).toEqual(playerEntityMock);
      expect(result).toBeDefined();
      expect(playerRepository.findOneByOrFail).toBeCalledTimes(1);
    });

    it('should fail to find a player with ID 2', async () => {
      jest
        .spyOn(playerRepository, 'findOneByOrFail')
        .mockRejectedValue(new NotFoundException('Player not found'));

      const playerPromise = playersService.findOne(2);
      const expectedErrorMessage = 'Player not found';
      await expect(playerPromise).rejects.toThrowError(expectedErrorMessage);
      expect(playerRepository.findOneByOrFail).toBeCalledTimes(1);
    });
  });

  describe('update', () => {
    it('should success to update a player 1', async () => {
      const data: CreatePlayerDto = {
        accountId: 1,
        avatarfull: 'avatar.image.com.br',
        loccountrycode: 'Brazil',
        personaname: 'Avatar',
      };

      const playerEntityMock = data as PlayerEntity;

      jest
        .spyOn(playerRepository, 'findOneByOrFail')
        .mockResolvedValue(playerEntityMock);
      const result = await playersService.findOne(1);
      expect(result).toEqual(playerEntityMock);
      expect(result).toBeDefined();
      expect(playerRepository.findOneByOrFail).toBeCalledTimes(1);
    });

    it('should fail to find a player with ID 2', async () => {
      jest
        .spyOn(playerRepository, 'findOneByOrFail')
        .mockRejectedValue(new NotFoundException('Player not found'));

      const playerPromise = playersService.findOne(2);
      const expectedErrorMessage = 'Player not found';
      await expect(playerPromise).rejects.toThrowError(expectedErrorMessage);
      expect(playerRepository.findOneByOrFail).toBeCalledTimes(1);
    });
  });
});

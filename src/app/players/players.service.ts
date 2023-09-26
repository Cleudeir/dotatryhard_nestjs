import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreatePlayerDto } from './dto/create-player.dto';
import { UpdatePlayerDto } from './dto/update-player.dto';
import { PlayerEntity } from './entities/player.entity';

@Injectable()
export class PlayersService {
  constructor(
    @InjectRepository(PlayerEntity)
    private readonly playerRepository: Repository<PlayerEntity>,
  ) {}
  async create(data: CreatePlayerDto): Promise<PlayerEntity> {
    console.time();
    const create = this.playerRepository.create(data);
    const save = await this.playerRepository.save(create);
    console.log('PlayersService :: create');
    console.timeEnd();
    return save;
  }

  findAll(): Promise<PlayerEntity[] | []> {
    console.time();
    const result = this.playerRepository.find();
    console.log('PlayersService :: findAll');
    console.timeEnd();
    return result;
  }

  async findOne(accountId: number) {
    console.time();
    try {
      const result = await this.playerRepository.findOneByOrFail({ accountId });

      console.log('PlayersService :: findOne');
      console.timeEnd();
      return result;
    } catch (error) {
      throw new NotFoundException('Player not found');
    }
  }

  async update(accountId: number, data: UpdatePlayerDto) {
    console.time();
    try {
      await this.playerRepository.update(accountId, data);
      console.log('PlayersService :: update');
      console.timeEnd();
    } catch (error) {
      throw error;
    }
  }
  async remove(accountId: number) {
    console.time();
    try {
      await this.playerRepository.delete(accountId);
      console.log('PlayersService :: remove');
      console.timeEnd();
      return 'removed';
    } catch (error) {
      throw error;
    }
  }
}

import { Injectable } from '@nestjs/common';
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

  findOne(id: number) {
    return `This action returns a #${id} player`;
  }

  update(id: number, updatePlayerDto: UpdatePlayerDto) {
    console.log('updatePlayerDto: ', updatePlayerDto);
    return `This action updates a #${id} player`;
  }

  remove(id: number) {
    return `This action removes a #${id} player`;
  }
}

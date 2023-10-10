import { Injectable } from '@nestjs/common';
import { CreatePlayersMatchDto } from './dto/create-players-match.dto';
import { UpdatePlayersMatchDto } from './dto/update-players-match.dto';

@Injectable()
export class PlayersMatchesService {
  create(createPlayersMatchDto: CreatePlayersMatchDto) {
    return 'This action adds a new playersMatch';
  }

  findAll() {
    return `This action returns all playersMatches`;
  }

  findOne(id: number) {
    return `This action returns a #${id} playersMatch`;
  }

  update(id: number, updatePlayersMatchDto: UpdatePlayersMatchDto) {
    return `This action updates a #${id} playersMatch`;
  }

  remove(id: number) {
    return `This action removes a #${id} playersMatch`;
  }
}

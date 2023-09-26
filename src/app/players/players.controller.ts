import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import {
  ApiBody,
  ApiNotFoundResponse,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { CreatePlayerDto } from './dto/create-player.dto';
import { UpdatePlayerDto } from './dto/update-player.dto';
import { PlayersService } from './players.service';

const preName = 'api/v1/';

@ApiTags('players')
@Controller(preName + 'players')
export class PlayersController {
  constructor(private readonly playersService: PlayersService) {}

  @ApiResponse({
    status: 201,
    description: 'player created',
    type: CreatePlayerDto,
  })
  @HttpCode(201)
  @Post()
  create(@Body() body: CreatePlayerDto) {
    console.log('createPlayerDto: ', body);
    return this.playersService.create(body);
  }

  @ApiResponse({
    status: 200,
    description: 'get all players',
    type: CreatePlayerDto,
    isArray: true,
  })
  @Get()
  findAll() {
    return this.playersService.findAll();
  }

  @ApiNotFoundResponse({ description: 'Player not found' })
  @ApiResponse({
    status: 200,
    description: 'get player by id',
    type: CreatePlayerDto,
  })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.playersService.findOne(+id);
  }

  @ApiNotFoundResponse({ description: 'Player not found' })
  @ApiResponse({
    status: 200,
    description: 'update player',
  })
  @ApiBody({
    type: UpdatePlayerDto,
  })
  @HttpCode(200)
  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePlayerDto: UpdatePlayerDto) {
    this.playersService.update(+id, updatePlayerDto);
  }

  @ApiResponse({
    status: 201,
    description: 'delete player',
  })
  @HttpCode(201)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.playersService.remove(+id);
  }
}

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
import { CreatePlayersMatchDto } from './dto/create-players-match.dto';
import { UpdatePlayersMatchDto } from './dto/update-players-match.dto';
import { PlayersMatchesService } from './players-matches.service';

@ApiTags('players-matches')
@Controller('players-matches')
export class PlayersMatchesController {
  constructor(private readonly playersMatchesService: PlayersMatchesService) {}

  @ApiResponse({
    status: 201,
    description: 'PlayerMatches created',
    type: CreatePlayersMatchDto,
  })
  @HttpCode(201)
  @Post()
  create(@Body() createPlayersMatchDto: CreatePlayersMatchDto) {
    return this.playersMatchesService.create(createPlayersMatchDto);
  }

  @ApiResponse({
    status: 200,
    description: 'get all players',
    type: CreatePlayersMatchDto,
    isArray: true,
  })
  @Get()
  findAll() {
    return this.playersMatchesService.findAll();
  }

  @ApiNotFoundResponse({ description: 'PlayerMatches not found' })
  @ApiResponse({
    status: 200,
    description: 'get player by id',
    type: CreatePlayersMatchDto,
  })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.playersMatchesService.findOne(+id);
  }

  @ApiNotFoundResponse({ description: 'PlayerMatches not found' })
  @ApiResponse({
    status: 200,
    description: 'update player',
  })
  @ApiBody({
    type: UpdatePlayersMatchDto,
  })
  @HttpCode(200)
  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updatePlayersMatchDto: UpdatePlayersMatchDto,
  ) {
    return this.playersMatchesService.update(+id, updatePlayersMatchDto);
  }

  @ApiResponse({
    status: 201,
    description: 'delete PlayerMatches',
  })
  @HttpCode(201)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.playersMatchesService.remove(+id);
  }
}

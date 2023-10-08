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
import { preName } from 'src/conf/.env';
import { CreateMatchDto } from './dto/create-match.dto';
import { UpdateMatchDto } from './dto/update-match.dto';
import { MatchesService } from './matches.service';

@ApiTags('matches')
@Controller(preName + 'matches')
export class MatchesController {
  constructor(private readonly matchesService: MatchesService) {}
  //----
  @ApiResponse({
    status: 201,
    description: 'player created',
    type: CreateMatchDto,
  })
  @HttpCode(201)
  @Post()
  create(@Body() createMatchDto: CreateMatchDto) {
    return this.matchesService.create(createMatchDto);
  }
  //----
  @ApiResponse({
    status: 200,
    description: 'get all players',
    type: CreateMatchDto,
    isArray: true,
  })
  @Get()
  findAll() {
    return this.matchesService.findAll();
  }
  //----
  @ApiNotFoundResponse({ description: 'Player not found' })
  @ApiResponse({
    status: 200,
    description: 'get player by id',
    type: CreateMatchDto,
  })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.matchesService.findOne(+id);
  }
  //----
  @ApiNotFoundResponse({ description: 'Player not found' })
  @ApiResponse({
    status: 200,
    description: 'update player',
  })
  @ApiBody({
    type: UpdateMatchDto,
  })
  @HttpCode(200)
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateMatchDto: UpdateMatchDto) {
    return this.matchesService.update(+id, updateMatchDto);
  }
  //----
  @ApiResponse({
    status: 201,
    description: 'delete player',
  })
  @HttpCode(201)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.matchesService.remove(+id);
  }
}

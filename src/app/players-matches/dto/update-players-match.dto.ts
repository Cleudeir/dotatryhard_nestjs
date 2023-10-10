import { PartialType } from '@nestjs/swagger';
import { CreatePlayersMatchDto } from './create-players-match.dto';

export class UpdatePlayersMatchDto extends PartialType(CreatePlayersMatchDto) {}

import { Controller, Get } from '@nestjs/common';
import TalkDto from './models/talk.dto';
import TalksService from './talks.service';

@Controller('api/talks')
export default class TalksController {
  constructor(private readonly talksService: TalksService) { }

  @Get()
  getTalks(): TalkDto[] {
    return this.talksService.getTalks();
  }
}

import { Injectable } from '@nestjs/common';
import TalkDto from './models/talk.dto';
import TalksRepository from './talks.repository';

@Injectable()
export default class TalksService {

  constructor(private readonly talksRepository: TalksRepository) { }

  getTalks(): TalkDto[] {
    return this.talksRepository.getTalks();
  }
}
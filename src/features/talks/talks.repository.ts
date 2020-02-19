import { Injectable } from '@nestjs/common';
import TalkDto from './models/talk.dto';


// TODO real postgres connection
const talks: TalkDto[] = [];

@Injectable()
export default class TalksRepository {

  getTalks(): TalkDto[] {
    return talks;
  }
}

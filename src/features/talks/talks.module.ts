import { Module } from '@nestjs/common';
import TalksController from './talks.controller';
import TalksRepository from './talks.repository';
import TalksService from './talks.service';

@Module({
  controllers: [TalksController],
  providers: [TalksRepository, TalksService],
})
export default class TalksModule { }

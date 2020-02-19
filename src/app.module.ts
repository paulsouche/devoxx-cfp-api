import { Module } from '@nestjs/common';
import TalksModule from './features/talks/talks.module';

@Module({
  imports: [
    TalksModule,
  ],
})
export default class AppModule { }
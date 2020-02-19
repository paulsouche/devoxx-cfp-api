import talkId from './talk-id';

export default class TalkDto {
  id!: talkId;
  title!: string;
  abstract!: string;
  duration!: number;
}

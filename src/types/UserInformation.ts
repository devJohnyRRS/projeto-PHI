import { Post } from './Posts';
import { Trophy } from './Trophy';

export interface UserInformation {
  name: string;
  username: string;
  title: string;
  level: number;
  rating: number;
  questions: number;
  followers: number;
  following: number;
  tag: string;
  bio: string;
  trophies?: Trophy[];
  comments: number;
  subjects: Post[];
}

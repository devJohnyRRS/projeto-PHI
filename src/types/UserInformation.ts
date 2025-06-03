import { Post } from './Posts';

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
  trophies: string[];
  comments: number;
  subjects: Post[];
}

// types.ts
export interface Stats {
  badge: string[];
  time: string;
  content?: string;
  comments: number;
  likes: number;
  dislikes: number;
}

export interface QuestionTag {
  color: string;
  code: string;
}

export type PostType = 'assunto' | 'video' | 'artigo' | 'audio' | 'questao';

export interface BasePost {
  id: number;
  type: PostType;
  stats: Stats;
}

export interface AssuntoPost extends BasePost {
  type: 'assunto';
  name: string;
  username: string;
  profileImage: any;
  borderColor?: string;
  questionTag?: QuestionTag;
}

export interface MediaPost extends BasePost {
  type: 'video' | 'audio' | 'artigo' | 'questao';
  title: string;
  link?: string;
  audio?: string;
  image?: any;
  description?: string;
}

export type Post = AssuntoPost | MediaPost;

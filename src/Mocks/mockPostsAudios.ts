import { MediaPost } from '../types/Posts';

const audio1 = require('../../assets/audios/audio-1.mp3');
const audio2 = require('../../assets/audios/audio-2.mp3');

export const mockPostsAudios: (MediaPost & { file: any })[] = [
  {
    id: 1,
    type: 'audio',
    title: 'Jockey di gue?',
    link: '',
    file: audio1,
    stats: {
      badge: ['Jockey', 'de', 'Galinha'],
      time: '30min atrás',
      content: 'Aprenda sobre bancos de dados relacionais e não relacionais.',
      comments: 589,
      likes: 5000,
      dislikes: 1,
    },
  },
  {
    id: 2,
    type: 'audio',
    title: 'O que foi o Holocausto?',
    link: '',
    file: audio2,
    stats: {
      badge: ['Análise e desenvolvimento'],
      time: '1h atrás',
      content: 'Entenda um dos períodos mais sombrios da história moderna.',
      comments: 421,
      likes: 4200,
      dislikes: 3,
    },
  },
];

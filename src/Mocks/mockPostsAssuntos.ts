import theme from '../assets/themes/THEMES';
import { Post } from '../types/Posts';

const profileImage = require('../../assets/gustavo.png');

export const mockPostsAssuntos: Post[] = [
  {
    id: 1,
    type: 'assunto',
    name: 'Gustavo Souza',
    username: '@GustavoSouza1304',
    profileImage,
    stats: {
      badge: ['História'],
      time: '1h atrás',
      content:
        'Sabiam que a Revolução Francesa influenciou vários movimentos no Brasil? Fascinante! 🇫🇷📚',
      comments: 2,
      likes: 6,
      dislikes: 0,
    },
  },
  {
    id: 2,
    type: 'assunto',
    name: 'Gustavo Souza',
    username: '@GustavoSouza1304',
    profileImage,
    stats: {
      badge: ['Tecnologia'],
      time: '2h atrás',
      content: 'Hoje eu aprendi sobre React Native e estou amando! 🚀',
      comments: 1,
      likes: 5,
      dislikes: 0,
    },
  },
  {
    id: 3,
    type: 'assunto',
    name: 'Gustavo Souza',
    username: '@GustavoSouza1304',
    profileImage,
    stats: {
      badge: ['História'],
      time: '3h atrás',
      content:
        'Dom Pedro I realmente quis a independência do Brasil ou foi estratégia política? 🤔🇧🇷',
      comments: 0,
      likes: 4,
      dislikes: 1,
    },
  },
  {
    id: 4,
    type: 'assunto',
    name: 'Gustavo Souza',
    username: '@GustavoSouza1304',
    profileImage,
    stats: {
      badge: ['Ferramentas'],
      time: '4h atrás',
      content: 'Qual IDE vocês preferem: VSCode ou WebStorm?',
      comments: 1,
      likes: 3,
      dislikes: 0,
    },
  },
  {
    id: 5,
    type: 'assunto',
    name: 'Gustavo Souza',
    username: '@GustavoSouza1304',
    profileImage,
    stats: {
      badge: ['História'],
      time: '5h atrás',
      content:
        'Estou assistindo um documentário sobre a Segunda Guerra Mundial. História viva e cheia de lições. 🌍📖',
      comments: 1,
      likes: 5,
      dislikes: 0,
    },
  },
];

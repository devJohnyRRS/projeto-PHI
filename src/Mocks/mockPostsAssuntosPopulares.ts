import theme from '../assets/themes/THEMES';
import { Post } from '../types/Posts';

const profileGustavo = require('../../assets/gustavo.png');
const profileVinicius = require('../../assets/vinicius.jpg');
const profileJohny = require('../../assets/johny.jpg');
const profileMarcelly = require('../../assets/gustavo.png');
const profileSans = require('../../assets/sans.jpg');
const profileSonic = require('../../assets/sonic.jpg');

export const mockPostsAssuntosPopulares: Post[] = [
  {
    id: 1,
    type: 'assunto',
    name: 'Gustavo Souza',
    username: '@GustavoSouza1304',
    profileImage: profileGustavo,
    stats: {
      badge: ['Análise e desenvolvimento'],
      time: '30min atrás',
      content:
        'Quem mais ta ansioso pro filme do FIFO 2: O Retorno?? Só eu?? 😂',
      comments: 589,
      likes: 5000,
      dislikes: 1,
    },
    questionTag: {
      color: theme.colors.lightBlue,
      code: '#M18790',
    },
  },
  {
    id: 2,
    type: 'assunto',
    name: 'Vínicius Cauã',
    username: '@vinip',
    profileImage: profileVinicius,
    stats: {
      badge: ['Mobile'],
      time: '1h atrás',
      content: 'Hoje eu aprendi sobre React Native e estou amando! 🚀',
      comments: 123,
      likes: 1020,
      dislikes: 0,
    },
  },
  {
    id: 3,
    type: 'assunto',
    name: 'Johny',
    username: '@Jonhy_bravo',
    profileImage: profileJohny,
    stats: {
      badge: ['Ferramentas'],
      time: '2h atrás',
      content: 'Qual IDE vocês preferem: VSCode ou WebStorm?',
      comments: 87,
      likes: 320,
      dislikes: 5,
    },
  },
  {
    id: 4,
    type: 'assunto',
    name: 'Mariana Rocha',
    username: '@marianadesigner',
    profileImage: profileMarcelly,
    stats: {
      badge: ['Lançamento'],
      time: '3h atrás',
      content: 'Acabei de publicar meu primeiro app na Play Store 😍',
      comments: 45,
      likes: 700,
      dislikes: 2,
    },
  },
  {
    id: 5,
    type: 'assunto',
    name: 'Lucas Ferreira',
    username: '@lucas.tech',
    profileImage: profileSans,
    stats: {
      badge: ['Design'],
      time: '4h atrás',
      content: 'Alguém recomenda um curso top de UX Design?',
      comments: 65,
      likes: 280,
      dislikes: 3,
    },
  },
  {
    id: 6,
    type: 'assunto',
    name: 'Julia Martins',
    username: '@juliamartins',
    profileImage: profileSonic,
    stats: {
      badge: ['Carreira'],
      time: '5h atrás',
      content: 'Como vocês organizam seu portfólio de dev? Alguma dica?',
      comments: 77,
      likes: 390,
      dislikes: 1,
    },
  },
];

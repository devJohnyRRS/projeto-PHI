import theme from '../assets/themes/THEMES';
import { Post } from '../types/Posts';

const profileGustavo = require('../../assets/gustavo.png');
const profileVinicius = require('../../assets/vinicius.jpg');
const profileJohny = require('../../assets/johny.jpg');
const profileMarcelly = require('../../assets/marcelly.jpg');
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
      badge: ['Matemática', 'Álgebra'],
      time: '30min atrás',
      content:
        'Pessoal, vocês podem me ajudar com essa equação do app? 🔢\n\n"Resolva para x: 2x + 5 = 17". Já tentei isolar o x, mas não consegui achar a resposta.',
      comments: 32,
      likes: 120,
      dislikes: 2,
    },
    questionTag: {
      color: theme.colors.lightBlue,
      code: '#Q12345',
    },
  },
  {
    id: 2,
    type: 'assunto',
    name: 'Vínicius Cauã',
    username: '@vinip',
    profileImage: profileVinicius,
    borderColor: theme.colors.gold,
    stats: {
      badge: ['Mobile', 'Estudos'],
      time: '1h atrás',
      content:
        'Terminei meu app da aula de matemática, agora ele resolve equações do segundo grau! 📱➗',
      comments: 34,
      likes: 890,
      dislikes: 0,
    },
  },
  {
    id: 3,
    type: 'assunto',
    name: 'Johny',
    username: '@Jonhy_bravo',
    profileImage: profileJohny,
    borderColor: theme.colors.lightBlue,
    stats: {
      badge: ['História', 'Humanas'],
      time: '2h atrás',
      content:
        'Alguém tem indicação de documentário sobre a Segunda Guerra para o trabalho de história?',
      comments: 47,
      likes: 650,
      dislikes: 2,
    },
  },
  {
    id: 4,
    type: 'assunto',
    name: 'Marcelly Farias',
    username: '@marcyyy',
    profileImage: profileMarcelly,
    borderColor: '#FF69B4',
    stats: {
      badge: ['Física', 'Exatas'],
      time: '3h atrás',
      content:
        'Gente, vocês também acham difícil entender cinemática? Alguma dica boa? 🧠',
      comments: 59,
      likes: 480,
      dislikes: 5,
    },
  },
  {
    id: 5,
    type: 'assunto',
    name: 'Lucas Ferreira',
    username: '@lucas.tech',
    profileImage: profileSans,
    stats: {
      badge: ['Saúde', 'Biologia'],
      time: '4h atrás',
      content:
        'Vocês acham que sono afeta a performance nos estudos? To testando dormir melhor!',
      comments: 73,
      likes: 560,
      dislikes: 1,
    },
  },
  {
    id: 6,
    type: 'assunto',
    name: 'Evellyn Santos',
    username: '@evellyn_santos',
    profileImage: profileSonic,
    stats: {
      badge: ['Português', 'Redação'],
      time: '5h atrás',
      content:
        'Qual tema vocês acham que pode cair na redação do ENEM esse ano? 💭📝',
      comments: 112,
      likes: 990,
      dislikes: 3,
    },
  },
];

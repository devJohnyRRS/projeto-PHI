import { Trophy } from '../types/Trophy';
import { UserInformation } from '../types/UserInformation';
import { mockPostsAssuntos } from './mockPostsAssuntos';

export const mockUserInformation: UserInformation = {
  name: 'Gustavo Souza',
  username: '@GustavoSouza1304',
  title: 'Aluno',
  level: 1,
  rating: 2.4,
  questions: 10,
  followers: 10,
  following: 5,
  tag: 'História',
  bio: 'Apaixonado por História e tecnologia.',
  trophies: [
    {
      id: 1,
      name: 'Historiador Iniciante',
      description: 'Conquistado por selecionar História como matéria favorita.',
      icon: require('../../assets/trofeus/trofeu-prata.png'),
    },
    {
      id: 2,
      name: 'Respondão',
      description: 'Conquistado por responder 10 perguntas.',
      icon: require('../../assets/trofeus/trofeu-prata.png'),
    },
  ],
  comments: 12,
  subjects: mockPostsAssuntos,
};

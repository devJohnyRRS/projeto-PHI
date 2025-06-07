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
  trophies: ['Primeiro Acesso', 'Conquistador de Tópicos'],
  comments: 12,
  subjects: mockPostsAssuntos,
};

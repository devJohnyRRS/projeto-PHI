import { StoreItem } from '../types/StoreItem';

const image = require('../../assets/icone.jpg');
const background = require('../../assets/vinao.jpg');

export const mockPopularesLoja: StoreItem[] = [
  {
    id: 1,
    type: 'moldura',
    title: 'Moldura Dourada',
    blocked: true,
    price: 500,
    level: 3,
    color: '#FFD700', // dourado
  },
  {
    id: 2,
    image,
    type: 'icone',
    title: 'Ícone Ninja',
    blocked: false,
    price: 250,
    level: 1,
  },
  {
    id: 3,
    image: background,
    type: 'papel',
    title: 'Papel Espacial',
    blocked: true,
    price: 400,
    level: 2,
  },
  {
    id: 4,
    type: 'moldura',
    title: 'Moldura Rubi',
    blocked: false,
    price: 600,
    level: 4,
    color: '#E0115F', // rubi
  },
  {
    id: 5,
    image,
    type: 'icone',
    title: 'Ícone Robô',
    blocked: true,
    price: 300,
    level: 2,
  },
];

import { StoreItem } from '../types/StoreItem';

const background = require('../../assets/vinao.jpg');

export const mockPapeisLoja: StoreItem[] = [
  {
    id: 1,
    image: background,
    type: 'papel',
    title: 'Galáxia Profunda',
    blocked: true,
    price: 450,
    level: 2,
  },
  {
    id: 2,
    image: background,
    type: 'papel',
    title: 'Montanhas ao Amanhecer',
    blocked: false,
    price: 380,
    level: 1,
  },
  {
    id: 3,
    image: background,
    type: 'papel',
    title: 'Floresta Mística',
    blocked: true,
    price: 500,
    level: 3,
  },
  {
    id: 4,
    image: background,
    type: 'papel',
    title: 'Noite Urbana',
    blocked: false,
    price: 420,
    level: 2,
  },
  {
    id: 5,
    image: background,
    type: 'papel',
    title: 'Deserto do Silêncio',
    blocked: true,
    price: 470,
    level: 3,
  },
];

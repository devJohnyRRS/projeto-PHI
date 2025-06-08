import { StoreItem } from '../types/StoreItem';

const deserto = require('../../assets/papeis de parede/deserto.webp');
const floresta = require('../../assets/papeis de parede/floresta.avif');
const galaxia = require('../../assets/papeis de parede/galaxia.jpg');
const montanha = require('../../assets/papeis de parede/montanha.avif');
const noite = require('../../assets/papeis de parede/noite.jpg');

export const mockPapeisLoja: StoreItem[] = [
  {
    id: 1,
    image: galaxia,
    type: 'papel',
    title: 'Galáxia Profunda',
    blocked: true,
    price: 450,
    level: 2,
  },
  {
    id: 2,
    image: montanha,
    type: 'papel',
    title: 'Montanhas ao Amanhecer',
    blocked: false,
    price: 380,
    level: 1,
  },
  {
    id: 3,
    image: floresta,
    type: 'papel',
    title: 'Floresta Mística',
    blocked: true,
    price: 500,
    level: 3,
  },
  {
    id: 4,
    image: noite,
    type: 'papel',
    title: 'Noite Urbana',
    blocked: false,
    price: 420,
    level: 2,
  },
  {
    id: 5,
    image: deserto,
    type: 'papel',
    title: 'Deserto do Silêncio',
    blocked: true,
    price: 470,
    level: 3,
  },
];

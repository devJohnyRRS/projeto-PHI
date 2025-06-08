import { StoreItem } from '../types/StoreItem';

const baruffi = require('../../assets/icones loja/baruffi.jpg');
const sandro = require('../../assets/icones loja/sandro.jpg');
const noite = require('../../assets/papeis de parede/noite.jpg');

export const mockPopularesLoja: StoreItem[] = [
  {
    id: 1,
    type: 'moldura',
    title: 'Moldura Dourada',
    blocked: true,
    price: 500,
    level: 'Premium',
    color: '#FFD700',
  },
  {
    id: 2,
    image: baruffi,
    type: 'icone',
    title: 'Ícone Baruffi',
    blocked: false,
    price: 300,
    level: 1,
  },
  {
    id: 3,
    image: noite,
    type: 'papel',
    title: 'Noite Urbana',
    blocked: false,
    price: 420,
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
    image: sandro,
    type: 'icone',
    title: 'Ícone homem laranja',
    blocked: true,
    price: 400,
    level: 3,
  },
];

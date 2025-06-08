import { StoreItem } from '../types/StoreItem';

const image = require('../../assets/icone.jpg'); // imagem base usada para os ícones

export const mockIconesLoja: StoreItem[] = [
  {
    id: 1,
    image,
    type: 'icone',
    title: 'Ícone Samurai',
    blocked: false,
    price: 300,
    level: 1,
  },
  {
    id: 2,
    image,
    type: 'icone',
    title: 'Ícone Ciborgue',
    blocked: true,
    price: 450,
    level: 2,
  },
  {
    id: 3,
    image,
    type: 'icone',
    title: 'Ícone Vitoriano',
    blocked: false,
    price: 350,
    level: 1,
  },
  {
    id: 4,
    image,
    type: 'icone',
    title: 'Ícone Punk',
    blocked: true,
    price: 400,
    level: 3,
  },
  {
    id: 5,
    image,
    type: 'icone',
    title: 'Ícone Astronauta',
    blocked: true,
    price: 500,
    level: 4,
  },
];

import { StoreItem } from '../types/StoreItem';

const baruffi = require('../../assets/icones loja/baruffi.jpg');
const cavalheiro = require('../../assets/icones loja/cavalheiro.png');
const pink = require('../../assets/icones loja/pink.jpeg');
const yellow = require('../../assets/icones loja/yellow.png');
const sandro = require('../../assets/icones loja/sandro.jpg');

export const mockIconesLoja: StoreItem[] = [
  {
    id: 1,
    image: baruffi,
    type: 'icone',
    title: 'Ícone Baruffi',
    blocked: false,
    price: 300,
    level: 1,
  },
  {
    id: 2,
    image: yellow,
    type: 'icone',
    title: 'Ícone menino amarelo',
    blocked: true,
    price: 450,
    level: 2,
  },
  {
    id: 3,
    image: pink,
    type: 'icone',
    title: 'Ícone menina rosa',
    blocked: false,
    price: 350,
    level: 1,
  },
  {
    id: 4,
    image: sandro,
    type: 'icone',
    title: 'Ícone homem laranja',
    blocked: true,
    price: 400,
    level: 3,
  },
  {
    id: 5,
    image: cavalheiro,
    type: 'icone',
    title: 'Ícone inseto',
    blocked: true,
    price: 500,
    level: 4,
  },
];

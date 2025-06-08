import { MediaPost } from '../types/Posts';

export const mockPopularesBanca: MediaPost[] = [
  {
    id: 1,
    type: 'artigo',
    title: 'Revolução Industrial',
    description:
      'Por Revolução Industrial, as ciências humanas compreendem como o período de grande desenvolvimento tecnológico que foi iniciado na Inglaterra a partir da segunda metade do século XVIII. Com o tempo, esse desenvolvimento espalhou-se para outras partes do mundo, como a Europa ocidental e os Estados Unidos. Assim, surgiu a indústria, e as transformações causadas por essa possibilitaram a consolidação do capitalismo. A economia, a nível mundial, sofreu grandes transformações. O processo de produção de mercadorias acelerou-se bastante, já que a produção manual foi substituída pela utilização da máquina. O resultado foi o estímulo à exploração dos recursos da natureza de maneira excessiva, uma vez que a capacidade produtiva aumentou. A Revolução Industrial também impactou as relações de trabalho, gerando uma reação dos trabalhadores, cada vez mais explorados no contexto industrial.',
    link: 'https://mundoeducacao.uol.com.br/historiageral/revolucao-industrial-2.htm',
    stats: {
      badge: ['História', 'Sociedade'],
      time: '2h atrás',
      content:
        'Entenda como o avanço industrial modificou os padrões de vida e as relações de trabalho.',
      comments: 128,
      likes: 2043,
      dislikes: 12,
    },
  },
  {
    id: 2,
    type: 'audio',
    title: 'Jockey di gue?',
    link: '',
    // file: audio1,
    stats: {
      badge: ['Jockey', 'de', 'Galinha'],
      time: '30min atrás',
      content: 'Aprenda sobre bancos de dados relacionais e não relacionais.',
      comments: 589,
      likes: 5000,
      dislikes: 1,
    },
  },
  {
    id: 3,
    type: 'video',
    title: 'O que foi o Holocausto?',
    link: 'ylcJ4j5Sx-I',
    stats: {
      badge: ['História'],
      time: '30min atrás',
      content: 'Aprenda sobre bancos de dados relacionais e não relacionais.',
      comments: 209,
      likes: 400,
      dislikes: 0,
    },
  },
];

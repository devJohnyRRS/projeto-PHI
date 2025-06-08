export type MainStackParamList = {
  Login: undefined;
  CadastroOne: undefined;
  CadastroTwo: undefined;
  Home: undefined;
  Perfil: undefined;
  Banca: undefined;
  Questoes: undefined;
  DetalheQuestao: {
    question: {
      color: string;
      code: string;
      title: string;
      description: string;
      alternativas?: string[];
      alternativaCorreta?: number;
    };
  };
  Audios: undefined;
  Videos: undefined;
  Artigos: undefined;
  Loja: undefined;
  PapeisDeParede: undefined;
  Icones: undefined;
  Molduras: undefined;
  Assinar: undefined;
  App: undefined;
};

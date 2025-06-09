export interface StoreItem {
  id: number;
  image?: any;
  color?: string;
  type: 'moldura' | 'icone' | 'papel';
  title: string;
  blocked: boolean;
  price: number;
  level: any;
}

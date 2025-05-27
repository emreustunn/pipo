export type Product = {
  id: string;
  name: string;
  price: number;
  image: string;
  description: string;
  category: 'classic' | 'modern' | 'handmade' | 'collection';
};

export const products: Product[] = [
  {
    id: 'classic-1',
    name: 'Klasik Lüle Pipo - Sultan',
    price: 2500,
    image: '/images/products/next.jpg',
    description: 'El yapımı, geleneksel Osmanlı motifli lüle pipo',
    category: 'classic'
  },
  {
    id: 'modern-1',
    name: 'Modern Lüle Pipo - Minimalist',
    price: 1800,
    image: '/images/products/next2.jpg',
    description: 'Çağdaş tasarım, sade ve şık lüle pipo',
    category: 'modern'
  },
  {
    id: 'handmade-1',
    name: 'El Yapımı Lüle Pipo - Usta Serisi',
    price: 3500,
    image: '/images/products/next3.jpg',
    description: 'Usta zanaatkarlarımızın özel koleksiyon parçası',
    category: 'handmade'
  },
  {
    id: 'collection-1',
    name: 'Koleksiyon Lüle Pipo - Osmanlı',
    price: 5000,
    image: '/images/products/next4.jpg',
    description: 'Sınırlı sayıda üretilen özel koleksiyon parçası',
    category: 'collection'
  }
]; 
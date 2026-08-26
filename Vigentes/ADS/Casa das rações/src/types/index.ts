export interface Product {
  id: number;
  name: string;
  category: 'Cachorro' | 'Gato';
  subcategory: string;
  image: string;
  brand: string;
}

export interface Store {
  id: number;
  name: string;
  phone: string;
  whatsapp: string;
  instagram?: string;
  address: string;
  mapEmbed?: string;
  hours?: string;
  badge?: string;
}

export interface Review {
  id: number;
  author: string;
  rating: number;
  text: string;
  date: string;
  badge?: string;
}

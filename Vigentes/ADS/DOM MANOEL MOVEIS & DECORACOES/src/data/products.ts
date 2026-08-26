export interface Product {
  image: string;
  category: string;
  href: string;
}

export const categories = [
  'Todos',
  'Mesas',
  'Armários',
  'Cristaleiras',
  'Camas',
  'Roupeiros',
  'Buffet',
  'Bancos',
];

const base = 'https://storage.lucasmendes.dev/site-sp/dom-manoel-moveis-e-decoracoes';

export const products: Product[] = [
  {
    image: `${base}/cristaleiras/Cristaleiras%20(1).webp`,
    category: 'Cristaleiras',
    href: 'http://wa.me/556696455950?text=Olá!%20Tenho%20interesse%20em%20uma%20peça%20da%20categoria%20Cristaleiras:%20Cristaleira%20Colonial%20Mod.%201',
  },
  {
    image: `${base}/cristaleiras/Cristaleiras%20(2).webp`,
    category: 'Cristaleiras',
    href: 'http://wa.me/556696455950?text=Olá!%20Tenho%20interesse%20em%20uma%20peça%20da%20categoria%20Cristaleiras:%20Cristaleira%20Colonial%20Mod.%202',
  },
  {
    image: `${base}/cristaleiras/Cristaleiras%20(3).webp`,
    category: 'Cristaleiras',
    href: 'http://wa.me/556696455950?text=Olá!%20Tenho%20interesse%20em%20uma%20peça%20da%20categoria%20Cristaleiras:%20Cristaleira%20Colonial%20Mod.%203',
  },
  {
    image: `${base}/cristaleiras/Cristaleiras%20(4).webp`,
    category: 'Cristaleiras',
    href: 'http://wa.me/556696455950?text=Olá!%20Tenho%20interesse%20em%20uma%20peça%20da%20categoria%20Cristaleiras:%20Cristaleira%20Colonial%20Mod.%204',
  },
  {
    image: `${base}/cristaleiras/Cristaleiras%20(5).webp`,
    category: 'Cristaleiras',
    href: 'http://wa.me/556696455950?text=Olá!%20Tenho%20interesse%20em%20uma%20peça%20da%20categoria%20Cristaleiras:%20Cristaleira%20Colonial%20Mod.%205',
  },
  {
    image: `${base}/cristaleiras/Cristaleiras%20(6).webp`,
    category: 'Cristaleiras',
    href: 'http://wa.me/556696455950?text=Olá!%20Tenho%20interesse%20em%20uma%20peça%20da%20categoria%20Cristaleiras:%20Cristaleira%20Colonial%20Mod.%206',
  },
  {
    image: `${base}/cristaleiras/Cristaleiras%20(7).webp`,
    category: 'Cristaleiras',
    href: 'http://wa.me/556696455950?text=Olá!%20Tenho%20interesse%20em%20uma%20peça%20da%20categoria%20Cristaleiras:%20Cristaleira%20Colonial%20Mod.%207',
  },
  {
    image: `${base}/mesas-att/mesas%20(1).webp`,
    category: 'Mesas',
    href: 'http://wa.me/556696455950?text=Olá!%20Tenho%20interesse%20em%20uma%20peça%20da%20categoria%20Mesas:%20Mesa%20de%20Jantar%20Maci%C3%A7a%201',
  },
];

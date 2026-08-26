const IMG = 'https://storage.lucasmendes.dev/site-sp/golden-car/carros/';

export interface Car {
  name: string;
  category: string;
  transmission: string;
  image: string;
  featured?: boolean;
}

export const WHATSAPP = 'http://wa.me/556697218384';

export function carWhatsapp(name: string): string {
  const msg = `Olá! Vi o ${name}  no site de vocês e gostaria de mais informações. Pode me ajudar?`;
  return `${WHATSAPP}?text=${encodeURIComponent(msg)}`;
}

export const CATEGORIES = ['Todos', 'Hatch', 'Sedan', 'SUV', 'Pickup', 'Minivan'];

export const cars: Car[] = [
  { name: 'Hyundai HB20 Comfort Plus', category: 'Hatch', transmission: 'Automático', image: IMG + 'hb20-branco-confort-plus-automatico-2024_719x1280.webp', featured: true },
  { name: 'Fiat Mobi', category: 'Hatch', transmission: 'Manual', image: IMG + 'fiat-mobi-branco-2024-golden-car_719x1280.webp', featured: true },
  { name: 'Saveiro Robust CD 1.6', category: 'Pickup', transmission: 'Manual', image: IMG + 'saveiro-robust-branca-cd-1-6-2024_719x1280.webp', featured: true },
  { name: 'Volkswagen Nivus', category: 'SUV', transmission: 'Automático', image: IMG + 'nivus-branco-automatico-2023-golden-car_719x1280.webp' },
  { name: 'Hyundai HB20', category: 'Hatch', transmission: 'Automático', image: IMG + 'hb20-branco-2023-automatico-oferta-concessionaria_719x1280.webp' },
  { name: 'Hyundai HB20 Comfort', category: 'Hatch', transmission: 'Automático', image: IMG + 'hyundai-hb20-comfort-preto-automatico-2023_719x1280.webp' },
  { name: 'Chevrolet Spin Premier', category: 'Minivan', transmission: 'Automático', image: IMG + 'chevrolet-spin-premier-cinza-anuncio-venda_719x1280.webp' },
  { name: 'Fiat Toro Freedom', category: 'Pickup', transmission: 'Automático', image: IMG + 'fiat-toro-branca-freedom-anuncio-concessionaria_719x1280.webp' },
  { name: 'Volkswagen Virtus', category: 'Sedan', transmission: 'Automático', image: IMG + 'virtus-branco-automatico-2019-2020-golden-car_726x1280.webp' },
  { name: 'Gol G7 MSI 1.0', category: 'Hatch', transmission: 'Manual', image: IMG + 'gol-g7-branco-msi-1-0-2020-concessionaria_719x1280.webp' },
  { name: 'Renault Duster Iconic 1.6', category: 'SUV', transmission: 'Manual', image: IMG + 'renault-duster-branco-inonic-16-anuncio_719x1280.webp' },
  { name: 'VW Polo Comfort', category: 'Hatch', transmission: 'Automático', image: IMG + 'vw-polo-branco-comfort-automatico-2019_719x1280.webp' },
];

export const navLinks = [
  { label: 'Início', target: 'inicio' },
  { label: 'Estoque', target: 'estoque' },
  { label: 'Sobre', target: 'sobre' },
  { label: 'Serviços', target: 'servicos' },
  { label: 'Contato', target: 'contato' },
];

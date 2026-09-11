export const WHATSAPP_PHONE = '5565984310000';

export function interestLink(fullName: string): string {
  const text = `Olá! Tenho interesse no veículo *${fullName}* que vi no site da XC Motors. Poderia me passar mais informações?`;
  return `http://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(text)}`;
}

export interface Vehicle {
  name: string;
  description: string;
  image: string;
  alt: string;
  tags: string[];
}

const BASE = 'https://storage.lucasmendes.dev/site-sp/xc%20motors/catalogo';

export const vehicles: Vehicle[] = [
  {
    name: 'Honda City LX',
    description: 'Automático 2016',
    image: `${BASE}/City%20Lx%20autom%C3%A1tico%202016.webp`,
    alt: 'Honda City LX Automático 2016',
    tags: ['Automático', 'Sedan'],
  },
  {
    name: 'Toyota Corolla XEI',
    description: '2.0 Automático 2012-2013 Completo',
    image: `${BASE}/Corolla%20xei%202.0%20autom%C3%A1tico%202012-2013%20completo.webp`,
    alt: 'Toyota Corolla XEI 2.0 Automático 2012-2013 Completo',
    tags: ['Automático', 'Sedan', 'Completo'],
  },
  {
    name: 'Hyundai HB20S',
    description: '1.6 2014-2015',
    image: `${BASE}/Hb20S%201.6%202014-2015.webp`,
    alt: 'Hyundai HB20S 1.6 2014-2015',
    tags: ['Sedan', 'Hatch'],
  },
  {
    name: 'Hyundai HB20S',
    description: 'Comfort Plus 2023-2024',
    image: `${BASE}/Hb20S%20Comfort%20plus%202023-2024.webp`,
    alt: 'Hyundai HB20S Comfort Plus 2023-2024',
    tags: ['Sedan', 'Novo', 'Comfort Plus'],
  },
  {
    name: 'Toyota Hilux',
    description: 'CD 4x4 Diesel Manual 2022',
    image: `${BASE}/Hilux%20CD%204x4%20Diesel%20manual%202022-2022.webp`,
    alt: 'Toyota Hilux CD 4x4 Diesel Manual 2022',
    tags: ['4x4', 'Diesel', 'Caminhonete'],
  },
  {
    name: 'Nissan Kicks',
    description: 'S Direct 1.6 Automático 2019-2020',
    image: `${BASE}/Kicks%20S%20DIRECT%201.6%20AUTOM%C3%81TICO%202019-2020.webp`,
    alt: 'Nissan Kicks S Direct 1.6 Automático 2019-2020',
    tags: ['SUV', 'Automático'],
  },
  {
    name: 'VW Nivus Highline',
    description: 'TSI Automático 2023-2024 Prata',
    image: `${BASE}/Nivus%20Highline%20tsi%20autom%C3%A1tico%202023-2024%20prata.webp`,
    alt: 'VW Nivus Highline TSI Automático 2023-2024 Prata',
    tags: ['SUV', 'TSI', 'Automático'],
  },
  {
    name: 'VW Nivus Highline',
    description: 'TSI Automático 2023-2024 Preto',
    image: `${BASE}/Nivus%20Highline%20tsi%20autom%C3%A1tico%202023-2024%20preto.webp`,
    alt: 'VW Nivus Highline TSI Automático 2023-2024 Preto',
    tags: ['SUV', 'TSI', 'Automático'],
  },
  {
    name: 'Chevrolet S10 LS',
    description: '4x4 CD Diesel 2022-2023',
    image: `${BASE}/S10%20LS%204x4%20CD%20DIESEL%202022-2023.webp`,
    alt: 'Chevrolet S10 LS 4x4 CD Diesel 2022-2023',
    tags: ['4x4', 'Diesel', 'Caminhonete'],
  },
  {
    name: 'VW T-Cross Highline',
    description: '1.4 TSI Automático 2023-2024',
    image: `${BASE}/Tcross%20Highline%201.4%20tsi%20autom%C3%A1tico%202023-2024.webp`,
    alt: 'VW T-Cross Highline 1.4 TSI Automático 2023-2024',
    tags: ['SUV', 'TSI', 'Automático'],
  },
  {
    name: 'VW T-Cross Comfortline',
    description: 'TSI Automático 2024-2025',
    image: `${BASE}/Tcross%20comfortline%20tsi%20autom%C3%A1tico%202024-2025.webp`,
    alt: 'VW T-Cross Comfortline TSI Automático 2024-2025',
    tags: ['SUV', 'TSI', 'Automático'],
  },
  {
    name: 'Toyota Yaris XL',
    description: 'Sedan Automático 2024-2025',
    image: `${BASE}/YARIS%20XL%20SEDAN%20AUTOM%C3%81TICO%202024-2025.webp`,
    alt: 'Toyota Yaris XL Sedan Automático 2024-2025',
    tags: ['Sedan', 'Automático', 'Novo'],
  },
];

export const catalogFilters = [
  'Todos',
  'SUV',
  'Sedan',
  'Caminhonete',
  'Automático',
  'Diesel',
  '4x4',
  'Novo',
];

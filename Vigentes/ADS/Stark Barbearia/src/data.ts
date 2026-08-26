export const WHATSAPP_URL =
  'https://api.whatsapp.com/send/?phone=556699952874&text=Ol%C3%A1%21+Gostaria+de+agendar+um+hor%C3%A1rio.+Poderia+me+informar+a+disponibilidade%3F&type=phone_number&app_absent=0&utm_source=ig';

export const INSTAGRAM_URL = 'https://www.instagram.com/starkbarbeariabr';

export const LOGO_URL = 'https://storage.lucasmendes.dev/site-sp/starkbarbearia/logo.png';

import {
  Scissors,
  User,
  Package,
  Sparkles,
  Droplets,
  Star,
  type LucideIcon,
} from 'lucide-react';

export interface ServiceCategory {
  title: string;
  icon: LucideIcon;
  items: string[];
}

export const services: ServiceCategory[] = [
  {
    title: 'Cortes',
    icon: Scissors,
    items: [
      'Corte',
      'Corte - Jeferson',
      'Corte com Visagismo',
      'Corte Feminino',
      'Corte Infantil Masculino',
      'Corte Máquina',
      'Corte na Máquina',
    ],
  },
  {
    title: 'Barba',
    icon: User,
    items: [
      'Barba',
      'Barba com Visagismo',
      'Barba e Pézinho',
      'Design de Barba',
      'Hidratação de Barba Keune',
      'Tonalização de Barba Longa',
      'Tonalização de Barba (pequena e média)',
    ],
  },
  {
    title: 'Combos',
    icon: Package,
    items: ['Combo Corte e Barba', 'Combo Raspar e Barba'],
  },
  {
    title: 'Cuidados com a Pele',
    icon: Sparkles,
    items: [
      'Depilação',
      'Depilação Nariz ou Orelha',
      'Esfoliação Simples',
      'Limpeza de Pele com Máscara',
      'Limpeza de Pele Profunda',
      'Limpeza de Pele Superficial',
      'Skin Glow - Limpeza de Pele Masculina',
    ],
  },
  {
    title: 'Tratamentos Capilares',
    icon: Droplets,
    items: [
      'Hidratação com Ozônioterapia',
      'Hidratação Reconstrução Keune',
      'Lambena',
      'Redutor de Volume MONOI',
      'Selagem',
      'Tonalização de Cabelo',
    ],
  },
  {
    title: 'Outros Serviços',
    icon: Star,
    items: [
      'Consultoria com Visagismo',
      'Manicure',
      'Pedicure',
      'Pedicure com Esfoliação',
      'Penteado',
      'Pézinho',
      'Sobrancelha',
    ],
  },
];

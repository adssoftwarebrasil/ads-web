import {
  Gem,
  Circle,
  Layers,
  Shield,
  Zap,
  Star,
  GitMerge,
  Cpu,
  Box,
  RotateCcw,
  AlignLeft,
  Minus,
  Monitor,
  Printer,
  Scan,
  type LucideIcon,
} from 'lucide-react';

export const WHATSAPP_URL = 'https://api.whatsapp.com/send/?phone=5516999971815';
export const WHATSAPP_URL_FULL =
  'https://api.whatsapp.com/send/?phone=5516999971815&text&type=phone_number&app_absent=0';

export interface NavItem {
  label: string;
  target: string;
}

export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', target: 'home' },
  { label: 'Quem Somos', target: 'sobre' },
  { label: 'Serviços', target: 'servicos' },
  { label: 'Tecnologia', target: 'tecnologia' },
  { label: 'Contato', target: 'contato' },
];

export const HERO_BANNERS = [
  'https://storage.lucasmendes.dev/site-sp/vitadent/banner02.png',
  'https://storage.lucasmendes.dev/site-sp/vitadent/banner03.png',
  'https://storage.lucasmendes.dev/site-sp/vitadent/banner04.png',
];

export interface Stat {
  prefix: string;
  prefixMuted?: boolean;
  value: string;
  suffix?: string;
  label: string;
}

export const STATS: Stat[] = [
  { prefix: 'Desde', prefixMuted: true, value: '1.949', label: 'Tradição no Mercado' },
  { prefix: '+', prefixMuted: true, value: '75', suffix: ' Anos', label: 'de Experiência' },
  { prefix: '+', prefixMuted: true, value: '5.000', label: 'Clientes Atendidos' },
  { prefix: '+', prefixMuted: true, value: '150.000', label: 'Próteses Entregues' },
];

export interface Service {
  icon: LucideIcon;
  title: string;
  desc: string;
  featured?: boolean;
}

export const SERVICES: Service[] = [
  {
    icon: Gem,
    title: 'Zircônia',
    desc: 'Restaurações em zircônia com alta resistência e estética natural superior.',
    featured: true,
  },
  {
    icon: Circle,
    title: 'E-max® Cerâmica',
    desc: 'Metal free em cerâmica com máxima estética e biocompatibilidade.',
    featured: true,
  },
  {
    icon: Layers,
    title: 'Metalocerâmicas',
    desc: 'Combinação perfeita de resistência metálica com estética cerâmica.',
  },
  {
    icon: Shield,
    title: 'Prótese sobre Implante',
    desc: 'Soluções avançadas para reabilitação com implantes osseointegrados.',
  },
  {
    icon: Zap,
    title: 'Inlay | Onlay | Laminados',
    desc: 'Restaurações conservadoras com excelente adaptação marginal.',
  },
  {
    icon: Star,
    title: 'Veneer Facetado',
    desc: 'Facetas ultra-estéticas para transformação do sorriso.',
  },
  {
    icon: GitMerge,
    title: 'Coroas',
    desc: 'Coroas unitárias com alta precisão de adaptação e naturalidade.',
  },
  {
    icon: Cpu,
    title: 'Bioplas',
    desc: 'Material biocompatível com excelente resposta dos tecidos.',
  },
  {
    icon: Box,
    title: 'Prótese Total',
    desc: 'Próteses totais com estabilidade, retenção e estética aprimoradas.',
  },
  {
    icon: RotateCcw,
    title: 'Semiflexível Deflex®',
    desc: 'Conforto e flexibilidade para próteses parciais removíveis.',
  },
  {
    icon: AlignLeft,
    title: 'Parcial Removível',
    desc: 'Próteses parciais de alta qualidade para reabilitação eficaz.',
  },
  {
    icon: Minus,
    title: 'Adesiva com Metal',
    desc: 'Prótese adesiva de alta durabilidade com suporte metálico.',
  },
];

export interface TechCard {
  icon: LucideIcon;
  img: string;
  title: string;
  subtitle: string;
  desc: string;
}

export const TECH_CARDS: TechCard[] = [
  {
    icon: Monitor,
    img: 'https://storage.lucasmendes.dev/site-sp/vitadent/CAD%3ACAM.png',
    title: 'CAD/CAM',
    subtitle: 'Design Assistido por Computador',
    desc: 'Tecnologia de ponta para o design e fresagem de próteses com precisão milimétrica e resultados superiores.',
  },
  {
    icon: Printer,
    img: 'https://storage.lucasmendes.dev/site-sp/vitadent/Impressao%203d.png',
    title: 'Impressão 3D',
    subtitle: 'Fabricação Aditiva',
    desc: 'Impressão tridimensional para modelos, guias e estruturas com alta precisão e velocidade de entrega.',
  },
  {
    icon: Scan,
    img: 'https://storage.lucasmendes.dev/site-sp/vitadent/Scanner.png',
    title: 'Scanner Digital',
    subtitle: 'Digitalização de Alta Precisão',
    desc: 'Scanner de última geração para captura digital de arcadas dentárias com fidelidade total.',
  },
  {
    icon: Cpu,
    img: 'https://storage.lucasmendes.dev/site-sp/vitadent/E-max.png',
    title: 'Fluxo Digital',
    subtitle: 'Scan Service',
    desc: 'Fluxo de trabalho 100% digital do escaneamento à entrega da prótese finalizada com máxima qualidade.',
  },
];

export const FOOTER_SERVICES = [
  'Zircônia',
  'E-max® Cerâmica',
  'Metalocerâmicas',
  'Prótese sobre Implante',
  'Fluxo Digital',
  'CAD/CAM',
  'Impressão 3D',
  'Scanner Digital',
];

export function scrollToSection(id: string) {
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}

import {
  BookOpen,
  FileText,
  Users,
  Building2,
  BarChart3,
  ShieldCheck,
  Receipt,
  type LucideIcon,
} from 'lucide-react';

export const WHATSAPP_BASE = 'https://wa.me/556734227582';
export const WHATSAPP_SERVICOS =
  'https://wa.me/556734227582?text=Ol%C3%A1%21+Gostaria+de+saber+mais+sobre+os+servi%C3%A7os+da+Meta+Contabilidade.';
export const WHATSAPP_CONSULTORIA =
  'https://wa.me/556734227582?text=Ol%C3%A1%21+Gostaria+de+agendar+uma+consultoria+com+a+Meta+Contabilidade.';
export const WHATSAPP_GRATUITA =
  'https://wa.me/556734227582?text=Ol%C3%A1%21+Gostaria+de+agendar+uma+consultoria+gratuita+com+a+Meta+Contabilidade.';
export const TEL = 'tel:556734227582';
export const PHONE = '(67) 3422-7582';
export const EMAIL = 'contabilidade@metacontabilidade.net.br';
export const LOGO =
  'https://storage.lucasmendes.dev/site-sp/meta%20contabilidade/img/logo-sem-fundo.webp';

export interface NavItem {
  label: string;
  id: string;
}

export const NAV_ITEMS: NavItem[] = [
  { label: 'Início', id: 'inicio' },
  { label: 'Serviços', id: 'servicos' },
  { label: 'Sobre', id: 'sobre' },
  { label: 'Depoimentos', id: 'depoimentos' },
  { label: 'Contato', id: 'contato' },
];

export interface Service {
  icon: LucideIcon;
  title: string;
  description: string;
  delay: string;
  extraClass?: string;
}

export const SERVICES: Service[] = [
  {
    icon: BookOpen,
    title: 'Contabilidade',
    description:
      'Escrituração contábil completa, balanços, demonstrações financeiras e relatórios gerenciais para tomada de decisões estratégicas.',
    delay: 'delay-100',
  },
  {
    icon: FileText,
    title: 'Escrita Fiscal',
    description:
      'Apuração de impostos, SPED Fiscal, EFD Contribuições e toda a gestão tributária do seu negócio com precisão e conformidade legal.',
    delay: 'delay-200',
  },
  {
    icon: Users,
    title: 'Departamento Pessoal',
    description:
      'Admissões, demissões, folha de pagamento, eSocial, FGTS e todos os encargos trabalhistas com total segurança jurídica.',
    delay: 'delay-300',
  },
  {
    icon: Building2,
    title: 'Abertura e Regularização de Empresa',
    description:
      'Constituição, alteração e encerramento de empresas com assessoria especializada para a melhor estrutura tributária para o seu negócio.',
    delay: 'delay-400',
  },
  {
    icon: BarChart3,
    title: 'BPO Financeiro',
    description:
      'Terceirize sua gestão financeira: contas a pagar e receber, fluxo de caixa, conciliação bancária e relatórios gerenciais em tempo real.',
    delay: 'delay-100',
  },
  {
    icon: ShieldCheck,
    title: 'Certificado Digital',
    description:
      'Emissão de certificado digital e-CPF e e-CNPJ por videoconferência. Praticidade e segurança sem sair de onde você estiver.',
    delay: 'delay-200',
  },
  {
    icon: Receipt,
    title: 'Imposto de Renda',
    description:
      'Declaração do IRPF completa e precisa para pessoa física, com análise de deduções e restituição máxima garantida.',
    delay: 'delay-300',
    extraClass: 'sm:col-span-2 lg:col-span-3 xl:col-span-4',
  },
];

export interface Testimonial {
  text: string;
  initials: string;
  name: string;
  role: string;
  delay: string;
}

export const TESTIMONIALS: Testimonial[] = [
  {
    text: '"Atendimento de excelência, rápido nos retornos, muito responsáveis! Super indico a Meta Contabilidade para todos que precisam de um serviço contábil de qualidade e confiança."',
    initials: 'SN',
    name: 'Sirley Nogueira Paniago',
    role: 'Cliente Meta Contabilidade',
    delay: 'delay-100',
  },
  {
    text: '"Como é bom contar com vocês no dia a dia, sempre dando um retorno imediato nas dúvidas que temos. A disponibilidade e o profissionalismo da equipe fazem toda a diferença. Recomendo muito!"',
    initials: 'GE',
    name: 'Gedivaldo',
    role: 'Cliente Meta Contabilidade',
    delay: 'delay-200',
  },
  {
    text: '"Um atendimento como qualquer um se sentiria honrado! O profissionalismo é de alta segurança e os esclarecimentos não deixam dúvidas. Só tenho a agradecer e parabenizar a contadora Adriana pelo belo profissionalismo."',
    initials: 'EF',
    name: 'Ederaldo Fragoso',
    role: 'Cliente Meta Contabilidade',
    delay: 'delay-300',
  },
];

export const AVATAR_IMAGES: string[] = [
  'https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=64&h=64&fit=crop',
  'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=64&h=64&fit=crop',
  'https://images.pexels.com/photos/1181695/pexels-photo-1181695.jpeg?auto=compress&cs=tinysrgb&w=64&h=64&fit=crop',
  'https://images.pexels.com/photos/1181697/pexels-photo-1181697.jpeg?auto=compress&cs=tinysrgb&w=64&h=64&fit=crop',
  'https://images.pexels.com/photos/1181699/pexels-photo-1181699.jpeg?auto=compress&cs=tinysrgb&w=64&h=64&fit=crop',
];

export const STATS = [
  { value: '0+', label: 'Anos de Experiência', icon: 'TrendingUp' },
  { value: '0+', label: 'Clientes Atendidos', icon: 'Users' },
  { value: '0.0', label: 'Estrelas no Google', icon: 'Star' },
  { value: '0', label: 'Serviços Especializados', icon: 'Award' },
] as const;

export const SERVICE_OPTIONS = [
  'Contabilidade',
  'Escrita Fiscal',
  'Departamento Pessoal',
  'Abertura de Empresa',
  'BPO Financeiro',
  'Certificado Digital',
  'Imposto de Renda',
  'Outro',
];

export const FOOTER_SERVICES = [
  'Contabilidade',
  'Escrita Fiscal',
  'Departamento Pessoal',
  'Abertura de Empresa',
  'BPO Financeiro',
  'Certificado Digital',
  'Imposto de Renda',
];

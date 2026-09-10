export const WHATSAPP_PHONE = '5566996677499';
export const WHATSAPP_URL =
  'https://api.whatsapp.com/send?phone=5566996677499&text=Ol%C3%A1%2C%20tudo%20bem%3F%20Acabei%20de%20visitar%20o%20site%20da%20Grife%20do%20Carro%20e%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es.';

export function whatsappUrl(message: string) {
  return `https://api.whatsapp.com/send?phone=${WHATSAPP_PHONE}&text=${encodeURIComponent(
    message
  )}`;
}

export const PHONE_DISPLAY = '(66) 99667-7499';
export const PHONE_TEL = 'tel:+5566996677499';
export const EMAIL = 'contato@grifedocarro.com.br';
export const ADDRESS =
  'Avenida das Itaúbas, 3574, Setor Comercial - Sinop/MT - 78.550-284';
export const HOURS = 'Segunda a Sábado – 8h às 18h';
export const INSTAGRAM_URL = 'https://www.instagram.com/grifedocarro/oficial';
export const FACEBOOK_URL = 'https://www.facebook.com/grifedocarro/oficial';

export const IMG = {
  logo: 'https://grife-do-carro.lovable.app/assets/logo-CEfHaMop.png',
  hero: 'https://grife-do-carro.lovable.app/assets/hero-car-DfmvHdLc.jpg',
  loja: '/loja-grife-do-carro.jpg',
  svcVenda: 'https://grife-do-carro.lovable.app/assets/svc-venda-WBDyBnso.jpg',
  svcTroca: 'https://grife-do-carro.lovable.app/assets/svc-troca-k7-DCynv.jpg',
  svcFinanciamento:
    'https://grife-do-carro.lovable.app/assets/svc-financiamento-Dj4oJrqp.jpg',
  svcAvaliacao:
    'https://grife-do-carro.lovable.app/assets/svc-avaliacao-CWaMYnub.jpg',
  svcCompra: 'https://grife-do-carro.lovable.app/assets/svc-compra-CJ4RdBIf.jpg',
  svcGarantia:
    'https://grife-do-carro.lovable.app/assets/svc-garantia-CxB0USbv.jpg',
  car1: 'https://grife-do-carro.lovable.app/assets/car-1-BFnf6oxW.jpg',
  car2: 'https://grife-do-carro.lovable.app/assets/car-2-10MJ2JEg.jpg',
  car3: 'https://grife-do-carro.lovable.app/assets/car-3-C7x56qIh.jpg',
  car4: 'https://grife-do-carro.lovable.app/assets/car-4-BGXwOlIT.jpg',
} as const;

export const NAV_LINKS = [
  { label: 'INÍCIO', href: '#inicio' },
  { label: 'VEÍCULOS', href: '#destaques' },
  { label: 'SOBRE', href: '#sobre' },
  { label: 'SERVIÇOS', href: '#servicos' },
  { label: 'VANTAGENS', href: '#vantagens' },
  { label: 'DEPOIMENTOS', href: '#depoimentos' },
  { label: 'CONTATO', href: '#contato' },
];

export interface Vehicle {
  /** nome do arquivo em /public/veiculos, sem a extensao */
  slug: string;
  name: string;
  year: string;
  /** vazio quando a quilometragem nao foi informada */
  km: string;
  /** destaque extra do veiculo, quando houver */
  note?: string;
}

/** Veiculos em destaque na home. Ordem = ordem de exibicao. */
export const VEHICLES: Vehicle[] = [
  {
    slug: '01-hb20s-comfort-plus',
    name: 'HB20S COMFORT PLUS 1.0 TGDI AUTOMÁTICO',
    year: '2022/2023',
    km: '83.000 km',
  },
  {
    slug: '02-celta-lt',
    name: 'CELTA LT 1.0 FLEX',
    year: '2014/2015',
    km: '190.000 km',
  },
  {
    slug: '03-argo',
    name: 'ARGO 1.0 FLEX',
    year: '2023/2024',
    km: '71.000 km',
  },
  {
    slug: '04-rav4',
    name: 'RAV4 2.0 4X2 AUT',
    year: '2017/2017',
    km: '95.000 km',
  },
  {
    slug: '05-hrv-exl',
    name: 'HR-V EXL 1.8 FLEXONE AUT.',
    year: '2019/2020',
    km: '138.000 km',
  },
  {
    slug: '06-strada-freedom',
    name: 'STRADA FREEDOM 1.3 FLEX CS',
    year: '2021/2021',
    km: '69.000 km',
  },
  {
    slug: '07-sandero-expression',
    name: 'SANDERO EXPRESSION HI-POWER 1.6',
    year: '2014/2015',
    km: '105.000 km',
  },
  {
    slug: '08-corolla-xei-2016',
    name: 'COROLLA XEI 2.0 FLEX AUT.',
    year: '2015/2016',
    km: '117.000 km',
  },
  {
    slug: '09-trailblazer-ltz',
    name: 'TRAILBLAZER LTZ 2.8 DIESEL AUT',
    year: '2017/2018',
    km: '203.000 km',
    note: '8 lugares',
  },
  {
    slug: '10-prisma-ltz',
    name: 'PRISMA SED. LTZ 1.4 FLEXPOWER',
    year: '2016/2017',
    km: '140.000 km',
  },
  {
    slug: '11-hilux-srv-2025',
    name: 'HILUX CD SRV 4X4 2.8 DIESEL AUT.',
    year: '2025/2025',
    km: '33.000 km',
  },
  {
    slug: '12-amarok-highline',
    name: 'AMAROK HIGHLINE CD 2.0 4X4 DIESEL',
    year: '2014/2014',
    km: '286.000 km',
  },
  {
    slug: '13-hb20s-comfort-2024',
    name: 'HB20S COMFORT 1.0 TB FLEX AUT',
    year: '2023/2024',
    km: '49.000 km',
  },
  {
    slug: '14-hilux-srv-2015',
    name: 'HILUX CD SRV 4X4 2.7 FLEX AUT',
    year: '2014/2015',
    km: '187.000 km',
  },
  {
    slug: '15-ecosport-se',
    name: 'ECOSPORT SE 1.6 FLEX',
    year: '2016/2017',
    km: '128.000 km',
  },
  {
    slug: '16-sandero-stepway',
    name: 'SANDERO STEPWAY HI-POWER 1.6',
    year: '2013/2014',
    km: '167.000 km',
  },
  {
    slug: '17-escort-xr3',
    name: 'ESCORT XR3 1.6 ÁLCOOL',
    year: '1986/1987',
    km: '',
    note: 'Teto solar',
  },
  {
    slug: '18-tracker-premier',
    name: 'TRACKER PREMIER 1.2 TURBO FLEX AUT',
    year: '2020/2021',
    km: '98.000 km',
  },
  {
    slug: '19-corolla-xei-2020',
    name: 'COROLLA XEI 2.0 FLEX AUT.',
    year: '2019/2020',
    km: '73.000 km',
  },
  {
    slug: '20-hayabusa-gsx-1300r',
    name: 'GSX 1300-R HAYABUSA',
    year: '2010/2010',
    km: '45.000 km',
    note: 'Motocicleta',
  },
  {
    slug: '21-onix-joy',
    name: 'ONIX HATCH JOY 1.0',
    year: '2018/2019',
    km: '110.000 km',
  },
  {
    slug: '22-nivus-highline',
    name: 'NIVUS HIGHLINE 1.0 200 TSI FLEX AUT',
    year: '2025/2025',
    km: '19.000 km',
  },
  {
    slug: '23-ranger-xls',
    name: 'RANGER XLS 2.2 4X4 CD DIESEL AUT',
    year: '2018/2018',
    km: '208.000 km',
  },
  {
    slug: '24-kwid-zen',
    name: 'KWID ZEN 1.0 FLEX',
    year: '2024/2025',
    km: '88.000 km',
  },
  {
    slug: '25-polo',
    name: 'POLO 1.0 FLEX',
    year: '2020/2020',
    km: '78.000 km',
  },
  {
    slug: '26-onix-lt',
    name: 'ONIX HATCH LT 1.0 FLEXPOWER',
    year: '2018/2019',
    km: '85.000 km',
  },
];

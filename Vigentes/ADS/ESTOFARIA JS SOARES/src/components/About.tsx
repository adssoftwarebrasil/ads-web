import { Award, Users, MapPin, Clock } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

const features = [
  'Produtos modernos e de alta qualidade',
  'Preço justo e transparente',
  'Rapidez na entrega dos serviços',
  'Atendimento humanizado e acolhedor',
  'Parcelamento no cartão e boleto (taxas a consultar)',
  'Desconto especial no pagamento à vista',
];

interface StatItem {
  Icon: LucideIcon;
  iconName: string;
  value: string;
  label: string;
}

const stats: StatItem[] = [
  { Icon: Award, iconName: 'award', value: '7+', label: 'Anos de experiência' },
  {
    Icon: Users,
    iconName: 'users',
    value: '6+',
    label: 'Profissionais especializados',
  },
  {
    Icon: MapPin,
    iconName: 'map-pin',
    value: 'Brasil',
    label: 'Atendimento nacional',
  },
  { Icon: Clock, iconName: 'clock', value: '2018', label: 'Fundada em' },
];

const collage = [
  {
    src: 'https://storage.lucasmendes.dev/site-sp/Estofaria%20js%20soares/cabine-caminhao-scania-estofada-marrom-e-laranja_1200x1600.webp',
    alt: 'Interior caminhão Scania',
    className: 'rounded-2xl object-cover w-full h-64 shadow-xl',
  },
  {
    src: 'https://storage.lucasmendes.dev/site-sp/Estofaria%20js%20soares/interior-caminhao-volvo-preto-dourado-cortinas_1200x1600.webp',
    alt: 'Interior caminhão Volvo',
    className: 'rounded-2xl object-cover w-full h-64 shadow-xl mt-8',
  },
  {
    src: 'https://storage.lucasmendes.dev/site-sp/Estofaria%20js%20soares/bancos-couro-pretos-ford-ranger-detalhe_960x1280.webp',
    alt: 'Bancos couro Ford Ranger',
    className: 'rounded-2xl object-cover w-full h-48 shadow-xl -mt-4',
  },
  {
    src: 'https://storage.lucasmendes.dev/site-sp/Estofaria%20js%20soares/dois-assentos-estofados-pretos-detalhe-amarelo_1200x1600.webp',
    alt: 'Assentos estofados',
    className: 'rounded-2xl object-cover w-full h-48 shadow-xl',
  },
];

export default function About() {
  return (
    <section id="sobre" className="py-20 md:py-28 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              {collage.map((img) => (
                <img
                  key={img.src}
                  src={img.src}
                  alt={img.alt}
                  className={img.className}
                />
              ))}
            </div>
            <div className="absolute -bottom-6 -right-6 bg-brand-red text-white rounded-2xl p-5 shadow-2xl">
              <div className="text-3xl font-black">7+</div>
              <div className="text-sm font-medium opacity-90">
                Anos de mercado
              </div>
            </div>
          </div>
          <div>
            <span className="text-brand-red text-sm font-semibold uppercase tracking-widest">
              Quem somos
            </span>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mt-3 mb-6 leading-tight">
              Tradição e qualidade na{' '}
              <span className="text-brand-blue">tapeçaria automotiva</span>
            </h2>
            <h2 className="sr-only">Estofaria JS Soares</h2>{' '}
            <p className="text-gray-500 leading-relaxed mb-6">
              Fundada em 21 de maio de 2018, a Estofaria JS Soares nasceu com o
              objetivo de modernizar o universo de tapeçaria automotiva, tanto de
              caminhões quanto de carros. Contamos com uma equipe de seis
              profissionais, além dos proprietários que também dedicam sua mão de
              obra nos serviços.
            </p>
            <p className="text-gray-500 leading-relaxed mb-8">
              Somos especialistas em renovar o interior de automóveis, oferecendo
              conforto, sofisticação e qualidade. Com clientes em todo o Brasil —
              especialmente caminhoneiros dos estados MT, MS, PR, RS e PA —
              entregamos muito mais do que um serviço: entregamos orgulho para
              quem dirige.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
              {features.map((feature) => (
                <div key={feature} className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-brand-red rounded-full mt-2 shrink-0"></div>
                  <span className="text-gray-700 text-sm font-medium">
                    {feature}
                  </span>
                </div>
              ))}
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="text-center p-4 bg-gray-50 rounded-2xl border border-gray-100"
                >
                  <stat.Icon
                    width={20}
                    height={20}
                    className={`lucide lucide-${stat.iconName} text-brand-red mx-auto mb-2`}
                  />
                  <div className="text-xl font-black text-brand-blue">
                    {stat.value}
                  </div>
                  <div className="text-xs text-gray-500 mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import { Award, Users, MapPin, TrendingUp, type LucideIcon } from 'lucide-react';

const ABOUT_IMG =
  'https://storage.lucasmendes.dev/site-sp/tropical%20toldos/galeria/tres-modelos-de-coberturas-para-area-externa_2880x2880.webp';

interface Stat {
  icon: LucideIcon;
  iconName: string;
  color: string;
  value: string;
  label: string;
}

const stats: Stat[] = [
  { icon: Award, iconName: 'award', color: 'text-tropical-blue', value: '+10', label: 'Anos de Experiência' },
  { icon: Users, iconName: 'users', color: 'text-tropical-green', value: '+500', label: 'Clientes Satisfeitos' },
  { icon: MapPin, iconName: 'map-pin', color: 'text-tropical-brown', value: '+10', label: 'Cidades Atendidas' },
  { icon: TrendingUp, iconName: 'trending-up', color: 'text-tropical-navy', value: '100%', label: 'Projetos Entregues' },
];

export default function About() {
  return (
    <section id="sobre" className="py-20 lg:py-28 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-center">
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img
                src={ABOUT_IMG}
                alt="Coberturas Tropical Toldos"
                className="w-full h-[420px] lg:h-[540px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-tropical-navy/60 to-transparent"></div>
            </div>
            <div className="absolute -bottom-6 -right-4 lg:-right-8 bg-tropical-blue text-white rounded-2xl p-6 shadow-xl max-w-[200px]">
              <p className="text-3xl font-extrabold leading-none">+500</p>
              <p className="text-sm font-medium mt-1 text-blue-100">Projetos realizados em toda a região</p>
            </div>
            <div className="absolute -top-4 -left-4 lg:-left-8 bg-tropical-green text-white rounded-2xl p-5 shadow-xl">
              <p className="text-2xl font-extrabold leading-none">+10</p>
              <p className="text-xs font-medium mt-1 text-green-100">Anos no mercado</p>
            </div>
          </div>
          <div>
            <span className="inline-block text-tropical-blue font-semibold text-sm uppercase tracking-widest mb-3">
              Quem somos
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight mb-6">
              A Tropical Toldos: <span className="text-tropical-blue">Qualidade que Protege</span>
            </h2>
            <div className="space-y-4 text-gray-600 text-base leading-relaxed">
              <p>
                A <strong className="text-gray-900">Tropical Toldos</strong> nasceu da paixão por transformar ambientes
                externos em espaços de conforto, proteção e beleza. Localizada em Primavera do Leste - MT, atendemos toda
                a região com soluções sob medida e instalação profissional.
              </p>
              <p>
                Atuamos na fabricação e instalação de toldos e coberturas para residências, comércios e áreas rurais,
                utilizando estrutura metálica reforçada e materiais de alta qualidade com acabamento profissional.
              </p>
              <p>
                Nossos projetos protegem garagens, varandas, áreas gourmet, quintais, portas, janelas e muito mais —
                sempre com o objetivo de valorizar o seu imóvel e proporcionar mais qualidade de vida.
              </p>
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              <div className="flex items-center gap-2 bg-tropical-light-green/60 px-4 py-2 rounded-full">
                <span className="w-2 h-2 bg-tropical-green rounded-full"></span>
                <span className="text-sm font-semibold text-gray-700">Projetos sob medida</span>
              </div>
              <div className="flex items-center gap-2 bg-blue-50 px-4 py-2 rounded-full">
                <span className="w-2 h-2 bg-tropical-blue rounded-full"></span>
                <span className="text-sm font-semibold text-gray-700">Instalação segura</span>
              </div>
              <div className="flex items-center gap-2 bg-amber-50 px-4 py-2 rounded-full">
                <span className="w-2 h-2 bg-tropical-brown rounded-full"></span>
                <span className="text-sm font-semibold text-gray-700">Atendimento em toda região</span>
              </div>
            </div>
            <a
              href="http://wa.me/556684533788?text=Olá!%20Gostaria%20de%20conhecer%20mais%20sobre%20a%20Tropical%20Toldos."
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-2 bg-tropical-navy hover:bg-tropical-blue text-white font-bold px-8 py-4 rounded-full text-base shadow-md hover:shadow-lg transition-all duration-300"
            >
              Conheça Nossos Serviços
            </a>
          </div>
        </div>
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat) => {
            const Icon = stat.icon;
            return (
              <div
                key={stat.label}
                className="text-center bg-gray-50 rounded-2xl p-6 border border-gray-100 hover:shadow-md transition-shadow"
              >
                <Icon className={`lucide lucide-${stat.iconName} ${stat.color} mx-auto mb-3`} width={32} height={32} />
                <p className={`text-3xl font-extrabold ${stat.color} leading-none`}>{stat.value}</p>
                <p className="text-gray-500 text-sm font-medium mt-2">{stat.label}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

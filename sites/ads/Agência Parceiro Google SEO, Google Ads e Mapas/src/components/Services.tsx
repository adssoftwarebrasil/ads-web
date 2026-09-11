import { TrendingUp, Globe, ShoppingCart, Link2, ArrowRight } from 'lucide-react';
import type { CSSProperties, ReactNode } from 'react';

interface Service {
  icon: ReactNode;
  iconBg: string;
  color: string;
  title: string;
  description: string;
  delay: string;
}

const services: Service[] = [
  {
    icon: (
      <div className="grid grid-cols-2 gap-1 w-full h-full p-2">
        <img
          src="https://storage.lucasmendes.dev/site-sp/ads-marketing%2FLogo-google-map-design-on-transparent-background-PNG.png"
          alt="Map 1"
          className="w-full h-full object-contain"
        />
        <img
          src="https://storage.lucasmendes.dev/site-sp/ads-marketing%2FBing_Maps_Platform-Logo.wine.png"
          alt="Map 2"
          className="w-full h-full object-contain"
        />
        <img
          src="https://storage.lucasmendes.dev/site-sp/ads-marketing%2Fintro_icon__dfyvjc1ohbcm_large.png"
          alt="Map 3"
          className="w-full h-full object-contain"
        />
        <img
          src="https://storage.lucasmendes.dev/site-sp/ads-marketing%2F143.png"
          alt="Map 4"
          className="w-full h-full object-contain"
        />
      </div>
    ),
    iconBg: 'rgba(66, 133, 244, 0.082)',
    color: 'rgb(66, 133, 244)',
    title: 'Gerenciamento de Mapas e Diretórios',
    description:
      'Otimize sua presença em +50 diretórios. Domine as buscas locais e apareça para quem está perto de você.',
    delay: '0s',
  },
  {
    icon: <TrendingUp size={28} style={{ color: 'rgb(15, 157, 88)' }} />,
    iconBg: 'rgba(15, 157, 88, 0.082)',
    color: 'rgb(15, 157, 88)',
    title: 'S.E.O. (Ranqueamento Orgânico)',
    description:
      'Visibilidade contínua no topo dos resultados. Custo zero por clique e alta conversão regional.',
    delay: '0.1s',
  },
  {
    icon: (
      <img
        src="https://storage.lucasmendes.dev/site-sp/ads-marketing%2Fgoogle-ads.png"
        alt="Google Ads (Anúncios Patrocinados)"
        className="w-full h-full object-contain p-1"
      />
    ),
    iconBg: 'rgba(244, 180, 0, 0.082)',
    color: 'rgb(244, 180, 0)',
    title: 'Google Ads (Anúncios Patrocinados)',
    description:
      'Tráfego qualificado imediato com pagamento por clique (PPC). Gestão profissional para o maior ROI.',
    delay: '0.2s',
  },
  {
    icon: <Globe size={28} style={{ color: 'rgb(219, 68, 55)' }} />,
    iconBg: 'rgba(219, 68, 55, 0.082)',
    color: 'rgb(219, 68, 55)',
    title: 'Sites Otimizados para SEO',
    description:
      'Desenvolvimento de sites responsivos, com navegação intuitiva e estrutura otimizada para credibilidade online.',
    delay: '0.3s',
  },
  {
    icon: <ShoppingCart size={28} style={{ color: 'rgb(66, 133, 244)' }} />,
    iconBg: 'rgba(66, 133, 244, 0.082)',
    color: 'rgb(66, 133, 244)',
    title: 'E-commerce (Loja Online)',
    description:
      'Plataforma segura, catálogo de produtos otimizado e processamento de pagamentos para sua loja virtual.',
    delay: '0.4s',
  },
  {
    icon: <Link2 size={28} style={{ color: 'rgb(15, 157, 88)' }} />,
    iconBg: 'rgba(15, 157, 88, 0.082)',
    color: 'rgb(15, 157, 88)',
    title: 'Backlinks e Autoridade',
    description:
      'Aumente a autoridade e credibilidade do seu site, melhorando o ranqueamento e atraindo tráfego qualificado.',
    delay: '0.5s',
  },
];

const anim = (spec: string): CSSProperties => ({ animation: spec });

export default function Services() {
  return (
    <section id="servicos" className="py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Nossas Soluções para seu
            <span className="block mt-1 text-blue-600">Sucesso Digital</span>
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
            Estratégias comprovadas para aumentar sua visibilidade online
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((s) => (
            <div
              key={s.title}
              className="group bg-white rounded-xl p-6 sm:p-8 border border-gray-200 hover:border-gray-300 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer"
              style={anim(`0.5s ease-out ${s.delay} 1 normal backwards running fadeIn`)}
            >
              <div
                className="w-14 h-14 sm:w-16 sm:h-16 rounded-xl flex items-center justify-center mb-5 group-hover:scale-105 transition-transform duration-300"
                style={{ backgroundColor: s.iconBg, boxShadow: 'none' }}
              >
                {s.icon}
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3">{s.title}</h3>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-4">
                {s.description}
              </p>
              <div
                className="flex items-center text-sm font-semibold transition-all duration-300 opacity-0 group-hover:opacity-100 -translate-y-[5px] group-hover:translate-y-0"
                style={{ color: s.color }}
              >
                Saiba mais
                <ArrowRight
                  size={16}
                  className="ml-1 group-hover:translate-x-1 transition-transform duration-300"
                />
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-12 sm:mt-16">
          <button className="px-6 sm:px-8 py-3 sm:py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-all duration-300 hover:shadow-lg">
            Fale com um Especialista
          </button>
        </div>
      </div>
    </section>
  );
}

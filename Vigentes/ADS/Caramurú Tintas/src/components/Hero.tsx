import { ArrowRight, Award, Clock, MapPin } from 'lucide-react';
import WhatsAppIcon from './WhatsAppIcon';
import { WHATSAPP_URL, scrollToSection } from '../lib/site';

const stats = [
  { icon: Award, title: '30 Anos', subtitle: 'de Experiência' },
  { icon: Clock, title: 'Atendimento', subtitle: 'Segunda à Sábado' },
  { icon: MapPin, title: 'Salgueiro', subtitle: 'Pernambuco' },
];

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage:
            'url("https://storage.lucasmendes.dev/site-sp/caramuru%20tintas%2Fimg%2Fhero-background-tintas.webp")',
          backgroundSize: 'cover',
          backgroundPosition: 'center center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent"></div>
      </div>
      <div className="container mx-auto px-4 relative z-10 pt-24 pb-16 md:pt-32 md:pb-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-white space-y-6 md:space-y-8">
            <div className="inline-block">
              <div className="bg-yellow-400 text-black px-4 py-2 rounded-full font-bold text-sm md:text-base animate-pulse">
                Há quase 30 anos transformando ambientes
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Especialistas em Tintas{' '}
              <span className="text-yellow-400">Imobiliárias, Automotivas e Industriais</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-200 leading-relaxed">
              Desde 1998, a Caramurú Tintas oferece produtos de alta qualidade e atendimento
              especializado para transformar seus projetos em realidade. Somos referência em
              Salgueiro-PE com a maior variedade de tintas e materiais para pintura da região.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button
                onClick={() => scrollToSection('contact')}
                className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-4 rounded-lg font-bold text-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2"
              >
                Solicitar Orçamento
                <ArrowRight size={20} />
              </button>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 text-white px-8 py-4 rounded-lg font-bold text-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2"
              >
                WhatsApp
                <WhatsAppIcon className="w-5 h-5" />
              </a>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-8">
              {stats.map((stat) => {
                const Icon = stat.icon;
                return (
                  <div
                    key={stat.title}
                    className="flex items-center gap-3 bg-white/10 backdrop-blur-sm p-4 rounded-lg"
                  >
                    <Icon size={32} className="text-yellow-400 flex-shrink-0" />
                    <div>
                      <div className="font-bold text-lg">{stat.title}</div>
                      <div className="text-sm text-gray-300">{stat.subtitle}</div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent z-10"></div>
    </section>
  );
}

import { ArrowRight, Heart, User, Sparkles, Users } from 'lucide-react';
import { openWhatsApp, scrollToSection } from '../lib/whatsapp';

const FEATURES = [
  { Icon: Heart, title: 'Vestidos de Noiva', desc: 'Modelos exclusivos para seu grande dia' },
  { Icon: User, title: 'Trajes para Noivo', desc: 'Sofisticação e estilo para ele' },
  { Icon: Sparkles, title: 'Moda Festa', desc: 'Elegância para todas as ocasiões' },
  { Icon: Users, title: 'Daminhas e Pajens', desc: 'Roupa perfeita para os pequenos' },
];

export default function Hero() {
  return (
    <section id="hero" className="relative w-full min-h-screen bg-[#FAFFEF] pt-24 pb-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative w-full bg-white rounded-3xl shadow-2xl overflow-hidden mb-12 animate-fade-in">
          <img
            src="https://storage.lucasmendes.dev/site-sp/atelienoivaecia%2Fhero-comtextos-banner.webp"
            alt="Vestindo Sonhos, Celebrando Momentos - Ateliê Noiva e Cia"
            className="w-full h-auto object-cover md:object-contain"
          />
        </div>
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#721515] mb-6 leading-tight">
            O vestido dos seus sonhos está a um clique de distância.
          </h2>
          <button
            onClick={() => scrollToSection('contact')}
            className="group inline-flex items-center gap-3 bg-[#721515] hover:bg-[#8b1a1a] text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
          >
            Agendar Atendimento
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {FEATURES.map(({ Icon, title, desc }, i) => (
            <div
              key={title}
              className="group bg-white rounded-2xl p-6 shadow-md hover:shadow-2xl transition-all duration-300 border border-gray-100 flex flex-col items-center text-center hover:-translate-y-1"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <div className="p-3 bg-[#FAFFEF] rounded-full mb-4 text-[#721515] group-hover:bg-[#721515] group-hover:text-white transition-colors">
                <Icon className="w-8 h-8" />
              </div>
              <h3 className="font-bold text-lg text-[#721515] mb-2">{title}</h3>
              <p className="text-sm text-gray-600">{desc}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-white to-transparent -z-10 pointer-events-none"></div>
    </section>
  );
}

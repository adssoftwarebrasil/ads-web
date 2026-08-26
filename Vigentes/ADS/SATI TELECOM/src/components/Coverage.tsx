import { Navigation, MapPin, Globe, Phone, Check } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { scrollToSection } from '../lib/nav';

type Card = { Icon: LucideIcon; iconClass: string; title: string; text: string };
const cards: Card[] = [
  { Icon: Globe, iconClass: 'lucide-globe', title: 'Cobertura Total', text: '27 unidades federativas' },
  { Icon: MapPin, iconClass: 'lucide-map-pin', title: 'Sede em SC', text: 'Chapecó - Santa Catarina' },
  { Icon: Phone, iconClass: 'lucide-phone', title: 'Suporte Nacional', text: 'Atendimento em todo Brasil' },
];

export default function Coverage() {
  return (
    <section
      id="coverage"
      className="relative py-20 lg:py-28 bg-gradient-to-b from-gray-50 via-white to-gray-50 overflow-hidden"
    >
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-0 w-96 h-96 bg-[#3d009e] rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-0 w-96 h-96 bg-[#bc0000] rounded-full blur-3xl"></div>
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-gradient-to-r from-[#3d009e]/10 to-[#bc0000]/10 px-4 py-2 rounded-full mb-6">
            <Navigation className="lucide lucide-navigation w-5 h-5 text-[#3d009e] mr-2" />
            <span className="text-sm font-semibold bg-gradient-to-r from-[#3d009e] to-[#bc0000] text-transparent bg-clip-text">
              Nossa Presença
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Cobertura Nacional</h2>
          <p className="text-lg sm:text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Soluções em telefonia corporativa para todo o Brasil
          </p>
          <div className="inline-flex flex-col sm:flex-row items-center bg-gradient-to-r from-[#3d009e] to-[#5a1abd] text-white px-8 py-5 rounded-2xl shadow-2xl">
            <MapPin className="lucide lucide-map-pin w-8 h-8 mr-3 mb-2 sm:mb-0" />
            <div className="text-center sm:text-left">
              <span className="text-2xl sm:text-3xl font-bold block">Todo o Brasil</span>
              <span className="text-sm text-white/90">Atendemos todos os 26 estados + DF</span>
            </div>
          </div>
        </div>
        <div className="grid sm:grid-cols-3 gap-6 mb-16">
          {cards.map((c) => (
            <div
              key={c.title}
              className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100"
            >
              <div className="w-12 h-12 bg-gradient-to-br from-[#3d009e] to-[#5a1abd] rounded-lg flex items-center justify-center mb-4">
                <c.Icon className={`lucide ${c.iconClass} w-6 h-6 text-white`} />
              </div>
              <h4 className="font-bold text-gray-900 mb-1">{c.title}</h4>
              <p className="text-sm text-gray-600">{c.text}</p>
            </div>
          ))}
        </div>
        <div className="mb-12">
          <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-100">
            <div className="bg-gradient-to-r from-[#3d009e] to-[#5a1abd] px-6 py-5 flex items-center justify-center">
              <MapPin className="lucide lucide-map-pin w-6 h-6 text-white mr-3" />
              <h3 className="text-xl font-bold text-white">Mapa de Cobertura Interativo</h3>
            </div>
            <div className="relative w-full bg-gray-50 h-[500px] sm:h-[600px] md:h-[700px] lg:h-[800px]">
              <iframe
                src="https://www-satitelecom-com-br.filesusr.com/html/4147c4_ebaf67bd48c7ff757deff953198d1985.html"
                className="absolute top-0 left-0 w-full h-full border-0"
                title="Mapa de Cobertura Sati Telecom"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
        <div className="max-w-3xl mx-auto">
          <div className="bg-gradient-to-br from-[#3d009e] to-[#5a1abd] rounded-2xl p-8 lg:p-10 text-white shadow-2xl">
            <div className="text-center mb-8">
              <h3 className="text-2xl lg:text-3xl font-bold mb-3">Verifique a Cobertura na Sua Região</h3>
              <p className="text-white/90 text-lg">Entre em contato e descubra como podemos atender sua empresa</p>
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              <button
                onClick={() => scrollToSection('contact')}
                className="w-full bg-[#bc0000] hover:bg-[#9a0000] text-white py-4 px-6 rounded-xl font-bold text-lg transition-all duration-300 shadow-lg hover:shadow-2xl hover:scale-105 flex items-center justify-center group"
              >
                <span>Solicitar Orçamento</span>
                <Navigation className="lucide lucide-navigation w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
              <a
                href="tel:4933613600"
                className="w-full bg-white text-[#3d009e] py-4 px-6 rounded-xl font-bold text-lg hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 flex items-center justify-center group"
              >
                <Phone className="lucide lucide-phone w-5 h-5 mr-2 group-hover:rotate-12 transition-transform" />
                <span>(49) 3361-3600</span>
              </a>
            </div>
            <div className="mt-6 pt-6 border-t border-white/20 text-center">
              <p className="text-white/80 text-sm flex items-center justify-center">
                <Check className="lucide lucide-check w-5 h-5 mr-2 text-green-400" />
                Atendimento humanizado e suporte especializado em todo o Brasil
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

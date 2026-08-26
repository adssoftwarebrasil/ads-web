import { Quote, Star } from 'lucide-react';
import type { CSSProperties } from 'react';

interface CaseCard {
  image: string;
  name: string;
  color: string;
  label: string;
  delay: string;
}

const cases: CaseCard[] = [
  {
    image: 'https://storage.lucasmendes.dev/site-sp/ads-marketing%2Fcases-6-GP.png',
    name: 'Ortobom',
    color: 'rgb(66, 133, 244)',
    label: 'Aumento de Visitantes',
    delay: '0s',
  },
  {
    image: 'https://storage.lucasmendes.dev/site-sp/ads-marketing%2Fcases-3-GP.png',
    name: 'Saga Volkswagen',
    color: 'rgb(15, 157, 88)',
    label: 'Crescimento de Visitantes',
    delay: '0.1s',
  },
  {
    image: 'https://storage.lucasmendes.dev/site-sp/ads-marketing%2F11.jpg',
    name: 'Óticas Diniz',
    color: 'rgb(244, 180, 0)',
    label: 'Aumento em Vendas',
    delay: '0.2s',
  },
];

const anim = (spec: string): CSSProperties => ({ animation: spec });

export default function Cases() {
  return (
    <section id="cases" className="py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Resultados que <span className="text-blue-600">Falam por Si</span>
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
            80% das compras começam por pesquisas no Google. Veja o impacto que geramos:
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-12 sm:mb-16">
          {cases.map((c) => (
            <div
              key={c.name}
              className="bg-white rounded-xl border border-gray-200 overflow-hidden hover:border-gray-300 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              style={anim(`0.5s ease-out ${c.delay} 1 normal backwards running fadeIn`)}
            >
              <div className="relative h-48 sm:h-56 bg-gray-100 overflow-hidden">
                <img
                  src={c.image}
                  alt={c.name}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <p className="text-white font-semibold text-lg">{c.name}</p>
                </div>
              </div>
              <div className="p-6">
                <div
                  className="text-5xl sm:text-6xl font-bold mb-3 flex items-start"
                  style={{ color: c.color }}
                >
                  <span className="text-3xl mr-1">+</span>
                  <div>0</div>
                  <span className="text-3xl ml-1">%</span>
                </div>
                <p className="text-base sm:text-lg font-semibold text-gray-800">{c.label}</p>
              </div>
            </div>
          ))}
        </div>
        <div
          className="max-w-4xl mx-auto bg-white rounded-xl p-6 sm:p-8 lg:p-12 shadow-lg border border-gray-200"
          style={anim('0.6s ease-out 0.4s 1 normal backwards running fadeIn')}
        >
          <div className="relative">
            <Quote size={48} strokeWidth={1.5} className="text-blue-200 mb-4 opacity-50" />
            <blockquote>
              <p className="text-base sm:text-lg lg:text-xl text-gray-700 leading-relaxed mb-6 italic">
                "O trabalho da agência foi fundamental para aumentar nossa presença digital.
                Implementaram estratégias eficazes de SEO e gerenciamento do Google Meu Negócio, e
                vimos um crescimento notável nas vendas..."
              </p>
              <footer className="flex items-center gap-4 flex-wrap">
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center text-white font-bold text-lg shadow-md">
                  CA
                </div>
                <div className="flex-1 min-w-[150px]">
                  <div className="font-bold text-gray-900 text-base sm:text-lg">Cláudio Almeida</div>
                  <div className="text-gray-600 text-sm sm:text-base">Saga Volkswagen</div>
                </div>
                <div className="flex gap-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} size={18} fill="#facc15" className="text-yellow-400" />
                  ))}
                </div>
              </footer>
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
}

import { MapPin, CheckCircle } from 'lucide-react';

const cities = [
  { name: 'Jaboatão dos Guararapes', sub: 'Centro', status: 'Cobertura Total' },
  { name: 'Candeias', sub: 'Cobertura Total', status: 'Cobertura Ativa' },
  { name: 'Piedade', sub: 'Sinal Forte', status: 'Cobertura Ativa' },
  { name: 'Barra de Jangada', sub: 'Alta Velocidade', status: 'Cobertura Ativa' },
  { name: 'Cajueiro Seco', sub: 'Disponível', status: 'Cobertura Ativa' },
];

export default function Coverage() {
  return (
    <section className="py-20 bg-gradient-to-b from-[#f0f7ff] to-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <svg className="w-full h-full" viewBox="0 0 800 600">
          <path d="M400 100 L450 200 L500 150 L550 250 L600 200" stroke="currentColor" strokeWidth="2" fill="none" className="text-[#306eb7]"></path>
          <circle cx="400" cy="100" r="8" className="fill-[#306eb7] animate-pulse"></circle>
          <circle cx="450" cy="200" r="8" className="fill-[#306eb7] animate-pulse delay-200"></circle>
          <circle cx="500" cy="150" r="8" className="fill-[#306eb7] animate-pulse delay-400"></circle>
          <circle cx="550" cy="250" r="8" className="fill-[#306eb7] animate-pulse delay-600"></circle>
          <circle cx="600" cy="200" r="8" className="fill-[#306eb7] animate-pulse delay-800"></circle>
        </svg>
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-fadeInUp">
          <h2 className="text-4xl lg:text-5xl font-bold text-[#306eb7] mb-4">Levamos Internet de Qualidade Até Você</h2>
          <p className="text-xl text-gray-600">Cobertura completa nas principais localidades de Jaboatão</p>
        </div>
        <div className="max-w-3xl mx-auto space-y-4 mb-12">
          {cities.map((c, i) => (
            <div key={i} className="bg-white/80 backdrop-blur-sm border border-gray-200 rounded-2xl p-6 hover:shadow-lg hover:scale-102 transition-all duration-300 animate-fadeInUp" style={{ animationDelay: `${i * 100}ms` }}>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-[#306eb7] rounded-full flex items-center justify-center animate-pulse-icon">
                  <MapPin className="lucide lucide-map-pin w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-800">{c.name}</h3>
                  <p className="text-sm text-gray-600">{c.sub}</p>
                </div>
                <div className="flex items-center gap-2 bg-green-100 px-4 py-2 rounded-full">
                  <CheckCircle className="lucide lucide-check-circle w-4 h-4 text-green-600" />
                  <span className="text-sm font-semibold text-green-700">{c.status}</span>
                </div>
              </div>
              <p className="text-xs text-gray-500 mt-3 ml-16">Consulte disponibilidade no seu endereço</p>
            </div>
          ))}
        </div>
        <div className="text-center animate-fadeInUp delay-500">
          <button className="bg-[#306eb7] text-white px-12 py-5 rounded-xl font-bold text-lg hover:bg-[#1a4d8f] transition-all duration-300 hover:shadow-xl transform hover:-translate-y-1">VERIFICAR COBERTURA NO MEU ENDEREÇO</button>
        </div>
      </div>
    </section>
  );
}

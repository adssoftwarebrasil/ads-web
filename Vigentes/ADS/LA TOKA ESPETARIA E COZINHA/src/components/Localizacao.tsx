import { MapPin, Clock, Navigation, UtensilsCrossed } from 'lucide-react';
import { unidades } from '../lib/unidades';

const horarios: { dia: string; horario: string }[] = [
  { dia: 'Segunda-feira', horario: '17:30 - 23:30' },
  { dia: 'Terça-feira', horario: '17:30 - 23:30' },
  { dia: 'Quarta-feira', horario: '17:30 - 23:30' },
  { dia: 'Quinta-feira', horario: '17:30 - 23:30' },
  { dia: 'Sexta-feira', horario: '17:30 - 23:30' },
  { dia: 'Sábado', horario: '17:30 - 23:30' },
  { dia: 'Domingo', horario: '17:30 - 23:30' },
];

export default function Localizacao() {
  return (
    <div id="localizacao">
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#2D2D2D] via-[#2D2D2D] to-[#FFF5E6]"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-12">
            <p className="text-[#FFD700] font-semibold uppercase tracking-wide mb-3">NOSSAS UNIDADES</p>
            <h2 className="text-3xl md:text-5xl font-bold text-white text-shadow">Venha nos Visitar</h2>
            <p className="text-lg text-gray-200 mt-4">Duas lojas em Goiânia para você aproveitar</p>
          </div>
          <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {unidades.map((unidade, i) => (
              <div
                key={unidade.id}
                className="bg-white rounded-2xl shadow-2xl overflow-hidden flex flex-col transform transition-all duration-1000 translate-y-0 opacity-100"
                style={{ transitionDelay: `${i * 200}ms` }}
              >
                <div className="h-64 md:h-72">
                  <iframe
                    src={unidade.mapsEmbed}
                    width="100%"
                    height="100%"
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title={`Mapa da unidade ${unidade.nome} - La Toka Espetaria`}
                    style={{ border: '0px', display: 'block' }}
                  ></iframe>
                </div>
                <div className="p-6 md:p-8 flex flex-col flex-1">
                  <h3 className="text-2xl md:text-3xl font-bold text-[#1A1A1A] mb-6">Unidade {unidade.nome}</h3>
                  <div className="space-y-6 mb-8 flex-1">
                    <div className="flex items-start gap-4">
                      <div className="bg-[#F93131] p-3 rounded-lg flex-shrink-0">
                        <MapPin className="lucide lucide-map-pin w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-[#1A1A1A] mb-2">Endereço</h4>
                        <p className="text-[#2D2D2D]">
                          {unidade.endereco.map((linha) => (
                            <span key={linha} className="block">
                              {linha}
                            </span>
                          ))}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="bg-[#F93131] p-3 rounded-lg flex-shrink-0">
                        <Clock className="lucide lucide-clock w-6 h-6 text-white" />
                      </div>
                      <div className="w-full">
                        <h4 className="font-semibold text-[#1A1A1A] mb-3">Horários</h4>
                        <div className="bg-[#FFF5E6] rounded-lg p-4">
                          <div className="space-y-2">
                            {horarios.map(({ dia, horario }) => (
                              <div key={dia} className="flex justify-between text-sm">
                                <span className="text-[#2D2D2D]">{dia}</span>
                                <span className="font-semibold text-[#F93131]">{horario}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <a
                      href={unidade.mapsDir}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 bg-[#F93131] hover:bg-[#C41E3A] text-white px-6 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
                    >
                      <Navigation className="lucide lucide-navigation w-5 h-5" />
                      COMO CHEGAR
                    </a>
                    <a
                      href={unidade.ifood}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 bg-[#EA1D2C] hover:bg-[#D01826] text-white px-6 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
                    >
                      <UtensilsCrossed className="lucide lucide-utensils-crossed w-5 h-5" />
                      PEDIR NO IFOOD
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

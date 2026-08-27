import { MapPin } from 'lucide-react';
import Reveal from './Reveal';

const cidades = [
  'Salvador',
  'Lauro de Freitas',
  'Camaçari',
  'Simões Filho',
  'São Francisco do Conde',
  'Candeias',
  "Dias D'Ávila",
  'Mata de São João',
  'Pojuca',
  'São Sebastião do Passé',
  'Vera Cruz',
  'Madre de Deus',
  'Itaparica',
  'Feira de Santana',
  'Vitória da Conquista',
  'Itabuna',
  'Eunápolis',
  'Barreiras',
];

export default function AreaAtuacao() {
  return (
    <section id="area-atuacao" className="py-16 lg:py-20 bg-[rgb(247,247,247)]">
      <div className="max-w-[1200px] mx-auto px-5 lg:px-20">
        <Reveal>
          <div className="text-center mb-12">
            <h2 className="text-[28px] lg:text-[40px] font-bold text-[rgb(9,74,104)] mb-4">Onde Atuamos</h2>
            <p className="text-[18px] text-[rgb(28,123,179)] font-medium">Cobertura completa no estado da Bahia</p>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
            {cidades.map((cidade, i) => (
              <div
                key={cidade}
                className="bg-white p-4 rounded-lg flex items-center gap-3 hover:scale-105 transition-all duration-300 shadow-sm reveal-item"
                style={{ transitionDelay: `${i * 50}ms` }}
              >
                <MapPin
                  width={20}
                  height={20}
                  strokeWidth={2}
                  className="lucide lucide-map-pin text-[rgb(28,123,179)] flex-shrink-0"
                />
                <span className="text-gray-700 font-medium text-[15px]">{cidade}</span>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

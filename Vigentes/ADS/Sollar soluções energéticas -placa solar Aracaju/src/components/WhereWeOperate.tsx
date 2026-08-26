import { MapPin } from 'lucide-react';

interface Region {
  state: string;
  cities: string[];
}

const regions: Region[] = [
  { state: 'Sergipe', cities: ['Aracaju', 'Nossa Senhora do Socorro', 'Lagarto', 'Itabaiana'] },
  { state: 'Bahia', cities: ['Salvador', 'Feira de Santana', 'Vitória da Conquista'] },
  { state: 'Alagoas', cities: ['Maceió', 'Arapiraca', 'Palmeira dos Índios'] },
];

export default function WhereWeOperate() {
  return (
    <section className="py-20 lg:py-32 bg-[rgb(40,68,126)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">Onde Atuamos</h2>
          <div className="w-20 h-1 bg-[rgb(237,185,47)] mx-auto mb-6"></div>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
            Atendimento em todo o Nordeste com equipe técnica especializada e suporte local.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {regions.map((r) => (
            <div
              key={r.state}
              className="bg-white/95 backdrop-blur-sm rounded-xl p-8 shadow-2xl transform hover:scale-105 transition-all duration-300"
            >
              <div className="flex items-center justify-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-[rgb(237,185,47)] to-[rgb(222,143,34)] rounded-full flex items-center justify-center">
                  <MapPin width={32} height={32} className="lucide lucide-map-pin text-white" />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-[rgb(40,68,126)] text-center mb-4">{r.state}</h3>
              <ul className="space-y-2">
                {r.cities.map((c) => (
                  <li key={c} className="text-gray-700 text-center">
                    {c}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

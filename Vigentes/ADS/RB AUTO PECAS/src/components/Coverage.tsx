import { MapPin } from 'lucide-react';

const CITIES = [
  'Acreúna',
  'Nova Acreúna',
  'Paraúna',
  'Indiara',
  'Santo Antônio da Barra',
  'Rio Verde',
  'Edéia',
  'Usina Nova Gália',
  'Usina Denusa',
  'Todos os Lugares',
];

export default function Coverage() {
  return (
    <section className="py-20 md:py-28 bg-[#0f0f0f] border-y border-[#2a2a2a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-start lg:items-center gap-10 lg:gap-20">
          <div className="flex-shrink-0 lg:w-80">
            <span className="inline-block text-red-500 text-xs font-bold tracking-widest uppercase mb-4">
              Área de atendimento
            </span>
            <h2 className="font-['Barlow_Condensed'] font-black text-white text-4xl sm:text-5xl md:text-6xl leading-tight mb-4">
              ATENDEMOS
              <br />
              <span className="text-red-500">TODO</span> O
              <br />
              SUDOESTE GOIANO
            </h2>
            <p className="text-gray-400 text-sm md:text-base leading-relaxed">
              Levamos nossos produtos e serviços a você onde quer que esteja na região.
            </p>
          </div>

          <div className="flex-1 w-full">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
              {CITIES.map((city, index) => (
                <div
                  key={index}
                  className={`flex items-center gap-2 rounded-xl px-4 py-3 border transition-all duration-200 ${
                    city === 'Acreúna'
                      ? 'bg-red-600/20 border-red-600/50 text-red-300'
                      : city === 'Todos os Lugares'
                      ? 'bg-white/5 border-white/15 text-white col-span-2 sm:col-span-1'
                      : 'bg-[#1a1a1a] border-[#2a2a2a] text-gray-300 hover:border-red-600/30 hover:text-white'
                  }`}
                >
                  <MapPin size={13} className={city === 'Acreúna' ? 'text-red-400 flex-shrink-0' : 'text-gray-500 flex-shrink-0'} />
                  <span className="text-xs font-medium truncate">{city}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

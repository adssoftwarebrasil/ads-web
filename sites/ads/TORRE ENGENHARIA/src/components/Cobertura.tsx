import { MapPin } from 'lucide-react';

const cities = [
  'Rondonópolis',
  'Jaciara',
  'Pedra Preta',
  'Itiquira',
  'Juscimeira',
  'São José do Povo',
  'Poxoréu',
  'Guiratinga',
  'Dom Aquino',
  'Tesouro',
  'Sonora',
  'Alto Araguaia',
  'Santo Antônio de Leverger',
  'São Pedro da Cipa',
  'Alto Garças',
];

export default function Cobertura() {
  return (
    <section id="cobertura" className="py-20 md:py-28 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <p className="text-brand-blue font-semibold uppercase tracking-widest text-xs mb-3">
            Área de Atendimento
          </p>
          <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-5 leading-tight">
            Atuamos em toda a região
          </h2>
          <p className="text-gray-500 text-lg max-w-xl mx-auto leading-relaxed">
            Com base em Rondonópolis, atendemos diversas cidades do Mato Grosso com a mesma
            qualidade e dedicação.
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-3">
          {cities.map((city, index) => {
            const active = index === 0;
            return (
              <div
                key={city}
                className={`flex items-center gap-2 rounded-full px-4 py-2.5 border transition-all duration-200 cursor-default ${
                  active
                    ? 'bg-brand-blue text-white border-brand-blue shadow-md shadow-brand-blue/20 font-semibold'
                    : 'bg-white text-gray-700 border-gray-200 hover:border-brand-blue/50 hover:bg-brand-blue/5 font-medium'
                }`}
              >
                <MapPin
                  size={13}
                  className={active ? 'text-white' : 'text-brand-blue'}
                />
                <span className="text-sm">{city}</span>
              </div>
            );
          })}
        </div>
        <p className="text-center text-gray-400 text-sm mt-8">
          Não viu sua cidade? Entre em contato — podemos atender em outras localidades.
        </p>
      </div>
    </section>
  );
}

import { MapPin } from 'lucide-react';

const areas = [
  'Cuiabá',
  'Várzea Grande',
  'Chapada dos Guimarães',
  'Jangada',
  'Rosário Oeste',
  'Santo Antônio de Leverger',
  'Livramento',
  'Poconé',
  'Acorizal',
];

const cardClass =
  'group bg-gradient-to-br from-gray-50 to-white rounded-xl shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-gray-100 p-6 flex flex-col items-center justify-center w-[calc(50%-0.5rem)] sm:w-[calc(33.333%-1rem)] md:w-[calc(25%-1.125rem)] lg:w-[calc(20%-1.2rem)]';

export default function ServiceAreas() {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[rgb(63,59,116)] mb-4">
            Áreas de Atendimento
          </h2>
          <p className="text-lg text-gray-600">
            Levamos equipamentos de qualidade para toda a região
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-4 sm:gap-6 max-w-6xl mx-auto">
          {areas.map((area) => (
            <div key={area} className={cardClass}>
              <div className="bg-[rgb(13,133,77)]/10 p-3 rounded-full mb-3 group-hover:bg-[rgb(13,133,77)] transition-colors duration-300">
                <MapPin className="lucide lucide-map-pin w-6 h-6 text-[rgb(13,133,77)] group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="text-center font-semibold text-gray-800 text-sm md:text-base leading-tight">
                {area}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

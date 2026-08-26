import { Calendar, Truck, Zap } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

interface Stat {
  Icon: LucideIcon;
  title: string;
  description: string;
}

const stats: Stat[] = [
  { Icon: Calendar, title: '21 Anos', description: 'De tradição familiar no mercado' },
  { Icon: Truck, title: 'Delivery', description: 'Entrega rápida onde você estiver' },
  { Icon: Zap, title: 'Tecnologia', description: 'Diagnóstico Raster atualizado' },
];

export default function Stats() {
  return (
    <section className="bg-[rgb(253,253,253)] py-16 lg:py-24">
      <div className="container mx-auto px-4 lg:px-6">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-12 text-[rgb(32,29,30)]">
          Mais de duas décadas servindo Rondonópolis
        </h2>
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {stats.map(({ Icon, title, description }) => (
            <div
              key={title}
              className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 text-center"
            >
              <div className="bg-[rgb(234,29,34)] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon width={32} height={32} className="text-white" />
              </div>
              <h3 className="text-2xl font-bold text-[rgb(32,29,30)] mb-2">{title}</h3>
              <p className="text-gray-600 text-lg">{description}</p>
            </div>
          ))}
        </div>
        <div className="flex justify-center">
          <img
            src="https://storage.lucasmendes.dev/site-sp/mundo%20das%20baterias%2Fimg%2Floja-baterias-anuncio.webp"
            alt="Loja Mundo das Baterias"
            className="rounded-2xl shadow-2xl max-w-full md:max-w-2xl"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}

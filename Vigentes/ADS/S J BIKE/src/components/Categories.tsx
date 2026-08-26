import { Bike, Mountain, Zap, Baby, LucideIcon } from 'lucide-react';

interface Category {
  Icon: LucideIcon;
  iconClass: string;
  title: string;
  description: string;
}

const categories: Category[] = [
  {
    Icon: Bike,
    iconClass: 'lucide lucide-bike w-14 h-14 text-[rgb(253,88,34)]',
    title: 'Bicicletas Urbanas',
    description: 'Conforto e praticidade para o dia a dia na cidade',
  },
  {
    Icon: Mountain,
    iconClass: 'lucide lucide-mountain w-14 h-14 text-[rgb(253,88,34)]',
    title: 'Bicicletas de Trilha',
    description: 'Desempenho e resistência para aventuras off-road',
  },
  {
    Icon: Zap,
    iconClass: 'lucide lucide-zap w-14 h-14 text-[rgb(253,88,34)]',
    title: 'Bicicletas Elétricas',
    description: 'Tecnologia e facilidade para percorrer maiores distâncias',
  },
  {
    Icon: Baby,
    iconClass: 'lucide lucide-baby w-14 h-14 text-[rgb(253,88,34)]',
    title: 'Bicicletas Infantis',
    description: 'Segurança e diversão para os pequenos ciclistas',
  },
];

export default function Categories() {
  return (
    <section
      id="produtos"
      className="py-24 bg-gradient-to-b from-white to-gray-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block bg-[rgb(253,88,34)]/10 text-[rgb(253,88,34)] px-4 py-2 rounded-full text-sm font-semibold mb-4">
            NOSSAS CATEGORIAS
          </div>
          <h2 className="text-5xl font-bold text-black mb-6">
            Encontre Sua Bike Ideal
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Trabalhamos com os melhores modelos para todos os estilos de pedal
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map(({ Icon, iconClass, title, description }) => (
            <div
              key={title}
              className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl p-8 hover:-translate-y-3 transition-all duration-500 cursor-pointer border border-gray-100 hover:border-[rgb(253,88,34)] relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[rgb(253,88,34)] to-[rgb(230,70,20)] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
              <div className="flex justify-center mb-6 transform group-hover:scale-110 transition-transform duration-500">
                <div className="bg-[rgb(253,88,34)]/10 p-4 rounded-full">
                  <Icon className={iconClass} />
                </div>
              </div>
              <h3 className="text-xl font-bold text-black mb-4 text-center group-hover:text-[rgb(253,88,34)] transition-colors duration-300">
                {title}
              </h3>
              <p className="text-gray-600 text-center leading-relaxed">
                {description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

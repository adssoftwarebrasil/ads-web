import { Warehouse, Shield, Codesandbox, LucideIcon } from 'lucide-react';

interface Product {
  Icon: LucideIcon;
  iconClass: string;
  gradient: string;
  title: string;
  description: string;
  delay: string;
}

const products: Product[] = [
  {
    Icon: Warehouse,
    iconClass: 'lucide lucide-warehouse text-white',
    gradient: 'from-orange-500 to-orange-600',
    title: 'Telhas de Zinco Sob Medida',
    description: 'Telhas de zinco cortadas nas medidas exatas para seu projeto',
    delay: '300ms',
  },
  {
    Icon: Shield,
    iconClass: 'lucide lucide-shield text-white',
    gradient: 'from-orange-600 to-orange-700',
    title: 'Telas e Ferragens',
    description: 'Telas de qualidade para diversos tipos de aplicação',
    delay: '450ms',
  },
  {
    Icon: Codesandbox,
    iconClass: 'lucide lucide-codesandbox text-white',
    gradient: 'from-orange-500 to-orange-700',
    title: 'Bobinas',
    description: 'Bobinas de material resistente para suas necessidades',
    delay: '600ms',
  },
];

export default function Products() {
  return (
    <section id="produtos" className="py-12 sm:py-16 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[rgb(42,38,43)] mb-4 transition-all duration-1000 transform opacity-100 translate-y-0">
            Nossos Produtos
          </h2>
          <p
            className="text-lg sm:text-xl text-gray-600 transition-all duration-1000 transform opacity-100 translate-y-0"
            style={{ transitionDelay: '200ms' }}
          >
            Material de qualidade com preço justo
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {products.map(({ Icon, iconClass, gradient, title, description, delay }) => (
            <div
              key={title}
              className="group relative bg-white rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border-2 border-transparent hover:border-[rgb(238,115,62)] opacity-100 translate-y-0"
              style={{ transitionDelay: delay }}
            >
              <div className="relative mb-6">
                <div
                  className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${gradient} flex items-center justify-center transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}
                >
                  <Icon width={40} height={40} strokeWidth={2} className={iconClass} />
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-[rgb(238,115,62)] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="text-white text-xs font-bold">+</span>
                </div>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-[rgb(42,38,43)] mb-4 group-hover:text-[rgb(238,115,62)] transition-colors duration-300">
                {title}
              </h3>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                {description}
              </p>
              <div className="mt-6 pt-6 border-t border-gray-100 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <button className="text-[rgb(238,115,62)] font-semibold flex items-center gap-2 hover:gap-3 transition-all duration-300">
                  Solicitar orçamento<span>→</span>
                </button>
              </div>
            </div>
          ))}
        </div>
        <div
          className="mt-12 sm:mt-16 text-center transition-all duration-1000 transform opacity-100 translate-y-0"
          style={{ transitionDelay: '750ms' }}
        >
          <div className="inline-block bg-gradient-to-r from-[rgb(238,115,62)] to-orange-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full shadow-lg">
            <p className="font-semibold text-base sm:text-lg">
              📦 Entrega rápida para todo o Distrito Federal e Entorno
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

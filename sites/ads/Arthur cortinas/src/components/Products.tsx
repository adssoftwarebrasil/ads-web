import { Waves, AlignJustify, Home, Wallpaper, BedDouble, Square, LucideIcon } from 'lucide-react';
import { WHATSAPP_URL } from '../constants';

interface Product {
  icon: LucideIcon;
  iconClass: string;
  title: string;
  description: string;
}

const PRODUCTS: Product[] = [
  {
    icon: Waves,
    iconClass: 'lucide lucide-waves',
    title: 'Cortinas',
    description: 'Diversos estilos e tecidos para controle de luminosidade e decoração',
  },
  {
    icon: AlignJustify,
    iconClass: 'lucide lucide-align-justify',
    title: 'Persianas',
    description: 'Modelos que oferecem versatilidade e estilo para qualquer ambiente',
  },
  {
    icon: Home,
    iconClass: 'lucide lucide-home',
    title: 'Toldos',
    description: 'Soluções elegantes e funcionais para áreas externas',
  },
  {
    icon: Wallpaper,
    iconClass: 'lucide lucide-wallpaper',
    title: 'Papel de Parede',
    description: 'Coleções exclusivas para transformar suas paredes',
  },
  {
    icon: BedDouble,
    iconClass: 'lucide lucide-bed-double',
    title: 'Colchas',
    description: 'Opções sofisticadas para decoração de quartos',
  },
  {
    icon: Square,
    iconClass: 'lucide lucide-square',
    title: 'Almofadas Decorativas',
    description: 'Acessórios que complementam e valorizam seu espaço',
  },
];

export default function Products() {
  return (
    <section id="produtos" className="py-20 md:py-32 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">Nossos Produtos</h2>
          <div className="w-24 h-1 bg-[rgb(218,165,33)] mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Soluções completas em decoração para transformar seu ambiente
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PRODUCTS.map((product, i) => {
            const Icon = product.icon;
            return (
              <div
                key={product.title}
                className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden hover:-translate-y-2"
                style={{ animationDelay: `${i * 100}ms` }}
              >
                <div className="p-8">
                  <div className="w-16 h-16 bg-gradient-to-br from-[rgb(218,165,33)] to-[rgb(198,145,13)] rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Icon className={`${product.iconClass} w-8 h-8 text-white`} />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-[rgb(218,165,33)] transition-colors duration-300">
                    {product.title}
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">{product.description}</p>
                  <a
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-[rgb(218,165,33)] font-semibold hover:text-[rgb(198,145,13)] transition-colors duration-300 group"
                  >
                    Saiba mais
                    <svg
                      className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                </div>
                <div className="h-1 bg-gradient-to-r from-[rgb(218,165,33)] to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

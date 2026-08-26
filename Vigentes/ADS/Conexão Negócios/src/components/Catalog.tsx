import { useState } from 'react';
import { ExternalLink } from 'lucide-react';

type Category = 'Linha Pesada' | 'Linha Leve' | 'Diesel Leve';

interface Product {
  img: string;
  name: string;
  category: Category;
}

const products: Product[] = [
  { img: '/LinhaPesada01.jpeg', name: 'TURBO HX55W', category: 'Linha Pesada' },
  { img: '/LinhaPesada02.jpeg', name: 'TURBO GTC4289BNS', category: 'Linha Pesada' },
  { img: '/LinhaPesada03.jpeg', name: 'TURBO S300BV126', category: 'Linha Pesada' },
  { img: '/LinhaPesada04.jpeg', name: 'TURBO TRATOR JOHN DEERE', category: 'Linha Pesada' },
  { img: '/LinhaLeve01.jpeg', name: 'TURBO CT16V', category: 'Linha Leve' },
  { img: '/LinhaLeve02.jpeg', name: 'TURBO GTB22V', category: 'Linha Leve' },
  { img: '/LinhaLeve03.jpeg', name: 'TURBO TF035HL', category: 'Linha Leve' },
  { img: '/LinhaLeve04.jpeg', name: 'TURBO CT20 HILUX', category: 'Linha Leve' },
  { img: '/DieselLeve01.jpeg', name: 'TURBO GT1749S', category: 'Diesel Leve' },
  { img: '/DieselLeve02.jpeg', name: 'TURBO K14', category: 'Diesel Leve' },
  { img: '/DieselLeve03.jpeg', name: 'TURBO TD04H', category: 'Diesel Leve' },
  { img: '/DieselLeve04.jpeg', name: 'TURBO HE221W', category: 'Diesel Leve' },
];

const filters = ['Todos', 'Linha Pesada', 'Linha Leve', 'Diesel Leve'] as const;

export default function Catalog() {
  const [active, setActive] = useState<(typeof filters)[number]>('Todos');

  const visible = active === 'Todos' ? products : products.filter((p) => p.category === active);

  return (
    <section id="catalogo" className="bg-white py-20 sm:py-28 px-4 sm:px-6 w-full">
      <div className="max-w-[1280px] mx-auto">
        <div className="max-w-[800px] mx-auto text-center mb-16">
          <span className="inline-block py-1 px-3 rounded-md bg-accent-red/10 text-accent-red text-sm font-bold uppercase tracking-wider mb-4">
            Catálogo Online
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-extrabold text-gray-900 leading-tight mb-4">
            Nossas Peças Originais
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto">
            Selecione a linha abaixo para filtrar ou navegue pelo catálogo completo de nossas turbinas.
          </p>
        </div>
        <div className="flex items-center justify-center gap-2 flex-wrap mb-12 bg-white p-4 border border-gray-100 rounded-2xl shadow-sm">
          <span className="text-sm font-bold text-gray-500 uppercase tracking-wider mr-2">Filtrar:</span>
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActive(f)}
              className={
                active === f
                  ? 'px-5 py-2.5 rounded-xl text-sm font-bold transition-colors duration-300 bg-primary-blue text-white shadow-lg'
                  : 'px-5 py-2.5 rounded-xl text-sm font-bold transition-colors duration-300 bg-white text-gray-800 border border-gray-200 hover:bg-gray-50 hover:border-gray-300'
              }
            >
              {f}
            </button>
          ))}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {visible.map((p) => (
            <div
              key={p.name}
              className="group bg-white border border-gray-100 rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col h-full"
            >
              <div className="relative w-full aspect-[4/3] bg-white overflow-hidden border-b border-gray-100">
                <div className="w-full h-full flex items-center justify-center p-2 cursor-pointer group/image">
                  <img
                    src={p.img}
                    alt={p.name}
                    loading="lazy"
                    className="w-full h-full object-contain transform group-hover/image:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
              <div className="p-5 flex flex-col flex-grow text-center">
                <h3 className="text-base sm:text-lg font-bold text-gray-900 leading-snug mb-5 flex-grow line-clamp-2">
                  {p.name}
                </h3>
                <div className="mt-auto">
                  <button className="w-full group/btn bg-gray-50 text-gray-900 border border-gray-200 text-xs sm:text-sm font-bold py-3 px-4 rounded-xl flex items-center justify-center gap-2 hover:bg-accent-red hover:text-white hover:border-accent-red transition-all duration-300">
                    Consultar Preço
                    <ExternalLink size={16} strokeWidth={2} className="transition-transform duration-300" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

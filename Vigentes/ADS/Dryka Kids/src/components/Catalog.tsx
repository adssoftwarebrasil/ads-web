import { useState } from 'react';
import { Filter, ShoppingBag, ChevronLeft, ChevronRight } from 'lucide-react';

const categories = [
  'Body Infantil Feminino',
  'Body Infantil Masculino',
  'Brinquedos infantis Eletronicos',
  'Chapeus de Banho',
  'Coletes de Banho Infantil',
  'Conjuntos Masculinos',
  'Conjuntos Masculinos Bebe',
  'Conjuntos Menina Bebe',
  'Conjuntos femininos',
  'Oculos de Mergulho',
  'Roupas de Banho feminino',
  'Todos',
  'Vestido femininos alinhados',
];

interface Product {
  img: string;
  category: string;
  ref: number;
}

const products: Product[] = [
  {
    img: 'https://storage.lucasmendes.dev/site-sp/dryka%20kids%2FBody%20Infantil%20Feminino%2FImagem%20do%20WhatsApp%20de%202025-11-18%20%C3%A0(s)%2021.58.40_0c0d4f24.webp',
    category: 'Body Infantil Feminino',
    ref: 0,
  },
  {
    img: 'https://storage.lucasmendes.dev/site-sp/dryka%20kids%2FBody%20Infantil%20Feminino%2FImagem%20do%20WhatsApp%20de%202025-11-18%20%C3%A0(s)%2021.58.40_1b1165bf.webp',
    category: 'Body Infantil Feminino',
    ref: 1,
  },
  {
    img: 'https://storage.lucasmendes.dev/site-sp/dryka%20kids%2FBody%20Infantil%20Feminino%2FImagem%20do%20WhatsApp%20de%202025-11-18%20%C3%A0(s)%2021.58.40_ff5f19f7.webp',
    category: 'Body Infantil Feminino',
    ref: 2,
  },
  {
    img: 'https://storage.lucasmendes.dev/site-sp/dryka%20kids%2FBody%20Infantil%20Feminino%2FImagem%20do%20WhatsApp%20de%202025-11-18%20%C3%A0(s)%2021.58.41_24b157f5.webp',
    category: 'Body Infantil Feminino',
    ref: 3,
  },
  {
    img: 'https://storage.lucasmendes.dev/site-sp/dryka%20kids%2FBody%20Infantil%20Feminino%2FImagem%20do%20WhatsApp%20de%202025-11-18%20%C3%A0(s)%2021.58.41_3744fb90.webp',
    category: 'Body Infantil Feminino',
    ref: 4,
  },
  {
    img: 'https://storage.lucasmendes.dev/site-sp/dryka%20kids%2FBody%20Infantil%20Feminino%2FImagem%20do%20WhatsApp%20de%202025-11-18%20%C3%A0(s)%2021.58.41_908c044d.webp',
    category: 'Body Infantil Feminino',
    ref: 5,
  },
  {
    img: 'https://storage.lucasmendes.dev/site-sp/dryka%20kids%2FBody%20Infantil%20Feminino%2FImagem%20do%20WhatsApp%20de%202025-11-18%20%C3%A0(s)%2021.58.41_dc3d52d1.webp',
    category: 'Body Infantil Feminino',
    ref: 6,
  },
  {
    img: 'https://storage.lucasmendes.dev/site-sp/dryka%20kids%2FBody%20Infantil%20Masculino%2FImagem%20do%20WhatsApp%20de%202025-11-18%20%C3%A0(s)%2021.58.41_4296aabc.webp',
    category: 'Body Infantil Masculino',
    ref: 7,
  },
  {
    img: 'https://storage.lucasmendes.dev/site-sp/dryka%20kids%2FBrinquedos%20infantis%20Eletronicos%2FImagem%20do%20WhatsApp%20de%202025-11-18%20%C3%A0(s)%2021.58.41_09370b6d.webp',
    category: 'Brinquedos infantis Eletronicos',
    ref: 8,
  },
  {
    img: 'https://storage.lucasmendes.dev/site-sp/dryka%20kids%2FBrinquedos%20infantis%20Eletronicos%2FImagem%20do%20WhatsApp%20de%202025-11-18%20%C3%A0(s)%2021.58.41_841c7195.webp',
    category: 'Brinquedos infantis Eletronicos',
    ref: 9,
  },
  {
    img: 'https://storage.lucasmendes.dev/site-sp/dryka%20kids%2FBrinquedos%20infantis%20Eletronicos%2FImagem%20do%20WhatsApp%20de%202025-11-18%20%C3%A0(s)%2021.58.41_a254d248.webp',
    category: 'Brinquedos infantis Eletronicos',
    ref: 10,
  },
  {
    img: 'https://storage.lucasmendes.dev/site-sp/dryka%20kids%2FBrinquedos%20infantis%20Eletronicos%2FImagem%20do%20WhatsApp%20de%202025-11-18%20%C3%A0(s)%2021.58.41_aa1e1b92.webp',
    category: 'Brinquedos infantis Eletronicos',
    ref: 11,
  },
];

const TOTAL_PRODUCTS = 73;
const TOTAL_PAGES = 7;

export default function Catalog() {
  const [activeCategory, setActiveCategory] = useState('Todos');
  const [page] = useState(1);

  return (
    <section id="categorias" className="py-16 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-gray-900 mb-4">
            Catálogo de <span className="text-pink-600">Produtos</span>
          </h2>
          <p className="text-gray-500 text-lg">Confira nossa coleção completa</p>
        </div>
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          <div className="flex items-center gap-2 text-gray-400 mr-2">
            <Filter width={20} height={20} />
            <span className="text-sm font-semibold uppercase tracking-wide">Filtros:</span>
          </div>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={
                activeCategory === cat
                  ? 'px-5 py-2 rounded-full text-sm font-semibold transition-all duration-300 bg-pink-600 text-white shadow-lg transform scale-105'
                  : 'px-5 py-2 rounded-full text-sm font-semibold transition-all duration-300 bg-white text-gray-600 border border-gray-200 hover:border-pink-300 hover:bg-pink-50'
              }
            >
              {cat}
            </button>
          ))}
        </div>
        <div className="text-gray-500 text-sm mb-6 text-right">
          Exibindo {products.length} de {TOTAL_PRODUCTS} produtos
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-12">
          {products.map((product) => (
            <div
              key={product.ref}
              className="bg-white rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 group flex flex-col"
            >
              <div className="relative aspect-[4/5] overflow-hidden bg-gray-100">
                <img
                  src={product.img}
                  alt={product.category}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute top-3 left-3">
                  <span className="bg-black/50 backdrop-blur-md text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                    {product.category}
                  </span>
                </div>
              </div>
              <div className="p-5 flex flex-col flex-grow">
                <h3 className="text-md font-bold text-gray-800 mb-4 line-clamp-2">
                  {product.category}
                </h3>
                <div className="mt-auto">
                  <a
                    href={`https://wa.me/558888033252?text=Olá! Tenho interesse no produto da categoria: ${product.category}. (Ref imagem: ${product.ref})`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-full gap-2 bg-white border-2 border-pink-600 text-pink-600 py-2 rounded-lg font-bold hover:bg-pink-600 hover:text-white transition-colors duration-300"
                  >
                    <ShoppingBag width={18} height={18} />
                    Consultar
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center items-center gap-4 mt-8">
          <button
            disabled={page === 1}
            className={
              page === 1
                ? 'p-3 rounded-full border transition-all bg-gray-100 text-gray-300 border-gray-200 cursor-not-allowed'
                : 'p-3 rounded-full border transition-all bg-white text-gray-700 border-gray-300 hover:bg-pink-50 hover:border-pink-300 hover:text-pink-600 shadow-sm'
            }
          >
            <ChevronLeft />
          </button>
          <div className="flex items-center gap-2">
            <span className="font-bold text-gray-900">{page}</span>
            <span className="text-gray-400">/</span>
            <span className="text-gray-500">{TOTAL_PAGES}</span>
          </div>
          <button className="p-3 rounded-full border transition-all bg-white text-gray-700 border-gray-300 hover:bg-pink-50 hover:border-pink-300 hover:text-pink-600 shadow-sm">
            <ChevronRight />
          </button>
        </div>
      </div>
    </section>
  );
}

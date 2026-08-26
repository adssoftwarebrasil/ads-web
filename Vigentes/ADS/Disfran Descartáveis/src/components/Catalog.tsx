import { useState } from 'react';
import { Package, Filter, X } from 'lucide-react';

interface Product {
  name: string;
  category: string;
  image: string;
  delay: string;
}

const ALUMINIO = 'https://storage.lucasmendes.dev/site-sp/disfran/Categoria%20ALUMINIO/';

const products: Product[] = [
  { name: 'Assadeira Alumínio Baixela', category: 'Alumínio', image: `${ALUMINIO}Assadeira%20Aluminio%20Baixela.jpg`, delay: '0s' },
  { name: 'Assadeira Alumínio Bolo Inglês', category: 'Alumínio', image: `${ALUMINIO}Assadeira%20Aluminio%20Bolo%20Ingle%CC%82s%20%282%29.webp`, delay: '0.05s' },
  { name: 'Assadeira Alumínio Bolo Inglês Tampa Pet', category: 'Alumínio', image: `${ALUMINIO}Assadeira%20Aluminio%20Bolo%20Ingle%CC%82s%20Tampa%20Pet%20%282%29.webp`, delay: '0.1s' },
  { name: 'Assadeira Alumínio Retangular', category: 'Alumínio', image: `${ALUMINIO}Assadeira%20Aluminio%20Retangular.webp`, delay: '0.15s' },
  { name: 'Assadeira Frango', category: 'Alumínio', image: `${ALUMINIO}Assadeira%20Frango.png`, delay: '0.2s' },
  { name: 'Assadeira Oval', category: 'Alumínio', image: `${ALUMINIO}Assadeira%20Oval.webp`, delay: '0.25s' },
  { name: 'Assadeira Retangular', category: 'Alumínio', image: `${ALUMINIO}Assadeira%20Retangular.webp`, delay: '0.3s' },
  { name: 'Assarapido Churrasco', category: 'Alumínio', image: `${ALUMINIO}Assarapido%20Churrasco.png`, delay: '0.35s' },
  { name: 'Assarapido Cozinha', category: 'Alumínio', image: `${ALUMINIO}Assarapido%20Cozinha.webp`, delay: '0.4s' },
  { name: 'Bandeja Alumínio Redonda', category: 'Alumínio', image: `${ALUMINIO}Bandeja%20Aluminio%20Redonda.webp`, delay: '0.45s' },
  { name: 'Bandeja Retangular Tampa Pet', category: 'Alumínio', image: `${ALUMINIO}Bandeja%20Retangular%20Tampa%20Pet.webp`, delay: '0.5s' },
  { name: 'Forma Empada Alumínio', category: 'Alumínio', image: `${ALUMINIO}Forma%20Empada%20Aluminio.webp`, delay: '0.55s' },
];

const categoryOptions = [
  'Alumínio',
  'Confeitaria',
  'Delivery',
  'Embalagens Plásticas',
  'Festa',
  'Higiene e Limpeza',
  'Isopor',
  'Papel e Ecológico',
  'Plástico',
];

export default function Catalog() {
  const [category, setCategory] = useState('');
  const [capacity, setCapacity] = useState('');

  const filtered = products.filter(
    (p) => category === '' || p.category === category
  );

  const clearFilters = () => {
    setCategory('');
    setCapacity('');
  };

  return (
    <section
      id="produtos"
      className="relative overflow-hidden bg-[rgb(255,243,229)] py-20 px-6"
    >
      <div className="absolute inset-0 opacity-5">
        <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-[rgb(153,21,16)] blur-3xl"></div>
        <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-[rgb(2,74,169)] blur-3xl"></div>
      </div>
      <div className="relative mx-auto max-w-7xl">
        <div className="mb-12 text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[rgb(153,21,16)] to-[rgb(2,74,169)] px-5 py-2 shadow-lg">
            <Package className="lucide lucide-package text-white" width={18} height={18} />
            <span className="text-sm font-bold text-white">139 produtos disponíveis</span>
          </div>
          <h2 className="mb-4 text-4xl font-black text-[rgb(153,21,16)] md:text-5xl">Nosso Catálogo</h2>
          <div className="mx-auto mb-4 h-1 w-24 rounded-full bg-gradient-to-r from-[rgb(153,21,16)] to-[rgb(2,74,169)]"></div>
          <p className="text-lg text-gray-700">Encontre o produto ideal para seu negócio</p>
        </div>
        <div className="mb-10 overflow-hidden rounded-2xl bg-white shadow-xl">
          <div className="bg-gradient-to-r from-[rgb(153,21,16)] to-[rgb(2,74,169)] p-6">
            <div className="flex items-center justify-between">
              <h3 className="flex items-center gap-2.5 text-xl font-bold text-white">
                <Filter className="lucide lucide-filter" width={22} height={22} />
                Filtrar Produtos
              </h3>
              <button className="rounded-lg bg-white/20 px-4 py-2 font-semibold text-white backdrop-blur-sm transition-all hover:bg-white/30 md:hidden">
                Abrir Filtros
              </button>
            </div>
          </div>
          <div className="p-6 hidden md:block">
            <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
              <div>
                <label className="mb-2 block text-sm font-bold text-gray-700">Categoria</label>
                <select
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  className="w-full rounded-lg border-2 border-gray-300 px-4 py-3 text-sm transition-all duration-300 focus:border-[rgb(2,74,169)] focus:outline-none focus:ring-2 focus:ring-[rgb(2,74,169)]/20"
                >
                  <option value="">Todas as Categorias</option>
                  {categoryOptions.map((c) => (
                    <option key={c} value={c}>
                      {c}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className="mb-2 block text-sm font-bold text-gray-700">Capacidade</label>
                <select
                  value={capacity}
                  onChange={(e) => setCapacity(e.target.value)}
                  className="w-full rounded-lg border-2 border-gray-300 px-4 py-3 text-sm transition-all duration-300 focus:border-[rgb(2,74,169)] focus:outline-none focus:ring-2 focus:ring-[rgb(2,74,169)]/20"
                >
                  <option value="">Todas as Capacidades</option>
                </select>
              </div>
              <div className="flex items-end">
                <button
                  onClick={clearFilters}
                  className="group flex w-full items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-[rgb(153,21,16)] to-[rgb(2,74,169)] px-4 py-3 font-bold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl"
                >
                  <X className="lucide lucide-x transition-transform group-hover:rotate-90" width={18} height={18} />
                  Limpar Filtros
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filtered.map((p) => (
            <div
              key={p.name}
              className="group relative cursor-pointer overflow-hidden rounded-2xl bg-white shadow-lg transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl"
              data-category={p.category}
              style={{
                animation: `0.5s ease-out ${p.delay} 1 normal both running fadeInUp`,
              }}
            >
              <div className="relative flex h-64 items-center justify-center overflow-hidden bg-white p-6">
                <img
                  src={p.image}
                  alt={p.name}
                  loading="lazy"
                  className="h-full w-full object-contain transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute right-3 top-3 rounded-full bg-white/90 px-3 py-1 text-xs font-bold text-[rgb(153,21,16)] backdrop-blur-sm shadow-md">
                  {p.category}
                </div>
              </div>
              <div className="relative z-10 bg-white p-5">
                <h3 className="mb-2 text-lg font-bold leading-tight text-gray-900 transition-colors duration-300 group-hover:text-[rgb(153,21,16)]">
                  {p.name}
                </h3>
                <button className="w-full rounded-lg bg-gradient-to-r from-[rgb(153,21,16)] to-[rgb(2,74,169)] py-3 font-bold text-white shadow-md transition-all duration-300 hover:scale-105 hover:shadow-lg">
                  Consultar Preço
                </button>
              </div>
              <div className="pointer-events-none absolute inset-0 rounded-2xl border-2 border-transparent opacity-0 transition-all duration-500 group-hover:border-[rgb(153,21,16)]/30 group-hover:opacity-100"></div>
            </div>
          ))}
        </div>
        <div className="mt-12 text-center">
          <button className="group inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-[rgb(153,21,16)] to-[rgb(2,74,169)] px-10 py-4 text-lg font-bold text-white shadow-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl">
            <span>Carregar Mais Produtos</span>
            <Package className="lucide lucide-package transition-transform group-hover:rotate-12" width={20} height={20} />
          </button>
          <p className="mt-4 text-sm text-gray-600">
            Mostrando <span className="font-bold text-[rgb(153,21,16)]">{filtered.length}</span> de{' '}
            <span className="font-bold text-[rgb(2,74,169)]">139</span> produtos
          </p>
        </div>
      </div>
    </section>
  );
}

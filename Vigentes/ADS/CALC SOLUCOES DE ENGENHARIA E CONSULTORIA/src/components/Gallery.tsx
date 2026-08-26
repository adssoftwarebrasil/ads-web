import { Filter, ChevronDown } from 'lucide-react';

const categories = [
  'Instalações',
  'Usinas Comerciais',
  'Usinas Residenciais',
  'Usinas de Investimento',
];

export default function Gallery() {
  return (
    <section id="galeria" className="py-24 bg-gradient-to-br from-gray-50 via-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#00108a] mb-4 transition-all duration-1000 opacity-0 translate-y-8">
            Nossos Projetos
          </h2>
          <div className="flex justify-center mb-6">
            <div className="w-24 h-1 bg-gradient-to-r from-[#facc22] to-[#f88c00] rounded-full transition-all duration-1000 delay-200 opacity-0 scale-x-0"></div>
          </div>
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto transition-all duration-1000 delay-300 opacity-0 translate-y-8">
            Confira alguns dos sistemas fotovoltaicos que já instalamos
          </p>
        </div>
        <div className="hidden lg:flex justify-center gap-3 mb-12 flex-wrap transition-all duration-1000 delay-400 opacity-0 translate-y-8">
          {categories.map((cat, i) => (
            <button
              key={cat}
              className={
                i === 0
                  ? 'px-6 py-3 rounded-full font-semibold transition-all duration-300 bg-gradient-to-r from-[#facc22] to-[#f88c00] text-white shadow-lg scale-105'
                  : 'px-6 py-3 rounded-full font-semibold transition-all duration-300 bg-white text-[#00108a] hover:bg-gray-100 shadow-md hover:shadow-lg'
              }
            >
              {cat}
            </button>
          ))}
        </div>
        <div className="lg:hidden mb-8 transition-all duration-1000 delay-400 opacity-0 translate-y-8">
          <button className="w-full bg-white text-[#00108a] px-6 py-4 rounded-xl font-semibold shadow-md hover:shadow-lg transition-all flex items-center justify-between">
            <span className="flex items-center gap-2">
              <Filter
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                className="lucide lucide-filter w-5 h-5"
              />
              Instalações
            </span>
            <svg
              className="w-5 h-5 transition-transform "
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              ></path>
            </svg>
          </button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-8">
          {Array.from({ length: 6 }).map((_, i) => (
            <div
              key={i}
              className="group relative aspect-square overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer bg-gray-200"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 animate-pulse"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-[#00108a]/90 via-[#00108a]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-end pb-6 px-4">
                <span className="text-white font-bold text-lg mb-2">Ver Imagem</span>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center">
          <button className="group relative px-8 py-4 bg-gradient-to-r from-[#facc22] to-[#f88c00] text-white font-bold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-3">
            Ver Mais Projetos
            <ChevronDown
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              className="lucide lucide-chevron-down w-5 h-5 group-hover:translate-y-1 transition-transform"
            />
          </button>
        </div>
        <div className="text-center mt-6">
          <p className="text-gray-600">
            Mostrando <span className="font-semibold text-[#00108a]">6</span> de{' '}
            <span className="font-semibold text-[#00108a]">18</span> projetos
          </p>
        </div>
      </div>
    </section>
  );
}

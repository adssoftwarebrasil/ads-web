import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface PortfolioItem {
  src: string;
  alt: string;
}

const items: PortfolioItem[] = [
  {
    src: 'https://storage.lucasmendes.dev/site-sp/Marco%20Placas%2Fimg%2Fplaca-dermatologia-parede.webp',
    alt: 'Clínica de Dermatologia',
  },
  {
    src: 'https://storage.lucasmendes.dev/site-sp/Marco%20Placas%2FPlacas%2Finvisalign-logo-parede.webp',
    alt: 'Marco%20Placas%2FPlacas%2Finvisalign Logo Parede',
  },
  {
    src: 'https://storage.lucasmendes.dev/site-sp/Marco%20Placas/novas%20placas/felipe-diretor-de-operacoes.webp',
    alt: 'Felipe Diretor De Operacoes',
  },
  {
    src: 'https://storage.lucasmendes.dev/site-sp/Marco%20Placas%2FPlacas%2Fedificio-chaplin-615.webp',
    alt: 'Marco%20Placas%2FPlacas%2Fedificio Chaplin 615',
  },
  {
    src: 'https://storage.lucasmendes.dev/site-sp/Marco%20Placas%2FPlacas%2Fmaxi-radiologia-tomografia.webp',
    alt: 'Marco%20Placas%2FPlacas%2Fmaxi Radiologia Tomografia',
  },
  {
    src: 'https://storage.lucasmendes.dev/site-sp/Marco%20Placas%2FPlacas%2Fparede-madeira-logo.webp',
    alt: 'Marco%20Placas%2FPlacas%2Fparede Madeira Logo',
  },
  {
    src: 'https://storage.lucasmendes.dev/site-sp/Marco%20Placas%2FPlacas%2Fbrasao-itamonte-metal.webp',
    alt: 'Marco%20Placas%2FPlacas%2Fbrasao Itamonte Metal',
  },
  {
    src: 'https://storage.lucasmendes.dev/site-sp/Marco%20Placas%2FPlacas%2Fparede-azul-logo.webp',
    alt: 'Marco%20Placas%2FPlacas%2Fparede Azul Logo',
  },
  {
    src: 'https://storage.lucasmendes.dev/site-sp/Marco%20Placas/novas%20placas/sabrina-antune-vale.webp',
    alt: 'Sabrina Antune Vale',
  },
  {
    src: 'https://storage.lucasmendes.dev/site-sp/Marco%20Placas%2FPlacas%2Fplaca-diretorio-predio.webp',
    alt: 'Marco%20Placas%2FPlacas%2Fplaca Diretorio Predio',
  },
  {
    src: 'https://storage.lucasmendes.dev/site-sp/Marco%20Placas%2FPlacas%2Fplaca-grupo-banminas.webp',
    alt: 'Marco%20Placas%2FPlacas%2Fplaca Grupo Banminas',
  },
  {
    src: 'https://storage.lucasmendes.dev/site-sp/Marco%20Placas%2Fimg%2Fplaca-software-one-letras.webp',
    alt: 'Software One - Letras Caixa',
  },
  {
    src: 'https://storage.lucasmendes.dev/site-sp/Marco%20Placas%2Fimg%2Fplaca-trofeus-metalicos-modernos.webp',
    alt: 'Troféus Metálicos',
  },
  {
    src: 'https://storage.lucasmendes.dev/site-sp/Marco%20Placas%2FPlacas%2Fedificio-fachada-vidro.webp',
    alt: 'Marco%20Placas%2FPlacas%2Fedificio Fachada Vidro',
  },
  {
    src: 'https://storage.lucasmendes.dev/site-sp/Marco%20Placas%2FPlacas%2Fpraca-jardim-sinalizacao.webp',
    alt: 'Marco%20Placas%2FPlacas%2Fpraca Jardim Sinalizacao',
  },
];

const TOTAL_PAGES = 4;

export default function Portfolio() {
  const [page, setPage] = useState(1);

  return (
    <section id="portfolio" className="py-20 md:py-28 px-5 md:px-10 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[rgb(3,0,0)] mb-4 transition-all duration-1000 opacity-100 translate-y-0">
            Conheça alguns dos trabalhos que realizamos
          </h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-12 scroll-mt-32">
          {items.map((item) => (
            <div
              key={item.src}
              className="relative group cursor-pointer overflow-hidden rounded-lg shadow-sm hover:shadow-xl transition-all duration-300 aspect-square opacity-100 scale-100"
            >
              <img
                src={item.src}
                alt={item.alt}
                loading="lazy"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
            </div>
          ))}
        </div>
        <div className="flex justify-center items-center gap-4 mt-8">
          <button
            disabled={page === 1}
            onClick={() => setPage((p) => Math.max(1, p - 1))}
            className={`p-2 rounded-full border transition-all ${
              page === 1
                ? 'border-gray-300 text-gray-300 cursor-not-allowed'
                : 'border-[rgb(167,28,31)] text-[rgb(167,28,31)] hover:bg-[rgb(167,28,31)] hover:text-white'
            }`}
          >
            <ChevronLeft className="lucide lucide-chevron-left" width={24} height={24} />
          </button>
          <span className="text-gray-700 font-medium">
            Página {page} de {TOTAL_PAGES}
          </span>
          <button
            disabled={page === TOTAL_PAGES}
            onClick={() => setPage((p) => Math.min(TOTAL_PAGES, p + 1))}
            className={`p-2 rounded-full border transition-all ${
              page === TOTAL_PAGES
                ? 'border-gray-300 text-gray-300 cursor-not-allowed'
                : 'border-[rgb(167,28,31)] text-[rgb(167,28,31)] hover:bg-[rgb(167,28,31)] hover:text-white'
            }`}
          >
            <ChevronRight className="lucide lucide-chevron-right" width={24} height={24} />
          </button>
        </div>
      </div>
    </section>
  );
}

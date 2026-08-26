import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const WHATSAPP = 'http://wa.me/556696681932';
const P = 'https://storage.lucasmendes.dev/site-sp/sensuallizy%20moda%20intima%2Fprodutos%2F';
const P2 = 'https://storage.lucasmendes.dev/site-sp/sensuallizy%20moda%20intima%2Fprodutos2%2F';

const pages: string[][] = [
  [
    `${P}lingerie-preta-dourada.webp`,
    `${P}mulher-lingerie-branca.webp`,
    `${P}mulher-lingerie-preta.webp`,
    `${P}camisola-rosa-azul.webp`,
    `${P}mulher-lingerie-azul-pose.webp`,
    `${P}mulher-roupa-branca.webp`,
    `${P}mulher-camisola-azul.webp`,
    `${P}mulher-lingerie-camisola-preto.webp`,
    `${P}pijamas-coloridos-cama-crianca-e-adulto.webp`,
    `${P2}biquini-rosa-conchas.webp`,
    `${P2}chinelo-desenho-flores.webp`,
    `${P2}conjunto-lingerie-rosa.webp`,
  ],
  [
    `${P}mulher-lingerie-preta-com-rosa-na-mao.webp`,
    `${P}mulher-lingerie-azul.webp`,
    `${P}mulher-camisola-vermelha.webp`,
    `${P}mulher-sentada-sorrindo-camisola-rosa.webp`,
    `${P}lingerie-preta-flores.webp`,
    `${P}pijamas-estampados-casal.webp`,
    `${P}lingerie-preta-dourada.webp`,
    `${P}mulher-lingerie-branca.webp`,
    `${P}mulher-lingerie-preta.webp`,
    `${P}camisola-rosa-azul.webp`,
    `${P}mulher-lingerie-azul-pose.webp`,
    `${P}mulher-roupa-branca.webp`,
  ],
  [
    `${P}mulher-camisola-azul.webp`,
    `${P}mulher-lingerie-camisola-preto.webp`,
    `${P}pijamas-coloridos-cama-crianca-e-adulto.webp`,
    `${P2}biquini-rosa-conchas.webp`,
    `${P2}chinelo-desenho-flores.webp`,
    `${P2}conjunto-lingerie-rosa.webp`,
    `${P}mulher-lingerie-preta-com-rosa-na-mao.webp`,
    `${P}mulher-lingerie-azul.webp`,
    `${P}mulher-camisola-vermelha.webp`,
    `${P}mulher-sentada-sorrindo-camisola-rosa.webp`,
    `${P}lingerie-preta-flores.webp`,
    `${P}pijamas-estampados-casal.webp`,
  ],
];

export default function Galeria() {
  const [page, setPage] = useState(0);
  const totalPages = pages.length;
  const prevDisabled = page === 0;
  const nextDisabled = page === totalPages - 1;

  return (
    <section id="produtos" className="py-20 md:py-28 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block">
            <span className="text-[#E24244] font-semibold text-sm tracking-wider uppercase">Galeria</span>
            <div className="h-1 w-16 bg-[#E24244] mt-2 mx-auto"></div>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#212423] mt-6 mb-6 leading-tight">
            Nossas Peças em <span className="block text-[#E24244]">Destaque</span>
          </h2>
          <p className="text-[#212423]/70 text-lg leading-relaxed">
            Cada peça é cuidadosamente selecionada para oferecer conforto, estilo e qualidade excepcional.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-12">
          {pages[page].map((img, i) => (
            <div key={`${page}-${i}`} className="group relative overflow-hidden rounded-xl aspect-[3/4] cursor-pointer shadow-md hover:shadow-xl transition-all">
              <img src={img} alt="Produto Sensuallizy" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="text-white bg-[#E24244]/80 px-4 py-2 rounded-full text-sm font-medium backdrop-blur-sm">Ver Detalhes</span>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center items-center gap-6 mb-12">
          <button
            disabled={prevDisabled}
            onClick={() => setPage((p) => Math.max(0, p - 1))}
            className={`p-3 rounded-full border-2 transition-all ${prevDisabled ? 'border-gray-200 text-gray-300 cursor-not-allowed' : 'border-[#E24244] text-[#E24244] hover:bg-[#E24244] hover:text-white'}`}
          >
            <ChevronLeft className="lucide lucide-chevron-left w-6 h-6" />
          </button>
          <span className="font-semibold text-gray-600">Página {page + 1} de {totalPages}</span>
          <button
            disabled={nextDisabled}
            onClick={() => setPage((p) => Math.min(totalPages - 1, p + 1))}
            className={`p-3 rounded-full border-2 transition-all ${nextDisabled ? 'border-gray-200 text-gray-300 cursor-not-allowed' : 'border-[#E24244] text-[#E24244] hover:bg-[#E24244] hover:text-white'}`}
          >
            <ChevronRight className="lucide lucide-chevron-right w-6 h-6" />
          </button>
        </div>
        <div className="text-center">
          <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-[#E24244] text-white px-8 py-4 rounded-full hover:bg-[#d13d3f] transition-all duration-300 font-semibold text-lg shadow-xl hover:scale-105">
            <span>Ver Mais Produtos no WhatsApp</span>
          </a>
        </div>
      </div>
    </section>
  );
}

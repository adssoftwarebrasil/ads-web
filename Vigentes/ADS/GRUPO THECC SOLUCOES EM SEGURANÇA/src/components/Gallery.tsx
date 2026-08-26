import { ChevronLeft, ChevronRight } from 'lucide-react';

const images = [
  { src: 'https://storage.lucasmendes.dev/site-sp/grupotech%2Fcarrosel%2FWhatsApp%20Image%202025-10-23%20at%2011.40.02%20%281%29.jpeg', alt: 'Trabalho 1', delay: '0ms' },
  { src: 'https://storage.lucasmendes.dev/site-sp/grupotech%2Fcarrosel%2FWhatsApp%20Image%202025-10-23%20at%2011.40.02%20%282%29.jpeg', alt: 'Trabalho 2', delay: '100ms' },
  { src: 'https://storage.lucasmendes.dev/site-sp/grupotech%2Fcarrosel%2FWhatsApp%20Image%202025-10-23%20at%2011.40.02%20%283%29.jpeg', alt: 'Trabalho 3', delay: '200ms' },
];

const dots = [0, 1, 2, 3, 4, 5];

export default function Gallery() {
  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <div className="inline-block bg-[#FFD700]/10 text-[#1A1A2E] px-4 py-2 rounded-full font-semibold text-xs sm:text-sm mb-3 sm:mb-4">NOSSOS TRABALHOS</div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-[#1A1A2E] mb-3 sm:mb-4 lg:mb-6 px-4">Confira Nossa <span className="text-[#FFD700]">Galeria</span></h2>
          <p className="text-gray-600 text-sm sm:text-base lg:text-lg max-w-3xl mx-auto px-4">Veja alguns dos nossos projetos e instalações realizadas com excelência</p>
        </div>
        <div className="relative px-8 sm:px-12 lg:px-16">
          <div className="overflow-hidden">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 animate-fadeIn">
              {images.map((img) => (
                <div key={img.alt} className="relative group overflow-hidden rounded-xl sm:rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500" style={{ animationDelay: img.delay }}>
                  <div className="aspect-square">
                    <img src={img.src} alt={img.alt} className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" loading="lazy" />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A2E]/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
              ))}
            </div>
          </div>
          <button disabled className="absolute left-0 top-1/2 -translate-y-1/2 bg-white hover:bg-[#FFD700] text-[#1A1A2E] p-2 sm:p-3 lg:p-4 rounded-full shadow-xl transition-all duration-300 z-10 opacity-50 cursor-not-allowed" aria-label="Anterior">
            <ChevronLeft className="lucide lucide-chevron-left w-5 h-5 sm:w-6 sm:h-6" />
          </button>
          <button className="absolute right-0 top-1/2 -translate-y-1/2 bg-white hover:bg-[#FFD700] text-[#1A1A2E] p-2 sm:p-3 lg:p-4 rounded-full shadow-xl transition-all duration-300 z-10 hover:scale-110" aria-label="Próximo">
            <ChevronRight className="lucide lucide-chevron-right w-5 h-5 sm:w-6 sm:h-6" />
          </button>
        </div>
        <div className="flex justify-center gap-2 mt-8 sm:mt-10 lg:mt-12">
          {dots.map((d) => (
            <button
              key={d}
              className={
                d === 0
                  ? 'transition-all duration-500 rounded-full w-8 sm:w-10 lg:w-12 h-2.5 sm:h-3 bg-[#FFD700] shadow-lg'
                  : 'transition-all duration-500 rounded-full w-2.5 sm:w-3 h-2.5 sm:h-3 bg-gray-300 hover:bg-gray-400 hover:scale-125'
              }
              aria-label={`Ir para slide ${d + 1}`}
            ></button>
          ))}
        </div>
        <div className="text-center mt-4 sm:mt-6">
          <p className="text-gray-600 text-xs sm:text-sm font-medium">Página 1 de 6</p>
        </div>
      </div>
    </section>
  );
}

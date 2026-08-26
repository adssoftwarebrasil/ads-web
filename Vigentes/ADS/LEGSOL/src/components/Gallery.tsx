import { Plus } from 'lucide-react';

const images = Array.from({ length: 12 }, (_, i) => ({
  src: `https://storage.lucasmendes.dev/site-sp/legsol%2Fimg%2Fpaineis-solares-telhado-${i + 1}.webp`,
  alt: `Instalação de energia solar ${i + 1}`,
}));

export default function Gallery() {
  return (
    <section id="gallery" className="py-20 md:py-28 bg-gray-50 relative">
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-30 pointer-events-none">
        <div className="absolute top-20 right-0 w-96 h-96 bg-blue-100 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-0 w-96 h-96 bg-green-50 rounded-full blur-3xl"></div>
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block px-4 py-1.5 mb-4 rounded-full bg-[rgb(26,110,76)]/10 text-[rgb(26,110,76)] font-semibold text-sm uppercase tracking-wider">
            Portfólio
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-[rgb(27,45,114)] mb-6 tracking-tight">
            Projetos que Transformam
          </h2>
          <p className="text-lg text-gray-600">
            Confira algumas das nossas instalações recentes em Franca e região. Qualidade técnica que resulta em
            acabamento impecável.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {images.map((img) => (
            <div
              key={img.src}
              className="relative group cursor-pointer overflow-hidden rounded-2xl aspect-square shadow-sm hover:shadow-xl transition-all duration-300"
            >
              <img
                src={img.src}
                alt={img.alt}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-[rgb(27,45,114)]/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-[2px]">
                <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <div className="bg-white/20 backdrop-blur-md p-3 rounded-full border border-white/30 text-white">
                    <Plus className="lucide lucide-plus" width={32} height={32} strokeWidth={1.5} />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

import { ZoomIn } from 'lucide-react';

const base = 'https://storage.lucasmendes.dev/site-sp/dra%20mariana%2Fimg%2F';

const photos = Array.from({ length: 7 }, (_, i) => {
  const n = i + 1;
  return {
    src: `${base}dra-mariana-0${n}.webp`,
    alt: `Dra. Mariana atendimento ${n}`,
    delay: i * 100,
  };
});

export default function Gallery() {
  return (
    <section className="py-24 relative overflow-hidden bg-gradient-to-b from-white via-[rgb(251,203,185)]/10 to-white">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[rgb(218,185,165)]/30 to-transparent"></div>
      <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-[rgb(251,203,185)]/10 rounded-full blur-3xl opacity-50 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[rgb(235,208,217)]/10 rounded-full blur-3xl opacity-50 pointer-events-none"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[rgb(218,185,165)]/10 text-[rgb(218,185,165)] font-semibold text-sm mb-6 border border-[rgb(218,185,165)]/20">
            <span className="w-2 h-2 rounded-full bg-[rgb(218,185,165)] animate-pulse"></span>
            Galeria de Fotos
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6 tracking-tight">
            Conheça a <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[rgb(218,185,165)] to-[rgb(198,165,145)]">
              Dra. Mariana
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto font-light leading-relaxed">
            Dedicação, carinho e momentos especiais no cuidado com os pequenos.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 lg:gap-8 max-w-7xl mx-auto">
          {photos.map((photo) => (
            <div
              key={photo.src}
              className="group relative overflow-hidden rounded-[2rem] shadow-lg hover:shadow-xl cursor-pointer bg-white animate-fade-in-stagger border border-gray-100"
              style={{ animationDelay: `${photo.delay}ms` }}
            >
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 flex items-center justify-center backdrop-blur-[2px]">
                <div className="w-12 h-12 bg-white/90 rounded-full flex items-center justify-center text-[rgb(218,185,165)] transform scale-0 group-hover:scale-100 transition-transform duration-300 delay-75 shadow-xl">
                  <ZoomIn
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    className="lucide lucide-zoom-in "
                  />
                </div>
              </div>
              <img
                src={photo.src}
                alt={photo.alt}
                className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-700"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

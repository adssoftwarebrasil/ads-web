const WHATSAPP_URL =
  'https://wa.me/5562993240002?text=Olá!%20Gostaria%20de%20solicitar%20um%20orçamento%20de%20engate.';

const features = [
  {
    title: 'Qualidade Garantida',
    subtitle: 'Produtos testados',
    path: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z',
  },
  {
    title: 'Instalação Rápida',
    subtitle: 'Sem perfurações',
    path: 'M13 10V3L4 14h7v7l9-11h-7z',
  },
  {
    title: 'Melhor Preço',
    subtitle: 'Custo-benefício',
    path: 'M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z',
  },
];

export default function Hero() {
  return (
    <section id="home" className="relative w-full h-screen overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/50 to-[rgb(175,11,18)]/40 z-10"></div>
      <div className="absolute inset-0 w-full h-full">
        <img
          src="https://storage.lucasmendes.dev/site-sp/uniao-engates%2Fimg%2Fengate-pecas-automotivas.webp"
          alt="Engates e Peças Automotivas"
          className="w-full h-full object-cover object-center"
          loading="eager"
        />
      </div>
      <div className="absolute inset-0 z-20 flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl w-full mx-auto text-center">
          <div className="mb-4 md:mb-6 animate-fade-in">
            <div className="inline-block bg-white/10 backdrop-blur-md px-4 py-2 md:px-6 md:py-3 rounded-full border border-white/30">
              <span className="text-white font-semibold text-xs md:text-sm lg:text-base">
                Líder em Engates Automotivos
              </span>
            </div>
          </div>
          <h1
            className="text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold mb-3 md:mb-4 lg:mb-6 animate-slide-up px-4"
            style={{
              textShadow:
                'rgba(0, 0, 0, 0.9) 4px 4px 20px, rgba(0, 0, 0, 0.7) 0px 0px 80px',
              lineHeight: 1.1,
              letterSpacing: '-0.02em',
            }}
          >
            União Engates <br />
            Distribuidora
          </h1>
          <p
            className="text-white text-base sm:text-lg md:text-xl lg:text-2xl mb-6 md:mb-8 lg:mb-10 max-w-4xl mx-auto font-medium animate-slide-up-delay px-4"
            style={{ textShadow: 'rgba(0, 0, 0, 0.9) 3px 3px 12px', lineHeight: 1.6 }}
          >
            Engates de alta qualidade para todas as marcas e modelos. Segurança e
            confiabilidade em cada instalação.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center items-center animate-slide-up-delay-2 px-4 mb-8 md:mb-12 lg:mb-16">
            <a
              href={WHATSAPP_URL}
              className="inline-flex items-center justify-center gap-2 md:gap-3 bg-[rgb(175,11,18)] hover:bg-white hover:text-[rgb(175,11,18)] text-white font-bold text-sm md:text-base lg:text-lg px-6 md:px-10 lg:px-12 py-3 md:py-4 rounded-lg md:rounded-xl transition-all duration-300 border-2 border-[rgb(175,11,18)] shadow-2xl hover:shadow-[0_20px_60px_rgba(175,11,18,0.5)] transform hover:scale-105 w-full sm:w-auto"
            >
              <svg className="w-5 h-5 md:w-6 md:h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
              </svg>
              <span className="whitespace-nowrap">Solicitar Orçamento</span>
            </a>
            <a
              href="#engates"
              className="inline-flex items-center justify-center gap-2 md:gap-3 bg-white/10 hover:bg-white hover:text-[rgb(175,11,18)] text-white font-bold text-sm md:text-base lg:text-lg px-6 md:px-10 lg:px-12 py-3 md:py-4 rounded-lg md:rounded-xl transition-all duration-300 border-2 border-white backdrop-blur-md shadow-2xl hover:shadow-[0_20px_60px_rgba(255,255,255,0.3)] transform hover:scale-105 w-full sm:w-auto"
            >
              <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
              <span className="whitespace-nowrap">Conheça Nossos Produtos</span>
            </a>
          </div>
          <div className="flex flex-col sm:flex-row flex-wrap justify-center items-center gap-4 md:gap-6 lg:gap-8 animate-fade-in-delay px-4">
            {features.map((f) => (
              <div
                key={f.title}
                className="flex items-center gap-2 md:gap-3 text-white bg-black/20 backdrop-blur-sm rounded-xl px-4 py-3 md:px-5 md:py-3 border border-white/10"
              >
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-[rgb(175,11,18)]/90 flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={f.path} />
                  </svg>
                </div>
                <div className="text-left">
                  <p className="font-bold text-sm md:text-base">{f.title}</p>
                  <p className="text-xs md:text-sm text-white/90">{f.subtitle}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="absolute bottom-6 md:bottom-8 left-1/2 -translate-x-1/2 z-30 animate-bounce hidden md:block">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center p-2">
          <div className="w-1 h-3 bg-white/70 rounded-full"></div>
        </div>
      </div>
    </section>
  );
}

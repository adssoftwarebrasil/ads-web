interface Produto {
  src: string;
  alt: string;
}

const produtos: Produto[] = [
  {
    src: 'https://storage.lucasmendes.dev/site-sp/embreagens%2Fembre1.jpeg',
    alt: 'Kit de Embreagem Remanufaturada',
  },
  {
    src: 'https://storage.lucasmendes.dev/site-sp/embreagens%2Fembreagen2.jpeg',
    alt: 'Platô e Disco de Embreagem',
  },
  {
    src: 'https://storage.lucasmendes.dev/site-sp/embreagens%2Fembreagen3.jpeg',
    alt: 'Componentes de Embreagem',
  },
  {
    src: 'https://storage.lucasmendes.dev/site-sp/embreagens%2Fembreagen4.jpeg',
    alt: 'Embreagem Linha Pesada',
  },
  {
    src: 'https://storage.lucasmendes.dev/site-sp/embreagens%2Fembreagem5.jpeg',
    alt: 'Kit Completo de Embreagem',
  },
  {
    src: 'https://storage.lucasmendes.dev/site-sp/embreagens%2Fembreagem6.jpeg',
    alt: 'Disco e Platô Remanufaturado',
  },
];

export default function Produtos() {
  return (
    <section id="produtos" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-[rgb(240,178,121)]/10 border border-[rgb(240,178,121)]/30 px-5 py-2 rounded-full mb-6">
            <svg className="w-5 h-5 text-[rgb(240,178,121)]" fill="currentColor" viewBox="0 0 20 20">
              <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"></path>
            </svg>
            <span className="text-sm font-semibold text-[rgb(60,88,144)] tracking-wide">
              NOSSOS PRODUTOS
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[rgb(60,88,144)] mb-6">
            Embreagens Remanufaturadas
            <span className="block text-[rgb(240,178,121)] mt-2">de Alta Qualidade</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Linhas Leve, Pesada e Agrícola com componentes novos e garantia de qualidade
          </p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-4 md:gap-6 mb-12 max-w-5xl mx-auto">
          {produtos.map((p) => (
            <div
              key={p.src}
              className="group relative bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={p.src}
                  alt={p.alt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="bg-white p-3 rounded-full shadow-lg">
                    <svg
                      className="w-5 h-5 text-[rgb(60,88,144)]"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"
                      ></path>
                    </svg>
                  </div>
                </div>
              </div>
              <div className="absolute inset-0 border-2 border-[rgb(240,178,121)] rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>
        <div className="text-center">
          <div className="inline-block bg-gradient-to-r from-[rgb(60,88,144)]/5 to-[rgb(240,178,121)]/5 rounded-2xl p-8 md:p-12 border border-gray-200">
            <h3 className="text-2xl md:text-3xl font-bold text-[rgb(60,88,144)] mb-4">
              Interessado em nossos produtos?
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Entre em contato conosco para consultar disponibilidade, preços e especificações
              técnicas
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="https://wa.me/5516936265853?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20as%20embreagens%20remanufaturadas"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-3 bg-[rgb(240,178,121)] text-white px-8 py-4 rounded-lg text-lg font-bold hover:bg-[rgb(255,190,135)] transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"></path>
                </svg>
                Consultar via WhatsApp
                <svg
                  className="w-5 h-5 transform group-hover:translate-x-1 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  ></path>
                </svg>
              </a>
              <a
                href="tel:+5516936265853"
                className="inline-flex items-center gap-3 border-2 border-[rgb(60,88,144)] text-[rgb(60,88,144)] px-8 py-4 rounded-lg text-lg font-bold hover:bg-[rgb(60,88,144)] hover:text-white transition-all duration-300 transform hover:scale-105"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  ></path>
                </svg>
                (16) 3626-5853
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

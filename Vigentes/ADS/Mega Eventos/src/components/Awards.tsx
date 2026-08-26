interface Award {
  src: string;
  year: string;
  title: string;
  delay: number;
}

const awards: Award[] = [
  {
    src: 'https://storage.lucasmendes.dev/site-sp/mega%20eventos/premios/selo-premio-liga-2018-top-20-brasil_500x500.webp',
    year: '2018',
    title: 'Top 20 Brasil',
    delay: 0,
  },
  {
    src: 'https://storage.lucasmendes.dev/site-sp/mega%20eventos/premios/premio-liga-2019-top-20-brasil_500x500.webp',
    year: '2019',
    title: 'Top 20 Brasil',
    delay: 80,
  },
  {
    src: 'https://storage.lucasmendes.dev/site-sp/mega%20eventos/premios/premio-liga-2020-destaque-nacional-parceiros_500x500.webp',
    year: '2020',
    title: 'Destaque Nacional',
    delay: 160,
  },
  {
    src: 'https://storage.lucasmendes.dev/site-sp/mega%20eventos/premios/premio-liga-2021-destaque-nacional-parceiros_500x500.webp',
    year: '2021',
    title: 'Destaque Nacional',
    delay: 240,
  },
  {
    src: 'https://storage.lucasmendes.dev/site-sp/mega%20eventos/premios/premio-liga-2022-mencao-destaque-parceiros_500x500.webp',
    year: '2022',
    title: 'Menção de Destaque',
    delay: 320,
  },
  {
    src: 'https://storage.lucasmendes.dev/site-sp/mega%20eventos/premios/premio-liga-2023-top-30-brasil_500x500.webp',
    year: '2023',
    title: 'Top 30 Brasil',
    delay: 400,
  },
  {
    src: 'https://storage.lucasmendes.dev/site-sp/mega%20eventos/premios/premio-liga-2025-top-30-brasil-parceiros_1024x1024.webp',
    year: '2025',
    title: 'Top 30 Brasil',
    delay: 480,
  },
];

export default function Awards() {
  return (
    <section id="premiacoes" className="py-20 sm:py-28 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16 reveal">
          <span className="inline-block text-xs font-bold uppercase tracking-widest text-[rgb(234,50,56)] mb-3">
            Reconhecimento
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[rgb(53,53,53)] mb-4">
            Premiações que
            <br />
            <span className="text-[rgb(234,50,56)]">Validam Nossa Excelência</span>
          </h2>
          <p className="text-[rgb(53,53,53)]/60 max-w-2xl mx-auto">
            Anos consecutivos de reconhecimento nacional pelo Prêmio Liga confirmam nossa posição como
            referência em marketing promocional no Brasil.
          </p>
        </div>
        <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-7 gap-4 sm:gap-6 items-center">
          {awards.map(({ src, year, title, delay }) => (
            <div
              key={year}
              className="reveal-scale flex flex-col items-center group"
              style={{ transitionDelay: `${delay}ms` }}
            >
              <div className="relative w-full aspect-square rounded-2xl overflow-hidden bg-[rgb(248,248,248)] p-2 sm:p-3 group-hover:shadow-xl transition-all duration-300 group-hover:-translate-y-1">
                <img
                  src={src}
                  alt={`Prêmio Liga ${year}`}
                  className="w-full h-full object-contain"
                  loading="lazy"
                />
              </div>
              <div className="mt-2 text-center">
                <div className="text-[rgb(234,50,56)] font-bold text-xs sm:text-sm">{year}</div>
                <div className="text-[rgb(53,53,53)]/70 text-xs">{title}</div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-16 bg-gradient-to-r from-[rgb(253,208,162)] via-[rgb(249,171,118)] to-[rgb(253,208,162)] rounded-3xl p-8 sm:p-12 text-center reveal">
          <p className="text-2xl sm:text-3xl font-black text-[rgb(53,53,53)] mb-2">
            "Melhor empresa de organização e realização de eventos de MT
            <br className="hidden sm:block" /> e com certeza uma das melhores do país!"
          </p>
          <p className="text-[rgb(53,53,53)]/70 font-medium mt-4">
            — Amanda Sousa, Local Guide · 453 avaliações
          </p>
        </div>
      </div>
    </section>
  );
}

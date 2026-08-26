interface Foto {
  src: string;
  alt: string;
}

const fotos: Foto[] = [
  { src: '/images/fachada.jpg', alt: 'Fachada Planeta Ferros em Luzimangues' },
  { src: '/images/sobre.jpg', alt: 'Equipe e estrutura da Planeta Ferros' },
];

export default function Galeria() {
  return (
    <section id="galeria" className="w-full py-16 md:py-24 px-4 md:px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <span className="inline-block text-accent font-semibold text-xs tracking-widest uppercase mb-3">
            Galeria
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-primary mb-4">
            Nossos Trabalhos
          </h2>
          <p className="text-secondary max-w-2xl mx-auto text-base md:text-lg">
            Veja um pouco do nosso dia a dia.
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-4">
          {fotos.map((foto) => (
            <figure
              key={foto.alt}
              className="group relative overflow-hidden rounded-2xl bg-gray-200 aspect-square w-[calc(50%-8px)] sm:w-[calc(33.333%-11px)] lg:w-[calc(25%-12px)] max-w-xs"
            >
              <img
                alt={foto.alt}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
                src={foto.src}
              />
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

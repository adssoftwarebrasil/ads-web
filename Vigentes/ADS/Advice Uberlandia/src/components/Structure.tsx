import { useInView } from '../hooks/useInView';

const GALLERY = [
  {
    url: 'https://storage.lucasmendes.dev/site-sp/advice%20uberlandia%2Fimg%2Fcadeiras-verdes-sala-espera.webp',
    alt: 'Sala de Espera',
    label: 'Sala de Espera',
  },
  {
    url: 'https://storage.lucasmendes.dev/site-sp/advice%20uberlandia%2Fimg%2Fbanco-recepcao-atendimento.webp',
    alt: 'Recepção',
    label: 'Recepção',
  },
  {
    url: 'https://storage.lucasmendes.dev/site-sp/advice%20uberlandia%2Fimg%2Fatendimento-escritorio-recepcionistas.webp',
    alt: 'Atendimento',
    label: 'Atendimento',
  },
  {
    url: 'https://storage.lucasmendes.dev/site-sp/advice%20uberlandia%2Fimg%2Fsala-espera-atendimento.webp',
    alt: 'Sala de Espera 2',
    label: 'Espaço de Espera',
  },
  {
    url: 'https://storage.lucasmendes.dev/site-sp/advice%20uberlandia%2Fimg%2Fsala-espera-clinica.webp',
    alt: 'Clínica',
    label: 'Clínica',
  },
];

export default function Structure() {
  const { ref, isInView } = useInView();

  return (
    <section id="estrutura" className="py-24 bg-white">
      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`text-center mb-16 transition-all duration-700 ${
            isInView
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-8'
          }`}
        >
          <span className="text-brand-500 font-semibold text-sm tracking-wider uppercase">
            Nossa Estrutura
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900 mt-3 mb-4">
            Infraestrutura Moderna e Completa
          </h2>
          <p className="text-neutral-500 max-w-2xl mx-auto">
            Ambientes projetados para oferecer conforto, segurança e eficiência
            em cada atendimento.
          </p>
          <div className="w-16 h-1 bg-brand-500 mx-auto rounded-full mt-4" />
        </div>

        {/* ALTERAÇÕES FEITAS:
          1. Substituído 'grid' por 'flex flex-wrap justify-center' para centralizar itens "sobrantes".
          2. Padronizado o gap para 'gap-4' (16px) para facilitar o cálculo de largura.
        */}
        <div className="flex flex-wrap justify-center gap-4">
          {GALLERY.map((item, index) => (
            <div
              key={item.label}
              /* CÁLCULO DE LARGURA (WIDTH):
                 - Mobile: w-[calc(50%-8px)] -> 50% menos metade do gap (16px/2). Garante 2 por linha.
                 - Desktop: lg:w-[calc(25%-12px)] -> 25% menos a compensação de 3 gaps divididos por 4 itens.
              */
              className={`group relative overflow-hidden rounded-2xl aspect-[4/3] w-[calc(50%-8px)] lg:w-[calc(25%-12px)] transition-all duration-700 ${
                isInView ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
              }`}
              style={{ transitionDelay: `${index * 80}ms` }}
            >
              <img
                src={item.url}
                alt={item.alt}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <span className="text-white font-semibold text-xs sm:text-sm">
                  {item.label}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
import { useReveal } from '../hooks/useReveal';

const estruturas = [
  {
    image:
      'https://storage.lucasmendes.dev/site-sp/raiodesolencantado%2Fimg%2Fparquinho-colorido-escola.webp',
    alt: 'Estrutura 1',
    delay: 0,
  },
  {
    image:
      'https://storage.lucasmendes.dev/site-sp/raiodesolencantado%2Fimg%2Fplayground-colorido-arvores.webp',
    alt: 'Estrutura 2',
    delay: 100,
  },
  {
    image:
      'https://storage.lucasmendes.dev/site-sp/raiodesolencantado%2Fimg%2Fsala-brinquedos-colorida.webp',
    alt: 'Estrutura 3',
    delay: 200,
  },
  {
    image:
      'https://storage.lucasmendes.dev/site-sp/raiodesolencantado%2Fimg%2Fsala-brinquedos-coloridos.webp',
    alt: 'Estrutura 4',
    delay: 300,
  },
];

export default function Estrutura() {
  const { ref, visible } = useReveal<HTMLDivElement>();
  const show = visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8';
  const showBar = visible ? 'opacity-100 scale-100' : 'opacity-0 scale-0';

  return (
    <section id="estrutura" className="py-24 lg:py-32 bg-gradient-to-b from-gray-50 via-white to-gray-50">
      <div ref={ref} className="container mx-auto px-6 lg:px-8">
        <h2 className={`text-primary text-4xl lg:text-6xl font-extrabold text-center mb-6 transition-all duration-1000 ${show}`}>
          Nossa Estrutura
        </h2>
        <div className={`w-24 h-1.5 bg-gradient-to-r from-primary to-orange mx-auto mb-16 lg:mb-20 rounded-full transition-all duration-1000 ${showBar}`}></div>
        <div className="grid md:grid-cols-2 gap-8 max-w-7xl mx-auto">
          {estruturas.map((e) => (
            <div
              key={e.alt}
              className={`group relative overflow-hidden rounded-3xl shadow-xl transition-all duration-1000 hover:shadow-3xl md:col-span-1 ${show}`}
              style={{ transitionDelay: `${e.delay}ms` }}
            >
              <div className="relative overflow-hidden aspect-[4/3]">
                <img
                  src={e.image}
                  alt={e.alt}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

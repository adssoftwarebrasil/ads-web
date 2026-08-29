import { useEffect, useRef, useState } from 'react';
import { Glasses, Sun, Users, Sparkles } from 'lucide-react';

interface Category {
  title: string;
  description: string;
  image: string;
  icon: React.ReactNode;
  highlight?: string;
}

const categories: Category[] = [
  {
    title: 'Armações para Grau',
    description: 'Modelos modernos e confortáveis para seu dia a dia',
    image: 'https://storage.lucasmendes.dev/site-sp/oticasvitoria%2Fmulher%20oculos.webp',
    icon: <Glasses size={32} />
  },
  {
    title: 'Óculos Solares',
    description: 'Proteção UV com muito estilo e elegância',
    image: 'https://storage.lucasmendes.dev/site-sp/oticasvitoria%2Fhomemoculos.webp',
    icon: <Sun size={32} />
  },
  {
    title: 'Masculino',
    description: 'Modelos versáteis para o homem contemporâneo',
    image: 'https://storage.lucasmendes.dev/site-sp/oticasvitoria%2Fhomem2oculos.jpg',
    icon: <Users size={32} />
  },
  {
    title: 'Feminino',
    description: 'Elegância e sofisticação em cada detalhe',
    image: 'https://storage.lucasmendes.dev/site-sp/oticasvitoria%2Fmulher2oculos.webp',
    icon: <Sparkles size={32} />
  },
  {
    title: 'Clip-On Solar',
    description: 'Versatilidade e praticidade 2 em 1',
    image: 'https://storage.lucasmendes.dev/site-sp/oticasvitoria%2Fhomem3oculos.webp',
    icon: <Sun size={32} />,
    highlight: 'Versatilidade e Praticidade'
  }
];

export function Categories() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section
      id="categorias"
      ref={sectionRef}
      className="py-20 lg:py-24 bg-cream-beige"
    >
      <div className="container mx-auto px-4">
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-brown-main mb-4">
            Encontre o Óculos Perfeito
          </h2>
          <p className="text-lg md:text-xl text-brown-light max-w-3xl mx-auto">
            Explore nossa coleção completa de armações e óculos solares
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-6 md:gap-8">
          {categories.map((category, index) => (
            <div
              key={category.title}
              className={`
                w-full 
                md:w-[calc((100%-1.5rem)/2)] 
                lg:w-[calc((100%-4rem)/3)]
                group relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 aspect-[4/5] 
                ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
              `}
              style={{
                transitionDelay: `${index * 100}ms`
              }}
            >
              <img
                src={category.image}
                alt={category.title}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                loading="lazy"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-brown-main/90 via-brown-main/50 to-transparent opacity-80 group-hover:opacity-95 transition-opacity duration-300"></div>

              <div className="absolute inset-0 p-6 flex flex-col justify-end text-cream-main">
                <div className="transform translate-y-0 group-hover:-translate-y-2 transition-transform duration-300">
                  <div className="mb-4 text-cream-gold">
                    {category.icon}
                  </div>

                  <h3 className="text-2xl font-heading font-bold mb-2">
                    {category.title}
                  </h3>

                  {category.highlight && (
                    <span className="inline-block bg-cream-gold text-brown-main text-xs px-3 py-1 rounded-full font-semibold mb-2">
                      {category.highlight}
                    </span>
                  )}

                  <p className="text-cream-main/90 mb-4">
                    {category.description}
                  </p>

                  {/* BOTÃO DE AÇÃO AJUSTADO:
                     - Mobile (padrão): opacity-100 (Sempre visível)
                     - Desktop (lg:): opacity-0 (Invisível até passar o mouse)
                  */}
                  <a
                    href="https://wa.me/5527998695803"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      inline-flex items-center text-cream-gold font-semibold 
                      opacity-100 translate-y-0 
                      lg:opacity-0 lg:translate-y-4 lg:group-hover:opacity-100 lg:group-hover:translate-y-0 
                      transition-all duration-300 mt-2"
                  >
                    Ver opções
                    <svg
                      className="w-5 h-5 ml-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
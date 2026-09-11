import { useEffect, useRef, useState } from 'react';

interface Brand {
  name: string;
  category: 'Premium Internacional' | 'Esportivo' | 'Fashion Designer' | 'Outros';
}

const brands: Brand[] = [
  { name: 'Ray Ban', category: 'Premium Internacional' },
  { name: 'Oakley', category: 'Premium Internacional' },
  { name: 'Carrera', category: 'Premium Internacional' },
  { name: 'Arnette', category: 'Premium Internacional' },
  { name: 'Armani', category: 'Premium Internacional' },
  { name: 'Guess', category: 'Premium Internacional' },
  { name: 'Mormaii', category: 'Esportivo' },
  { name: 'HB', category: 'Esportivo' },
  { name: 'Speedo', category: 'Esportivo' },
  { name: 'Sabrina Sato', category: 'Fashion Designer' },
  { name: 'Grazi Massafera', category: 'Fashion Designer' },
  { name: 'Colcci', category: 'Fashion Designer' },
  { name: 'Vogue', category: 'Fashion Designer' },
  { name: 'Tecnol', category: 'Outros' },
  { name: 'Milano', category: 'Outros' },
  { name: 'Fiamma', category: 'Outros' },
  { name: 'Lavorato', category: 'Outros' },
  { name: 'Aramis', category: 'Outros' },
  { name: 'Red Nose', category: 'Outros' },
  { name: 'Yalea', category: 'Outros' },
  { name: 'Jean Monnier', category: 'Outros' },
  { name: 'Adidas', category: 'Outros' },
  { name: 'Max&co', category: 'Outros' },
  { name: 'Hickmann', category: 'Outros' },

];

// Duplicamos a lista para criar o efeito infinito sem cortes
const carouselBrands = [...brands, ...brands];

const categoryColors = {
  'Premium Internacional': 'bg-[#D4AF37]/20 text-[#3b2720] border-[#D4AF37]/30',
  'Esportivo': 'bg-[#3b2720]/10 text-[#3b2720] border-[#3b2720]/20',
  'Fashion Designer': 'bg-[#3b2720] text-[#fffffa] border-[#3b2720]',
  'Outros': 'bg-[#fffffa] text-[#3b2720] border-[#3b2720]/10',
};

export function Brands() {
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
      id="marcas"
      ref={sectionRef}
      className="py-20 lg:py-24 bg-[#fcfcfa] overflow-hidden"
    >
      {/* Ajustei o tempo de 40s para 55s para ficar mais lento */}
      <style>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-scroll {
          animation: scroll 75s linear infinite;
        }
        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>

      <div className="container mx-auto px-4 mb-12">
        <div
          className={`text-center transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#3b2720] mb-4">
            Marcas que Vestimos em Você
          </h2>
          <p className="text-lg md:text-xl text-[#3b2720]/70 max-w-3xl mx-auto">
            Parceiros oficiais das maiores marcas do mercado óptico
          </p>
        </div>
      </div>

      {/* Container do Carrossel */}
      <div className="relative w-full">
        
        {/* Gradiente Esquerdo (Fade) */}
        <div className="absolute left-0 top-0 bottom-0 w-20 md:w-40 z-10 bg-gradient-to-r from-[#fcfcfa] to-transparent pointer-events-none" />
        
        {/* Gradiente Direito (Fade) */}
        <div className="absolute right-0 top-0 bottom-0 w-20 md:w-40 z-10 bg-gradient-to-l from-[#fcfcfa] to-transparent pointer-events-none" />

        {/* Trilho Animado */}
        <div className="flex w-max animate-scroll">
          {carouselBrands.map((brand, index) => (
            <div
              key={`${brand.name}-${index}`}
              className="mx-3 w-64 md:w-72 flex-shrink-0"
            >
              <div className="bg-white rounded-xl p-8 shadow-md hover:shadow-xl transition-all duration-300 border border-[#3b2720]/5 flex flex-col items-center justify-center gap-4 h-40 group cursor-default">
                <span className="text-[#3b2720] font-bold text-xl text-center group-hover:scale-105 transition-transform">
                  {brand.name}
                </span>
                <span
                  className={`text-xs px-3 py-1 rounded-full font-medium border ${
                    categoryColors[brand.category]
                  }`}
                >
                  {brand.category === 'Outros' ? 'Premium' : brand.category.split(' ')[0]}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="container mx-auto px-4">
        <div
          className={`mt-16 text-center transition-all duration-1000 delay-500 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <p className="text-[#3b2720]/70 text-lg mb-6">
            E muito mais! Visite nossa loja e conheça toda nossa coleção.
          </p>
          <a
            href="https://wa.me/5527998695803"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#3b2720] text-[#fffffa] px-8 py-3 rounded-lg font-semibold hover:bg-[#5a3e32] transition-all hover:scale-105 shadow-lg"
          >
            Consultar Disponibilidade
          </a>
        </div>
      </div>
    </section>
  );
}
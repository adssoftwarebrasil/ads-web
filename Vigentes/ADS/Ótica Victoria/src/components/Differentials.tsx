import { useEffect, useRef, useState } from 'react';
import { Award, Users, MapPin, ShieldCheck } from 'lucide-react';

interface Differential {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const differentials: Differential[] = [
  {
    icon: <Award size={48} />,
    title: 'Marcas Premium',
    description: 'Parceiros oficiais das maiores marcas nacionais e internacionais'
  },
  {
    icon: <Users size={48} />,
    title: 'Atendimento Especializado',
    description: 'Equipe qualificada para orientar sua escolha perfeita'
  },
  {
    icon: <MapPin size={48} />,
    title: 'Localização Privilegiada',
    description: 'Jardim Camburi - Vitória/ES, fácil acesso e estacionamento'
  },
  {
    icon: <ShieldCheck size={48} />,
    title: 'Tradição e Confiança',
    description: 'Mais de 20 anos de experiência no mercado óptico'
  }
];

export function Differentials() {
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
      ref={sectionRef}
      className="py-20 lg:py-24 bg-brown-main text-cream-main"
    >
      <div className="container mx-auto px-4">
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-4">
            Por Que Escolher a Ótica Victoria?
          </h2>
          <p className="text-lg md:text-xl text-cream-main/80 max-w-3xl mx-auto">
            Compromisso com qualidade, estilo e satisfação do cliente
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {differentials.map((differential, index) => (
            <div
              key={differential.title}
              className={`flex flex-col items-center text-center p-8 rounded-2xl bg-brown-main/50 backdrop-blur-sm border border-cream-main/10 hover:border-cream-gold/50 hover:bg-brown-main/70 transition-all duration-300 hover:-translate-y-2 min-h-[240px] ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{
                transitionDelay: `${index * 150}ms`
              }}
            >
              <div className="text-cream-gold mb-6">
                {differential.icon}
              </div>

              <h3 className="text-xl font-heading font-bold mb-3">
                {differential.title}
              </h3>

              <p className="text-cream-main/80 leading-relaxed">
                {differential.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

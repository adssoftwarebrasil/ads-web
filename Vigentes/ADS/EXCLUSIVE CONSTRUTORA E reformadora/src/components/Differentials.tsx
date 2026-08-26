import React, { useEffect, useRef, useState } from 'react';
import { CheckCircle, Users, FileCheck } from 'lucide-react';

const differentials = [
  {
    icon: CheckCircle,
    title: 'Atendimento Ágil',
    description: 'Orçamentos rápidos e resposta imediata.',
  },
  {
    icon: Users,
    title: 'Engenheiros Titulados',
    description: 'Obra acompanhada por quem entende.',
  },
  {
    icon: FileCheck,
    title: 'Transparência',
    description: 'Sem surpresas no orçamento final.',
  },
];

export const Differentials: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const currentRef = sectionRef.current;

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  return (
    <section
      id="diferenciais"
      ref={sectionRef}
      className="py-20 bg-[#0a154b]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-12 md:mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-3 md:mb-4">
            Por que Escolher a Exclusive?
          </h2>
          <p className="text-lg md:text-xl text-[#07dde5] px-4">
            Não arrisque seu patrimônio. Construa com quem garante qualidade e atendimento.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 md:gap-12">
          {differentials.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className={`text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className="flex justify-center mb-4 md:mb-6">
                  <Icon className="text-[#07dde5]" size={56} strokeWidth={1.5} />
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-white mb-2 md:mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-300 text-base md:text-lg leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

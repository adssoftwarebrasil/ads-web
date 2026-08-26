import React, { useEffect, useRef, useState } from 'react';
import { Home, Wrench, FileText, Banknote } from 'lucide-react';

const services = [
  {
    icon: Home,
    title: 'Construção Residencial',
    description: 'Do alicerce ao telhado, construímos casas com alto padrão de qualidade.',
  },
  {
    icon: Wrench,
    title: 'Reformas em Geral',
    description: 'Revitalização de ambientes com rapidez e limpeza.',
  },
  {
    icon: FileText,
    title: 'Projetos e Engenharia',
    description: 'Planejamento técnico detalhado para garantir a segurança da sua obra.',
  },
  {
    icon: Banknote,
    title: 'Financiamento Habitacional',
    description: 'Assessoria completa para viabilizar o crédito da sua construção.',
  },
];

export const Services: React.FC = () => {
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
      id="servicos"
      ref={sectionRef}
      className="py-20 bg-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl font-bold text-[#0a154b] mb-4">
            Nossos Serviços
          </h2>
          <p className="text-xl text-gray-600">
            Soluções completas para construir e reformar com excelência
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className={`bg-white p-6 md:p-8 rounded-lg border-2 border-gray-200 hover:border-[#07dde5] hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="flex justify-center mb-4 md:mb-6">
                  <div className="p-3 md:p-4 bg-[#0a154b] rounded-full">
                    <Icon className="text-[#07dde5]" size={28} />
                  </div>
                </div>
                <h3 className="text-lg md:text-xl font-bold text-[#0a154b] mb-2 md:mb-3 text-center">
                  {service.title}
                </h3>
                <p className="text-sm md:text-base text-gray-600 text-center leading-relaxed">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

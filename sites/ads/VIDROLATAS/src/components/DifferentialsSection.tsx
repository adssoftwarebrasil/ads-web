import { Award, Shield, Users } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';

const differentials = [
  {
    icon: Award,
    title: '33 Anos de Tradição',
    description: 'Desde 1992 oferecendo serviços de qualidade para Goiânia e região metropolitana',
  },
  {
    icon: Shield,
    title: 'Vidros Certificados',
    description: 'Trabalhamos com marcas originais e certificadas, garantindo segurança e durabilidade',
  },
  {
    icon: Users,
    title: 'Equipe Especializada',
    description: 'Profissionais treinados para atender veículos nacionais e importados com excelência',
  },
];

function DifferentialCard({ differential, index }: { differential: typeof differentials[0]; index: number }) {
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), index * 150);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => observer.disconnect();
  }, [index]);

  const Icon = differential.icon;

  return (
    <div
      ref={cardRef}
      className={`text-center transition-all duration-500 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
    >
      <div className="w-20 h-20 bg-[#0298d2] rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg hover:scale-110 transition-transform duration-300">
        <Icon className="text-white" size={40} />
      </div>
      <h3 className="text-2xl font-bold text-[#012d78] mb-4">{differential.title}</h3>
      <p className="text-gray-600 leading-relaxed max-w-sm mx-auto">{differential.description}</p>
    </div>
  );
}

export default function DifferentialsSection() {
  return (
    <section className="py-20 bg-[#e4eef8]">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#012d78] mb-4">
            Por Que Escolher a Vidrolatas?
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
          {differentials.map((differential, index) => (
            <DifferentialCard key={index} differential={differential} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

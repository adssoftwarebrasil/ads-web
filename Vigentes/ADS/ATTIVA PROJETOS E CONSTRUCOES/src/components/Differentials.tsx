import { useEffect, useRef, useState } from 'react';
import { Ruler, Layers, Eye, Clock, Users, PiggyBank } from 'lucide-react';

interface DifferentialItemProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: number;
}

const DifferentialItem = ({ icon, title, description, delay }: DifferentialItemProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const itemRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), delay);
        }
      },
      { threshold: 0.1 }
    );

    if (itemRef.current) {
      observer.observe(itemRef.current);
    }

    return () => observer.disconnect();
  }, [delay]);

  return (
    <div
      ref={itemRef}
      className={`flex gap-4 transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
      }`}
    >
      <div className="flex-shrink-0 w-14 h-14 bg-primary-orange-light/20 rounded-lg flex items-center justify-center text-white">
        {icon}
      </div>
      <div>
        <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
        <p className="text-gray-200 leading-relaxed">{description}</p>
      </div>
    </div>
  );
};

const Differentials = () => {
  const differentials = [
    {
      icon: <Ruler size={28} />,
      title: 'Projetos Sob Medida',
      description: 'Nada é padrão. Cada projeto é pensado para o seu terreno, estilo e orçamento.',
      delay: 0,
    },
    {
      icon: <Layers size={28} />,
      title: 'Integração Completa',
      description: 'Arquitetônico, estrutural, elétrico e hidráulico em um só lugar. Sem incompatibilidades.',
      delay: 100,
    },
    {
      icon: <Eye size={28} />,
      title: 'Transparência Total',
      description: 'Acompanhamos cada etapa com você. Clareza que evita erros e retrabalhos.',
      delay: 200,
    },
    {
      icon: <Clock size={28} />,
      title: 'Compromisso com Prazos',
      description: 'Cronogramas claros e entregas dentro do prazo definido.',
      delay: 300,
    },
    {
      icon: <Users size={28} />,
      title: 'Atendimento Humanizado',
      description: 'Você fala direto com quem entende do projeto. Sem intermediários.',
      delay: 400,
    },
    {
      icon: <PiggyBank size={28} />,
      title: 'Economia na Obra',
      description: 'Projetos bem-feitos geram menos desperdício, orçamentos precisos e menos modificações.',
      delay: 500,
    },
  ];

  return (
    <section id="diferenciais" className="py-20 bg-primary-blue relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-72 h-72 border-2 border-white rounded-full" />
        <div className="absolute bottom-20 right-20 w-96 h-96 border-2 border-white rounded-full" />
        <div className="absolute top-1/2 left-1/3 w-48 h-48 border-2 border-white rounded-full" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <p className="text-primary-orange-light font-semibold text-sm uppercase tracking-wide mb-4">
            POR QUE NOS ESCOLHER
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            O Diferencial ATTIVA
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {differentials.map((diff, index) => (
            <DifferentialItem key={index} {...diff} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Differentials;

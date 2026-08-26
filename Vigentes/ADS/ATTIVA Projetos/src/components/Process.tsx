import { useEffect, useRef, useState } from 'react';
import { MessageCircle, Users, PenTool, Eye, FileCheck, Headphones } from 'lucide-react';

interface ProcessStepProps {
  number: number;
  icon: React.ReactNode;
  title: string;
  description: string;
  isLast?: boolean;
}

const ProcessStep = ({ number, icon, title, description, isLast }: ProcessStepProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const stepRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (stepRef.current) {
      observer.observe(stepRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={stepRef} className="flex flex-col items-center text-center relative">
      <div
        className={`w-20 h-20 rounded-full bg-primary-orange flex items-center justify-center text-white mb-4 transition-all duration-700 transform ${
          isVisible ? 'scale-100 opacity-100' : 'scale-0 opacity-0'
        }`}
        style={{ transitionDelay: `${number * 100}ms` }}
      >
        <div className="relative">
          {icon}
          <div className="absolute -top-2 -right-2 w-6 h-6 bg-primary-blue-dark rounded-full flex items-center justify-center text-xs font-bold">
            {number}
          </div>
        </div>
      </div>

      <h3
        className={`text-xl font-bold text-primary-blue-dark mb-2 transition-all duration-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}
        style={{ transitionDelay: `${number * 100 + 200}ms` }}
      >
        {title}
      </h3>

      <p
        className={`text-gray-600 max-w-xs transition-all duration-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}
        style={{ transitionDelay: `${number * 100 + 300}ms` }}
      >
        {description}
      </p>

      {!isLast && (
        <div
          className={`hidden lg:block absolute top-10 left-1/2 w-full h-0.5 bg-gradient-to-r from-primary-orange to-primary-orange-light transition-all duration-1000 origin-left ${
            isVisible ? 'scale-x-100' : 'scale-x-0'
          }`}
          style={{ transitionDelay: `${number * 100 + 400}ms` }}
        />
      )}
    </div>
  );
};

const Process = () => {
  const steps = [
    {
      icon: <MessageCircle size={28} />,
      title: 'Contato Inicial',
      description: 'Entre em contato e conte sobre seu projeto',
    },
    {
      icon: <Users size={28} />,
      title: 'Reunião de Briefing',
      description: 'Entendemos suas necessidades e expectativas',
    },
    {
      icon: <PenTool size={28} />,
      title: 'Desenvolvimento',
      description: 'Nossa equipe desenvolve o projeto personalizado',
    },
    {
      icon: <Eye size={28} />,
      title: 'Apresentação',
      description: 'Você recebe e aprova o projeto',
    },
    {
      icon: <FileCheck size={28} />,
      title: 'Aprovação Legal',
      description: 'Cuidamos da documentação nos órgãos públicos',
    },
    {
      icon: <Headphones size={28} />,
      title: 'Acompanhamento',
      description: 'Suporte durante toda a execução da obra',
    },
  ];

  return (
    <section className="py-20 bg-background-light">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-primary-orange font-semibold text-sm uppercase tracking-wide mb-4">
            COMO FUNCIONA
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-blue-dark mb-6">
            Do Primeiro Contato à Obra Pronta
          </h2>
        </div>

        <div className="hidden lg:grid lg:grid-cols-3 gap-x-24 gap-y-16 max-w-6xl mx-auto">
          {steps.map((step, index) => (
            <ProcessStep
              key={index}
              number={index + 1}
              icon={step.icon}
              title={step.title}
              description={step.description}
              isLast={index === steps.length - 1}
            />
          ))}
        </div>

        <div className="lg:hidden space-y-12">
          {steps.map((step, index) => (
            <ProcessStep
              key={index}
              number={index + 1}
              icon={step.icon}
              title={step.title}
              description={step.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;

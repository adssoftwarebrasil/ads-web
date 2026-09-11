import { useEffect, useRef, useState } from 'react';
import { FileText, Building2, Zap, Droplets, FileCheck, LandPlot } from 'lucide-react';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: number;
}

const ServiceCard = ({ icon, title, description, delay }: ServiceCardProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), delay);
        }
      },
      { threshold: 0.1 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => observer.disconnect();
  }, [delay]);

  return (
    <div
      ref={cardRef}
      className={`group bg-white p-8 rounded-xl shadow-md hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      <div className="mb-6 text-primary-orange transition-all duration-300 group-hover:scale-110 group-hover:rotate-3 inline-block">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-primary-blue-dark mb-4">
        {title}
      </h3>
      <p className="text-gray-600 leading-relaxed">
        {description}
      </p>
    </div>
  );
};

const Services = () => {
  const services = [
    {
      icon: <FileText size={48} strokeWidth={1.5} />,
      title: 'Projetos Arquitetônicos',
      description: 'Projetos personalizados que unem estética, funcionalidade e o melhor aproveitamento do seu terreno',
      delay: 0,
    },
    {
      icon: <Building2 size={48} strokeWidth={1.5} />,
      title: 'Projetos Estruturais',
      description: 'Dimensionamento seguro de fundações, pilares, vigas e lajes com conformidade às normas técnicas',
      delay: 100,
    },
    {
      icon: <Zap size={48} strokeWidth={1.5} />,
      title: 'Projetos Elétricos',
      description: 'Instalações elétricas eficientes e seguras, dimensionadas para a demanda do seu projeto',
      delay: 200,
    },
    {
      icon: <Droplets size={48} strokeWidth={1.5} />,
      title: 'Projetos Hidrossanitários',
      description: 'Sistemas de água fria, esgoto e águas pluviais projetados para máxima eficiência',
      delay: 300,
    },
    {
      icon: <FileCheck size={48} strokeWidth={1.5} />,
      title: 'Aprovação em Órgãos Públicos',
      description: 'Cuidamos de toda documentação e trâmites para aprovação junto à prefeitura',
      delay: 400,
    },
    {
      icon: <LandPlot size={48} strokeWidth={1.5} />,
      title: 'Desmembramento e Remembramento',
      description: 'Regularização de terrenos com projetos de desmembramento, remembramento e remanejamento',
      delay: 500,
    },
  ];

  return (
    <section id="servicos" className="py-20 bg-background-light">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-primary-orange font-semibold text-sm uppercase tracking-wide mb-4">
            O QUE FAZEMOS
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-blue-dark mb-6">
            Soluções Completas em Projetos
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Tudo que você precisa em um só lugar, com equipe técnica qualificada
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;

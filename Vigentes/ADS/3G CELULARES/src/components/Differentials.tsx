import { Clock, Package as PackageIcon, Wrench, ShieldCheck } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';

export default function Differentials() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const differentials = [
    {
      icon: Clock,
      title: 'Experiência',
      description: '20 anos no mercado com milhares de clientes satisfeitos',
    },
    {
      icon: PackageIcon,
      title: 'Variedade',
      description: 'Amplo catálogo de produtos das melhores marcas',
    },
    {
      icon: Wrench,
      title: 'Assistência',
      description: 'Técnicos especializados em iPhone e principais marcas',
    },
    {
      icon: ShieldCheck,
      title: 'Garantia',
      description: 'Produtos originais com garantia de fábrica',
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="py-12 lg:py-16"
      style={{
        background: 'linear-gradient(to bottom, #172059 0%, #00adec 100%)',
      }}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-10 lg:mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            Por Que Escolher a 3G?
          </h2>
          <div className="w-24 h-1 bg-[#81c227] mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {differentials.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className={`bg-white/95 backdrop-blur-sm p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{
                  transitionDelay: `${index * 100}ms`,
                }}
              >
                <div className="w-16 h-16 bg-[#81c227] rounded-full flex items-center justify-center mb-6 mx-auto">
                  <Icon className="text-white" size={32} />
                </div>

                <h3 className="text-xl font-bold text-[#172059] mb-3 text-center">
                  {item.title}
                </h3>

                <p className="text-gray-600 text-center leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

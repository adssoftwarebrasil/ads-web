import { Award, Settings, Scale, Lightbulb } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

export default function HighlightsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

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

    return () => observer.disconnect();
  }, []);

  const highlights = [
    {
      icon: Award,
      title: 'Mais de 30 anos de experiência',
      description: 'Atuamos no mercado com qualidade e confiança desde 1987',
    },
    {
      icon: Settings,
      title: 'Serviços Personalizados',
      description: 'Atendimento ágil e consultoria para escolha das balanças ideais',
    },
    {
      icon: Scale,
      title: 'Balanças para Todos os Negócios',
      description: 'Desde modelos simples até balanças eletrônicas avançadas',
    },
    {
      icon: Lightbulb,
      title: 'Soluções Inovadoras',
      description: 'Desenvolvemos soluções completas para suas necessidades de pesagem',
    },
  ];

  return (
    <section ref={sectionRef} className="bg-[#F5F9FC] pt-32 pb-24 -mt-20 relative">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
          {highlights.map((highlight, index) => (
            <div
              key={index}
              className={`bg-white rounded-2xl p-10 text-center transform transition-all duration-700 hover:-translate-y-3 hover:shadow-2xl group ${
                isVisible ? 'animate-fade-in-up opacity-100' : 'opacity-0'
              }`}
              style={{
                animationDelay: `${index * 0.1}s`,
                boxShadow: '0 8px 32px rgba(1,98,177,0.12)',
              }}
            >
              <div className="absolute top-0 left-0 right-0 h-1 bg-[#EA1E26] rounded-t-2xl transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>

              <div
                className="w-24 h-24 mx-auto mb-6 rounded-full flex items-center justify-center transform group-hover:rotate-360 transition-transform duration-700"
                style={{
                  background: 'linear-gradient(135deg, #0162B1, #0178D6)',
                  boxShadow: '0 8px 24px rgba(1,98,177,0.3)',
                }}
              >
                <highlight.icon className="text-white" size={40} strokeWidth={2.5} />
              </div>

              <h3 className="text-[#000000] font-bold text-lg mb-3 leading-tight">
                {highlight.title}
              </h3>

              <p className="text-[#666666] text-[15px] leading-relaxed">
                {highlight.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

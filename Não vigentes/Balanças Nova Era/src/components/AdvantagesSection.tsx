import { Zap, Users, Shield } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

export default function AdvantagesSection() {
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

  const advantages = [
    {
      number: '01',
      icon: Zap,
      title: 'Atendimento Rápido e Eficiente',
      description: 'Resolvemos seus problemas de forma ágil e eficaz, com técnicos disponíveis para atendimento imediato',
    },
    {
      number: '02',
      icon: Users,
      title: 'Equipe Técnica Qualificada',
      description: 'Profissionais experientes e certificados, prontos para atender todas as suas necessidades com excelência',
    },
    {
      number: '03',
      icon: Shield,
      title: 'Transparência nos Serviços',
      description: 'Realizamos cada serviço com total confiabilidade, garantia e orçamento transparente',
    },
  ];

  return (
    <section ref={sectionRef} id="vantagens" className="bg-[#F5F9FC] py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-[#EA1E26] font-bold text-sm uppercase tracking-wider mb-2 block">
            Vantagens
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-[#000000] mb-4">
            Os Benefícios de Escolher a Balanças Nova Era
          </h2>
          <p className="text-[#666666] text-lg max-w-3xl mx-auto">
            Entenda as vantagens de nos escolher como seu parceiro em pesagem
          </p>
        </div>

        <div className="max-w-5xl mx-auto space-y-8">
          {advantages.map((advantage, index) => (
            <div
              key={index}
              className={`bg-white border-l-6 rounded-xl p-10 relative overflow-hidden transition-all duration-500 hover:translate-x-3 hover:shadow-2xl group ${
                isVisible ? 'animate-fade-in-left' : 'opacity-0'
              }`}
              style={{
                borderLeftColor: '#EA1E26',
                borderLeftWidth: '6px',
                boxShadow: '0 6px 24px rgba(0,0,0,0.08)',
                animationDelay: `${index * 0.15}s`,
              }}
            >
              <div
                className="absolute top-0 left-0 text-[#E8F2F9] font-black opacity-50 leading-none"
                style={{
                  fontSize: '120px',
                  fontFamily: 'monospace',
                  zIndex: 0,
                }}
              >
                {advantage.number}
              </div>

              <div className="relative z-10 flex flex-col md:flex-row gap-6 items-start">
                <div
                  className="bg-[#E8F2F9] p-5 rounded-xl flex-shrink-0 transform transition-transform group-hover:scale-110 group-hover:rotate-6"
                >
                  <advantage.icon className="text-[#0162B1]" size={48} strokeWidth={2} />
                </div>

                <div className="flex-1">
                  <h3 className="text-[#000000] font-bold text-2xl mb-3 leading-tight">
                    {advantage.title}
                  </h3>
                  <p className="text-[#666666] text-base leading-relaxed">
                    {advantage.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

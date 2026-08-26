import { useEffect, useRef, useState } from 'react';
import { Award, Heart, Scale, Globe } from 'lucide-react';

export default function WhyProtons() {
  const [isVisible, setIsVisible] = useState(false);
  const [counts, setCounts] = useState({ years: 0, clients: 0, savings: 0 });
  const sectionRef = useRef<HTMLDivElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          setIsVisible(true);
          hasAnimated.current = true;
          animateCounters();
        }
      },
      { threshold: 0.3 }
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

  const animateCounters = () => {
    const duration = 2000;
    const steps = 60;
    const interval = duration / steps;

    let step = 0;
    const timer = setInterval(() => {
      step++;
      const progress = step / steps;

      setCounts({
        years: Math.floor(14 * progress),
        clients: Math.floor(500 * progress),
        savings: Math.floor(30 * progress),
      });

      if (step === steps) {
        clearInterval(timer);
        setCounts({ years: 14, clients: 500, savings: 30 });
      }
    }, interval);
  };

  const differentials = [
    {
      icon: Award,
      title: 'Especialização em Lucro Real',
      description:
        'Somos referência em contabilidade de alta performance para empresas do regime de Lucro Real.',
    },
    {
      icon: Heart,
      title: 'Visão de Legado',
      description:
        'Entendemos que sua empresa é mais que um negócio - é um legado. Trabalhamos para construí-lo junto com você.',
    },
    {
      icon: Scale,
      title: 'Compromisso com a Lei',
      description:
        '100% de nossas estratégias são baseadas em elisão fiscal, sempre dentro da legalidade.',
    },
    {
      icon: Globe,
      title: 'Atendimento Nacional',
      description:
        'Atendemos empresas em todo o Brasil, com expertise nas legislações regionais.',
    },
  ];

  return (
    <section id="why-protons" ref={sectionRef} className="py-20 bg-[#2c2c5b] relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#c9a962] rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Por que mais de 500 empresas escolhem a Protons?
          </h2>
          <p className="text-lg text-white/80">
            Nosso compromisso vai além dos números
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-16">
          <div className="text-center">
            <div className="text-5xl md:text-6xl font-bold text-[#c9a962] mb-2">
              {counts.years}+
            </div>
            <div className="text-white/80 text-lg">Anos de Experiência</div>
          </div>
          <div className="text-center">
            <div className="text-5xl md:text-6xl font-bold text-[#c9a962] mb-2">
              {counts.clients}+
            </div>
            <div className="text-white/80 text-lg">Empresas Atendidas</div>
          </div>
          <div className="text-center">
            <div className="text-5xl md:text-6xl font-bold text-[#c9a962] mb-2">
              {counts.savings}%
            </div>
            <div className="text-white/80 text-lg">Economia Média em Tributos</div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {differentials.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className={`bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8 hover:bg-white/10 transition-all duration-500 ${
                  isVisible ? 'animate-in fade-in slide-in-from-bottom-4' : 'opacity-0'
                }`}
                style={{
                  animationDelay: isVisible ? `${index * 150}ms` : '0ms',
                  animationFillMode: 'backwards',
                }}
              >
                <div className="w-14 h-14 bg-[#c9a962]/20 rounded-lg flex items-center justify-center mb-4">
                  <Icon className="w-7 h-7 text-[#c9a962]" />
                </div>
                <h3 className="text-white font-bold text-xl mb-3">{item.title}</h3>
                <p className="text-white/70 leading-relaxed">{item.description}</p>
              </div>
            );
          })}
        </div>

        <div className="mt-16 text-center">
          <a
            href="https://wa.me/5562998005803"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#c9a962] hover:bg-[#b89952] text-[#2c2c5b] px-8 py-4 rounded-lg font-bold transition-all duration-300 hover:shadow-2xl hover:scale-105"
          >
            Faça Parte Deste Time
          </a>
        </div>
      </div>
    </section>
  );
}

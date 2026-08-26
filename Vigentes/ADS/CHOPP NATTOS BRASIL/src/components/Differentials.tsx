import { useEffect, useRef, useState } from 'react';
import { Award, Users, Briefcase, Wrench, DollarSign, LucideIcon } from 'lucide-react';

interface Differential {
  icon: LucideIcon;
  title: string;
  description: string;
}

const differentials: Differential[] = [
  {
    icon: Award,
    title: 'Produtos de Extrema Qualidade',
    description: 'Trabalhamos exclusivamente com a cervejaria Nattos Beer, garantindo um chopp premium e saboroso',
  },
  {
    icon: Users,
    title: 'Atendimento Personalizado',
    description: 'Nos adequamos à realidade e necessidade de cada cliente, materializando sonhos em realidade',
  },
  {
    icon: Briefcase,
    title: 'Equipe Técnica Altamente Profissional',
    description: 'Time especializado e comprometido com a excelência em cada atendimento',
  },
  {
    icon: Wrench,
    title: 'Melhor Suporte Técnico da Região',
    description: 'Manutenção especializada e resposta rápida para garantir seu evento perfeito',
  },
  {
    icon: DollarSign,
    title: 'Preços Justos',
    description: 'Valores compatíveis com a qualidade superior que oferecemos',
  },
];

export default function Differentials() {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="diferenciais" className="py-20 md:py-32 bg-white px-6">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[rgb(40,44,115)] text-center mb-16">
          Por Que Escolher a Nattos Brasil?
        </h2>
        <div className="space-y-6" ref={ref}>
          {differentials.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className={`bg-gradient-to-r from-[rgb(245,247,250)] to-white p-8 md:p-10 rounded-lg border-l-4 border-l-[rgb(176,146,71)] shadow-md hover:shadow-xl transition-all duration-500 flex gap-6 items-start ${
                  visible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <Icon size={50} className="text-[rgb(176,146,71)] flex-shrink-0" />
                <div>
                  <h3 className="text-xl md:text-2xl font-semibold text-[rgb(40,44,115)] mb-3">{item.title}</h3>
                  <p className="text-gray-700 leading-relaxed text-lg">{item.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

import { useEffect, useRef, useState } from 'react';
import {
  Calculator,
  FileText,
  TrendingUp,
  BarChart3,
  Settings,
  Shield,
  Users,
  Search,
} from 'lucide-react';

export default function Services() {
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

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const services = [
    {
      icon: Calculator,
      title: 'Contabilidade de Alta Performance',
      description:
        'Especialistas em contabilidade para empresas do Lucro Real com foco em resultados.',
    },
    {
      icon: FileText,
      title: 'Planejamento Tributário',
      description:
        'Definição do melhor regime tributário, revisão de cadastros, adequações de CFOP, NCM e CEST.',
    },
    {
      icon: TrendingUp,
      title: 'Recuperação de Créditos Tributários',
      description:
        'Análise de produtos monofásicos e substituição tributária para recuperar valores pagos indevidamente.',
    },
    {
      icon: BarChart3,
      title: 'Consultoria Financeira',
      description:
        'Reestruturação, viabilidade econômica e formação de preço de venda.',
    },
    {
      icon: Settings,
      title: 'Consultoria em Gestão',
      description:
        'Implantação de sistemas de gestão: ISO 9001, ONA, PBQP-H e mais.',
    },
    {
      icon: Shield,
      title: 'Compliance e Integridade',
      description:
        'Programas de integridade para empresas fornecedoras de órgãos públicos.',
    },
    {
      icon: Users,
      title: 'Planejamento Sucessório',
      description:
        'Elaboração de Holdings e implantação de conselhos de administração.',
    },
    {
      icon: Search,
      title: 'Auditorias e Perícias',
      description:
        'Auditoria contábil, tributária, fiscal, atuarial e financeira.',
    },
  ];

  return (
    <section id="services" ref={sectionRef} className="py-20 bg-gradient-to-b from-white to-[#f8f9fa]">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#2c2c5b] mb-6">
            Soluções Completas para Sua Empresa
          </h2>
          <p className="text-lg text-[#a7b4bd]">
            Oferecemos consultoria especializada em todas as áreas contábeis e tributárias
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className={`group bg-white rounded-xl p-6 hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-[#4a90a4] hover:-translate-y-2 ${
                  isVisible ? 'animate-in fade-in slide-in-from-bottom-4' : 'opacity-0'
                }`}
                style={{
                  animationDelay: isVisible ? `${index * 100}ms` : '0ms',
                  animationFillMode: 'backwards',
                }}
              >
                <div className="w-14 h-14 bg-gradient-to-br from-[#2c2c5b] to-[#3d3d7a] rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                  <Icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-[#2c2c5b] font-bold text-lg mb-3 leading-tight">
                  {service.title}
                </h3>
                <p className="text-[#a7b4bd] text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>

        <div className="mt-16 text-center">
          <a
            href="https://wa.me/5562998005803"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#4a90a4] hover:bg-[#3d8390] text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:shadow-lg hover:scale-105"
          >
            Descubra a Solução Ideal para Sua Empresa
          </a>
        </div>
      </div>
    </section>
  );
}

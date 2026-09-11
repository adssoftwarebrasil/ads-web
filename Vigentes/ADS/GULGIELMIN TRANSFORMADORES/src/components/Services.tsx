import { useEffect, useRef } from 'react';
import { Zap, Settings, Truck, Shield, Wrench, Activity } from 'lucide-react';

const SERVICES = [
  {
    icon: Zap,
    title: 'Rebobinagem de Transformadores',
    description:
      'Serviço especializado em rebobinagem de transformadores de média e alta tensão. Recuperamos o equipamento com precisão técnica e materiais de qualidade superior.',
    highlight: true,
  },
  {
    icon: Wrench,
    title: 'Manutenção Preventiva',
    description:
      'Evite paradas não planejadas na sua produção. Realizamos inspeção completa, diagnóstico técnico e manutenção preventiva em transformadores e equipamentos elétricos industriais.',
    highlight: false,
  },
  /*
  {
    icon: Settings,
    title: 'Reparação de Motores Elétricos',
    description:
      'Reparo e manutenção de motores elétricos industriais com alto padrão técnico, garantindo eficiência energética e durabilidade do equipamento.',
    highlight: false,
  },
  */
  {
    icon: Truck,
    title: 'Locação de Guindaste',
    description:
      'Serviço de guindaste para movimentação e instalação de transformadores e equipamentos pesados. Atendimento ágil em toda a região de Lucas do Rio Verde — MT.',
    highlight: false,
  },
  {
    icon: Activity,
    title: 'Diagnóstico Técnico',
    description:
      'Análise criteriosa do estado do seu transformador por técnicos especializados. Identificamos falhas com precisão antes que se tornem prejuízos maiores.',
    highlight: false,
  },
  {
    icon: Shield,
    title: 'Instalações Elétricas Industriais',
    description:
      'Projetos e execução de instalações elétricas para indústrias e empresas. Trabalhamos com segurança, conformidade com normas técnicas e máxima eficiência.',
    highlight: false,
  },
];

export default function Services() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = sectionRef.current?.querySelectorAll('.animate-on-scroll');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="servicos" className="py-20 lg:py-28 bg-brand-dark" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-on-scroll">
          <span className="text-brand-yellow text-xs font-semibold tracking-widest uppercase block mb-3">
            O que fazemos
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-4">
            Soluções Elétricas{' '}
            <span className="text-brand-yellow">Completas</span>
          </h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto leading-relaxed">
            Da manutenção preventiva ao reparo emergencial, atendemos
            todos os aspectos da sua infraestrutura elétrica industrial.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                className={`animate-on-scroll card-hover rounded-2xl p-8 border ${
                  service.highlight
                    ? 'bg-brand-yellow border-brand-yellow'
                    : 'bg-white/5 border-white/10 hover:border-brand-yellow/40'
                }`}
                style={{ transitionDelay: `${index * 80}ms` }}
              >
                <div
                  className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6 ${
                    service.highlight
                      ? 'bg-brand-dark/20'
                      : 'bg-brand-yellow/10'
                  }`}
                >
                  <Icon
                    size={24}
                    className={service.highlight ? 'text-brand-dark' : 'text-brand-yellow'}
                  />
                </div>
                <h3
                  className={`text-xl font-bold mb-3 ${
                    service.highlight ? 'text-brand-dark' : 'text-white'
                  }`}
                >
                  {service.title}
                </h3>
                <p
                  className={`text-sm leading-relaxed ${
                    service.highlight ? 'text-brand-dark/70' : 'text-white/60'
                  }`}
                >
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>

        <div className="mt-14 text-center animate-on-scroll">
          <a
            href="https://wa.me/5565996248334?text=Olá!%20Preciso%20de%20informações%20sobre%20os%20serviços%20de%20vocês."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 gradient-yellow text-brand-dark font-bold text-base px-10 py-4 rounded-full hover:opacity-90 transition-all hover:scale-105 shadow-lg shadow-brand-yellow/20"
          >
            Falar com um Especialista
            <Zap size={18} />
          </a>
        </div>
      </div>
    </section>
  );
}

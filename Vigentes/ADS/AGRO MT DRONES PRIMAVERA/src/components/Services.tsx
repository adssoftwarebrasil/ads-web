import { useEffect, useRef } from 'react';
import { Cpu, Wrench, Zap } from 'lucide-react';

const SERVICES = [
  {
    icon: Cpu,
    title: 'Venda de Drones Agrícolas',
    description:
      'Comercializamos a linha completa DJI Agras (T-25P, T-70P e T100) para pulverização agrícola. Equipamentos originais com suporte técnico especializado.',
    highlight: 'Produtos de qualidade',
    image: '/imagens/drone-dji-agras-t70p-combo.jpeg',
  },
  {
    icon: Wrench,
    title: 'Manutenção e Assistência Técnica',
    description:
      'Serviço técnico especializado para conserto, calibração e manutenção preventiva de drones. Diagnóstico rápido e peças originais para todos os modelos.',
    highlight: 'Conserto rápido',
    image: '/imagens/spad-75-precisao-t50.jpeg',
  },
  {
    icon: Zap,
    title: 'Prestação de Serviços no Campo',
    description:
      'Operação profissional de drones para aplicação de defensivos, mapeamento de propriedades e monitoramento de culturas. Atendemos fazendas em toda região de Primavera do Leste.',
    highlight: 'Máxima eficiência',
    image: 'https://storage.lucasmendes.dev/site-sp/agro-mt-drones/img/prestacao-de-servico-no-campo.webp',
  },
];

export default function Services() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cards = entry.target.querySelectorAll('.service-card');
            cards.forEach((card, i) => {
              setTimeout(() => {
                (card as HTMLElement).style.opacity = '1';
                (card as HTMLElement).style.transform = 'translateY(0)';
              }, i * 150);
            });
          }
        });
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="servicos" className="py-24 bg-white" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-brand-primary font-bold text-sm tracking-widest uppercase mb-3">
            O Que Fazemos
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-brand-dark leading-tight">
            Soluções Completas em{' '}
            <span className="text-brand-primary">Tecnologia Agrícola</span>
          </h2>
          <p className="mt-4 text-gray-500 max-w-xl mx-auto text-base leading-relaxed">
            Da venda ao suporte técnico, cobrimos todas as etapas para que seu drone
            esteja sempre no ar, trabalhando para você.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {SERVICES.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                className="service-card group rounded-3xl overflow-hidden border border-brand-light hover:border-brand-primary shadow-sm hover:shadow-xl transition-all duration-400"
                style={{ opacity: 0, transform: 'translateY(30px)', transition: 'opacity 0.6s ease, transform 0.6s ease' }}
              >
                {/* Image */}
                <div className="relative h-48 overflow-hidden bg-white">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/60 to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <span className="bg-brand-accent/90 text-white text-xs font-bold px-3 py-1 rounded-full">
                      {service.highlight}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="w-12 h-12 rounded-2xl bg-brand-light flex items-center justify-center mb-4 group-hover:bg-brand-primary transition-colors duration-300">
                    <Icon size={22} className="text-brand-primary group-hover:text-white transition-colors duration-300" />
                  </div>
                  <h3 className="text-lg font-bold text-brand-dark mb-3 leading-snug">{service.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{service.description}</p>
                  <a
                    href="http://wa.me/556599004844"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 mt-5 text-brand-primary font-semibold text-sm hover:text-brand-accent transition-colors duration-200"
                  >
                    Solicitar orçamento
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

import { useEffect, useRef } from 'react';
import { ShieldCheck, Wrench, Clock, Star, MapPin, HeartHandshake } from 'lucide-react';

const WHY_US = [
  {
    icon: ShieldCheck,
    title: 'Garantia Total',
    description:
      'Todos os nossos serviços possuem garantia. Trabalhamos com qualidade comprovada e materiais certificados para que você não precise se preocupar.',
  },
  {
    icon: Wrench,
    title: 'Técnicos Especializados',
    description:
      'Nossa equipe é formada por técnicos com vasta experiência em transformadores de média e alta tensão, garantindo diagnósticos precisos e soluções eficazes.',
  },
  {
    icon: Clock,
    title: 'Agilidade no Atendimento',
    description:
      'Sabemos que cada hora parada representa prejuízo. Por isso priorizamos rapidez sem abrir mão da qualidade técnica.',
  },
  {
    icon: Star,
    title: 'Mais de 20 Anos de Mercado',
    description:
      'Décadas de experiência no setor elétrico industrial nos tornaram referência. Nossa reputação é construída pela confiança dos nossos clientes.',
  },
  {
    icon: MapPin,
    title: 'Atendimento Regional',
    description:
      'Atendemos toda a região de Lucas do Rio Verde e cidades próximas em um raio de 500 km, levando nossa equipe até você.',
  },
  {
    icon: HeartHandshake,
    title: 'Parceria de Longo Prazo',
    description:
      'Buscamos construir relacionamentos duradouros com nossos clientes, oferecendo suporte contínuo e planos de manutenção preventiva personalizados.',
  },
];

const BG_IMG = 'https://storage.lucasmendes.dev/site-sp/gulgielmin%20transformadores/img/transformadores-eletricos-cinzas-industriais-em-estoque_1600x1200.webp';

export default function WhyUs() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('visible');
        });
      },
      { threshold: 0.1 }
    );

    const elements = sectionRef.current?.querySelectorAll('.animate-on-scroll');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section
      className="py-20 lg:py-28 relative overflow-hidden"
      ref={sectionRef}
      style={{
        backgroundImage: `url(${BG_IMG})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
      }}
    >
      <div className="absolute inset-0 bg-brand-dark/90" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-on-scroll">
          <span className="text-brand-yellow text-xs font-semibold tracking-widest uppercase block mb-3">
            Por que nos escolher
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-4">
            O Padrão de Excelência{' '}
            <span className="text-brand-yellow">Que Você Merece</span>
          </h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            Quando você escolhe a Gulgielmin, está escolhendo décadas de know-how
            técnico aplicado à solução do seu problema.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {WHY_US.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="animate-on-scroll group bg-white/5 border border-white/10 hover:border-brand-yellow/50 rounded-2xl p-7 card-hover yellow-border-hover"
                style={{ transitionDelay: `${index * 80}ms` }}
              >
                <div className="w-11 h-11 rounded-xl bg-brand-yellow/10 flex items-center justify-center mb-5 group-hover:bg-brand-yellow/20 transition-colors">
                  <Icon size={22} className="text-brand-yellow" />
                </div>
                <h3 className="text-white font-bold text-lg mb-3">{item.title}</h3>
                <p className="text-white/55 text-sm leading-relaxed">{item.description}</p>
              </div>
            );
          })}
        </div>

        <div className="mt-16 animate-on-scroll">
          <div className="bg-brand-yellow/10 border border-brand-yellow/30 rounded-2xl p-8 text-center">
            <p className="text-white/80 text-base sm:text-lg leading-relaxed mb-6 max-w-2xl mx-auto">
              Chega de depender de prestadores sem experiência comprovada.
              <strong className="text-white"> Fale agora com um dos nossos especialistas</strong> e
              descubra como podemos manter seus equipamentos operando com máxima eficiência.
            </p>
            <a
              href="https://wa.me/5565996248334?text=Olá!%20Gostaria%20de%20solicitar%20um%20orçamento%20para%20meus%20transformadores."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 gradient-yellow text-brand-dark font-bold text-base px-10 py-4 rounded-full hover:opacity-90 transition-all hover:scale-105 shadow-lg shadow-brand-yellow/20"
            >
              Quero um Especialista Agora
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

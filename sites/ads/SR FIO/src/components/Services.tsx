import { useEffect, useState } from 'react';
import { Leaf, Microscope, Wind, Zap, Waves, FlaskConical, type LucideIcon } from 'lucide-react';

const featuredImages = [
  '/img/terapia-1.jpg',
  '/img/terapia-2.jpg',
  '/img/terapia-3.jpg',
  '/img/terapia-4.jpg',
];

type Service = {
  icon: LucideIcon;
  title: string;
  description: string;
};

const services: Service[] = [
  {
    icon: Microscope,
    title: 'Microagulhamento Capilar',
    description:
      'Técnica especializada que estimula a regeneração capilar através de microlesões controladas, ativando fatores de crescimento naturais.',
  },
  {
    icon: Wind,
    title: 'Vacuoterapia',
    description:
      'Tratamento que melhora a microcirculação do couro cabeludo, potencializando a absorção dos ativos e fortalecendo os fios.',
  },
  {
    icon: Zap,
    title: 'Laserterapia',
    description:
      'Fototerapia de baixa intensidade que estimula as células capilares, reduzindo inflamações e promovendo o crescimento saudável.',
  },
  {
    icon: Waves,
    title: 'Biorresonância Magnética',
    description:
      'Tecnologia avançada de diagnóstico e tratamento que identifica desequilíbrios e auxilia na recuperação capilar.',
  },
  {
    icon: FlaskConical,
    title: 'Produtos Tricológicos',
    description:
      'Linha selecionada de loções, shampoos e vitaminas especializadas para complementar e potencializar os tratamentos em clínica.',
  },
];

export default function Services() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const t = setInterval(() => {
      setActive((v) => (v + 1) % featuredImages.length);
    }, 3500);
    return () => clearInterval(t);
  }, []);

  return (
    <section id="servicos" className="section-padding bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-brand-gold font-body text-sm font-semibold tracking-[0.2em] uppercase">
            Especialidades
          </span>
          <h2 className="font-heading text-3xl md:text-5xl text-brand-slate-dark mt-3 mb-5">
            Nossos Tratamentos
          </h2>
          <p className="font-body text-gray-500 text-lg max-w-2xl mx-auto leading-relaxed">
            Cada tratamento é desenvolvido de forma personalizada, combinando técnicas modernas com um
            atendimento humanizado e ético.
          </p>
          <div className="w-16 h-0.5 gold-gradient mx-auto mt-6"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          <div className="group relative overflow-hidden rounded-2xl p-8 border bg-brand-slate-dark text-white border-brand-slate transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
            <div className="absolute inset-0">
              {featuredImages.map((src, i) => (
                <img
                  key={src}
                  src={src}
                  alt=""
                  aria-hidden="true"
                  className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${
                    i === active ? 'opacity-100' : 'opacity-0'
                  }`}
                />
              ))}
              <div className="absolute inset-0 bg-gradient-to-t from-brand-slate-dark/90 via-brand-slate-dark/45 to-brand-slate-dark/25"></div>
            </div>
            <div className="relative z-10">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 bg-brand-gold/20">
                <Leaf size={22} className="text-brand-gold" />
              </div>
              <h3 className="font-heading text-xl mb-3 text-white [text-shadow:_0_2px_10px_rgb(0_0_0_/_75%)]">
                Terapia Capilar Integrativa
              </h3>
              <p className="font-body text-sm leading-relaxed text-white/90 [text-shadow:_0_1px_8px_rgb(0_0_0_/_80%)]">
                Avaliação completa do couro cabeludo com protocolos personalizados para tratamento de todas
                as disfunções capilares.
              </p>
              <div className="flex gap-1.5 mt-6">
                {featuredImages.map((src, i) => (
                  <span
                    key={src}
                    className={`h-1.5 rounded-full transition-all duration-300 ${
                      i === active ? 'w-5 bg-brand-gold' : 'w-1.5 bg-white/40'
                    }`}
                  ></span>
                ))}
              </div>
            </div>
          </div>
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                className="group rounded-2xl p-8 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 border bg-white text-gray-800 border-gray-100 hover:border-brand-gold/30"
              >
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 transition-colors duration-300 bg-brand-slate/10 group-hover:bg-brand-gold/15">
                  <Icon
                    size={22}
                    className="text-brand-slate group-hover:text-brand-gold transition-colors duration-300"
                  />
                </div>
                <h3 className="font-heading text-xl mb-3 text-brand-slate-dark">{service.title}</h3>
                <p className="font-body text-sm leading-relaxed text-gray-500">{service.description}</p>
              </div>
            );
          })}
        </div>
        <div className="mt-14 text-center">
          <a
            href="https://wa.me/5516991998208?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20os%20tratamentos."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block gold-gradient text-white font-body font-semibold px-10 py-4 rounded-full text-base hover:shadow-xl hover:shadow-brand-gold/30 transition-all duration-300 hover:scale-105"
          >
            Saiba Qual Tratamento é Para Você
          </a>
        </div>
      </div>
    </section>
  );
}

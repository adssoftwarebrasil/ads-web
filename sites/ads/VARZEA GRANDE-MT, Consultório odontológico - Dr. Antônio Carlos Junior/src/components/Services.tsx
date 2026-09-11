import { useEffect, useRef } from 'react';
import {
  Smile,
  Layers,
  Sparkles,
  Activity,
  Scissors,
  AlignCenter,
  Shield,
  Zap,
} from 'lucide-react';

const SERVICES = [
  {
    icon: Shield,
    title: 'Implantes',
    description:
      'Reposição de dentes perdidos com implantes de titânio de alta qualidade, devolvendo função e estética ao seu sorriso.',
    highlight: true,
  },
  {
    icon: Layers,
    title: 'Prótese Dentária',
    description:
      'Coroas, pontes e próteses totais personalizadas com materiais premium para resultados naturais e duradouros.',
    highlight: true,
  },
  {
    icon: Sparkles,
    title: 'Lentes de Contato Dental',
    description:
      'Facetas ultrafinas que transformam o sorriso com mínimo desgaste dentário, resultado esteticamente perfeito.',
    highlight: true,
  },
  {
    icon: Smile,
    title: 'Clareamento Dental',
    description:
      'Técnicas modernas de clareamento que garantem dentes visivelmente mais brancos com segurança e conforto.',
    highlight: false,
  },
  {
    icon: AlignCenter,
    title: 'Ortodontia',
    description:
      'Aparelhos convencionais e estéticos para correção do alinhamento dental em todas as idades.',
    highlight: false,
  },
  {
    icon: Activity,
    title: 'Endodontia',
    description:
      'Tratamento de canal com tecnologia avançada, preservando o dente natural com máximo conforto.',
    highlight: false,
  },
  {
    icon: Scissors,
    title: 'Periodontia',
    description:
      'Tratamento e prevenção de doenças gengivais para garantir saúde das gengivas e do osso de suporte.',
    highlight: false,
  },
  {
    icon: Zap,
    title: 'Botox & Estética Facial',
    description:
      'Procedimentos de harmonização orofacial, incluindo Botox e preenchimento, para resultados naturais.',
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
    const els = sectionRef.current?.querySelectorAll('.section-animate');
    els?.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="servicos" className="py-20 lg:py-28 bg-white" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14 section-animate">
          <span className="inline-block text-[#32A19A] text-sm font-semibold tracking-widest uppercase mb-3">
            Nossos Serviços
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
            Cuidado completo para
            <span className="block text-[#32A19A]">o seu sorriso</span>
          </h2>
          <p className="mt-4 text-gray-500 text-base sm:text-lg max-w-xl mx-auto">
            Oferecemos uma gama completa de tratamentos odontológicos com tecnologia de ponta e atendimento humanizado.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES.map((service, i) => {
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                className={`section-animate group relative rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${
                  service.highlight
                    ? 'bg-[#32A19A] text-white shadow-lg shadow-[#32A19A]/20'
                    : 'bg-gray-50 hover:bg-white border border-gray-100 hover:border-[#A9C5C3]'
                }`}
                style={{ transitionDelay: `${i * 60}ms` }}
              >
                <div
                  className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${
                    service.highlight
                      ? 'bg-white/20'
                      : 'bg-[#32A19A]/10 group-hover:bg-[#32A19A]/20'
                  } transition-colors`}
                >
                  <Icon
                    size={22}
                    className={service.highlight ? 'text-white' : 'text-[#32A19A]'}
                  />
                </div>
                <h3
                  className={`font-semibold text-base mb-2 ${
                    service.highlight ? 'text-white' : 'text-gray-900'
                  }`}
                >
                  {service.title}
                </h3>
                <p
                  className={`text-sm leading-relaxed ${
                    service.highlight ? 'text-white/80' : 'text-gray-500'
                  }`}
                >
                  {service.description}
                </p>
                {service.highlight && (
                  <div className="absolute top-4 right-4 w-2 h-2 rounded-full bg-white/60 animate-pulse-slow" />
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

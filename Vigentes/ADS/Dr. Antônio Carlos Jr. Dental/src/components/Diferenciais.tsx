import { useEffect, useRef } from 'react';
import { Heart, Microscope, Clock, BadgeCheck, HandHeart, Star } from 'lucide-react';

const ITEMS = [
  {
    icon: BadgeCheck,
    title: 'Especialista Certificado',
    description:
      'CRO-MT 3988, com especializações em Implantodontia e Prótese Dentária reconhecidas.',
  },
  {
    icon: Heart,
    title: 'Atendimento Humanizado',
    description:
      'Cada paciente é tratado com respeito e atenção individualizada, desde a primeira consulta.',
  },
  {
    icon: Microscope,
    title: 'Tecnologia Avançada',
    description:
      'Equipamentos modernos e materiais premium para resultados mais seguros, precisos e duradouros.',
  },
  {
    icon: Clock,
    title: 'Horários Flexíveis',
    description:
      'Funcionamos das 8h às 11h30 e das 14h às 17h30, facilitando o agendamento na sua rotina.',
  },
  {
    icon: HandHeart,
    title: 'Acessibilidade Financeira',
    description:
      '"Odontologia de qualidade ao alcance de todos" — planos de pagamento para caber no seu bolso.',
  },
  {
    icon: Star,
    title: '+20 Anos de Experiência',
    description:
      'Formado há mais de duas décadas e em Várzea Grande desde 2005, com milhares de sorrisos transformados.',
  },
];

export default function Diferenciais() {
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
    const els = sectionRef.current?.querySelectorAll('.section-animate');
    els?.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="diferenciais" className="py-20 lg:py-28 bg-white" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14 section-animate">
          <span className="inline-block text-[#32A19A] text-sm font-semibold tracking-widest uppercase mb-3">
            Por que nos escolher
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
            Nossos Diferenciais
          </h2>
          <p className="mt-4 text-gray-500 text-base sm:text-lg max-w-xl mx-auto">
            O compromisso com a excelência está em cada detalhe do nosso atendimento.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {ITEMS.map((item, i) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="section-animate group flex gap-5 p-6 rounded-2xl border border-gray-100 hover:border-[#A9C5C3] hover:shadow-lg bg-white transition-all duration-300"
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <div className="w-12 h-12 rounded-xl bg-[#32A19A]/10 group-hover:bg-[#32A19A] flex items-center justify-center flex-shrink-0 transition-colors duration-300">
                  <Icon
                    size={22}
                    className="text-[#32A19A] group-hover:text-white transition-colors duration-300"
                  />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 text-base mb-1">{item.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{item.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

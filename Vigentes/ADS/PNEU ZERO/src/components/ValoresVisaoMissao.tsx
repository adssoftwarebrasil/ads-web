import type { LucideIcon } from 'lucide-react';
import { ShieldCheck, Eye, Target } from 'lucide-react';
import { useInView } from '../hooks/useInView';

interface Bloco {
  icon: LucideIcon;
  iconClass: string;
  title: string;
  items: string[];
}

const blocos: Bloco[] = [
  {
    icon: ShieldCheck,
    iconClass: 'lucide lucide-shield-check text-white',
    title: 'Valores',
    items: [
      'Compromisso com a segurança.',
      'Excelência e inovação no atendimento.',
      'Honestidade e transparência.',
      'Respeito e diálogo entre a equipe.',
      'Crescimento pelo aprendizado.',
      'Aperfeiçoamento contínuo.',
    ],
  },
  {
    icon: Eye,
    iconClass: 'lucide lucide-eye text-white',
    title: 'Visão',
    items: [
      'Ser reconhecida como a principal escolha em pneus e serviços automotivos no mercado, contribuindo para uma maior segurança no setor de mobilidade, através da inovação e excelência no atendimento.',
    ],
  },
  {
    icon: Target,
    iconClass: 'lucide lucide-target text-white',
    title: 'Missão',
    items: ['Cuidar do veículo de nossos clientes.'],
  },
];

function BlocoCard({ bloco, delay }: { bloco: Bloco; delay: number }) {
  const { ref, inView } = useInView<HTMLDivElement>();
  const Icon = bloco.icon;
  return (
    <div
      ref={ref}
      className={`bg-white rounded-3xl shadow-xl p-8 md:p-10 h-full border-t-4 border-[rgb(227,17,35)] transition-all duration-700 ${
        inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="inline-flex items-center justify-center w-16 h-16 bg-[rgb(227,17,35)] rounded-full mb-6">
        <Icon width={32} height={32} strokeWidth={2} className={bloco.iconClass} />
      </div>
      <h3 className="text-2xl md:text-3xl font-bold text-[rgb(3,3,4)] mb-5">{bloco.title}</h3>
      <ul className="space-y-3">
        {bloco.items.map((item) => (
          <li key={item} className="flex items-start gap-3">
            <span className="flex-shrink-0 w-2 h-2 mt-2.5 rounded-full bg-[rgb(227,17,35)]"></span>
            <span className="text-gray-700 text-lg leading-relaxed">{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function ValoresVisaoMissao() {
  const header = useInView<HTMLDivElement>();

  return (
    <section id="valores" className="bg-[rgb(245,245,245)] py-20 md:py-28">
      <div className="container mx-auto px-4">
        <div
          ref={header.ref}
          className={`text-center mb-16 transition-all duration-700 ${
            header.inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}
        >
          <p className="text-[rgb(227,17,35)] uppercase tracking-wider text-sm font-semibold mb-3">
            Nossa essência
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-[rgb(3,3,4)] mb-4">
            Valores, Visão e Missão
          </h2>
          <p className="text-gray-700 text-lg max-w-2xl mx-auto">
            Os princípios que guiam o nosso trabalho todos os dias.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {blocos.map((bloco, i) => (
            <BlocoCard key={bloco.title} bloco={bloco} delay={i * 150} />
          ))}
        </div>
      </div>
    </section>
  );
}

import type { LucideIcon } from 'lucide-react';
import { Clock, Package, Award } from 'lucide-react';
import { useInView } from '../hooks/useInView';

interface Vantagem {
  icon: LucideIcon;
  iconClass: string;
  title: string;
  description: string;
}

const vantagens: Vantagem[] = [
  {
    icon: Clock,
    iconClass: 'lucide lucide-clock text-white',
    title: 'Agilidade no Serviço',
    description: 'Atendimentos rápidos e eficientes',
  },
  {
    icon: Package,
    iconClass: 'lucide lucide-package text-white',
    title: 'Variedade de Produtos',
    description: 'Grande estoque de pneus e lubrificantes',
  },
  {
    icon: Award,
    iconClass: 'lucide lucide-award text-white',
    title: 'Profissionais Qualificados',
    description: 'Equipe técnica altamente capacitada',
  },
];

// Números exibidos na faixa de destaque — ajustar aqui se o cliente informar outros valores.
const stats = [
  { value: '+45', label: 'anos de experiência' },
  { value: '+20', label: 'serviços disponíveis' },
  { value: '+10 mil', label: 'clientes satisfeitos' },
];

function VantagemCard({ vantagem, delay }: { vantagem: Vantagem; delay: number }) {
  const { ref, inView } = useInView<HTMLDivElement>();
  const Icon = vantagem.icon;
  return (
    <div
      ref={ref}
      className={`text-center transition-all duration-700 ${
        inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="inline-flex items-center justify-center w-20 h-20 bg-[rgb(227,17,35)] rounded-full mb-6">
        <Icon width={40} height={40} strokeWidth={2} className={vantagem.iconClass} />
      </div>
      <h3 className="text-2xl font-bold text-[rgb(3,3,4)] mb-3">{vantagem.title}</h3>
      <p className="text-gray-700 text-lg">{vantagem.description}</p>
    </div>
  );
}

export default function Vantagens() {
  const header = useInView<HTMLDivElement>();
  const statsBox = useInView<HTMLDivElement>();

  return (
    <section id="vantagens" className="bg-white py-20 md:py-28">
      <div className="container mx-auto px-4">
        <div
          ref={header.ref}
          className={`text-center mb-16 transition-all duration-700 ${
            header.inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}
        >
          <p className="text-[rgb(227,17,35)] uppercase tracking-wider text-sm font-semibold mb-3">
            Vantagens
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-[rgb(3,3,4)] mb-4">
            Por Que Escolher o Auto Center Pneu Zero
          </h2>
          <p className="text-gray-700 text-lg max-w-2xl mx-auto">
            Descubra por que somos a melhor escolha para cuidar do seu veículo.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {vantagens.map((vantagem, i) => (
            <VantagemCard key={vantagem.title} vantagem={vantagem} delay={i * 150} />
          ))}
        </div>
        <div
          ref={statsBox.ref}
          className={`bg-[rgb(245,245,245)] rounded-3xl p-8 md:p-12 transition-all duration-700 delay-300 ${
            statsBox.inView ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
          }`}
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {stats.map((stat) => (
              <div key={stat.label}>
                <div className="text-5xl md:text-6xl font-bold text-[rgb(227,17,35)] mb-2">
                  {stat.value}
                </div>
                <p className="text-gray-700 text-lg">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

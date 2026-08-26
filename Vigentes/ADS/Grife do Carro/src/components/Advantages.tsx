import {
  Award,
  Users,
  FileText,
  Car,
  ShieldCheck,
  Scale,
  type LucideIcon,
} from 'lucide-react';

interface Advantage {
  icon: LucideIcon;
  title: string;
  description: string;
}

const ADVANTAGES: Advantage[] = [
  {
    icon: Award,
    title: 'Experiência Comprovada',
    description: '+10 anos no mercado automotivo de Sinop.',
  },
  {
    icon: Users,
    title: 'Atendimento Personalizado',
    description: 'Consultores prontos para entender suas necessidades.',
  },
  {
    icon: FileText,
    title: 'Processo Simplificado',
    description: 'Cuidamos de toda a documentação para você.',
  },
  {
    icon: Car,
    title: 'Variedade de Veículos',
    description: 'Ampla gama de modelos e marcas selecionadas.',
  },
  {
    icon: ShieldCheck,
    title: 'Veículos Inspecionados',
    description: 'Rigorosa inspeção de qualidade em cada unidade.',
  },
  {
    icon: Scale,
    title: 'Avaliação Justa',
    description: 'Honestidade e transparência em cada negociação.',
  },
];

export default function Advantages() {
  return (
    <section id="vantagens" className="bg-black py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <p className="mb-3 text-xs font-bold tracking-[0.2em] text-gold">
            POR QUE ESCOLHER
          </p>
          <h2 className="font-heading text-3xl sm:text-4xl font-extrabold uppercase leading-tight text-white">
            Vantagens da <span className="text-gold">Grife do Carro</span>
          </h2>
          <p className="mt-5 text-base leading-relaxed text-white/70">
            Cada detalhe pensado para garantir sua satisfação na compra do
            veículo dos seus sonhos.
          </p>
        </div>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {ADVANTAGES.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="rounded-2xl border border-white/10 bg-ink-card p-8 hover:border-gold/40 transition-colors"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gold/10">
                  <Icon className="h-6 w-6 text-gold" />
                </div>
                <h3 className="mt-5 font-heading text-lg font-bold uppercase text-white">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-white/70">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

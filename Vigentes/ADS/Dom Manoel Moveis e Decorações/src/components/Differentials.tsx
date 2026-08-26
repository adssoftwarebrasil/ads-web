import { TreePine, Sparkles, ShieldCheck, Truck, HeartHandshake, Wrench } from 'lucide-react';
import { useInView } from '../hooks/useInView';

const items = [
  {
    Icon: TreePine,
    title: 'Madeira 100% Maciça',
    text: 'Trabalhamos exclusivamente com madeira maciça selecionada — sem compensado, sem MDF. Peças que resistem ao tempo.',
  },
  {
    Icon: Sparkles,
    title: 'Acabamento Impecável',
    text: 'Reconhecidos como o melhor acabamento da região. Cada detalhe é trabalhado artesanalmente com precisão e cuidado.',
  },
  {
    Icon: ShieldCheck,
    title: 'Durabilidade Vitalícia',
    text: 'Nossos móveis são feitos para durar gerações. Investimento certo que você repassa como herança.',
  },
  {
    Icon: Truck,
    title: 'Entrega em toda a Região',
    text: 'Atendemos Sinop, cidades vizinhas e fazendas de toda a região com agilidade e segurança no transporte.',
  },
  {
    Icon: HeartHandshake,
    title: 'Atendimento Personalizado',
    text: 'Do primeiro contato à entrega, você tem suporte dedicado. Sua satisfação é nossa maior conquista.',
  },
  {
    Icon: Wrench,
    title: 'Linha Completa',
    text: 'Mesas, roupeiros, estantes, móveis rústicos e muito mais. Tudo o que você precisa em um só lugar.',
  },
];

export default function Differentials() {
  const { ref, inView } = useInView<HTMLDivElement>();

  return (
    <section className="py-24 bg-[rgb(103,66,42)] relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-[rgb(183,149,108)]/10 -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-[rgb(183,149,108)]/10 translate-y-1/2 -translate-x-1/3 pointer-events-none"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-14">
          <div className="flex items-center gap-3 mb-4 justify-center">
            <span className="h-px w-12 bg-[rgb(183,149,108)]"></span>
            <span className="text-[rgb(183,149,108)] text-sm font-semibold uppercase tracking-widest">
              Nossos diferenciais
            </span>
            <span className="h-px w-12 bg-[rgb(183,149,108)]"></span>
          </div>
          <h2 className="font-serif text-4xl lg:text-5xl text-cream font-bold mb-4">
            Por que escolher a
            <br />
            <span className="text-[rgb(183,149,108)]">Dom Manoel?</span>
          </h2>
          <p className="text-cream/70 max-w-xl mx-auto text-lg">
            Somos mais do que uma loja de móveis — somos parceiros na construção do lar que você
            sempre sonhou.
          </p>
        </div>
        <div ref={ref} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map(({ Icon, title, text }, i) => (
            <div
              key={title}
              className={`group relative bg-cream/5 border border-cream/10 hover:bg-cream/10 hover:border-[rgb(183,149,108)]/40 rounded-2xl p-8 transition-all duration-500 ${
                inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className="w-14 h-14 rounded-2xl bg-[rgb(183,149,108)]/20 group-hover:bg-[rgb(183,149,108)]/30 flex items-center justify-center mb-5 transition-colors">
                <Icon size={24} className="text-[rgb(183,149,108)]" />
              </div>
              <h3 className="font-serif text-cream font-bold text-xl mb-3">{title}</h3>
              <p className="text-cream/65 text-sm leading-relaxed">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

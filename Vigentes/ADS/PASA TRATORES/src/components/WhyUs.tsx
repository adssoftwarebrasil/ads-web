import { useScrollReveal } from '../hooks/useScrollReveal';
import { Zap, PackageCheck, Globe as Globe2, Headphones as HeadphonesIcon, BadgeCheck, Truck, Video as LucideIcon } from 'lucide-react';

const differentials: { icon: LucideIcon; title: string; desc: string }[] = [
  {
    icon: PackageCheck,
    title: 'Estoque Pronto',
    desc: 'Peças disponíveis para entrega imediata. Sem espera, sem surpresa.',
  },
  {
    icon: Zap,
    title: 'Atendimento Ágil',
    desc: 'Respondemos rápido porque sabemos que máquina parada custa caro.',
  },
  {
    icon: BadgeCheck,
    title: 'Qualidade Garantida',
    desc: 'Só trabalhamos com peças de procedência confiável e alto desempenho.',
  },
  {
    icon: Globe2,
    title: 'Importação Direta',
    desc: 'Consolidamos a importação para trazer mais variedade e melhor preço.',
  },
  {
    icon: Truck,
    title: 'Envio para Todo Brasil',
    desc: 'Do Mato Grosso para qualquer estado — logística eficiente e rastreável.',
  },
  {
    icon: HeadphonesIcon,
    title: 'Suporte Especializado',
    desc: 'Nossa equipe conhece motores Cummins, Komatsu, Hyundai e muito mais.',
  },
];

function DifferentialCard({ icon: Icon, title, desc, delay }: { icon: LucideIcon; title: string; desc: string; delay: number }) {
  const { ref, visible } = useScrollReveal(0.1);
  return (
    <div
      ref={ref}
      className={`group bg-white/5 border border-white/10 rounded-2xl p-7 hover:bg-white/10 hover:border-brand-red/40 transition-all duration-500 ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="bg-brand-red/15 text-brand-red rounded-xl p-3 w-fit mb-5 group-hover:bg-brand-red group-hover:text-white transition-all duration-300">
        <Icon size={22} />
      </div>
      <h3 className="text-white font-bold text-lg mb-2">{title}</h3>
      <p className="text-gray-400 text-sm leading-relaxed">{desc}</p>
    </div>
  );
}

export default function WhyUs() {
  const { ref, visible } = useScrollReveal();

  return (
    <section id="diferenciais" className="py-24 bg-brand-dark overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div
          ref={ref}
          className={`text-center mb-14 transition-all duration-700 ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <span className="text-brand-red text-sm font-bold uppercase tracking-widest">Por que escolher a Pasa Tratores?</span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold text-white">
            Diferenciais que Fazem a Diferença
          </h2>
          <p className="mt-4 text-gray-400 max-w-xl mx-auto">
            5 anos construindo reputação com quem depende de máquinas funcionando todos os dias.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {differentials.map((d, i) => (
            <DifferentialCard key={d.title} {...d} delay={i * 80} />
          ))}
        </div>

        {/* CTA strip */}
        <div className="mt-16 bg-brand-red rounded-2xl p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-white font-extrabold text-xl">Precisa de uma peça agora?</h3>
            <p className="text-red-100 mt-1 text-sm">Fale diretamente com nossa equipe e resolva em minutos.</p>
          </div>
          <a
            href="http://wa.me/556699586377?text=Olá!%20Preciso%20de%20uma%20peça%20para%20minha%20máquina.%20Podem%20me%20ajudar?"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-shrink-0 bg-white text-brand-red font-bold px-8 py-3.5 rounded-full hover:bg-red-50 transition-colors duration-200 shadow-lg"
          >
            Falar no WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}

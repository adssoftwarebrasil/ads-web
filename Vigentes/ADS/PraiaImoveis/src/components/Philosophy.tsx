import { TrendingUp, Layers, Target } from 'lucide-react';

const values = [
  { label: 'Transparência' },
  { label: 'Estratégia' },
  { label: 'Relacionamento de longo prazo' },
  { label: 'Acesso a oportunidades reais' },
  { label: 'Compromisso com resultado' },
];

const pillars = [
  {
    icon: Target,
    title: 'Análise antes da decisão',
    desc: 'Aqui, o investidor não encontra promessas. Encontra análise, acesso e direcionamento confiável para tomar decisões mais seguras.',
  },
  {
    icon: Layers,
    title: 'Imóvel como alavanca',
    desc: 'Muitos investidores crescem não comprando apenas um imóvel, mas usando cada aquisição como alavanca para a próxima.',
  },
  {
    icon: TrendingUp,
    title: 'Patrimônio inteligente',
    desc: 'Quando você entende como usar financiamento, valorização e renda de forma inteligente, começa a construir patrimônio com o dinheiro trabalhando a seu favor.',
  },
];

export default function Philosophy() {
  return (
    <section className="bg-[#00484e] py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-flex items-center gap-2 text-white/60 text-xs font-bold tracking-widest uppercase mb-4">
              <div className="w-8 h-px bg-white/30" />
              Nossa Filosofia
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-6">
              Investir em imóvel
              <br />
              <span className="text-white/70 font-light italic">
                não é só sobre comprar…
              </span>
              <br />
              é sobre estratégia.
            </h2>

            <p className="text-white/65 text-base leading-relaxed mb-6">
              No final, não é sobre quanto você tem hoje.
              É sobre <span className="text-white font-semibold">como você usa o que tem</span>.
            </p>

            <p className="text-white/65 text-base leading-relaxed mb-8">
              Trabalhamos guiados por valores claros que orientam cada negociação e cada
              relacionamento com nossos clientes:
            </p>

            <div className="flex flex-wrap gap-2 mb-10">
              {values.map((v) => (
                <span
                  key={v.label}
                  className="text-sm text-white border border-white/25 bg-white/10 px-4 py-2 rounded-full"
                >
                  {v.label}
                </span>
              ))}
            </div>

            <blockquote className="border-l-2 border-white/30 pl-5">
              <p className="text-white/70 text-lg italic leading-relaxed">
                "Aqui, o investidor não encontra promessas.
                Encontra análise, acesso e direcionamento confiável."
              </p>
            </blockquote>
          </div>

          <div className="flex flex-col gap-5">
            {pillars.map(({ icon: Icon, title, desc }) => (
              <div
                key={title}
                className="group flex gap-5 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 rounded-2xl p-6 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-white/10 border border-white/15 flex items-center justify-center shrink-0 group-hover:bg-white/20 transition-colors">
                  <Icon size={22} className="text-white" />
                </div>
                <div>
                  <h3 className="text-white font-bold text-base mb-2">{title}</h3>
                  <p className="text-white/55 text-sm leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

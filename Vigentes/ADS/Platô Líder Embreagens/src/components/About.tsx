import { Award, Wrench, Users } from 'lucide-react';

const features = [
  {
    Icon: Wrench,
    iconClass: 'lucide lucide-wrench w-6 h-6 text-brand-red',
    title: 'Suporte técnico',
    desc: 'Orientação na escolha da peça certa.',
  },
  {
    Icon: Users,
    iconClass: 'lucide lucide-users w-6 h-6 text-brand-red',
    title: 'Parceiros fiéis',
    desc: 'Transportadoras, mecânicos e produtores.',
  },
  {
    Icon: Award,
    iconClass: 'lucide lucide-award w-6 h-6 text-brand-red',
    title: 'Qualidade',
    desc: 'Procedência e desempenho comprovados.',
  },
];

export default function About() {
  return (
    <section id="sobre" className="py-20 lg:py-28 bg-white">
      <div className="container-x grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        <div className="lg:col-span-6 relative order-2 lg:order-1">
          <div className="relative aspect-[4/5] w-full max-w-lg mx-auto">
            <div className="absolute -inset-3 rounded-[2rem] bg-brand-navy/5"></div>
            <img
              src="https://storage.lucasmendes.dev/site-sp/plato-lider/img/caixa-embragem-plato-lider-em-ambiente-interno_2160x3840.webp"
              alt="Caixa de embreagem Platô Líder"
              className="relative h-full w-full object-cover rounded-[1.75rem] shadow-xl"
              loading="lazy"
            />
            <div className="absolute -top-6 -right-6 hidden sm:flex items-center gap-3 bg-brand-red text-white rounded-2xl shadow-xl px-5 py-4">
              <Award className="lucide lucide-award w-7 h-7" />
              <div className="leading-tight">
                <p className="text-xs opacity-80 uppercase tracking-wider">Selo</p>
                <p className="font-display text-lg font-bold">Procedência</p>
              </div>
            </div>
          </div>
        </div>
        <div className="lg:col-span-6 order-1 lg:order-2">
          <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-brand-red">
            <span className="w-8 h-px bg-brand-red"></span>Sobre a Platô Líder
          </span>
          <h2 className="mt-4 font-display text-4xl sm:text-5xl font-extrabold text-brand-navy leading-[1.05] text-balance">
            Mais de 5 anos movendo o agro e a linha pesada em Mato Grosso.
          </h2>
          <div className="mt-6 space-y-4 text-brand-ink/80 leading-relaxed">
            <p>
              Fundada em setembro de <strong>2019</strong>, a Platô Líder nasceu em Rondonópolis com
              um propósito claro: levar embreagens e componentes de alta performance para quem não
              pode parar — transportadoras, frotistas, mecânicos e produtores rurais.
            </p>
            <p>
              Somos especializados em embreagens, mancais de rolamento, volantes de motor e garfos,
              com portfólio selecionado para linha pesada e agrícola. Cada peça é escolhida para
              entregar durabilidade real, eficiência operacional e o melhor custo-benefício do
              mercado.
            </p>
          </div>
          <div className="mt-8 grid sm:grid-cols-3 gap-4">
            {features.map((f) => (
              <div
                key={f.title}
                className="p-5 rounded-2xl border border-black/5 hover:border-brand-navy/20 hover:shadow-lg transition-all duration-300 bg-white"
              >
                <f.Icon className={f.iconClass} />
                <p className="mt-3 font-display text-lg font-bold text-brand-navy">{f.title}</p>
                <p className="mt-1 text-sm text-brand-ink/70 leading-snug">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

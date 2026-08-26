import { ArrowRight } from './icons';

const steps = [
  {
    num: '01',
    title: 'Diagnóstico',
    desc: 'Mergulhamos no negócio, nos números e no mercado. Alinhamos no esquadro o que está fora de lugar antes de propor qualquer solução.',
  },
  {
    num: '02',
    title: 'Construção',
    desc: 'Estruturamos campanhas, desenvolvemos sistemas e implementamos com método e precisão — nada de improviso.',
  },
  {
    num: '03',
    title: 'Otimização',
    desc: 'Medimos, ajustamos e escalamos com disciplina. Luz sobre cada resultado, em ritmo contínuo de evolução.',
  },
];

export default function Process() {
  return (
    <section className="bg-paper py-20 text-ink md:py-32">
      <div className="container-page">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <div data-reveal>
              <p className="eyebrow">Como trabalhamos</p>
              <h2 className="mt-4 font-serif text-3xl leading-[1.08] tracking-tight md:text-4xl lg:text-[2.7rem]">
                Do briefing bruto ao resultado acabado.
              </h2>
              <p className="mt-5 text-lg leading-relaxed text-stone">
                Todo projeto passa por um método rigoroso, sem atalhos. Da pedra bruta ao acabamento, cada etapa é medida — e nada avança sem fundamento.
              </p>
            </div>
            <a
              className="group/btn -ml-2 mt-8 inline-flex select-none items-center justify-center gap-2 whitespace-nowrap rounded-sm px-5 py-2.5 text-[0.95rem] font-medium text-ink transition-colors duration-200 ease-[cubic-bezier(0.22,1,0.36,1)] hover:bg-ink/[0.05] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-moss"
              href="/sobre"
            >
              Conheça nosso jeito de trabalhar
              <ArrowRight className="size-4 transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover/btn:translate-x-1" />
            </a>
          </div>

          <div className="lg:col-span-7">
            <ol className="grid gap-px overflow-hidden rounded-lg border border-line bg-line">
              {steps.map((s) => (
                <li key={s.num} data-reveal className="bg-paper p-7 md:p-8">
                  <div className="flex items-baseline gap-5">
                    <span className="font-serif text-2xl text-faint tnum">{s.num}</span>
                    <div>
                      <h3 className="font-serif text-2xl tracking-tight">{s.title}</h3>
                      <p className="mt-2 text-[1.02rem] leading-relaxed text-stone">{s.desc}</p>
                    </div>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}

import { ArrowRight, PointInCircle } from './icons';

type CaseStat = { value: string; label: string };
type CaseItem = {
  tag: string;
  sector: string;
  desc: string;
  stats: [CaseStat, CaseStat];
};

const cases: CaseItem[] = [
  {
    tag: 'Especialistas Google',
    sector: 'Rede varejista · 40+ unidades',
    desc: 'Reestruturação das campanhas por região e padronização de todos os perfis no Google Meu Negócio, com mensuração unificada por loja.',
    stats: [
      { value: '+62%', label: 'ligações e rotas vindas do Maps' },
      { value: '−34%', label: 'custo por aquisição' },
    ],
  },
  {
    tag: 'Especialistas Meta',
    sector: 'Indústria B2B nacional',
    desc: 'Funil completo no Meta com CAPI, criativos testados sistematicamente e integração ao CRM para medir receita — não apenas leads.',
    stats: [
      { value: '3,8×', label: 'retorno sobre o investimento em mídia' },
      { value: '+47%', label: 'leads qualificados (SQL)' },
    ],
  },
  {
    tag: 'Software sob medida',
    sector: 'Operação logística de grande porte',
    desc: 'Sistema sob medida integrado ao ERP, com automação de processos e painéis de operação em tempo real para a diretoria.',
    stats: [
      { value: '−71%', label: 'tempo gasto em tarefas manuais' },
      { value: '12k+', label: 'operações processadas por dia' },
    ],
  },
];

export default function Cases() {
  return (
    <section className="bg-ivory py-20 text-ink md:py-32">
      <div className="container-page">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div data-reveal className="max-w-xl">
            <p className="eyebrow">Resultados</p>
            <h2 className="mt-4 font-serif text-3xl leading-[1.08] tracking-tight md:text-4xl lg:text-[2.7rem]">
              Trabalho que fala por números.
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-stone">
              Cases reais de clientes sob confidencialidade. Setores genéricos, resultados verdadeiros.
            </p>
          </div>
          <a
            className="group/btn mb-1 inline-flex select-none items-center justify-center gap-2 whitespace-nowrap rounded-sm border border-line-strong bg-transparent px-5 py-2.5 text-[0.95rem] font-medium text-ink transition-colors duration-200 ease-[cubic-bezier(0.22,1,0.36,1)] hover:border-ink/30 hover:bg-sand focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-moss"
            href="/cases"
          >
            Ver todos os cases
            <ArrowRight className="size-4 transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover/btn:translate-x-1" />
          </a>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {cases.map((c) => (
            <article key={c.tag} data-reveal className="flex flex-col rounded-lg border border-line bg-ivory p-7 md:p-8">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.12em] text-moss">
                <PointInCircle className="size-4" />
                {c.tag}
              </div>
              <p className="mt-3 text-sm text-mist">{c.sector}</p>
              <p className="mt-4 flex-1 text-[1.02rem] leading-relaxed text-stone">{c.desc}</p>
              <div className="mt-7 grid grid-cols-2 gap-6 border-t border-line pt-6">
                {c.stats.map((st) => (
                  <div key={st.label}>
                    <p className="font-serif text-3xl tracking-tight tnum text-ink md:text-4xl">{st.value}</p>
                    <p className="mt-1.5 text-sm leading-snug text-stone">{st.label}</p>
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

import { ArrowRight, ForgetMeNot } from './icons';

export default function SocialImpact() {
  return (
    <section className="bg-clay-wash py-20 text-ink md:py-32">
      <div className="container-page">
        <div className="grid items-center gap-10 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <p className="eyebrow !text-clay-deep" data-reveal>
              <ForgetMeNot className="size-4 text-clay" />
              Impacto social
            </p>
            <h2 data-reveal className="mt-5 max-w-xl font-serif text-3xl leading-tight tracking-tight md:text-4xl">
              Tecnologia que também cuida de quem cuidou.
            </h2>
            <p data-reveal className="mt-5 max-w-xl text-lg leading-relaxed text-stone">
              Parte de tudo o que construímos volta para a comunidade. Apoiamos o
              <strong className="font-semibold text-ink"> Lar dos Velhinhos</strong> e
              acreditamos que nenhuma história deve ser esquecida.
            </p>
            <a
              className="group/btn mt-8 inline-flex select-none items-center justify-center gap-2 whitespace-nowrap rounded-sm bg-ink px-5 py-2.5 text-[0.95rem] font-medium text-paper transition-colors duration-200 ease-[cubic-bezier(0.22,1,0.36,1)] hover:bg-graphite focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-moss"
              href="/impacto-social"
            >
              Conheça nossa causa
              <ArrowRight className="size-4 transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover/btn:translate-x-1" />
            </a>
          </div>
          <div className="lg:col-span-5">
            <div data-reveal className="rounded-lg border border-clay-soft/60 bg-paper/60 p-8">
              <p className="font-serif text-5xl tracking-tight tnum text-clay">3%</p>
              <p className="mt-3 leading-relaxed text-stone">
                da nossa receita de planos é direcionada a instituições de caridade — um compromisso que carregamos desde o início.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

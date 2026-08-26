export default function Standard() {
  return (
    <section className="bg-night py-20 text-paper md:py-32">
      <div className="container-page">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-5">
            <p className="eyebrow !text-lime/80" data-reveal>Nosso padrão</p>
            <h2 data-reveal className="mt-4 font-serif text-3xl leading-tight tracking-tight md:text-4xl">
              Padrão de elite, do diagnóstico à escala.
            </h2>
            <p data-reveal className="mt-5 max-w-md leading-relaxed text-paper/65">
              Não somos para todos — e tudo bem. Concentramos energia em poucas empresas, com um time sênior dedicado a cada conta.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-10 sm:grid-cols-3 lg:col-span-7">
            <div data-reveal>
              <p className="font-serif text-5xl leading-none tracking-tight tnum text-paper md:text-6xl">
                100<span className="text-lime">%</span>
              </p>
              <p className="mt-3 text-[0.95rem] leading-snug text-paper/60">do foco em empresas de grande porte</p>
            </div>
            <div data-reveal>
              <p className="font-serif text-5xl leading-none tracking-tight tnum text-paper md:text-6xl">4</p>
              <p className="mt-3 text-[0.95rem] leading-snug text-paper/60">frentes integradas: Google, Meta, Software e Web</p>
            </div>
            <div data-reveal>
              <p className="font-serif text-5xl leading-none tracking-tight tnum text-paper md:text-6xl">1</p>
              <p className="mt-3 text-[0.95rem] leading-snug text-paper/60">time sênior dedicado a cada cliente</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

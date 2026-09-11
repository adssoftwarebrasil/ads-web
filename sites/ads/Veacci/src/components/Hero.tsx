import { ArrowRight } from './icons';

const platforms = [
  { src: '/platforms/google-ads.png', alt: 'Google Ads', cls: 'h-9 md:h-10' },
  { src: '/platforms/google-meu-negocio.png', alt: 'Google Meu Negócio', cls: 'h-9 md:h-10' },
  { src: '/platforms/google-analytics.png', alt: 'Google Analytics', cls: 'h-8 md:h-9' },
  { src: '/platforms/meta.png', alt: 'Meta', cls: 'h-[1.4rem] md:h-7' },
  { src: '/platforms/tiktok.png', alt: 'TikTok', cls: 'h-[1.4rem] md:h-7' },
  { src: '/platforms/linkedin.png', alt: 'LinkedIn', cls: 'h-[1.3rem] md:h-6' },
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="container-page pb-16 pt-32 md:pb-24 md:pt-40">
        <div className="grid items-center gap-12 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <p className="eyebrow is-in" data-reveal>
              <span className="inline-block size-1.5 rounded-full bg-lime" />
              Tecnologia &amp; performance · Belo Horizonte
            </p>
            <h1
              data-reveal
              className="mt-6 max-w-3xl font-serif text-5xl leading-[1.02] tracking-[-0.028em] is-in md:text-7xl"
              style={{ transitionDelay: '60ms' }}
            >
              Da desordem à <span className="italic text-moss">ordem</span> digital.
            </h1>
            <p
              data-reveal
              className="mt-7 max-w-xl text-xl leading-relaxed text-stone is-in"
              style={{ transitionDelay: '140ms' }}
            >
              Marketing de performance e software sob medida para empresas que já
              são líderes. Especialistas Google e Meta, sistemas e plataformas web
              de alto padrão.
            </p>
            <div
              data-reveal
              className="mt-9 flex flex-col gap-3 is-in sm:flex-row"
              style={{ transitionDelay: '220ms' }}
            >
              <a
                className="group/btn inline-flex select-none items-center justify-center gap-2 whitespace-nowrap rounded-sm bg-lime px-7 py-3.5 text-base font-medium text-ink transition-colors duration-200 ease-[cubic-bezier(0.22,1,0.36,1)] hover:bg-lime-bright focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-moss"
                href="/contato"
              >
                Solicitar proposta
                <ArrowRight className="size-4 transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover/btn:translate-x-1" />
              </a>
              <a
                className="group/btn inline-flex select-none items-center justify-center gap-2 whitespace-nowrap rounded-sm border border-line-strong bg-transparent px-7 py-3.5 text-base font-medium text-ink transition-colors duration-200 ease-[cubic-bezier(0.22,1,0.36,1)] hover:border-ink/30 hover:bg-sand focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-moss"
                href="/servicos"
              >
                Ver nossos serviços
              </a>
            </div>
            <p
              data-reveal
              className="mt-7 max-w-md text-sm leading-relaxed text-mist is-in"
              style={{ transitionDelay: '300ms' }}
            >
              Atendimento sob consulta. Trabalhamos com um número limitado de
              empresas por vez — com método e profundidade.
            </p>
          </div>

          {/* Arte abstrata: ponto dentro de um círculo entre duas linhas */}
          <div className="hidden lg:col-span-5 lg:block">
            <div
              data-reveal
              className="relative mx-auto aspect-square w-full max-w-md is-in"
              style={{ transitionDelay: '200ms' }}
            >
              <svg viewBox="0 0 480 480" className="size-full" fill="none" aria-hidden="true">
                <line x1="40" y1="24" x2="40" y2="456" className="stroke-line" strokeWidth="1.5" />
                <line x1="440" y1="24" x2="440" y2="456" className="stroke-line" strokeWidth="1.5" />
                <circle cx="240" cy="240" r="200" className="stroke-line-strong" strokeWidth="1.5" />
                <circle cx="240" cy="240" r="138" className="stroke-line" strokeWidth="1.5" />
                <circle cx="240" cy="240" r="80" className="stroke-lime" strokeWidth="2.5" opacity="0.75" />
                <circle cx="240" cy="240" r="7" className="fill-clay" />
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* faixa de plataformas */}
      <div id="home-platforms" className="border-y border-line bg-ivory">
        <div className="container-page flex flex-col items-center gap-x-10 gap-y-5 py-6 md:flex-row md:justify-center md:py-7">
          <span className="shrink-0 text-xs font-semibold uppercase tracking-[0.14em] text-mist">
            Onde somos especialistas
          </span>
          <div className="flex flex-wrap items-center justify-center gap-x-9 gap-y-5">
            {platforms.map((p) => (
              <img
                key={p.alt}
                src={p.src}
                alt={p.alt}
                loading="lazy"
                decoding="async"
                className={`${p.cls} w-auto opacity-70 transition-opacity duration-300 hover:opacity-100`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

import { ArrowRight } from './icons';

const WHATSAPP_HREF =
  'https://wa.me/5531000000000?text=Ol%C3%A1%2C%20Veacci.%20Quero%20conversar%20sobre%20um%20projeto%20para%20a%20minha%20empresa.';

export default function CtaFinal() {
  return (
    <section className="relative overflow-hidden bg-night text-ivory">
      {/* ornamento geométrico discreto */}
      <div
        className="pointer-events-none absolute -right-24 -top-24 size-[28rem] rounded-full opacity-[0.07] blur-2xl"
        style={{ background: 'radial-gradient(circle, var(--color-lime), transparent 70%)' }}
        aria-hidden="true"
      />
      <div className="container-page relative py-20 md:py-28">
        <div className="mx-auto max-w-3xl text-center">
          <p className="eyebrow justify-center !text-lime/80">Vamos conversar</p>
          <h2 className="mt-5 text-balance font-serif text-4xl leading-[1.05] tracking-tight md:text-5xl">
            Pronto para construir algo à altura da sua marca?
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-ivory/70">
            Atendemos um número limitado de empresas por vez, com método e profundidade. Conte o seu desafio — respondemos com uma proposta sob medida.
          </p>
          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              className="group/btn inline-flex select-none items-center justify-center gap-2 whitespace-nowrap rounded-sm bg-lime px-7 py-3.5 text-base font-medium text-ink transition-colors duration-200 ease-[cubic-bezier(0.22,1,0.36,1)] hover:bg-lime-bright focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-moss"
              href="/contato"
            >
              Iniciar uma conversa
              <ArrowRight className="size-4 transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover/btn:translate-x-1" />
            </a>
            <a
              className="group/btn inline-flex select-none items-center justify-center gap-2 whitespace-nowrap rounded-sm border border-line-strong bg-transparent px-7 py-3.5 text-base font-medium text-ink transition-colors duration-200 ease-[cubic-bezier(0.22,1,0.36,1)] hover:border-ink/30 hover:bg-sand focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-moss !border-ivory/25 !text-ivory hover:!border-ivory/40 hover:!bg-ivory/10"
              href={WHATSAPP_HREF}
              target="_blank"
              rel="noopener"
            >
              Falar no WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

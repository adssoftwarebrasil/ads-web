import { ArrowRight, ShieldCheck, Truck, Star } from 'lucide-react';
import WhatsAppIcon from './WhatsAppIcon';

const HERO_WHATSAPP =
  'https://wa.me/556696775369?text=Ol%C3%A1%2C%20Plat%C3%B4%20L%C3%ADder!%20Preciso%20de%20um%20or%C3%A7amento%20de%20embreagem.';

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-[100svh] flex items-center pt-20 overflow-hidden bg-brand-ink"
    >
      <div
        className="absolute inset-0 bg-cover bg-center"
        aria-hidden="true"
        style={{
          backgroundImage:
            'url("https://storage.lucasmendes.dev/site-sp/plato-lider/img/hero-background.webp")',
        }}
      ></div>
      <div
        className="absolute inset-0"
        aria-hidden="true"
        style={{
          background:
            'linear-gradient(120deg, rgba(0, 18, 92, 0.92) 0%, rgba(0, 18, 92, 0.78) 45%, rgba(26, 26, 26, 0.55) 100%)',
        }}
      ></div>
      <div
        className="absolute -left-24 -bottom-24 w-[420px] h-[420px] rounded-full blur-3xl opacity-30"
        aria-hidden="true"
        style={{ background: 'rgb(152, 10, 1)' }}
      ></div>
      <div className="container-x relative z-10 py-20 lg:py-28">
        <div className="grid lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-8 text-white">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 backdrop-blur px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] animate-fade-in">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-red"></span>
              Desde 2019 · Rondonópolis — MT
            </div>
            <h1 className="mt-6 font-display text-5xl sm:text-6xl lg:text-7xl font-black leading-[0.95] text-balance animate-fade-up">
              Sua força no <span className="text-brand-red">campo</span> e na{' '}
              <span className="text-brand-red">estrada</span> começa aqui.
            </h1>
            <p
              className="mt-6 max-w-xl text-base sm:text-lg text-white/80 leading-relaxed animate-fade-up"
              style={{ animationDelay: '120ms' }}
            >
              Embreagens, platôs, mancais, volantes de motor e garfos para linha pesada e agrícola.
              Peças novas e remanufaturadas com a procedência que o seu equipamento exige.
            </p>
            <div className="mt-8 flex flex-wrap gap-4 animate-fade-up" style={{ animationDelay: '240ms' }}>
              <a
                href={HERO_WHATSAPP}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 bg-brand-red hover:bg-[rgb(120,8,1)] text-white font-semibold px-7 py-4 rounded-full transition-all duration-300 hover:scale-[1.03] shadow-2xl shadow-brand-red/30"
              >
                <WhatsAppIcon className="w-5 h-5" />
                Solicitar orçamento
                <ArrowRight className="lucide lucide-arrow-right w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href="#produtos"
                className="inline-flex items-center gap-2 border border-white/30 hover:border-white bg-white/5 hover:bg-white/10 backdrop-blur text-white font-semibold px-7 py-4 rounded-full transition-all duration-300"
              >
                Conhecer produtos
              </a>
            </div>
            <div
              className="mt-12 grid grid-cols-3 gap-4 sm:gap-8 max-w-xl animate-fade-up"
              style={{ animationDelay: '360ms' }}
            >
              <div className="flex flex-col items-start gap-2">
                <div className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-white/10 border border-white/15 text-brand-red">
                  <ShieldCheck className="lucide lucide-shield-check w-5 h-5" />
                </div>
                <span className="text-xs sm:text-sm font-medium text-white/85 leading-snug">
                  Procedência garantida
                </span>
              </div>
              <div className="flex flex-col items-start gap-2">
                <div className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-white/10 border border-white/15 text-brand-red">
                  <Truck className="lucide lucide-truck w-5 h-5" />
                </div>
                <span className="text-xs sm:text-sm font-medium text-white/85 leading-snug">
                  Envio para todo Brasil
                </span>
              </div>
              <div className="flex flex-col items-start gap-2">
                <div className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-white/10 border border-white/15 text-brand-red">
                  <Star className="lucide lucide-star w-5 h-5" />
                </div>
                <span className="text-xs sm:text-sm font-medium text-white/85 leading-snug">
                  Atendimento técnico
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

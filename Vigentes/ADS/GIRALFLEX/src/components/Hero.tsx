import { Star, ArrowRight, Truck, Shield } from 'lucide-react';
import { WHATSAPP_URL, CreditCardOutline } from './icons';

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative bg-gradient-to-br from-brand-navy via-brand-navy-light to-brand-blue overflow-hidden"
    >
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-blue/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4"></div>
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-brand-red/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/4"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(37,35,143,0.3),transparent_60%)]"></div>
      </div>
      <div className="relative container-max section-padding py-16 sm:py-20 lg:py-28">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div className="animate-fade-in-up space-y-6 lg:space-y-8 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/10 rounded-full px-4 py-2 text-brand-yellow text-sm font-medium">
              <Star width={14} height={14} className="lucide lucide-star fill-brand-yellow" />
              <span>4.7 estrelas no Google</span>
              <span className="text-white/50">|</span>
              <span className="text-white/70">+24 anos no mercado</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-extrabold text-white leading-[1.1]">
              Móveis de Escritório que Transformam Seu{' '}
              <span className="relative inline-block">
                <span className="text-brand-yellow">Ambiente.</span>
                <svg className="absolute -bottom-1 left-0 w-full" viewBox="0 0 200 8" fill="none">
                  <path d="M2 6C50 2 150 2 198 6" stroke="rgb(226, 62, 68)" strokeWidth="3" strokeLinecap="round"></path>
                </svg>
              </span>
            </h1>
            <p className="text-white/70 text-base sm:text-lg max-w-lg mx-auto lg:mx-0 leading-relaxed">
              Cadeiras ergonômicas, mesas sob medida, reformas especializadas e peças de reposição. Qualidade, conforto e preço justo para a sua empresa em Manaus.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-brand-red hover:bg-brand-red-dark text-white px-7 py-3.5 rounded-xl text-base font-bold transition-all duration-300 hover:shadow-xl hover:shadow-brand-red/30 hover:-translate-y-0.5"
              >
                Solicitar Orçamento
                <ArrowRight width={18} height={18} className="lucide lucide-arrow-right " />
              </a>
              <a
                href="#produtos"
                className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 text-white px-7 py-3.5 rounded-xl text-base font-semibold transition-all duration-300"
              >
                Ver Produtos
              </a>
            </div>
            <div className="flex items-center gap-6 sm:gap-8 justify-center lg:justify-start pt-2">
              <div className="flex items-center gap-2 text-white/60 text-sm">
                <Truck width={18} height={18} className="lucide lucide-truck text-brand-yellow" />
                <span>Entrega grátis</span>
              </div>
              <div className="flex items-center gap-2 text-white/60 text-sm">
                <Shield width={18} height={18} className="lucide lucide-shield text-brand-yellow" />
                <span>Garantia inclusa</span>
              </div>
              <div className="hidden sm:flex items-center gap-2 text-white/60 text-sm">
                <CreditCardOutline className="w-[18px] h-[18px] text-brand-yellow fill-none stroke-current" />
                <span>Até 6x sem juros</span>
              </div>
            </div>
          </div>
          <div className="relative animate-fade-in hidden lg:block">
            <div className="relative z-10">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-black/30">
                <img
                  src="https://storage.lucasmendes.dev/site-sp/giralflex%2Fimg%2Fcadeiras-escritorio-giratorias.webp"
                  alt="Cadeiras de escritorio Giralflex"
                  className="w-full h-[480px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/40 to-transparent"></div>
              </div>
              <div className="absolute -bottom-5 -left-5 bg-white rounded-xl p-4 shadow-xl animate-float">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-brand-yellow/20 rounded-lg flex items-center justify-center">
                    <Truck width={20} height={20} className="lucide lucide-truck text-brand-navy" />
                  </div>
                  <div>
                    <p className="text-xs text-brand-navy/60">Entrega grátis</p>
                    <p className="text-sm font-bold text-brand-navy">Cadeira nova</p>
                  </div>
                </div>
              </div>
              <div className="absolute -top-4 -right-4 bg-brand-red text-white rounded-xl p-4 shadow-xl">
                <p className="text-xs font-medium opacity-80">Desde</p>
                <p className="text-2xl font-extrabold">2000</p>
                <p className="text-xs font-medium opacity-80">em Manaus</p>
              </div>
            </div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] border-2 border-brand-blue/20 rounded-2xl -rotate-3"></div>
          </div>
        </div>
      </div>
      <div className="relative">
        <svg viewBox="0 0 1440 60" fill="none" className="w-full" preserveAspectRatio="none">
          <path d="M0,40 C360,80 1080,0 1440,40 L1440,60 L0,60 Z" fill="white"></path>
        </svg>
      </div>
    </section>
  );
}

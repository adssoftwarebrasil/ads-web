import { Wrench, Shield, ChevronDown } from 'lucide-react';
import WhatsAppIcon from './WhatsAppIcon';

export default function Hero() {
  const scrollToServicos = () =>
    document.getElementById('servicos')?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            'url("https://storage.lucasmendes.dev/site-sp/freza%20retifica%20de%20motores/img/hero.webp")',
        }}
      ></div>
      <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/70 to-black/40"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
      <div className="absolute top-0 left-0 w-1 h-full bg-brand-red"></div>
      <div className="absolute top-1/4 left-0 w-24 h-px bg-gradient-to-r from-brand-red to-transparent"></div>
      <div className="absolute top-3/4 left-0 w-16 h-px bg-gradient-to-r from-brand-red to-transparent"></div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-20">
        <div className="max-w-3xl">
          <div className="flex items-center gap-3 mb-6">
            <span className="bg-brand-red/20 border border-brand-red/40 text-brand-red text-xs font-semibold px-3 py-1.5 rounded-full uppercase tracking-widest">
              Sinop — MT
            </span>
            <div className="flex items-center gap-1.5">
              <div className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse"></div>
              <span className="text-white/60 text-xs">Aberto agora</span>
            </div>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black text-white leading-[1.1] tracking-tight mb-6 text-shadow">
            Seu Motor Merece
            <br />
            <span className="text-brand-red">o Melhor.</span>
          </h1>
          <p className="text-brand-gray/90 text-lg sm:text-xl leading-relaxed mb-10 max-w-xl">
            Retifica de motores e mecânica geral com excelência técnica, peças de qualidade e serviço honesto em Sinop, MT.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mb-14">
            <a
              href="http://wa.me/5566996524291?text=Ol%C3%A1!%20Gostaria%20de%20um%20or%C3%A7amento."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-brand-red hover:bg-brand-red-dark text-white px-8 py-4 rounded-full text-base font-bold tracking-wide transition-all duration-200 hover:shadow-xl hover:shadow-brand-red/40 hover:-translate-y-0.5"
            >
              <WhatsAppIcon className="w-5 h-5" />
              Solicitar Orçamento
            </a>
            <button
              onClick={scrollToServicos}
              className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 text-white px-8 py-4 rounded-full text-base font-semibold tracking-wide transition-all duration-200"
            >
              <Wrench className="lucide lucide-wrench" width={18} height={18} />
              Ver Serviços
            </button>
          </div>
          <div className="flex flex-col sm:flex-row gap-6 sm:gap-10">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-brand-red/20 border border-brand-red/30 flex items-center justify-center text-brand-red flex-shrink-0">
                <Shield className="lucide lucide-shield" width={20} height={20} />
              </div>
              <span className="text-white/80 text-sm font-medium">Serviço com Garantia</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-brand-red/20 border border-brand-red/30 flex items-center justify-center text-brand-red flex-shrink-0">
                <Wrench className="lucide lucide-wrench" width={20} height={20} />
              </div>
              <span className="text-white/80 text-sm font-medium">Equipe Especializada</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-brand-red/20 border border-brand-red/30 flex items-center justify-center text-brand-red flex-shrink-0">
                <span className="text-base font-black">MT</span>
              </div>
              <span className="text-white/80 text-sm font-medium">Referência em Sinop</span>
            </div>
          </div>
        </div>
      </div>
      <button
        onClick={scrollToServicos}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/50 hover:text-white transition-colors animate-bounce"
        aria-label="Rolar para baixo"
      >
        <ChevronDown className="lucide lucide-chevron-down" width={32} height={32} />
      </button>
    </section>
  );
}

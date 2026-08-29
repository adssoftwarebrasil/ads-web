import { MessageCircle, ShieldCheck, Package, Clock, ChevronDown } from 'lucide-react';

const features = [
  { icon: ShieldCheck, label: 'Peças de Primeira Linha' },
  { icon: Package, label: 'Estoque Amplo e Diversificado' },
  { icon: Clock, label: 'Atendimento Rápido e Especializado' },
];

export default function Hero() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            'url("https://storage.lucasmendes.dev/site-sp/tavares%20autopecas/img/hero-background.webp")',
        }}
      ></div>
      <div className="hero-overlay absolute inset-0"></div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-24 pt-32 w-full">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 bg-brand-red/20 border border-brand-red/40 text-white/90 text-sm font-medium px-4 py-2 rounded-full mb-6 backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-brand-red animate-pulse"></span>
            Desde 1993 em Ribeirão Preto
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-tight text-shadow mb-6">
            A Peça Certa, <span className="text-brand-red">na Hora Certa.</span>
            <br />
            <span className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white/90">Sem Complicação.</span>
          </h1>
          <p className="text-white/80 text-lg sm:text-xl leading-relaxed mb-8 max-w-xl text-shadow-sm">
            Mais de <strong className="text-white">30 anos</strong> fornecendo peças automotivas de qualidade para
            carros, caminhonetes e utilitários. Atendimento presencial, WhatsApp e Mercado Livre.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <a
              href="http://wa.me/551633236646"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 bg-green-500 hover:bg-green-600 text-white font-bold px-8 py-4 rounded-xl text-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1 active:scale-95"
            >
              <MessageCircle size={22} />
              Peça pelo WhatsApp
            </a>
            <button
              onClick={() => scrollTo('produtos')}
              className="flex items-center justify-center gap-3 bg-white/10 hover:bg-white/20 border border-white/30 text-white font-bold px-8 py-4 rounded-xl text-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1 active:scale-95 backdrop-blur-sm"
            >
              Ver Produtos
            </button>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-8">
            {features.map((f) => {
              const Icon = f.icon;
              return (
                <div key={f.label} className="flex items-center gap-2 text-white/80 text-sm font-medium">
                  <span className="text-brand-red">
                    <Icon size={18} />
                  </span>
                  {f.label}
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <button
        onClick={() => scrollTo('stats')}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/60 hover:text-white transition-colors animate-bounce-slow"
        aria-label="Rolar para baixo"
      >
        <ChevronDown size={32} />
      </button>
    </section>
  );
}

import { Shield, ChevronDown } from 'lucide-react';

export default function Hero() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="inicio" className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="https://storage.lucasmendes.dev/site-sp/advice%20araxa%2Fimg%2Fclinica-fachada-carros-hero-background.webp"
          alt="Fachada da Clínica Advice"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/55 to-black/30"></div>
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 w-full">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 bg-brand-500/20 backdrop-blur-sm border border-brand-400/30 text-brand-300 px-4 py-2 rounded-full text-sm font-medium mb-8">
            <Shield className="w-4 h-4" />
            ISO 9001 | ISO 45001 | ISO 14001
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
            Cuidamos de quem cuida da <span className="text-brand-400">sua empresa</span>
          </h1>
          <p className="text-lg sm:text-xl text-white/80 leading-relaxed mb-10 max-w-xl">
            Referência em Medicina e Engenharia do Trabalho há mais de 34 anos em Araxá. Estrutura
            completa, laboratório próprio e atendimento humanizado.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button
              onClick={() => scrollTo('contato')}
              className="bg-brand-500 hover:bg-brand-600 text-white px-8 py-4 rounded-xl text-lg font-semibold transition-all duration-200 hover:shadow-xl hover:shadow-brand-500/30 hover:-translate-y-0.5"
            >
              Fale com um Especialista
            </button>
            <a
              href="#servicos"
              className="border-2 border-white/30 hover:border-white/60 text-white px-8 py-4 rounded-xl text-lg font-semibold transition-all duration-200 hover:bg-white/10 text-center"
            >
              Nossos Serviços
            </a>
          </div>
        </div>
      </div>
      <button
        onClick={() => scrollTo('sobre')}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/60 hover:text-white transition-colors animate-bounce"
      >
        <ChevronDown className="w-8 h-8" />
      </button>
    </section>
  );
}

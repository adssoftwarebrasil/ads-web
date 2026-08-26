import { ArrowRight, ShieldCheck, Clock, Star } from 'lucide-react';

export default function Hero() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            'url("https://storage.lucasmendes.dev/site-sp/assistec%20sistema%20de%20seguranca/img/hero-background.webp")',
        }}
      ></div>
      <div className="hero-overlay absolute inset-0"></div>
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full opacity-10"
          style={{ background: 'radial-gradient(circle, rgba(5, 77, 162, 0.8) 0%, transparent 70%)' }}
        ></div>
        <div
          className="absolute bottom-1/3 left-1/4 w-64 h-64 rounded-full opacity-10"
          style={{ background: 'radial-gradient(circle, rgba(10, 109, 217, 0.8) 0%, transparent 70%)' }}
        ></div>
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-6 animate-fade-in">
            <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></div>
            <span className="text-white/90 text-sm font-medium">Pará de Minas, MG — Desde 2005</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6 animate-fade-in-up">
            Segurança que protege{' '}
            <span className="relative">
              <span className="text-blue-300">o que mais</span>
            </span>
            <br />
            <span className="text-blue-300">importa para você</span>
          </h1>
          <p className="text-lg sm:text-xl text-white/80 leading-relaxed mb-8 max-w-2xl animate-fade-in-up animate-delay-200">
            Especialistas em câmeras CFTV, alarmes, portões eletrônicos, interfones e fechaduras digitais. Soluções
            completas para residências e comércios em Pará de Minas e região.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mb-12 animate-fade-in-up animate-delay-300">
            <a
              href="https://wa.me/553799961702?text=Olá!%20Gostaria%20de%20um%20orçamento%20para%20sistema%20de%20segurança."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-brand text-white font-bold rounded-xl text-lg transition-all duration-300 hover:bg-brand-light hover:shadow-brand-lg hover:-translate-y-0.5 group"
            >
              Solicitar Orçamento Grátis
              <ArrowRight className="lucide lucide-arrow-right h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
            <button onClick={() => scrollTo('servicos')} className="btn-secondary px-8 py-4 text-lg rounded-xl">
              Ver Nossos Serviços
            </button>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 animate-fade-in-up animate-delay-400">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-white/15 flex items-center justify-center flex-shrink-0">
                <ShieldCheck className="lucide lucide-shield-check h-4 w-4 text-blue-300" />
              </div>
              <span className="text-white/85 text-sm font-medium">+20 Anos de Experiência</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-white/15 flex items-center justify-center flex-shrink-0">
                <Clock className="lucide lucide-clock h-4 w-4 text-blue-300" />
              </div>
              <span className="text-white/85 text-sm font-medium">Atendimento Ágil</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-white/15 flex items-center justify-center flex-shrink-0">
                <Star className="lucide lucide-star h-4 w-4 text-blue-300" />
              </div>
              <span className="text-white/85 text-sm font-medium">Clientes Satisfeitos</span>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce-soft">
        <button
          onClick={() => scrollTo('servicos')}
          className="flex flex-col items-center gap-1 text-white/60 hover:text-white/90 transition-colors"
        >
          <span className="text-xs font-medium tracking-widest uppercase">Saiba Mais</span>
          <div className="w-5 h-8 rounded-full border-2 border-white/40 flex items-start justify-center p-1">
            <div className="w-1 h-2 rounded-full bg-white/60 animate-bounce"></div>
          </div>
        </button>
      </div>
    </section>
  );
}

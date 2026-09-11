import { Shield, ArrowRight, ChevronDown } from 'lucide-react';

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <div className="absolute inset-0">
        <img
          src="https://storage.lucasmendes.dev/site-sp/fabrica-de-concertinas-piracicaba/img/hero-background.webp"
          alt="Segurança perimetral"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-[rgb(37,34,35)]/90 via-[rgb(37,34,35)]/70 to-[rgb(240,27,38)]/40"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-[rgb(37,34,35)] via-transparent to-transparent"></div>
      </div>
      <div className="absolute top-0 right-0 w-1/3 h-full bg-[rgb(240,27,38)]/10 skew-x-12 translate-x-1/2 pointer-events-none"></div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-20">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 bg-[rgb(240,27,38)]/20 border border-[rgb(240,27,38)]/40 backdrop-blur-sm text-[rgb(240,27,38)] text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-6 animate-fade-in">
            <Shield width={14} height={14} strokeWidth={2} className="lucide lucide-shield " />
            7 Anos Protegendo o que Importa
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight text-shadow-lg mb-6 animate-fade-in-up">
            Segurança Perimetral
            <br />
            <span className="text-[rgb(240,27,38)]">de Alta Performance</span>
            <br />
            para o Seu Imóvel
          </h1>
          <p
            className="text-lg sm:text-xl text-white/80 leading-relaxed mb-8 max-w-xl animate-fade-in-up"
            style={{ animationDelay: '0.2s' }}
          >
            Concertinas, cercas cortantes e soluções completas em segurança
            imobiliária. Materiais de alta qualidade, estoque e{' '}
            <span className="text-white font-semibold">entrega imediata</span> em
            Piracicaba e região.
          </p>
          <div
            className="flex flex-wrap gap-6 mb-10 animate-fade-in-up"
            style={{ animationDelay: '0.3s' }}
          >
            <div className="flex flex-col">
              <span className="text-3xl font-bold text-[rgb(240,27,38)]">7+</span>
              <span className="text-xs text-white/60 uppercase tracking-wide">
                Anos no mercado
              </span>
            </div>
            <div className="flex flex-col">
              <span className="text-3xl font-bold text-[rgb(240,27,38)]">5.0</span>
              <span className="text-xs text-white/60 uppercase tracking-wide">
                Avaliação Google
              </span>
            </div>
            <div className="flex flex-col">
              <span className="text-3xl font-bold text-[rgb(240,27,38)]">15+</span>
              <span className="text-xs text-white/60 uppercase tracking-wide">
                Cidades atendidas
              </span>
            </div>
          </div>
          <div
            className="flex flex-col sm:flex-row gap-4 animate-fade-in-up"
            style={{ animationDelay: '0.4s' }}
          >
            <a
              href="https://wa.me/5519981442455?text=Ol%C3%A1!%20Gostaria%20de%20um%20or%C3%A7amento%20para%20concertinas."
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-center gap-2 bg-[rgb(240,27,38)] hover:bg-red-700 text-white font-bold px-8 py-4 rounded-full transition-all duration-300 hover:scale-105 shadow-2xl hover:shadow-red-500/30 text-base"
            >
              Solicitar Orçamento Grátis
              <ArrowRight
                width={18}
                height={18}
                strokeWidth={2}
                className="lucide lucide-arrow-right transition-transform group-hover:translate-x-1"
              />
            </a>
            <button
              onClick={() => {
                window.location.href = 'tel:+5519981442455';
              }}
              className="flex items-center justify-center gap-2 bg-white/10 border border-white/30 backdrop-blur-sm text-white font-semibold px-8 py-4 rounded-full hover:bg-white/20 transition-all duration-300 text-base"
            >
              Falar pelo Telefone
            </button>
          </div>
        </div>
      </div>
      <button
        onClick={() => {
          const el = document.getElementById('sobre');
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/50 hover:text-white transition-colors animate-bounce"
        aria-label="Rolar para baixo"
      >
        <ChevronDown width={32} height={32} strokeWidth={2} className="lucide lucide-chevron-down " />
      </button>
    </section>
  );
}

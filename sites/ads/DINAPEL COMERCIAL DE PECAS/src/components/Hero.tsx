import { MessageCircle, Phone, ChevronDown } from 'lucide-react';

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 lg:pt-32"
    >
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            'url("https://storage.lucasmendes.dev/site-sp/dinapel/img/hero-background.webp")',
        }}
      ></div>
      <div className="hero-overlay absolute inset-0"></div>
      <div className="absolute inset-0 opacity-10">
        <div
          className="w-full h-full"
          style={{
            backgroundImage:
              'repeating-linear-gradient(0deg, transparent, transparent 40px, rgba(252, 229, 0, 0.3) 40px, rgba(252, 229, 0, 0.3) 41px), repeating-linear-gradient(90deg, transparent, transparent 40px, rgba(252, 229, 0, 0.3) 40px, rgba(252, 229, 0, 0.3) 41px)',
          }}
        ></div>
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-2 bg-[#FCE500] text-[#0131AC] font-bold px-4 py-2 rounded-full text-sm mb-6 shadow-lg animate-fade-in">
          <span className="w-2 h-2 rounded-full bg-[#0131AC] animate-pulse-slow inline-block"></span>
          Desde 1998 no Agronegócio de Roraima
        </div>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black text-white leading-tight mb-6 text-shadow animate-fade-up">
          Peças para Tratores
          <br />
          <span className="text-transparent" style={{ WebkitTextStroke: '2px rgb(252, 229, 0)' }}>
            e Implementos
          </span>
          <br />
          <span className="text-[#FCE500]">Agrícolas</span>
        </h1>
        <p className="text-lg sm:text-xl text-white/90 max-w-2xl mx-auto mb-8 leading-relaxed text-shadow-sm animate-fade-up animate-delay-200">
          Amplo estoque com as principais marcas do mercado. Atendemos produtores rurais, fazendeiros,
          mecânicos e revendedores em toda a região de Boa Vista – RR e interior.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 animate-fade-up animate-delay-300">
          <a
            href="http://wa.me/5595991424864"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 bg-[#25D366] hover:bg-[#20BF5B] text-white font-bold px-8 py-4 rounded-full text-lg transition-all duration-200 shadow-xl hover:shadow-2xl hover:-translate-y-1 w-full sm:w-auto justify-center"
          >
            <MessageCircle size={22} className="lucide lucide-message-circle " />
            Fale pelo WhatsApp
          </a>
          <a
            href="tel:+559532243257"
            className="flex items-center gap-3 bg-white/15 hover:bg-white/25 backdrop-blur-sm border-2 border-white/50 text-white font-bold px-8 py-4 rounded-full text-lg transition-all duration-200 hover:-translate-y-1 w-full sm:w-auto justify-center"
          >
            <Phone size={22} className="lucide lucide-phone " />
            (95) 3224-3257
          </a>
        </div>
        <div className="grid grid-cols-3 gap-4 max-w-lg mx-auto animate-fade-up animate-delay-400">
          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-4 text-center">
            <div className="text-2xl font-black text-[#FCE500]">+25</div>
            <div className="text-xs text-white/80 mt-1 font-medium">Anos de mercado</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-4 text-center">
            <div className="text-2xl font-black text-[#FCE500]">4.7★</div>
            <div className="text-xs text-white/80 mt-1 font-medium">Avaliação Google</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-4 text-center">
            <div className="text-2xl font-black text-[#FCE500]">Estoque</div>
            <div className="text-xs text-white/80 mt-1 font-medium">Pronta entrega</div>
          </div>
        </div>
      </div>
      <a
        href="#sobre-nos"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/70 hover:text-[#FCE500] transition-colors animate-bounce-slow"
        aria-label="Rolar para baixo"
      >
        <ChevronDown size={32} className="lucide lucide-chevron-down " />
      </a>
    </section>
  );
}

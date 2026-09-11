import { ArrowRight, Star, MapPin, ChevronDown } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            'url("https://storage.lucasmendes.dev/site-sp/instituto%20nuuvem/img/hero-background-02.webp")',
        }}
      ></div>
      <div className="absolute inset-0 bg-gradient-to-br from-primary/80 via-primary/60 to-secondary/70"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 text-center text-white pt-24 pb-32">
        <div className="animate-fade-in">
          <span className="inline-block bg-white/20 backdrop-blur-sm border border-white/30 text-white font-heading font-semibold text-xs uppercase tracking-widest px-5 py-2 rounded-full mb-6">
            Clínica Multidisciplinar · Desde 2021
          </span>
        </div>
        <h1 className="font-heading font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight text-shadow mb-6 animate-fade-up animate-delay-100">
          Cada Criança Merece<br />
          <span className="text-cream">Voar Mais Alto</span>
        </h1>
        <p className="font-sans text-lg sm:text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed text-shadow-sm mb-10 animate-fade-up animate-delay-200">
          Cuidado especializado, equipe multidisciplinar e um ambiente acolhedor para apoiar o desenvolvimento pleno de crianças neurodivergentes em Mato Grosso.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16 animate-fade-up animate-delay-300">
          <button className="group bg-white text-primary hover:bg-cream font-heading font-bold text-base px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 inline-flex items-center justify-center gap-2">
            Agendar Avaliação
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </button>
          <button className="border-2 border-white/60 text-white hover:bg-white/10 backdrop-blur-sm font-heading font-semibold text-base px-8 py-4 rounded-full transition-all duration-300 hover:-translate-y-1">
            Conheça o Instituto
          </button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto animate-fade-up animate-delay-400">
          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl px-4 py-3 text-center">
            <div className="flex items-center justify-center gap-1">
              <span className="font-heading font-bold text-2xl text-white">2021</span>
            </div>
            <p className="text-white/75 text-xs font-sans mt-0.5">Fundado em</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl px-4 py-3 text-center">
            <div className="flex items-center justify-center gap-1">
              <span className="font-heading font-bold text-2xl text-white">6+</span>
            </div>
            <p className="text-white/75 text-xs font-sans mt-0.5">Especialidades</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl px-4 py-3 text-center">
            <div className="flex items-center justify-center gap-1">
              <Star size={12} className="fill-secondary text-secondary" />
              <span className="font-heading font-bold text-2xl text-white">5.0</span>
            </div>
            <p className="text-white/75 text-xs font-sans mt-0.5">Avaliação Google</p>
          </div>
        </div>
        <div className="flex flex-wrap justify-center gap-4 mt-8 animate-fade-up animate-delay-500">
          <div className="flex items-center gap-1.5 text-white/80 text-sm">
            <MapPin size={13} className="text-secondary" />
            <span className="font-sans">Primavera do Leste - MT</span>
          </div>
          <div className="flex items-center gap-1.5 text-white/80 text-sm">
            <MapPin size={13} className="text-secondary" />
            <span className="font-sans">Campo Verde - MT</span>
          </div>
        </div>
      </div>
      <button
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/70 hover:text-white transition-colors animate-float"
        aria-label="Rolar para baixo"
      >
        <ChevronDown size={32} />
      </button>
    </section>
  );
}

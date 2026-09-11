import { ArrowRight, Shield, Wrench, Clock } from 'lucide-react';

const WHATSAPP_URL = 'http://wa.me/559491009092';

const features = [
  { Icon: Shield, title: 'Qualidade', subtitle: 'Garantida' },
  { Icon: Wrench, title: 'Variedade', subtitle: 'de Produtos' },
  { Icon: Clock, title: 'Atendimento', subtitle: 'Especializado' },
];

export default function Hero() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src="https://storage.lucasmendes.dev/site-sp/fortmaq%2Fimg%2Ffachada-loja-hero.webp"
          alt="Fachada FORTMAQ"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A1E55]/95 via-[#0A1E55]/85 to-[#0A1E55]/70"></div>
      </div>
      <div className="container mx-auto px-4 py-32 relative z-10">
        <div className="max-w-4xl">
          <div className="mb-6 animate-fade-in">
            <span className="inline-block bg-[#AA1C1F] text-white px-6 py-2 rounded-full text-sm font-semibold tracking-wide uppercase shadow-lg">
              Desde 2023 em Redenção - PA
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-6 leading-tight animate-slide-up">
            Ferramentas e Equipamentos <span className="text-[#AA1C1F]">Profissionais</span> para Seu Projeto
          </h1>
          <p className="text-xl sm:text-2xl text-[#E6E6E4] mb-8 leading-relaxed max-w-3xl animate-slide-up-delay">
            A <strong>FORTMAQ</strong> oferece as melhores soluções em ferramentas manuais, elétricas, equipamentos de
            proteção e muito mais. Qualidade garantida e atendimento especializado.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mb-12 animate-slide-up-delay-2">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center space-x-2 bg-[#AA1C1F] text-white px-8 py-4 rounded-full hover:bg-[#8A1619] transition-all duration-300 shadow-2xl hover:shadow-[#AA1C1F]/50 transform hover:scale-105 font-bold text-lg group"
            >
              <span>Fale Conosco Agora</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <button
              onClick={() => scrollTo('produtos')}
              className="inline-flex items-center justify-center space-x-2 bg-white/10 backdrop-blur-sm text-white border-2 border-white px-8 py-4 rounded-full hover:bg-white hover:text-[#0A1E55] transition-all duration-300 font-bold text-lg"
            >
              <span>Ver Produtos</span>
            </button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 animate-fade-in-up">
            {features.map(({ Icon, title, subtitle }) => (
              <div
                key={title}
                className="flex items-center space-x-3 bg-white/10 backdrop-blur-sm rounded-lg px-6 py-4 border border-white/20"
              >
                <div className="bg-[#AA1C1F] p-3 rounded-lg">
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-white font-semibold">{title}</p>
                  <p className="text-[#E6E6E4] text-sm">{subtitle}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-10">
        <button
          onClick={() => scrollTo('sobre')}
          className="text-white hover:text-[#AA1C1F] transition-colors"
          aria-label="Rolar para baixo"
        >
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </button>
      </div>
    </section>
  );
}

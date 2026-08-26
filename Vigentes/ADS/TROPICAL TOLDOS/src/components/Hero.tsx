import { CheckCircle, ArrowRight } from 'lucide-react';

const HERO_BG = 'https://storage.lucasmendes.dev/site-sp/tropical%20toldos/img/hero-background.webp';

const features = [
  'Instalação profissional e garantida',
  'Materiais de alta qualidade',
  'Projetos sob medida',
];

export default function Hero() {
  const scrollToServices = () => document.getElementById('servicos')?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url("${HERO_BG}")` }}
      ></div>
      <div className="absolute inset-0 bg-gradient-to-br from-black/75 via-black/55 to-tropical-navy/70"></div>
      <div className="absolute top-0 left-0 right-0 h-1 bg-tropical-blue"></div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-28 lg:py-0 w-full">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 bg-tropical-blue/20 border border-tropical-blue/40 backdrop-blur-sm text-tropical-blue px-4 py-1.5 rounded-full text-sm font-semibold mb-6 animate-fade-in">
            <span className="w-2 h-2 bg-tropical-blue rounded-full animate-pulse"></span>
            Primavera do Leste e Região — MT
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6 text-shadow-lg animate-fade-in-up">
            Toldos e Coberturas
            <span className="block mt-1" style={{ color: 'rgb(0, 173, 242)' }}>
              Sob Medida
            </span>
            para Sua Casa
          </h1>
          <p className="text-gray-200 text-lg sm:text-xl leading-relaxed mb-8 max-w-xl animate-fade-in-up">
            Proteção, conforto e valorização do seu imóvel com soluções modernas e resistentes em toldos,
            policarbonato, zinco e muito mais.
          </p>
          <ul className="flex flex-col sm:flex-row flex-wrap gap-3 mb-10 animate-fade-in-up">
            {features.map((f) => (
              <li key={f} className="flex items-center gap-2 text-white text-sm font-medium">
                <CheckCircle
                  className="lucide lucide-check-circle text-tropical-green flex-shrink-0"
                  width={18}
                  height={18}
                />
                {f}
              </li>
            ))}
          </ul>
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up">
            <a
              href="http://wa.me/556684533788?text=Olá!%20Gostaria%20de%20solicitar%20um%20orçamento."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-tropical-blue hover:bg-white hover:text-tropical-navy text-white font-bold px-8 py-4 rounded-full text-base shadow-lg transition-all duration-300 hover:scale-105"
            >
              Solicitar Orçamento Grátis
              <ArrowRight className="lucide lucide-arrow-right" width={18} height={18} />
            </a>
            <button
              onClick={scrollToServices}
              className="flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 border border-white/40 backdrop-blur-sm text-white font-semibold px-8 py-4 rounded-full text-base transition-all duration-300"
            >
              Ver Nossos Serviços
            </button>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          viewBox="0 0 1440 80"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full"
          preserveAspectRatio="none"
        >
          <path
            d="M0 80L1440 80L1440 40C1200 80 960 20 720 40C480 60 240 0 0 40L0 80Z"
            fill="white"
          ></path>
        </svg>
      </div>
    </section>
  );
}

import { ArrowRight } from 'lucide-react';
import { WHATSAPP_URL, scrollToSection } from '../constants';

const stats = [
  { title: 'Produtos Sob Medida', desc: 'Fabricação personalizada' },
  { title: 'Entrega Rápida', desc: 'Agilidade garantida' },
  { title: 'Preços Justos', desc: 'Melhor custo-benefício' },
  { title: '10+ Anos', desc: 'Experiência no mercado' },
];

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative w-full h-[100dvh] min-h-screen flex items-center justify-center overflow-hidden"
    >
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            'url("https://storage.lucasmendes.dev/site-sp/queirozmetais%2Fhero.jpg")',
        }}
      ></div>
      <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/60 to-black/70"></div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
          Qualidade em Metais
          <span className="block text-primary mt-2">Para Você</span>
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto">
          Desde 2014 oferecendo os melhores produtos metálicos com preço justo e atendimento de excelência
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-primary hover:bg-primary-dark text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:scale-105 shadow-xl flex items-center gap-2"
          >
            Fale Conosco
            <ArrowRight
              size={20}
              className="group-hover:translate-x-1 transition-transform duration-300"
            />
          </a>
          <button
            onClick={() => scrollToSection('servicos')}
            className="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white border-2 border-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:scale-105"
          >
            Nossos Produtos
          </button>
        </div>
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          {stats.map((stat) => (
            <div
              key={stat.title}
              className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-4 text-white"
            >
              <h3 className="font-bold text-base sm:text-lg mb-1">{stat.title}</h3>
              <p className="text-sm text-gray-300">{stat.desc}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <button
          onClick={() => scrollToSection('servicos')}
          className="text-white opacity-75 hover:opacity-100 transition-opacity"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 9l-7 7-7-7"
            ></path>
          </svg>
        </button>
      </div>
    </section>
  );
}

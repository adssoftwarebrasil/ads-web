import { ChevronDown } from 'lucide-react';
import WhatsAppIcon from './WhatsAppIcon';

const stats = [
  { value: '8+', label: 'Anos no Mercado' },
  { value: '3+', label: 'Categorias de Produtos' },
  { value: 'MT', label: 'Mato Grosso' },
];

export default function Hero() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="inicio"
      className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden pt-28 lg:pt-0 pb-16"
    >
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            'url("https://storage.lucasmendes.dev/site-sp/estopas%20madri/img/hero-background.webp")',
        }}
      ></div>
      <div className="absolute inset-0 bg-gradient-to-b from-black/75 via-black/60 to-black/85"></div>
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center">
        <div className="mb-6 inline-flex items-center gap-2 bg-[#E93235]/20 border border-[#E93235]/40 rounded-full px-5 py-2">
          <span className="w-2 h-2 rounded-full bg-[#E93235] animate-pulse"></span>
          <span className="text-[#E93235] text-sm font-semibold tracking-widest uppercase">
            Cuiabá, Várzea Grande e Região
          </span>
        </div>
        <h1
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white leading-tight mb-6"
          style={{ textShadow: 'rgba(0, 0, 0, 0.8) 0px 4px 30px' }}
        >
          Estopas e Produtos de{' '}
          <span className="text-[#E93235] relative inline-block">
            Limpeza
            <svg
              className="absolute -bottom-2 left-0 w-full"
              viewBox="0 0 300 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M3 9C50 3 150 1 297 9" stroke="#E93235" strokeWidth="3" strokeLinecap="round"></path>
            </svg>
          </span>{' '}
          com Qualidade Garantida
        </h1>
        <p className="text-lg sm:text-xl text-white/80 max-w-2xl mx-auto mb-10 leading-relaxed">
          Mais de 8 anos fornecendo estopas, panos técnicos e produtos automotivos para empresas e
          profissionais do Mato Grosso. Atendimento rápido, produtos de primeira linha.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="http://wa.me/556599164429?text=Olá! Gostaria de solicitar um orçamento."
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-[#E93235] hover:bg-[#CC1F22] text-white font-bold px-8 py-4 rounded-full text-base transition-all duration-200 hover:shadow-2xl hover:shadow-[#E93235]/40 hover:-translate-y-1"
          >
            <WhatsAppIcon className="w-5 h-5 fill-current flex-shrink-0" />
            Solicitar Orçamento
          </a>
          <button
            onClick={() => scrollTo('produtos')}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 border-2 border-white/60 hover:border-white text-white font-semibold px-8 py-4 rounded-full text-base transition-all duration-200 hover:bg-white/10"
          >
            Ver Produtos
          </button>
        </div>
        <div className="mt-16 grid grid-cols-3 gap-4 max-w-xl mx-auto">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-2xl sm:text-3xl font-black text-[#E93235]">{stat.value}</div>
              <div className="text-xs sm:text-sm text-white/60 mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
      <button
        onClick={() => scrollTo('sobre')}
        className="absolute bottom-4 sm:bottom-8 left-1/2 -translate-x-1/2 text-white/60 hover:text-white transition-colors animate-bounce"
        aria-label="Scroll down"
      >
        <ChevronDown width={32} height={32} className="lucide lucide-chevron-down" />
      </button>
    </section>
  );
}

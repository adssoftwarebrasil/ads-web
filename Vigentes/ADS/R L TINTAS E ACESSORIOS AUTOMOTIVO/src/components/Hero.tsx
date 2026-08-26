import { ChevronDown } from 'lucide-react';

const tags = [
  'Tinta Automotiva',
  'Tinta Imobiliária',
  'Colorimetria Especializada',
  'Produtos Vonixx',
];

export default function Hero() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            'url("https://storage.lucasmendes.dev/site-sp/r%20l%20tintas/img/hero-background.webp")',
        }}
      ></div>
      <div className="absolute inset-0 bg-gradient-to-br from-black/85 via-black/70 to-red-950/60"></div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-2 bg-red-700/20 border border-red-700/40 text-red-400 text-xs font-semibold uppercase tracking-widest px-4 py-2 rounded-full mb-6">
          <span className="w-1.5 h-1.5 bg-red-500 rounded-full animate-pulse"></span>Primavera do Leste - MT
        </div>
        <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black text-white leading-tight mb-6 tracking-tight">
          Tintas de{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-700">
            Alta Performance
          </span>
          <br />
          para Seu Veículo e Obra
        </h1>
        <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto mb-10 leading-relaxed">
          Mais de <strong className="text-white">8 anos</strong> fornecendo tintas automotivas e
          imobiliárias com qualidade comprovada. Cores personalizadas por técnico especializado em
          colorimetria.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="http://wa.me/5566984628134"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto bg-red-700 hover:bg-red-600 active:bg-red-800 text-white font-bold text-base px-8 py-4 rounded-lg transition-all duration-200 shadow-lg shadow-red-900/40 hover:shadow-red-800/60 hover:-translate-y-0.5"
          >
            Solicitar Orçamento Agora
          </a>
          <button
            onClick={() => scrollTo('produtos')}
            className="w-full sm:w-auto border border-gray-500 hover:border-white text-gray-300 hover:text-white font-semibold text-base px-8 py-4 rounded-lg transition-all duration-200 hover:-translate-y-0.5"
          >
            Ver Produtos
          </button>
        </div>
        <div className="flex flex-wrap justify-center gap-6 mt-14 text-sm text-gray-400">
          {tags.map((tag) => (
            <span key={tag} className="flex items-center gap-1.5">
              <span className="w-1 h-1 bg-red-600 rounded-full"></span>
              {tag}
            </span>
          ))}
        </div>
      </div>
      <button
        aria-label="Rolar para baixo"
        onClick={() => scrollTo('produtos')}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-gray-400 hover:text-white transition-colors animate-bounce"
      >
        <ChevronDown className="lucide lucide-chevron-down " width={32} height={32} />
      </button>
    </section>
  );
}

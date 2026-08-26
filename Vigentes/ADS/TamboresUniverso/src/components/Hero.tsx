import { ChevronDown } from 'lucide-react';

export default function Hero() {
  const scrollToContent = () => {
    const element = document.querySelector('#historia');
    if (element) {
      // Rola para o elemento #historia com comportamento suave
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative w-full h-[100dvh] min-h-screen flex items-center justify-center overflow-hidden">
      {/* Imagem de Fundo Atualizada */}
      <img
        src="https://storage.lucasmendes.dev/site-sp/tamboresuniverso%2FNOSSOS%20PRODUTOS.webp"
        alt="Tambores Universo - Equipamentos agropecuários e tambores"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* NOVO OVERLAY AZUL/GRADIENTE (Filtro) */}
      {/* Usei o gradiente do seu primeiro componente Hero, que era azul. */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#034D9B]/80 via-[#0A85E3]/50 to-[#034D9B]/80" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 md:px-6 text-center">
        {/* TÍTULO */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight uppercase tracking-wider">
          TAMBORES UNIVERSO: EXPANDINDO HORIZONTES DE ARMAZENAMENTO.
        </h1>

        {/* PARÁGRAFO DE DESTAQUE */}
        <p className="text-xl md:text-2xl lg:text-3xl font-medium text-white/95 mb-10 leading-snug max-w-4xl mx-auto">
          TRANSFORMANDO PLÁSTICO EM SOLUÇÕES VERSÁTEIS. <br className="hidden sm:inline" /> CONFIANÇA, INOVAÇÃO E QUALIDADE EM CADA TAMBOR!
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="https://wa.me/5562984164141?text=Olá, gostaria de solicitar um orçamento"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gradient-to-r from-[#0A85E3] to-[#034D9B] text-white px-8 py-4 rounded-full text-lg font-semibold hover:scale-105 transition-transform duration-300 shadow-2xl w-full sm:w-auto"
          >
            Solicitar Orçamento
          </a>

          <button
            onClick={scrollToContent}
            className="bg-white/10 backdrop-blur-sm border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white/20 transition-all duration-300 w-full sm:w-auto"
          >
            Conheça Nossos Produtos
          </button>
        </div>
      </div>

      
    </section>
  );
}
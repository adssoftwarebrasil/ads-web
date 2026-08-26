import { ArrowRight, CheckCircle } from 'lucide-react';

export default function Hero() {
  return (
    <section 
      id="inicio" 
      // Alterações aqui: 
      // 1. min-h-[100dvh] para melhor suporte mobile
      // 2. pt-32 no mobile para fugir do header, voltando para pt-20 em telas grandes (lg)
      // 3. pb-12 para garantir espaço no fundo em celulares pequenos
      className="relative min-h-[100dvh] flex items-center pt-32 pb-12 lg:pt-20 lg:pb-0"
    >
      {/* Background Image & Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://storage.lucasmendes.dev/site-sp/tamboraria%20tocatins%2Fimg%2Fgalpao-tambores-azul-fachada-hero.webp"
          alt="Tamboraria Tocantins"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[rgb(45,62,84)]/95 via-[rgb(45,62,84)]/90 to-[rgb(45,62,84)]/75"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl">
          
          {/* Badge */}
          <div className="inline-block bg-[rgb(78,128,196)]/20 backdrop-blur-sm border border-[rgb(78,128,196)]/30 rounded-full px-4 py-1.5 sm:px-6 sm:py-2 mb-6">
            <p className="text-[rgb(78,128,196)] font-semibold text-xs sm:text-base">
              20 anos de experiência no mercado
            </p>
          </div>

          {/* Headline - Ajustado text-3xl para mobile */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Soluções em Plásticos para o{' '}
            <span className="text-[rgb(78,128,196)]">Agronegócio</span>
          </h1>

          {/* Description */}
          <p className="text-base sm:text-xl text-gray-200 mb-8 leading-relaxed max-w-2xl">
            Referência em produtos plásticos de alta qualidade para o setor agropecuário.
            Tambores, bombonas, cochos, containers IBC e muito mais, com preços competitivos
            e entrega própria em todo Tocantins, Pará e Mato Grosso.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-10">
            <a
              href="https://wa.me/556392280772"
              target="_blank"
              rel="noopener noreferrer"
              // Botão full width no mobile (w-full sm:w-auto)
              className="w-full sm:w-auto group bg-[rgb(51,71,144)] text-white px-8 py-4 rounded-lg hover:bg-[rgb(78,128,196)] transition-all duration-300 font-semibold text-center shadow-xl hover:shadow-2xl flex items-center justify-center space-x-2"
            >
              <span>Fale com Especialista</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </a>
            <a
              href="tel:6336023333"
              // Botão full width no mobile
              className="w-full sm:w-auto bg-white text-[rgb(51,71,144)] px-8 py-4 rounded-lg hover:bg-gray-100 transition-all duration-300 font-semibold text-center shadow-xl hover:shadow-2xl"
            >
              Ligar Agora: (63) 3602-3333
            </a>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-6">
            <div className="flex items-start space-x-3 bg-white/10 backdrop-blur-sm rounded-lg p-3 sm:p-4 border border-white/5">
              <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-[rgb(78,128,196)] flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-white font-semibold text-sm sm:text-base">Entrega Própria</p>
                <p className="text-gray-300 text-xs sm:text-sm">Frota exclusiva</p>
              </div>
            </div>
            <div className="flex items-start space-x-3 bg-white/10 backdrop-blur-sm rounded-lg p-3 sm:p-4 border border-white/5">
              <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-[rgb(78,128,196)] flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-white font-semibold text-sm sm:text-base">Preço Direto</p>
                <p className="text-gray-300 text-xs sm:text-sm">Da fábrica</p>
              </div>
            </div>
            <div className="flex items-start space-x-3 bg-white/10 backdrop-blur-sm rounded-lg p-3 sm:p-4 border border-white/5">
              <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-[rgb(78,128,196)] flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-white font-semibold text-sm sm:text-base">Localização</p>
                <p className="text-gray-300 text-xs sm:text-sm">Às margens da BR-153</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Fade Effect Bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-12 sm:h-24 bg-gradient-to-t from-white to-transparent z-10 pointer-events-none"></div>
    </section>
  );
}
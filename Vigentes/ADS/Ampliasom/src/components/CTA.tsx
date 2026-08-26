import { ArrowRight, Check } from 'lucide-react';

export default function CTA() {
  return (
    <section className="py-16 lg:py-24 bg-gradient-to-br from-[#007E7A] via-[#007E7A] to-[#ED0180] relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjEpIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-30"></div>

      {/* Aumentei para max-w-7xl para usar a tela toda */}
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
          Pronto para ouvir melhor?
        </h2>
        <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
          Com tecnologia, conforto e equipe especializada, a melhor experiência em reabilitação auditiva está a um clique. Fale conosco agora!
        </p>

        <a
          href="https://wa.me/5561994174249?text=Olá! Gostaria de agendar uma avaliação auditiva gratuita."
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center px-10 py-5 bg-white text-[#007E7A] font-bold text-lg rounded-full hover:shadow-2xl transition-all duration-300 transform hover:scale-105 group"
        >
          <span>Agendar avaliação gratuita</span>
          <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-1 transition-transform" />
        </a>

        {/* MUDANÇA DRASTICA AQUI:
            1. Usei 'grid' com 'md:grid-cols-3'. Isso cria 3 colunas invisiveis.
            2. Cada item vai para sua coluna, forçando o afastamento máximo entre eles.
        */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 items-center w-full">
          
          {/* Item 1 */}
          <div className="flex items-center justify-center md:justify-center gap-4">
            <div 
              className="w-12 h-12 flex-shrink-0 rounded-full border-2 border-white flex items-center justify-center shadow-lg transform hover:scale-110 transition-transform"
              style={{ backgroundColor: '#ED0180' }} 
            >
              <Check className="w-6 h-6 text-white" />
            </div>
            <span className="text-lg font-semibold text-white text-left">Avaliação gratuita</span>
          </div>

          {/* Item 2 */}
          <div className="flex items-center justify-center md:justify-center gap-4">
            <div 
              className="w-12 h-12 flex-shrink-0 rounded-full border-2 border-white flex items-center justify-center shadow-lg transform hover:scale-110 transition-transform"
              style={{ backgroundColor: '#ED0180' }}
            >
              <Check className="w-6 h-6 text-white" />
            </div>
            <span className="text-lg font-semibold text-white text-left">Atendimento humanizado</span>
          </div>

          {/* Item 3 */}
          <div className="flex items-center justify-center md:justify-center gap-4">
            <div 
              className="w-12 h-12 flex-shrink-0 rounded-full border-2 border-white flex items-center justify-center shadow-lg transform hover:scale-110 transition-transform"
              style={{ backgroundColor: '#ED0180' }}
            >
              <Check className="w-6 h-6 text-white" />
            </div>
            <span className="text-lg font-semibold text-white text-left">Melhores marcas</span>
          </div>

        </div>
      </div>
    </section>
  );
}
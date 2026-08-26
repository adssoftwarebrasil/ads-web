import { ArrowRight, MessageCircle } from 'lucide-react';

export default function Hero() {
  return (
    <section id="inicio" className="relative pt-24 pb-16 lg:pt-32 lg:pb-24 bg-gradient-to-br from-blue-50 via-white to-pink-50 overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgwLDEyOCwxNzEsMC4wNSkiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-40"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center"> {/* Aumentei o gap entre colunas */}
          <div className="space-y-10 animate-fade-in"> {/* Aumentei o espaçamento vertical entre blocos */}
            
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight"> {/* Aumentado de 4xl/5xl/6xl */}
              <span className="bg-gradient-to-r from-[#007E7A] to-[#ED0180] bg-clip-text text-transparent">
                Ouça melhor,
              </span>
              <br />
              <span className="text-gray-900">viva melhor.</span>
            </h1>

            <p className="text-xl sm:text-2xl text-gray-700 leading-relaxed"> {/* Aumentado de text-lg/xl */}
              Mais de <span className="font-semibold text-[#007E7A]">15 anos</span> transformando vidas! Soluções auditivas sob medida, facilidades exclusivas e atendimento humanizado especialmente para você. Tecnologia e cuidado para todas as idades — agende já uma avaliação gratuita.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://wa.me/5561994174249?text=Olá! Gostaria de fazer meu teste auditivo gratuito."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-10 py-5 bg-gradient-to-r from-[#007E7A] to-[#ED0180] text-white text-xl font-semibold rounded-full hover:shadow-xl transition-all duration-300 transform hover:scale-105 group"
              > {/* Padding e fonte do botão aumentados */}
                <span>Quero fazer meu teste gratuito</span>
                <ArrowRight className="ml-2 w-6 h-6 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100"> {/* Padding interno do card aumentado */}
              <p className="text-base font-bold text-gray-600 mb-4 uppercase tracking-wide"> {/* Aumentado e com mais peso */}
                Agende agora um atendimento exclusivo
              </p>
              <p className="text-lg text-gray-700 mb-6"> {/* Aumentado de text-base para text-lg */}
                Nossa equipe irá explicar tudo, tirar dúvidas e apresentar a melhor solução para sua audição. Atendimento humanizado!
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="https://wa.me/5561994174249?text=Olá! Gostaria de agendar uma avaliação auditiva."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-8 py-4 bg-[#007E7A] text-white text-lg font-medium rounded-lg hover:bg-[#006d94] transition-colors"
                >
                  Agendar avaliação
                </a>
                <a
                  href="https://wa.me/5561994174249"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-8 py-4 border-2 border-[#007E7A] text-[#007E7A] text-lg font-medium rounded-lg hover:bg-[#007E7A] hover:text-white transition-colors"
                >
                  <MessageCircle className="w-6 h-6 mr-2" />
                  Quero falar pelo WhatsApp
                </a>
              </div>
            </div>
          </div>

          <div className="relative lg:h-[700px] flex items-center justify-center"> {/* Altura do container da imagem aumentada */}
            <div className="absolute inset-0 bg-gradient-to-tr from-[#007E7A]/20 to-[#ED0180]/20 rounded-3xl blur-3xl"></div>
            <img
              src="https://storage-admin.lucasmendes.dev/api/v1/buckets/site-sp/objects/download?preview=true&prefix=AMPLIASOM%2FRexton_Reach_Cic_05%20(1)_11zon.jpg&version_id=null"
              alt="Idosa sorrindo usando aparelho auditivo"
              className="relative rounded-3xl shadow-2xl w-full h-full object-cover transform hover:scale-110 transition-transform duration-500"
            /> {/* Scale do hover aumentado para 110 */}
          </div>
        </div>
      </div>
    </section>
  );
}
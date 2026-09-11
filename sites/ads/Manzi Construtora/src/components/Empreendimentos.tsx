import { Download, MapPin, Home, CheckCircle, Award, Eye, Sparkles } from 'lucide-react';
import { useReveal } from '../hooks/useReveal';

const caracteristicas = [
  'Sala e cozinha integradas',
  'Varanda Gourmet',
  '3 quartos (sendo 1 suíte)',
  'Banheiro social',
  '2 vagas de garagem',
  'Bicicletário',
];

const diferenciais = [
  'Varanda gourmet ampla e arejada',
  'Área gourmet com churrasqueira',
  'Acabamento em alto padrão',
  'Medições individuais (gás, água, luz)',
  'Vista para serra e panorâmica',
];

export default function Empreendimentos() {
  const catalog = useReveal();
  const grid = useReveal();

  return (
    <section
      id="empreendimentos"
      className="bg-[rgb(0,40,71)] py-12 sm:py-16 md:py-20 lg:py-28 px-4 sm:px-6"
    >
      <div className="max-w-[1400px] mx-auto">
        <div className="text-center mb-8 sm:mb-10 md:mb-12">
          <span className="inline-block bg-white bg-opacity-20 text-white text-[10px] sm:text-xs font-semibold px-4 sm:px-5 py-1.5 sm:py-2 rounded-full mb-4 sm:mb-5">
            LANÇAMENTO
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-3 sm:mb-4 px-4">
            Residencial Garden Park
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-white text-opacity-90 px-4">
            Morada do Sol - Montes Claros/MG
          </p>
        </div>
        <div
          ref={catalog.ref}
          className={`transition-all duration-1000 mb-6 sm:mb-8 ${
            catalog.inView ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
          }`}
        >
          <div className="rounded-lg sm:rounded-xl overflow-hidden shadow-2xl mb-4 sm:mb-6">
            <iframe
              allowFullScreen
              allow="clipboard-write"
              scrolling="no"
              className="w-full border-none rounded-lg sm:rounded-xl"
              src="https://heyzine.com/flip-book/f512b33fbf.html"
              title="Catálogo Residencial Garden Park"
              style={{ height: '400px', minHeight: '400px' }}
            ></iframe>
          </div>
          <div className="flex justify-center px-4">
            <a
              href="https://heyzine.com/flip-book/f512b33fbf.html"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-full sm:w-auto bg-white text-[rgb(0,40,71)] px-6 sm:px-10 py-3 sm:py-4 rounded-full text-sm sm:text-base font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
            >
              <Download className="lucide lucide-download mr-2" width={18} height={18} />
              <span className="whitespace-nowrap">BAIXAR CATÁLOGO COMPLETO</span>
            </a>
          </div>
        </div>
        <div
          ref={grid.ref}
          className={`grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6 transition-all duration-1000 delay-300 ${
            grid.inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="glassmorphism rounded-lg sm:rounded-xl p-4 sm:p-5 md:p-6 hover:border-white hover:border-opacity-40 transition-all duration-300 hover:-translate-y-1">
            <MapPin className="lucide lucide-map-pin text-white mb-2 sm:mb-3" width={28} height={28} />
            <h3 className="text-lg sm:text-xl font-semibold text-white mb-2 sm:mb-3">
              Localização
            </h3>
            <p className="text-sm sm:text-base text-white text-opacity-90 mb-1.5 sm:mb-2 font-medium">
              Rua Sebastião Santos, 1050 – Bairro Morada do Sol
            </p>
            <p className="text-xs sm:text-sm text-white text-opacity-80 leading-relaxed">
              Região privilegiada, perto de centros comerciais, escolas, supermercados,
              farmácias e parques.
            </p>
          </div>
          <div className="glassmorphism rounded-lg sm:rounded-xl p-4 sm:p-5 md:p-6 hover:border-white hover:border-opacity-40 transition-all duration-300 hover:-translate-y-1">
            <Home className="lucide lucide-home text-white mb-2 sm:mb-3" width={28} height={28} />
            <h3 className="text-lg sm:text-xl font-semibold text-white mb-3 sm:mb-4">
              Tipologias
            </h3>
            <div className="grid grid-cols-2 gap-2 sm:gap-3 md:gap-4">
              <div className="bg-white bg-opacity-10 rounded-lg p-3 sm:p-4 text-center">
                <p className="text-white text-opacity-80 text-[10px] sm:text-xs md:text-sm mb-1">
                  Apartamento Tipo
                </p>
                <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">
                  110m²
                </p>
              </div>
              <div className="bg-white bg-opacity-10 rounded-lg p-3 sm:p-4 text-center">
                <p className="text-white text-opacity-80 text-[10px] sm:text-xs md:text-sm mb-1">
                  Cobertura Duplex
                </p>
                <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">
                  218m²
                </p>
              </div>
            </div>
          </div>
          <div className="glassmorphism rounded-lg sm:rounded-xl p-4 sm:p-5 md:p-6 hover:border-white hover:border-opacity-40 transition-all duration-300 hover:-translate-y-1">
            <CheckCircle className="lucide lucide-check-circle text-white mb-2 sm:mb-3" width={28} height={28} />
            <h3 className="text-lg sm:text-xl font-semibold text-white mb-3 sm:mb-4">
              Características
            </h3>
            <div className="space-y-1.5 sm:space-y-2">
              {caracteristicas.map((c) => (
                <div key={c} className="flex items-start">
                  <span className="text-green-300 mr-2 mt-0.5 sm:mt-1 flex-shrink-0 text-sm sm:text-base">
                    ✓
                  </span>
                  <span className="text-white text-opacity-90 text-xs sm:text-sm">{c}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="glassmorphism rounded-lg sm:rounded-xl p-4 sm:p-5 md:p-6 hover:border-white hover:border-opacity-40 transition-all duration-300 hover:-translate-y-1">
            <Award className="lucide lucide-award text-white mb-2 sm:mb-3" width={28} height={28} />
            <h3 className="text-lg sm:text-xl font-semibold text-white mb-3 sm:mb-4">
              Diferenciais
            </h3>
            <div className="flex flex-wrap gap-1.5 sm:gap-2">
              {diferenciais.map((d) => (
                <span
                  key={d}
                  className="bg-white bg-opacity-15 text-white text-[10px] sm:text-xs md:text-sm px-2.5 sm:px-3 md:px-4 py-1.5 sm:py-2 rounded-full"
                >
                  {d}
                </span>
              ))}
            </div>
          </div>
          <div className="glassmorphism rounded-lg sm:rounded-xl p-4 sm:p-5 md:p-6 hover:border-white hover:border-opacity-40 transition-all duration-300 hover:-translate-y-1">
            <Eye className="lucide lucide-eye text-white mb-2 sm:mb-3" width={28} height={28} />
            <h3 className="text-lg sm:text-xl font-semibold text-white mb-2 sm:mb-3">
              Vista Privilegiada
            </h3>
            <p className="text-white text-opacity-90 text-xs sm:text-sm leading-relaxed">
              Vista deslumbrante para a serra e vista panorâmica para a cidade
            </p>
          </div>
          <div className="glassmorphism rounded-lg sm:rounded-xl p-4 sm:p-5 md:p-6 hover:border-white hover:border-opacity-40 transition-all duration-300 hover:-translate-y-1">
            <Sparkles className="lucide lucide-sparkles text-white mb-2 sm:mb-3" width={28} height={28} />
            <h3 className="text-lg sm:text-xl font-semibold text-white mb-2 sm:mb-3">
              Estilo de Vida
            </h3>
            <p className="text-white text-opacity-90 text-xs sm:text-sm leading-relaxed">
              Alto padrão, conforto e qualidade de vida. Projeto que une privacidade,
              praticidade e lazer.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

import { Zap, Trophy, Gauge, Target, ArrowRight } from 'lucide-react';

export default function LinhaPro() {
  return (
    <section
      id="pro"
      className="relative py-24 bg-gradient-to-br from-slate-900 via-red-950 to-black overflow-hidden"
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-10 w-96 h-2 bg-gradient-to-r from-transparent via-red-500 to-transparent opacity-20 blur-xl transform -rotate-12"></div>
        <div className="absolute top-1/2 right-20 w-80 h-2 bg-gradient-to-r from-transparent via-orange-500 to-transparent opacity-20 blur-xl transform rotate-12"></div>
        <div className="absolute bottom-1/4 left-1/3 w-72 h-2 bg-gradient-to-r from-transparent via-red-600 to-transparent opacity-20 blur-xl transform -rotate-6"></div>
      </div>
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute top-0 left-0 w-full h-full"
          style={{
            backgroundImage:
              'radial-gradient(circle, rgb(253, 88, 34) 1px, transparent 1px)',
            backgroundSize: '40px 40px',
          }}
        ></div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-red-600 via-orange-600 to-red-600 text-white px-6 py-3 rounded-full text-sm font-bold mb-6 shadow-2xl animate-pulse border-2 border-red-400/30">
            <Zap className="lucide lucide-zap w-5 h-5 fill-white" />
            <span>Alta Performance · Elite Racing</span>
            <Trophy className="lucide lucide-trophy w-5 h-5 fill-yellow-400" />
          </div>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-black text-white mb-6 leading-tight">
            Linha{' '}
            <span className="bg-gradient-to-r from-red-500 via-orange-500 to-red-600 bg-clip-text text-transparent">
              PRO
            </span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed font-light">
            Geometria agressiva, componentes de{' '}
            <span className="font-bold text-red-400">elite mundial</span> e
            performance{' '}
            <span className="font-bold text-orange-400">incomparável</span>
          </p>
          <div className="flex flex-wrap justify-center gap-6 mt-10">
            <div className="bg-gradient-to-br from-red-950/50 to-black/50 backdrop-blur-sm border border-red-500/30 px-6 py-4 rounded-2xl">
              <div className="flex items-center gap-3 mb-2">
                <Gauge className="lucide lucide-gauge w-6 h-6 text-red-500" />
                <span className="text-2xl font-bold text-white">29"</span>
              </div>
              <p className="text-gray-400 text-sm font-medium">Aro Premium</p>
            </div>
            <div className="bg-gradient-to-br from-red-950/50 to-black/50 backdrop-blur-sm border border-orange-500/30 px-6 py-4 rounded-2xl">
              <div className="flex items-center gap-3 mb-2">
                <Target className="lucide lucide-target w-6 h-6 text-orange-500" />
                <span className="text-2xl font-bold text-white">Carbono</span>
              </div>
              <p className="text-gray-400 text-sm font-medium">
                Quadro Ultraleve
              </p>
            </div>
            <div className="bg-gradient-to-br from-red-950/50 to-black/50 backdrop-blur-sm border border-red-500/30 px-6 py-4 rounded-2xl">
              <div className="flex items-center gap-3 mb-2">
                <Zap className="lucide lucide-zap w-6 h-6 text-red-500 fill-red-500" />
                <span className="text-2xl font-bold text-white">Shimano</span>
              </div>
              <p className="text-gray-400 text-sm font-medium">Grupo Elite</p>
            </div>
          </div>
        </div>
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto mb-12">
          <div className="relative group">
            <div className="absolute -inset-3 bg-gradient-to-r from-red-600 via-orange-600 to-red-600 rounded-3xl blur-2xl opacity-40 group-hover:opacity-60 transition-all duration-500"></div>
            <div className="relative bg-gradient-to-br from-gray-900 to-black rounded-3xl shadow-2xl overflow-hidden border-2 border-red-500/30">
              <div className="aspect-[4/5] overflow-hidden">
                <img
                  src="https://storage.lucasmendes.dev/site-sp/sj0bike%2Flinha-pro%2Flinhapro.jpg"
                  alt="Linha Pro 1"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              <div className="p-6 bg-gradient-to-t from-black via-red-950/50 to-transparent absolute bottom-0 left-0 right-0">
                <h3 className="text-2xl font-black text-white mb-2 flex items-center gap-2">
                  <Zap className="lucide lucide-zap w-6 h-6 text-red-500 fill-red-500" />
                  PRO Advanced
                </h3>
                <p className="text-gray-300 text-sm mb-4">
                  Aerodinâmica perfeita para dominar qualquer terreno e quebrar
                  recordes.
                </p>
              </div>
            </div>
          </div>
          <div className="relative group">
            <div className="absolute -inset-3 bg-gradient-to-r from-orange-600 via-red-600 to-orange-600 rounded-3xl blur-2xl opacity-40 group-hover:opacity-60 transition-all duration-500"></div>
            <div className="relative bg-gradient-to-br from-gray-900 to-black rounded-3xl shadow-2xl overflow-hidden border-2 border-orange-500/30">
              <div className="aspect-[4/5] overflow-hidden">
                <img
                  src="https://storage.lucasmendes.dev/site-sp/sj0bike%2Flinha-pro%2Flinhapro1.jpg"
                  alt="Linha Pro 2"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              <div className="p-6 bg-gradient-to-t from-black via-orange-950/50 to-transparent absolute bottom-0 left-0 right-0">
                <h3 className="text-2xl font-black text-white mb-2 flex items-center gap-2">
                  <Trophy className="lucide lucide-trophy w-6 h-6 text-orange-500 fill-orange-500" />
                  PRO Elite
                </h3>
                <p className="text-gray-300 text-sm mb-4">
                  Tecnologia de ponta para atletas que buscam o máximo
                  desempenho.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="text-center space-y-6">
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="group/btn relative bg-gradient-to-r from-red-600 via-orange-600 to-red-600 text-white px-10 py-5 rounded-2xl font-bold text-lg inline-flex items-center gap-3 hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-red-600/70 overflow-hidden border-2 border-red-400/30">
              <span className="relative z-10 flex items-center gap-3">
                <Zap className="lucide lucide-zap w-6 h-6 fill-white" />
                Consultar Profissional
                <ArrowRight className="lucide lucide-arrow-right w-6 h-6 group-hover/btn:translate-x-2 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-white/20 transform scale-x-0 group-hover/btn:scale-x-100 transition-transform origin-left duration-300"></div>
            </button>
            <button className="group/btn border-2 border-red-500 text-red-500 bg-black/50 backdrop-blur-sm px-10 py-5 rounded-2xl font-bold text-lg inline-flex items-center gap-3 hover:scale-105 hover:bg-red-950/50 transition-all duration-300 shadow-xl">
              <Trophy className="lucide lucide-trophy w-6 h-6 group-hover/btn:fill-red-500 transition-all" />
              Ficha Técnica Completa
            </button>
          </div>
          <div className="bg-gradient-to-r from-red-950/30 to-orange-950/30 backdrop-blur-sm border border-red-500/30 rounded-2xl p-6 max-w-2xl mx-auto">
            <p className="text-gray-300 text-sm">
              <span className="text-red-400 font-bold">⚡ Exclusivo:</span>{' '}
              Personalização completa de cores e componentes disponível para
              atletas profissionais
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

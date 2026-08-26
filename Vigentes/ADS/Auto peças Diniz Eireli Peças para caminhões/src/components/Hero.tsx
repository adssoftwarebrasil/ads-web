import { ArrowRight, Shield, Clock, Truck } from 'lucide-react';

export default function Hero() {
  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section
      id="home"
      className="relative min-h-[90vh] flex items-center overflow-hidden bg-gradient-to-br from-gray-900 via-black to-gray-800"
    >
      <div className="absolute inset-0 opacity-10">
        <img
          src="https://storage.lucasmendes.dev/site-sp/auto%20pecas%20diniz%2Fimg%2Fcaminhao-autopecas-loja-frente.webp"
          alt="Caminhão Auto Peças"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/90 to-transparent"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-3xl">
          <div className="inline-block mb-6 animate-fadeIn">
            <span className="bg-[rgb(237,23,21)] text-white px-4 py-2 rounded-full text-sm font-semibold">
              Desde 1991 | Mais de 34 anos de experiência
            </span>
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight animate-slideUp">
            Peças para Caminhões com{' '}
            <span className="text-[rgb(237,23,21)]">Entrega Ágil</span> em
            Medianeira e Região
          </h1>
          <p
            className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed animate-slideUp"
            style={{ animationDelay: '0.1s' }}
          >
            Especialistas em soluções completas para linha diesel, vans e
            caminhões de todas as marcas. Atendimento técnico de excelência e
            peças a pronta entrega.
          </p>
          <div
            className="flex flex-col sm:flex-row gap-4 mb-12 animate-slideUp"
            style={{ animationDelay: '0.2s' }}
          >
            <button
              onClick={() => scrollTo('contato')}
              className="group bg-[rgb(237,23,21)] text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-[rgb(200,20,18)] transition-all shadow-2xl hover:shadow-[rgb(237,23,21)]/50 transform hover:-translate-y-1 flex items-center justify-center gap-2"
            >
              Fale com um Especialista
              <ArrowRight className="lucide lucide-arrow-right group-hover:translate-x-1 transition-transform" width={20} height={20} />
            </button>
            <button
              onClick={() => scrollTo('produtos')}
              className="bg-white text-gray-900 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-all shadow-xl transform hover:-translate-y-1"
            >
              Ver Produtos
            </button>
          </div>
          <div
            className="grid grid-cols-1 sm:grid-cols-3 gap-6 animate-slideUp"
            style={{ animationDelay: '0.3s' }}
          >
            <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
              <div className="bg-[rgb(237,23,21)] p-3 rounded-lg">
                <Shield className="lucide lucide-shield text-white" width={24} height={24} />
              </div>
              <div>
                <div className="text-white font-bold text-lg">34 Anos</div>
                <div className="text-gray-300 text-sm">de Tradição</div>
              </div>
            </div>
            <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
              <div className="bg-[rgb(237,23,21)] p-3 rounded-lg">
                <Clock className="lucide lucide-clock text-white" width={24} height={24} />
              </div>
              <div>
                <div className="text-white font-bold text-lg">Entrega Rápida</div>
                <div className="text-gray-300 text-sm">em Medianeira</div>
              </div>
            </div>
            <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
              <div className="bg-[rgb(237,23,21)] p-3 rounded-lg">
                <Truck className="lucide lucide-truck text-white" width={24} height={24} />
              </div>
              <div>
                <div className="text-white font-bold text-lg">Todas Marcas</div>
                <div className="text-gray-300 text-sm">Estoque Completo</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

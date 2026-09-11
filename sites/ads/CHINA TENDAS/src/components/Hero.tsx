import { scrollToSection } from '../lib/scroll';

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center pt-20 bg-gradient-to-br from-white via-gray-50 to-gray-100"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-5xl lg:text-6xl font-bold leading-tight text-black">China Tendas</h1>
            <div className="w-20 h-1.5 bg-[rgb(211,14,9)]"></div>
            <p className="text-2xl lg:text-3xl font-semibold text-gray-800">
              Referência em Tendas e Toldos
            </p>
            <p className="text-lg text-gray-600 leading-relaxed max-w-lg">
              Venda, locação e reforma com produtos de pronta entrega para todo o Brasil
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button
                onClick={() => scrollToSection('contato')}
                className="bg-[rgb(211,14,9)] text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-[rgb(180,12,7)] transition-all transform hover:scale-105 shadow-lg"
              >
                SOLICITAR ORÇAMENTO
              </button>
              <button
                onClick={() => scrollToSection('produtos')}
                className="bg-white border-2 border-[rgb(211,14,9)] text-[rgb(211,14,9)] px-8 py-4 rounded-lg font-bold text-lg hover:bg-[rgb(211,14,9)] hover:text-white transition-all transform hover:scale-105"
              >
                VER PRODUTOS
              </button>
            </div>
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-[rgb(211,14,9)] to-red-600 rounded-3xl transform rotate-6 opacity-10"></div>
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="https://storage.lucasmendes.dev/site-sp/chinatendas%2FMODELOS%20DE%20TENDAS%2FTENDAS%20PIRAMIDAES%20SOBRE%20MEDIDA%2FWhatsApp%20Image%202025-11-06%20at%2011.02.34%20%281%29.jpeg"
                alt="Tendas China Tendas"
                className="w-full h-[450px] lg:h-[550px] object-cover"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-gray-50 to-transparent"></div>
    </section>
  );
}

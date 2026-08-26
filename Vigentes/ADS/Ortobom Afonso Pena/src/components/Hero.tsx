import { Award, ShieldCheck, Truck } from 'lucide-react';

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-[600px] md:min-h-[700px] flex items-center"
    >
      <div className="absolute inset-0 z-0">
        <img
          src="https://storage.lucasmendes.dev/site-sp/imperatriz%20colchoes%2Fimg%2Fhero-frente-fachada-loja-azul.webp"
          alt="Loja Colchões Ortobom Afonso Pena"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/80 to-black/20"></div>
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 py-16 md:py-24">
        <div className="max-w-2xl">
          <div className="inline-block bg-[rgb(0,0,160)] text-white px-4 py-2 rounded-full text-sm font-semibold mb-6 animate-pulse">
            ✨ Ortobom - 55 Anos de Qualidade e Conforto
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            O Melhor Sono da Sua Vida Começa Aqui
          </h1>
          <p className="text-xl md:text-2xl text-gray-100 mb-8 leading-relaxed">
            Colchões, camas box, baús e travesseiros das melhores marcas.
            Entrega rápida em Uberlândia e região.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <a
              href="https://wa.me/553492322203?text=Olá!%20Gostaria%20de%20conhecer%20os%20colchões%20Ortobom."
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-lg font-bold text-lg transition-all transform hover:scale-105 shadow-xl text-center"
            >
              💬 Fale no WhatsApp
            </a>
            <a
              href="#produtos"
              className="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white border-2 border-white px-8 py-4 rounded-lg font-bold text-lg transition-all text-center"
            >
              Ver Produtos
            </a>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-lg px-4 py-3">
              <Award className="w-8 h-8 text-yellow-400 flex-shrink-0" />
              <div>
                <p className="text-white font-semibold">55 Anos</p>
                <p className="text-gray-300 text-sm">de Tradição</p>
              </div>
            </div>
            <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-lg px-4 py-3">
              <ShieldCheck className="w-8 h-8 text-green-400 flex-shrink-0" />
              <div>
                <p className="text-white font-semibold">Garantia</p>
                <p className="text-gray-300 text-sm">e Qualidade</p>
              </div>
            </div>
            <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-lg px-4 py-3">
              <Truck className="w-8 h-8 text-blue-400 flex-shrink-0" />
              <div>
                <p className="text-white font-semibold">Entrega</p>
                <p className="text-gray-300 text-sm">Rápida</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import { Phone } from 'lucide-react';

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 bg-white"
    >
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-96 h-96 bg-[rgb(253,118,22)]/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-[rgb(6,168,232)]/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[rgb(255,232,4)]/5 rounded-full blur-3xl"></div>
        <div className="absolute top-20 left-10 text-6xl opacity-20 animate-float">🐾</div>
        <div className="absolute top-40 right-20 text-6xl opacity-20 animate-float-delayed">🐾</div>
        <div className="absolute bottom-40 left-1/4 text-6xl opacity-20 animate-float">🐾</div>
        <div className="absolute bottom-20 right-1/3 text-6xl opacity-20 animate-float-delayed">🐾</div>
        <div className="absolute top-1/3 right-10 text-5xl opacity-15 animate-float">🐾</div>
        <div className="absolute bottom-1/3 left-10 text-5xl opacity-15 animate-float-delayed">🐾</div>
      </div>
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-5 animate-fade-in">
          Tudo que seu pet precisa!
          <span className="inline-block animate-bounce ml-2">🐶</span>
        </h1>
        <div className="space-y-3 mb-6 animate-fade-in-delayed">
          <p className="text-xl md:text-2xl text-gray-800 font-semibold">
            🐶 Consultas | Vacinas | Medicamentos
          </p>
          <p className="text-xl md:text-2xl text-gray-800 font-semibold">
            🐱 Rações e Acessórios
          </p>
        </div>
        <div className="inline-block bg-white/80 backdrop-blur-sm border-2 border-[rgb(6,168,232)] rounded-2xl px-6 py-3 mb-2 animate-fade-in-delayed-2 shadow-xl">
          <p className="text-base md:text-lg text-gray-800 font-semibold">
            🕦 Seg à Sáb 08h-20h | Dom e Fer 08h-12h
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-delayed-2">
          <a
            href="https://wa.me/5591985220505"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-[rgb(253,118,22)] text-white px-8 py-4 rounded-full text-lg font-bold hover:bg-[rgb(253,118,22)]/90 hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-[rgb(253,118,22)]/50"
          >
            <Phone size={22} />
            Agende sua Consulta
          </a>
          <a
            href="#servicos"
            className="inline-flex items-center gap-2 bg-white border-2 border-[rgb(6,168,232)] text-[rgb(6,168,232)] px-7 py-4 rounded-full text-base font-bold hover:bg-[rgb(6,168,232)] hover:text-white transition-all duration-300 shadow-lg"
          >
            Conheça nossos serviços
          </a>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-12 animate-fade-in-delayed-2">
          <div className="bg-white/90 backdrop-blur-sm rounded-xl p-5 shadow-lg border-l-4 border-[rgb(253,118,22)] hover:scale-105 transition-transform">
            <div className="text-3xl mb-2">🏆</div>
            <h3 className="font-bold text-gray-900 text-base mb-1">Pioneiros</h3>
            <p className="text-gray-600 text-sm">Produtos premium em Castanhal</p>
          </div>
          <div className="bg-white/90 backdrop-blur-sm rounded-xl p-5 shadow-lg border-l-4 border-[rgb(6,168,232)] hover:scale-105 transition-transform">
            <div className="text-3xl mb-2">❤️</div>
            <h3 className="font-bold text-gray-900 text-base mb-1">Atendimento</h3>
            <p className="text-gray-600 text-sm">Humanizado e personalizado</p>
          </div>
          <div className="bg-white/90 backdrop-blur-sm rounded-xl p-5 shadow-lg border-l-4 border-[rgb(255,232,4)] hover:scale-105 transition-transform">
            <div className="text-3xl mb-2">✅</div>
            <h3 className="font-bold text-gray-900 text-base mb-1">Infraestrutura</h3>
            <p className="text-gray-600 text-sm">De ponta e acolhedora</p>
          </div>
        </div>
        <h2 className="text-3xl md:text-4xl font-extrabold text-[rgb(6,168,232)] mt-16 mb-8 border-b-4 border-[rgb(253,118,22)] pb-2 mx-auto inline-block">
          PET RAPOSO - Nosso Amor é o Bicho!
        </h2>
      </div>
    </section>
  );
}

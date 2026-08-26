import { Phone } from 'lucide-react';

export default function FinalCTA() {
  return (
    <section className="py-20 bg-white relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-96 h-96 bg-[rgb(253,118,22)]/15 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-[rgb(6,168,232)]/15 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[rgb(255,232,4)]/10 rounded-full blur-3xl"></div>
        <div className="absolute top-10 left-20 text-7xl opacity-10 animate-float">🐾</div>
        <div className="absolute top-20 right-40 text-6xl opacity-10 animate-float-delayed">🐾</div>
        <div className="absolute bottom-20 left-1/3 text-6xl opacity-10 animate-float">🐾</div>
        <div className="absolute bottom-10 right-20 text-7xl opacity-10 animate-float-delayed">🐾</div>
        <div className="absolute top-1/2 left-1/4 text-5xl opacity-8 animate-float">🐾</div>
        <div className="absolute top-1/3 right-1/4 text-5xl opacity-8 animate-float-delayed">🐾</div>
      </div>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-10 md:p-12 shadow-2xl border-t-4 border-[rgb(253,118,22)]">
          <div className="mb-6">
            <div className="inline-block bg-[rgb(253,118,22)]/10 rounded-full p-4 mb-4">
              <span className="text-5xl">🐾</span>
            </div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Agende a consulta do seu pet hoje!
          </h2>
          <p className="text-lg md:text-xl text-gray-700 mb-8">
            Nossa equipe está pronta para cuidar do seu melhor amigo
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="https://wa.me/5591985220505"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-[rgb(253,118,22)] text-white px-10 py-5 rounded-full text-xl font-bold hover:bg-[rgb(253,118,22)]/90 hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl"
            >
              <Phone size={26} />
              Fale pelo WhatsApp
            </a>
            <a
              href="tel:+5591985220505"
              className="inline-flex items-center gap-3 bg-white border-2 border-[rgb(6,168,232)] text-[rgb(6,168,232)] px-10 py-5 rounded-full text-xl font-bold hover:bg-[rgb(6,168,232)] hover:text-white transition-all duration-300 shadow-lg"
            >
              <Phone size={26} />
              (91) 98522-0505
            </a>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-10 pt-10 border-t border-gray-200">
            <div className="text-center">
              <div className="text-3xl mb-2">⚡</div>
              <p className="text-sm font-semibold text-gray-700">
                Atendimento Rápido
              </p>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-2">🩺</div>
              <p className="text-sm font-semibold text-gray-700">
                Equipe Especializada
              </p>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-2">❤️</div>
              <p className="text-sm font-semibold text-gray-700">
                Cuidado com Amor
              </p>
            </div>
          </div>
          <h3 className="text-xl md:text-2xl font-bold text-[rgb(253,118,22)] mt-8 pt-4 border-t border-dashed border-gray-300">
            PET RAPOSO - Nosso Amor é o Bicho!
          </h3>
        </div>
      </div>
    </section>
  );
}

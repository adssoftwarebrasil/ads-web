import { ArrowRight } from 'lucide-react';

const badges = [
  'Tradição desde 1996',
  'Rodízio Variado',
  'Ambiente Aconchegante',
];

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            'url("https://storage.lucasmendes.dev/site-sp/CHURRASCARIA%20E%20PIZZARIA%20BEZERRO%20DE%20OURO%2Fimg%2Fhero.jpg")',
        }}
      >
        <div className="absolute inset-0 bg-black opacity-60"></div>
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fadeIn">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-6 leading-tight">
            Churrascaria Bezerro de Ouro
            <br />
            em Campo Grande
          </h1>
          <p className="text-xl sm:text-2xl lg:text-3xl text-white mb-8 font-light">
            O Melhor Rodízio de Churrasco
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {badges.map((badge) => (
              <div
                key={badge}
                className="bg-[rgb(180,137,27)] text-white px-6 py-3 rounded-full text-sm sm:text-base font-medium"
              >
                {badge}
              </div>
            ))}
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="https://wa.me/556733265463"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-[rgb(180,137,27)] text-white px-8 py-4 rounded-lg text-lg font-semibold hover:scale-105 transition-all duration-300 shadow-lg flex items-center space-x-2 w-full sm:w-auto justify-center"
            >
              <span>Reserve Sua Mesa</span>
              <ArrowRight
                width={20}
                height={20}
                className="lucide lucide-arrow-right group-hover:translate-x-1 transition-transform duration-300"
              />
            </a>
            <a
              href="#servicos"
              className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-[rgb(31,29,30)] transition-all duration-300 w-full sm:w-auto text-center"
            >
              Conheça Nosso Menu
            </a>
          </div>
        </div>
      </div>
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-white rounded-full"></div>
        </div>
      </div>
    </section>
  );
}

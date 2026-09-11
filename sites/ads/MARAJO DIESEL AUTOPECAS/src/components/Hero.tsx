import { scrollToSection } from '../lib/scroll';

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
            'url("https://storage.lucasmendes.dev/site-sp/marajodi%2Fhero.jpeg")',
          backgroundAttachment: 'fixed',
        }}
      ></div>
      <div className="absolute inset-0 bg-black/60"></div>
      <div className="relative z-10 text-center px-6 md:px-[10%] max-w-7xl mx-auto animate-fade-in">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight animate-slide-up">
          Peças para Caminhões e Ônibus
        </h1>
        <p className="text-xl md:text-3xl font-medium text-white/90 mb-4 animate-slide-up animation-delay-200">
          Qualidade e Confiança em Autopeças
        </p>
        <p className="text-base md:text-lg text-white/80 mb-8 max-w-3xl mx-auto leading-relaxed animate-slide-up animation-delay-400">
          Com mais de uma década de experiência, a Marajó Diesel é referência em
          autopeças para veículos pesados em Palmas-TO. Oferecemos as melhores
          soluções com qualidade garantida e atendimento especializado.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-slide-up animation-delay-600">
          <button
            onClick={() => scrollToSection('contato')}
            className="bg-[rgb(255,116,16)] text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-[rgb(230,100,10)] transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl w-full sm:w-auto"
          >
            Solicite seu Orçamento
          </button>
          <button
            onClick={() => scrollToSection('servicos')}
            className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-[rgb(1,51,153)] transform hover:scale-105 transition-all duration-300 w-full sm:w-auto"
          >
            Conheça nossos Produtos
          </button>
        </div>
      </div>
    </section>
  );
}

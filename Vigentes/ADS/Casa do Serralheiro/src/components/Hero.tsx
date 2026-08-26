import { WHATSAPP_URL, scrollToSection } from '../constants';

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage:
          'url("https://storage.lucasmendes.dev/site-sp/casadoserralheirolavras%2Fcasadoserralheirolavras%2Fhero.jpeg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
        backgroundAttachment: 'fixed',
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/40"></div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
        <div
          className="animate-fade-in"
          style={{ animationDelay: '0.2s', opacity: 0, animationFillMode: 'forwards' }}
        ></div>
        <h1
          className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight animate-fade-in"
          style={{ animationDelay: '0.4s', opacity: 0, animationFillMode: 'forwards' }}
        >
          Casa do Serralheiro de Lavras
        </h1>
        <p
          className="text-xl sm:text-2xl text-white/90 mb-4 animate-fade-in"
          style={{ animationDelay: '0.6s', opacity: 0, animationFillMode: 'forwards' }}
        >
          Tradição, Qualidade e Confiança desde 1979
        </p>
        <p
          className="text-base sm:text-lg text-white/100 mb-12 max-w-3xl mx-auto leading-relaxed animate-fade-in"
          style={{ animationDelay: '0.8s', opacity: 0, animationFillMode: 'forwards' }}
        >
          Há mais de quatro décadas oferecendo soluções completas em serralheria para toda a região.
          <br />
          Somos especialistas em telhas Galvalume, Estruturas Metálicas, Metalon, Tela de Alambrado e
          tudo que precisa para a sua obra. Aqui você encontra experiência, tecnologia e compromisso
          com o que realmente importa: qualidade que dura.
        </p>
        <div
          className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in"
          style={{ animationDelay: '1s', opacity: 0, animationFillMode: 'forwards' }}
        >
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto bg-[rgb(122,21,25)] text-white px-8 py-4 rounded-lg hover:bg-[rgb(90,15,18)] transition-all duration-300 font-bold text-lg shadow-2xl"
          >
            Solicitar Orçamento
          </a>
          <button
            onClick={() => scrollToSection('servicos')}
            className="w-full sm:w-auto border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-gray-900 transition-all duration-300 font-bold text-lg"
          >
            Nossos Serviços
          </button>
        </div>
      </div>
    </section>
  );
}

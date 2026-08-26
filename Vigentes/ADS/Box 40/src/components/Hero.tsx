export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center"
      style={{
        backgroundImage:
          'url("https://storage.lucasmendes.dev/site-sp/box40%2Fimg%2Fhero.webp")',
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
      }}
    >
      <div className="absolute inset-0 bg-black/60"></div>
      <div className="relative z-10 container mx-auto px-4 text-center">
        <h1
          className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 transition-all duration-800 opacity-100 translate-y-0"
          style={{ transitionDelay: '0.2s' }}
        >
          Lavagem Automotiva e Troca de Óleo com Qualidade
        </h1>
        <h2
          className="text-lg md:text-xl lg:text-2xl text-gold-light mb-8 transition-all duration-800 opacity-100 translate-y-0"
          style={{ transitionDelay: '0.4s' }}
        >
          Serviço rápido e eficiente para seu carro
        </h2>
        <a
          href="https://wa.me/556198423838"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block gold-gradient text-black font-semibold text-lg px-12 py-4 rounded-lg hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-2xl opacity-100 translate-y-0"
          style={{ transitionDelay: '0.6s' }}
        >
          Enviar WhatsApp
        </a>
      </div>
    </section>
  );
}

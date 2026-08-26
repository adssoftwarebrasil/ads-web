export default function CTA() {
  return (
    <section className="bg-gradient-to-br from-[rgb(0,148,216)] via-[rgb(18,70,156)] to-[rgb(45,52,142)] py-20 md:py-28 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-64 h-64 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-white rounded-full blur-3xl"></div>
      </div>
      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="inline-block bg-white/20 backdrop-blur-sm px-5 py-2 rounded-full mb-8 border border-white/30">
          <p className="text-white font-semibold text-sm tracking-wide">ENTRE EM CONTATO</p>
        </div>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-8 leading-tight">
          Pronto Para Conhecer Nossa Loja?
        </h2>
        <p className="text-xl md:text-2xl text-white/95 mb-12 max-w-3xl mx-auto leading-relaxed">
          Entre em contato agora e descubra como podemos ajudar você!
        </p>
        <div className="flex flex-col sm:flex-row gap-5 md:gap-6 justify-center items-center">
          <a
            href="https://wa.me/5581995483408"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto bg-white text-[rgb(45,52,142)] px-10 md:px-12 py-5 md:py-6 rounded-full text-lg md:text-xl font-bold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-3xl"
          >
            Falar no WhatsApp
          </a>
          <a
            href="#contato"
            className="w-full sm:w-auto border-3 border-white bg-white/10 backdrop-blur-sm text-white px-10 md:px-12 py-5 md:py-6 rounded-full text-lg md:text-xl font-bold hover:bg-white hover:text-[rgb(45,52,142)] transition-all duration-300 transform hover:scale-105 shadow-xl"
          >
            Ver Localização
          </a>
        </div>
      </div>
    </section>
  );
}

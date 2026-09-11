const WHATSAPP_VISITA =
  'https://api.whatsapp.com/send?phone=551636203244&text=Olá! Gostaria de agendar uma visita à escola.';

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
            'url("https://storage.lucasmendes.dev/site-sp/raiodesolencantado%2Fimg%2Fhero.webp")',
        }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
      </div>
      <div className="relative z-10 container mx-auto px-4 py-20 lg:py-0">
        <div className="max-w-4xl mx-auto text-center space-y-6 lg:space-y-8">
          <h1 className="text-white text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight opacity-0 animate-[fadeInUp_0.8s_ease-out_0.2s_forwards]">
            Educação Infantil de 0 a 6 anos com Amor e Dedicação
          </h1>
          <p className="text-white text-base sm:text-lg lg:text-xl leading-relaxed max-w-3xl mx-auto opacity-0 animate-[fadeInUp_0.8s_ease-out_0.5s_forwards]">
            Desde 1997 construindo um mundo melhor através da educação. Berçário e Educação Infantil em Ribeirão Preto - SP.
          </p>
          <div className="pt-4 opacity-0 animate-[fadeInUp_0.8s_ease-out_0.8s_forwards]">
            <a
              href={WHATSAPP_VISITA}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-[rgb(224,68,72)] text-white px-8 sm:px-10 lg:px-12 py-3.5 sm:py-4 lg:py-4 rounded-full text-base lg:text-lg font-semibold hover:bg-[rgb(204,48,52)] transition-all duration-300 transform hover:scale-105 hover:shadow-2xl shadow-lg active:scale-95"
            >
              Agende uma Visita
            </a>
          </div>
          <div className="pt-12 lg:pt-16 opacity-0 animate-[fadeIn_0.8s_ease-out_1.5s_forwards]">
            <div className="flex flex-col items-center space-y-2">
              <span className="text-white/80 text-sm font-medium">Role para explorar</span>
              <div className="w-6 h-10 border-2 border-white/70 rounded-full flex items-start justify-center p-2 animate-bounce">
                <div className="w-1.5 h-2 bg-white/70 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  );
}

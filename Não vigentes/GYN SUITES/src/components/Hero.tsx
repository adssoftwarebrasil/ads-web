import { WHATSAPP_URL } from '../constants';

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative w-full h-[100dvh] min-h-screen flex items-center justify-center overflow-hidden"
    >
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            'url("https://storage.lucasmendes.dev/site-sp/gynsuite%2Fhero.jpg")',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-[rgb(51,58,114)]/90 via-[rgb(51,58,114)]/70 to-[rgb(51,58,114)]/90"></div>
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
          GYN SUITES
        </h1>
        <p className="text-xl md:text-2xl lg:text-3xl text-[rgb(251,246,199)] mb-4 font-light">
          Estadia Confortável em Goiânia
        </p>
        <p className="text-lg md:text-xl text-white/90 mb-12 max-w-3xl mx-auto leading-relaxed">
          Seu Hotel Ideal em Goiânia
        </p>
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-[rgb(251,246,199)] text-[rgb(51,58,114)] px-12 py-4 rounded-full text-lg font-bold hover:bg-white transition-all duration-300 hover:scale-105 shadow-2xl"
        >
          Enviar WhatsApp
        </a>
      </div>
    </section>
  );
}

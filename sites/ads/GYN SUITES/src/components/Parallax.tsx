import { WHATSAPP_URL } from '../constants';

export default function Parallax() {
  return (
    <section className="relative h-[60vh] overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{
          backgroundImage:
            'url("https://storage.lucasmendes.dev/site-sp/gynsuite%2Ffale%20conosco%20-%20paralax%20efeito.jpg")',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-[rgb(51,58,114)]/70 to-[rgb(51,58,114)]/70"></div>
      </div>
      <div className="relative z-10 h-full flex items-center justify-center">
        <div className="text-center px-4">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Fale Conosco
          </h2>
          <p className="text-xl md:text-2xl text-[rgb(251,246,199)] mb-8">
            Experimente o conforto de nossas suítes.
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
      </div>
    </section>
  );
}

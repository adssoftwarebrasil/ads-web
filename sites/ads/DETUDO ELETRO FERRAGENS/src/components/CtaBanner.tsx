import { WHATSAPP_DEFAULT } from '../constants';

export default function CtaBanner() {
  return (
    <section className="py-12 md:py-20 bg-[rgb(246,239,3)]">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[rgb(34,34,34)] mb-4 transition-all duration-1000 opacity-100 scale-100">
          Fale Conosco
        </h2>
        <p
          className="text-base sm:text-lg md:text-xl text-[rgb(34,34,34)] mb-6 md:mb-8 transition-all duration-1000 opacity-100 scale-100"
          style={{ transitionDelay: '200ms' }}
        >
          Conheça nosso espaço e confira nossas ofertas.
        </p>
        <a
          href={WHATSAPP_DEFAULT}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-[rgb(34,34,34)] text-[rgb(246,239,3)] px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-bold text-base sm:text-lg hover:scale-110 hover:shadow-2xl transition-all duration-300 opacity-100"
          style={{ transitionDelay: '400ms' }}
        >
          Enviar WhatsApp
        </a>
      </div>
    </section>
  );
}

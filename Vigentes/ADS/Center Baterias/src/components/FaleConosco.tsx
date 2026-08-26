import { MessageCircle } from 'lucide-react';
import { openWhatsApp } from '../lib/whatsapp';

export default function FaleConosco() {
  return (
    <section
      className="parallax relative py-20 md:py-24 bg-cover bg-center"
      style={{
        backgroundImage:
          'url("https://storage.lucasmendes.dev/site-sp/Center%20Baterias%2Fimg%2FFale%20Conosco-paralax.webp")',
      }}
    >
      <div className="absolute inset-0 bg-secondary opacity-85"></div>
      <div className="container-custom relative z-10 text-center text-white px-4">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-5 fade-in">
          Fale Conosco
        </h2>
        <p className="text-lg md:text-xl mb-10 opacity-90 max-w-2xl mx-auto fade-in">
          Entre em contato conosco e saiba mais sobre nossos preços.
        </p>
        <button
          onClick={() => openWhatsApp()}
          className="fade-in inline-flex items-center gap-3 bg-[rgb(250,204,21)] text-black px-12 py-5 rounded-full text-lg font-semibold hover:brightness-110 transition-all duration-300 shadow-2xl"
        >
          <MessageCircle className="lucide lucide-message-circle w-6 h-6" />
          Enviar WhatsApp
        </button>
      </div>
    </section>
  );
}

import { WHATSAPP_URL } from '../constants';

export default function QuoteCTA() {
  return (
    <section
      className="relative py-32 bg-cover bg-center bg-fixed"
      style={{
        backgroundImage:
          'url("https://storage.lucasmendes.dev/site-sp/redeconstrucertocamari%2FEntre%20em%20contato%20e%20descubra%20nossas%20ofertas-paralax.jpg")',
      }}
    >
      <div className="absolute inset-0 bg-black/60"></div>
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
          Solicite um Orçamento
        </h2>
        <p className="text-2xl text-gray-100 mb-12">
          Entre em contato e descubra nossas ofertas!
        </p>
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center bg-[#e8221a] text-white px-12 py-5 rounded-full text-xl font-semibold hover:bg-[#c91d16] transition-all duration-300 hover:scale-105 shadow-2xl"
        >
          Enviar WhatsApp
        </a>
      </div>
    </section>
  );
}

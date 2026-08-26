import { WHATSAPP_DEFAULT } from '../constants';

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-28"
      style={{
        backgroundImage:
          'url("https://storage.lucasmendes.dev/site-sp/detudo%2Fhero.webp")',
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
      }}
    >
      <div className="absolute inset-0 bg-[rgba(34,34,34,0.7)]"></div>
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        <h1
          className="text-4xl md:text-6xl font-bold mb-6 transition-all duration-1000 opacity-100 translate-y-0"
          style={{ transitionDelay: '200ms' }}
        >
          Detudo Eletro Ferragens em Cuiabá
        </h1>
        <p
          className="text-xl md:text-2xl mb-8 transition-all duration-1000 opacity-100 translate-y-0"
          style={{ transitionDelay: '400ms' }}
        >
          Comércio Varejista de Ferragens
        </p>
        <a
          href={WHATSAPP_DEFAULT}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-[rgb(246,239,3)] text-[rgb(34,34,34)] px-8 py-4 rounded-lg font-bold text-lg hover:scale-105 hover:shadow-2xl transition-all duration-300 opacity-100 scale-100"
          style={{ transitionDelay: '600ms' }}
        >
          Enviar WhatsApp
        </a>
      </div>
    </section>
  );
}

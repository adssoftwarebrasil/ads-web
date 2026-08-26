import { openWhatsApp } from '../lib/site';

export default function CTA() {
  return (
    <section className="relative py-20 md:py-28 overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            'url("https://storage.lucasmendes.dev/site-sp/CHOPP%20NATTOS%20BRASIL/img/copo-chopp-tatuagem.webp")',
          opacity: 0.15,
        }}
      ></div>
      <div className="absolute inset-0 bg-[rgb(40,44,115)]"></div>
      <div className="relative z-10 container mx-auto max-w-4xl text-center px-6">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
          Pronto Para Transformar Seu Evento?
        </h2>
        <p className="text-xl md:text-2xl text-white/90 mb-12 max-w-2xl mx-auto">
          Entre em contato agora e receba um atendimento personalizado
        </p>
        <button
          onClick={() => openWhatsApp('Olá! Gostaria de falar com um especialista da Chopp Nattos Brasil.')}
          className="h-16 md:h-[65px] px-10 md:px-14 bg-[rgb(176,146,71)] text-white text-lg md:text-xl font-semibold rounded-lg hover:bg-[rgb(156,126,51)] transition-all duration-300 hover:scale-105 shadow-2xl"
        >
          Falar com Especialista
        </button>
      </div>
    </section>
  );
}

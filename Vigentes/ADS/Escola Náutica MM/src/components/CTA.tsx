import { ArrowRight } from 'lucide-react';

export default function CTA() {
  return (
    <section id="contato" className="relative py-24 overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://storage.lucasmendes.dev/site-sp/escola%20nautica%2Fbarco-vermelho-estacionamento.webp')",
          backgroundAttachment: 'fixed',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-[#26367e] via-[#7a3c30] to-[#26367e] opacity-90"></div>
      </div>

      <div className="absolute top-0 left-0 right-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-16">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" fill="#ffffff"></path>
        </svg>
      </div>

      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto space-y-8">
          <h2 className="text-4xl md:text-5xl font-bold text-white text-shadow">
            Pronto para Navegar?
          </h2>
          <p className="text-xl md:text-2xl text-white text-shadow">
            Entre em contato agora e dê o primeiro passo para sua liberdade nas águas!
          </p>
          <button
            onClick={() => window.open('https://wa.me/5545999207671', '_blank')}
            className="inline-flex items-center space-x-3 bg-[#25d366] hover:bg-[#0caff0] text-white px-10 py-5 rounded-full font-bold text-xl transition-all duration-300 transform hover:scale-105 animate-pulse-slow shadow-2xl"
          >
            <span>Falar no WhatsApp</span>
            <ArrowRight className="w-6 h-6" />
          </button>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 rotate-180">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-16">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" fill="#34393a"></path>
        </svg>
      </div>
    </section>
  );
}

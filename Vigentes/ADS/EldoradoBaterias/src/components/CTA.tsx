import { Phone, Zap } from 'lucide-react';

const WA_URL =
  'https://api.whatsapp.com/send?phone=5531999364049&text=Ol%C3%A1%20vim%20pelo%20Google!';

export default function CTA() {
  return (
    <section className="py-20 md:py-24 bg-brand-yellow overflow-hidden relative">
      <div
        className="absolute inset-0 opacity-10 bg-cover bg-center"
        style={{
          backgroundImage:
            'url(https://storage.lucasmendes.dev/site-sp/Eldorado%20Baterias/fachada-eldorado-baterias-carro-prata-poste-fios_1204x1600.webp)',
        }}
      />
      <div className="relative z-10 max-w-4xl mx-auto px-4 md:px-6 text-center">
        <div className="inline-flex items-center gap-2 bg-brand-blue/15 border border-brand-blue/20 text-brand-blue px-4 py-2 rounded-full text-sm font-barlow font-700 uppercase tracking-widest mb-6">
          <Zap size={14} />
          Atendimento Imediato
        </div>
        <h2 className="font-condensed font-900 uppercase text-4xl md:text-5xl lg:text-6xl text-brand-blue leading-none mb-6">
          Bateria Descarregada?
          <span className="block text-brand-blue-dark">A Gente Resolve!</span>
        </h2>
        <p className="text-brand-blue/70 font-barlow text-lg md:text-xl leading-relaxed mb-10 max-w-2xl mx-auto">
          Mande uma mensagem no WhatsApp agora mesmo e receba atendimento rápido e personalizado.
          Quase 27 anos de experiência a seu serviço em Contagem – MG.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={WA_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-brand-blue text-white font-barlow font-800 uppercase tracking-wider px-10 py-5 rounded-full transition-all duration-300 hover:bg-brand-blue-dark hover:scale-105 shadow-xl shadow-brand-blue/30 inline-flex items-center gap-3 text-base"
          >
            <Phone size={22} />
            Falar no WhatsApp Agora
          </a>
          <a
            href="tel:+5531999364049"
            className="border-2 border-brand-blue/30 text-brand-blue font-barlow font-700 uppercase tracking-wider px-10 py-5 rounded-full transition-all duration-300 hover:bg-brand-blue hover:text-white hover:border-brand-blue inline-flex items-center gap-3 text-base"
          >
            <Phone size={20} />
            (31) 99936-4049
          </a>
        </div>
      </div>
    </section>
  );
}

import { Phone } from 'lucide-react';
import { WHATSAPP_LINK, WhatsAppIcon } from '../lib/whatsapp';

export default function CtaBanner() {
  return (
    <section className="py-16 md:py-20 bg-brand-red relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: 'radial-gradient(circle, rgba(255, 255, 255, 0.8) 1px, transparent 1px)',
            backgroundSize: '28px 28px',
          }}
        ></div>
      </div>
      <div className="absolute -right-20 -top-20 w-72 h-72 rounded-full bg-white/10"></div>
      <div className="absolute -left-10 -bottom-10 w-48 h-48 rounded-full bg-white/5"></div>
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-4 leading-tight">
          Seu Carro Precisa de Atenção?
        </h2>
        <p className="text-red-100 text-lg md:text-xl mb-8 max-w-2xl mx-auto">
          Entre em contato agora mesmo e receba um orçamento gratuito e sem compromisso. Atendemos Sinop e toda a
          região!
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 bg-white text-brand-red font-bold text-lg px-10 py-4 rounded-xl transition-all duration-300 hover:shadow-2xl hover:scale-105 active:scale-95"
          >
            <WhatsAppIcon size={22} />
            Falar no WhatsApp
          </a>
          <a
            href="tel:+556699163832"
            className="inline-flex items-center justify-center gap-3 border-2 border-white text-white hover:bg-white hover:text-brand-red font-bold text-lg px-10 py-4 rounded-xl transition-all duration-300 hover:scale-105"
          >
            <Phone size={22} />
            (66) 99916-3832
          </a>
        </div>
      </div>
    </section>
  );
}

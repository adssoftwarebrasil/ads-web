import { ArrowRight } from 'lucide-react';
import { PHONE_DISPLAY, PHONE_TEL, WHATSAPP_URL } from '../constants';

export default function CtaBanner() {
  return (
    <section className="relative py-24 overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            'url("https://storage.lucasmendes.dev/site-sp/BTU/tecnico-instalando-ar-condicionado-escada-azul_1599x899.webp")',
        }}
      ></div>
      <div className="absolute inset-0 bg-gradient-to-r from-primary/95 to-primary/80"></div>
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-5xl font-black text-white mb-4 leading-tight">
          Seu ar condicionado com problema?
        </h2>
        <p className="text-white/80 text-base md:text-lg mb-10 max-w-2xl mx-auto">
          Atendemos com agilidade no DF e entorno. Entre em contato agora e receba um orçamento sem
          compromisso.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-white text-primary hover:bg-gray-100 font-bold px-10 py-4 rounded-full text-base transition-all duration-300 hover:shadow-xl hover:scale-105"
          >
            Solicitar Orçamento
            <ArrowRight size={18} />
          </a>
          <a
            href={`tel:${PHONE_TEL}`}
            className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 border border-white/30 text-white font-semibold px-10 py-4 rounded-full text-base backdrop-blur-sm transition-all duration-300"
          >
            Ligar Agora: {PHONE_DISPLAY}
          </a>
        </div>
      </div>
    </section>
  );
}

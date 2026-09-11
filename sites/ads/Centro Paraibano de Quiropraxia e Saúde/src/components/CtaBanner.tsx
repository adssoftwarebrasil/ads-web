import { ArrowRight } from 'lucide-react';
import { WHATSAPP_URL } from '../constants';

export default function CtaBanner() {
  return (
    <section
      className="relative py-16 md:py-20 overflow-hidden"
      style={{
        background:
          'linear-gradient(135deg, rgb(0, 36, 93) 0%, rgb(0, 51, 128) 50%, rgb(2, 183, 217) 100%)',
      }}
    >
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-white rounded-full blur-3xl -translate-y-1/2"></div>
        <div className="absolute top-1/2 right-1/4 w-48 h-48 bg-white rounded-full blur-3xl -translate-y-1/2"></div>
      </div>
      <div className="relative max-w-4xl mx-auto px-4 md:px-6 text-center">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white leading-tight mb-4">
          Pronto para viver sem dor?
        </h2>
        <p className="text-white/80 text-base md:text-lg mb-8 max-w-xl mx-auto">
          Agende sua consulta hoje e descubra o método que já transformou mais de 10 mil vidas na
          Paraíba.
        </p>
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 bg-gold hover:bg-gold-light text-white font-black px-8 md:px-10 py-4 md:py-5 rounded-full transition-all duration-200 hover:scale-105 shadow-2xl text-base md:text-lg"
        >
          Agendar Minha Consulta
          <ArrowRight width={20} height={20} className="lucide lucide-arrow-right " />
        </a>
        <p className="text-white/50 text-sm mt-4">
          Segunda a Sexta: 07h — 19h &nbsp;|&nbsp; Sábado: 08h — 12h
        </p>
      </div>
    </section>
  );
}

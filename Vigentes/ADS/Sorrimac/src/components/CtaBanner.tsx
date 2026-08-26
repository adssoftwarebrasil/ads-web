import { MapPin, ArrowRight } from 'lucide-react';
import { WhatsAppIcon } from './icons';

export default function CtaBanner() {
  return (
    <section className="py-20 bg-brand-orange relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-16 -right-16 w-64 h-64 rounded-full bg-white/10"></div>
        <div className="absolute -bottom-20 -left-10 w-80 h-80 rounded-full bg-white/5"></div>
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full"
          style={{ background: 'radial-gradient(rgba(255, 255, 255, 0.05) 0%, transparent 70%)' }}
        ></div>
      </div>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <div className="flex items-center justify-center gap-2 mb-4">
          <MapPin className="lucide lucide-map-pin text-white/80" width={16} height={16} />
          <span className="text-white/80 text-sm font-medium">Atendemos Sorriso e toda a região do Mato Grosso</span>
        </div>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-4 leading-tight">
          Pronto para Começar<br />seu Projeto?
        </h2>
        <p className="text-white/85 text-lg mb-8 max-w-2xl mx-auto">
          Solicite um orçamento gratuito agora mesmo e receba uma proposta detalhada em até 24 horas. Sem compromisso, sem surpresas.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="https://wa.me/5566992474531?text=Olá!%20Gostaria%20de%20solicitar%20um%20orçamento%20gratuito%20para%20meu%20projeto."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-white text-brand-orange font-bold px-8 py-4 rounded-xl hover:bg-white/90 transition-all duration-300 hover:shadow-xl hover:-translate-y-0.5 text-base"
          >
            <WhatsAppIcon className="w-5 h-5 fill-current" />
            Orçamento pelo WhatsApp
            <ArrowRight className="lucide lucide-arrow-right" width={18} height={18} />
          </a>
          <a
            href="tel:+5566992474531"
            className="inline-flex items-center justify-center gap-2 bg-transparent border-2 border-white text-white font-bold px-8 py-4 rounded-xl hover:bg-white/10 transition-all duration-300 text-base"
          >
            Ligar Agora
          </a>
        </div>
      </div>
    </section>
  );
}

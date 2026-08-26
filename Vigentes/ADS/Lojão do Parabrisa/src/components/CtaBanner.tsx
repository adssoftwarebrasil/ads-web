import { Shield, Star, CheckCircle, Phone } from 'lucide-react';
import { useReveal } from '../lib/useReveal';
import WhatsAppIcon from './WhatsAppIcon';

export default function CtaBanner() {
  const { ref, shown } = useReveal<HTMLDivElement>();

  return (
    <section className="relative py-16 md:py-20 bg-gradient-to-br from-[rgb(1,160,199)] via-[rgb(1,150,189)] to-[rgb(1,140,179)] overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-20 animate-float">
          <Shield width={60} height={60} className="text-white" />
        </div>
        <div className="absolute bottom-20 right-32 animate-float-delayed">
          <Star width={50} height={50} className="text-white" />
        </div>
        <div className="absolute top-32 right-20 animate-float">
          <CheckCircle width={45} height={45} className="text-white" />
        </div>
      </div>
      <div ref={ref} className="relative max-w-5xl mx-auto px-4 md:px-6 lg:px-8 text-center">
        <h2
          className={`text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 transition-all duration-700 ${
            shown ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          Parabrisa Quebrado? Resolva Agora!
        </h2>
        <p
          className={`text-lg md:text-xl text-white/90 mb-10 transition-all duration-700 delay-100 ${
            shown ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          Atendimento de segunda a sexta das 8h às 17h30 e sábado das 8h às 12h. Entre em contato e agende seu serviço hoje mesmo!
        </p>
        <div
          className={`flex flex-col sm:flex-row gap-4 justify-center items-center transition-all duration-700 delay-200 ${
            shown ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
          }`}
        >
          <a
            href="http://wa.me/557188114690?text=Olá! Preciso de um orçamento."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-white text-[rgb(1,160,199)] font-bold text-lg px-8 py-4 rounded-full shadow-2xl hover:shadow-white/30 transition-all duration-300 hover:scale-105"
          >
            <WhatsAppIcon className="w-6 h-6" />
            Fale Conosco no WhatsApp
          </a>
          <a
            href="tel:+557132583386"
            className="inline-flex items-center gap-2 bg-transparent border-2 border-white text-white font-semibold text-lg px-8 py-4 rounded-full hover:bg-white hover:text-[rgb(1,160,199)] transition-all duration-300"
          >
            <Phone width={22} height={22} />
            (71) 3258-3386
          </a>
        </div>
      </div>
    </section>
  );
}

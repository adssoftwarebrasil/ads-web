import { ArrowRight, Truck, CreditCard } from 'lucide-react';
import { WHATSAPP_URL } from './icons';

export default function CtaBanner() {
  return (
    <section className="relative py-16 sm:py-20 lg:py-24 overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="https://storage.lucasmendes.dev/site-sp/giralflex%2Fimg%2Ftres-cadeiras-giratorias.webp"
          alt=""
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-brand-navy/85"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-brand-navy/90 to-brand-blue/60"></div>
      </div>
      <div className="relative container-max section-padding text-center transition-all duration-700 opacity-100 translate-y-0">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight max-w-3xl mx-auto">
          Pronto para Transformar seu <span className="text-brand-yellow">Escritório?</span>
        </h2>
        <p className="mt-4 text-white/60 text-base sm:text-lg max-w-xl mx-auto leading-relaxed">
          Fale com nossa equipe e receba um orçamento personalizado sem compromisso. Entrega grátis na compra de cadeira nova!
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mt-8">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-brand-red hover:bg-brand-red-dark text-white px-8 py-3.5 rounded-xl font-bold transition-all duration-300 hover:shadow-xl hover:shadow-brand-red/30 hover:-translate-y-0.5"
          >
            Quero meu Orçamento
            <ArrowRight width={18} height={18} className="lucide lucide-arrow-right " />
          </a>
          <a
            href="#contato"
            className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 text-white px-8 py-3.5 rounded-xl font-semibold transition-all duration-300"
          >
            Enviar Mensagem
          </a>
        </div>
        <div className="flex items-center justify-center gap-6 sm:gap-10 mt-8 text-white/50 text-sm">
          <span className="flex items-center gap-2">
            <Truck width={18} height={18} className="lucide lucide-truck text-brand-yellow" />
            Entrega Grátis
          </span>
          <span className="flex items-center gap-2">
            <CreditCard width={18} height={18} className="lucide lucide-credit-card text-brand-yellow" />
            6x Sem Juros
          </span>
        </div>
      </div>
    </section>
  );
}

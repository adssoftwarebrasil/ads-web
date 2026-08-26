import { ArrowRight } from 'lucide-react';
import { WhatsAppIcon } from './icons';

export default function CtaBanner() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-brand-yellow relative overflow-hidden">
      <div className="absolute -top-20 -right-20 w-72 h-72 rounded-full bg-white/10 blur-2xl"></div>
      <div className="absolute -bottom-16 -left-16 w-56 h-56 rounded-full bg-black/10 blur-2xl"></div>
      <div className="relative max-w-4xl mx-auto text-center transition-all duration-700 opacity-100 translate-y-0">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-brand-dark mb-4 leading-tight">
          Seu veículo com tudo em dia
          <br />
          começa com uma mensagem
        </h2>
        <p className="text-brand-dark/70 text-lg mb-8 max-w-xl mx-auto">
          Não deixe pendências acumularem. Fale agora com Helena e resolva tudo de forma rápida, segura e sem sair de casa.
        </p>
        <a
          href="http://wa.me/556696535401?text=Olá%20Helena!%20Preciso%20regularizar%20meu%20veículo."
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex items-center gap-3 bg-brand-dark text-white font-bold text-base px-10 py-4 rounded-full hover:bg-brand-dark-card transition-all duration-200 hover:shadow-xl hover:shadow-black/30 hover:-translate-y-0.5"
        >
          <WhatsAppIcon width={20} height={20} />
          Chamar no WhatsApp
          <ArrowRight width={18} height={18} className="lucide lucide-arrow-right group-hover:translate-x-1 transition-transform" />
        </a>
      </div>
    </section>
  );
}

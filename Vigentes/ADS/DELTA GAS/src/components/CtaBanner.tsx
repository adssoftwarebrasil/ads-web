import { Flame, Droplets } from 'lucide-react';
import { WhatsAppIcon } from '../icons';

export default function CtaBanner() {
  return (
    <section className="py-16 md:py-20 bg-gradient-to-br from-brand-secondary to-brand-dark relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-80 h-80 bg-brand-light rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-white rounded-full blur-3xl"></div>
      </div>
      <div className="container mx-auto px-4 max-w-4xl text-center relative z-10 section-observe">
        <div className="flex items-center justify-center gap-3 mb-5">
          <div className="bg-white/15 p-3 rounded-xl">
            <Flame size={22} className="text-brand-light" />
          </div>
          <div className="bg-white/15 p-3 rounded-xl">
            <Droplets size={22} className="text-brand-light" />
          </div>
        </div>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white leading-tight mb-5">
          Gás ou água acabou?
          <br />
          <span className="text-brand-light">A Delta Gás resolve agora!</span>
        </h2>
        <p className="text-white/75 text-lg mb-10 max-w-xl mx-auto">
          Peça agora pelo WhatsApp e receba a entrega o mais rápido possível em qualquer bairro de
          Sinop-MT.
        </p>
        <a
          href="https://wa.me/556699814075?text=Ol%C3%A1%2C%20quero%20fazer%20um%20pedido!"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 bg-white text-brand-dark font-extrabold px-10 py-4 rounded-full hover:bg-brand-light transition-all duration-300 shadow-2xl hover:shadow-white/20 text-base md:text-lg"
        >
          <WhatsAppIcon size={22} />
          Pedir pelo WhatsApp
        </a>
        <p className="text-white/50 text-sm mt-5">
          Atendimento de segunda a domingo, das 7h às 22h
        </p>
      </div>
    </section>
  );
}

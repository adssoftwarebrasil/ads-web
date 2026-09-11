import { ArrowRight, Star } from 'lucide-react';

const WHATSAPP_URL = 'http://wa.me/556692327182?text=Ol%C3%A1!%20Gostaria%20de%20agendar%20um%20servi%C3%A7o.';

export default function CTABanner() {
  return (
    <section className="relative py-16 md:py-20 overflow-hidden bg-brand-yellow">
      <div className="absolute inset-0 opacity-5">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `repeating-linear-gradient(
              45deg,
              #000 0px,
              #000 2px,
              transparent 2px,
              transparent 20px
            )`,
          }}
        />
      </div>

      <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-black/10 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl" />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="flex items-center justify-center gap-2 mb-4">
          {[1, 2, 3, 4, 5].map((s) => (
            <Star key={s} size={18} className="text-brand-dark fill-brand-dark opacity-60" />
          ))}
        </div>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-brand-dark mb-4 leading-tight">
          Seu Carro na Melhor Forma.
          <br />
          <span className="opacity-70">Rápido, Honesto e Sem Enrolação.</span>
        </h2>

        <p className="text-brand-dark/70 text-lg max-w-2xl mx-auto mb-8">
          Atendemos Sinop, Cláudia, Santa Carmem e região.
          Venha nos visitar ou agende pelo WhatsApp — é rápido!
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 bg-brand-dark text-white font-bold text-base px-9 py-4 rounded-full hover:bg-brand-midgray transition-all duration-200 hover:shadow-xl hover:-translate-y-0.5 group"
          >
            Agendar pelo WhatsApp
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href={`tel:+5566992327182`}
            className="inline-flex items-center gap-2 text-brand-dark font-semibold text-base px-6 py-4 rounded-full border-2 border-brand-dark/30 hover:border-brand-dark hover:bg-brand-dark/5 transition-all duration-200"
          >
            (66) 99232-7182
          </a>
        </div>
      </div>
    </section>
  );
}

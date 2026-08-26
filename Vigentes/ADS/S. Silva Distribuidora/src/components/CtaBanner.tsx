import { ArrowRight } from 'lucide-react';

export default function CtaBanner() {
  return (
    <section className="relative py-16 md:py-20 overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="https://storage.lucasmendes.dev/site-sp/s-silva-distribuidora/img/interno-loja-ssilva.webp"
          alt="Interior da loja"
          className="w-full h-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-wine/95 via-brand-red/90 to-brand-red/70"></div>
      </div>
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="reveal font-display text-3xl md:text-5xl font-extrabold text-white leading-[1.05] mb-4">Precisa de uma peça agora?</h2>
        <p className="reveal text-white/90 text-base md:text-lg max-w-2xl mx-auto mb-8">Fale com um consultor no WhatsApp e receba um orçamento em minutos.</p>
        <a
          href="https://wa.me/5575981960232?text=Ol%C3%A1!%20Preciso%20de%20um%20or%C3%A7amento%20r%C3%A1pido."
          target="_blank"
          rel="noopener noreferrer"
          className="reveal inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-white hover:bg-slate-50 text-brand-wine font-bold text-base shadow-2xl shadow-black/20 transition-all hover:-translate-y-0.5"
        >
          Orçamento pelo WhatsApp
          <ArrowRight className="lucide lucide-arrow-right w-5 h-5" />
        </a>
      </div>
    </section>
  );
}

import WhatsAppIcon from './WhatsAppIcon';

export default function CTA() {
  return (
    <section
      className="py-20 relative overflow-hidden"
      style={{ background: 'linear-gradient(135deg, rgb(1, 12, 222) 0%, rgb(0, 85, 204) 50%, rgb(0, 187, 254) 100%)' }}
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute -top-20 -right-20 w-96 h-96 rounded-full opacity-10"
          style={{ background: 'radial-gradient(circle, rgb(255, 255, 255), transparent)' }}
        ></div>
        <div
          className="absolute -bottom-20 -left-20 w-80 h-80 rounded-full opacity-10"
          style={{ background: 'radial-gradient(circle, rgb(255, 255, 255), transparent)' }}
        ></div>
      </div>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="transition-all duration-700 opacity-100 translate-y-0">
          <p className="text-white/70 text-sm font-semibold uppercase tracking-widest mb-3">
            Pronto para transformar sua equipe?
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-6 leading-tight">
            Vista sua empresa com a identidade que ela merece.
          </h2>
          <p className="text-white/80 text-lg mb-10 max-w-2xl mx-auto">
            Entre em contato agora e receba um orçamento personalizado sem compromisso. Atendemos empresas de todos os
            tamanhos em São Luís – MA.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="http://wa.me/559881135450?text=Olá!%20Gostaria%20de%20solicitar%20um%20orçamento%20para%20uniformes."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full text-brand-blue font-bold text-base bg-white hover:bg-gray-50 transition-all duration-300 hover:scale-105 shadow-2xl"
            >
              <WhatsAppIcon className="w-5 h-5 flex-shrink-0" />
              Solicitar Orçamento Agora
            </a>
            <a
              href="tel:+559881135450"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full text-white font-semibold text-base border-2 border-white/40 hover:bg-white/15 transition-all duration-300"
            >
              (98) 9 8113-5450
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

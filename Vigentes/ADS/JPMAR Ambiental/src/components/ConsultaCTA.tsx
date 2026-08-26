export default function ConsultaCTA() {
  return (
    <section className="relative py-20 bg-[#013413] overflow-hidden">
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage:
            'radial-gradient(circle at 20% 50%, rgb(248, 241, 225) 0%, transparent 60%), radial-gradient(circle at 80% 50%, rgb(45, 122, 58) 0%, transparent 60%)',
        }}
      ></div>
      <div className="animate-fade-up in-view relative z-10 max-w-3xl mx-auto px-4 md:px-8 text-center">
        <span className="text-[#f8f1e1]/60 text-xs font-medium uppercase tracking-widest mb-4 block">
          Pronto para começar?
        </span>
        <h2 className="font-display text-3xl md:text-5xl font-semibold text-white mb-4 leading-snug">
          Solicite uma Consultoria
        </h2>
        <p className="text-[#f8f1e1]/75 text-lg mb-10 leading-relaxed">
          Entre em contato e descubra nossas soluções personalizadas para o seu projeto.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="https://wa.me/5579991570550"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3.5 bg-[#f8f1e1] text-[#013413] font-semibold rounded-full text-sm tracking-wide hover:bg-white transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
          >
            Falar pelo WhatsApp
          </a>
          <a
            href="#contato"
            className="px-8 py-3.5 border border-[#f8f1e1]/50 text-[#f8f1e1] font-medium rounded-full text-sm tracking-wide hover:bg-[#f8f1e1]/10 transition-all duration-300 hover:-translate-y-0.5"
          >
            Formulário de Contato
          </a>
        </div>
      </div>
    </section>
  );
}

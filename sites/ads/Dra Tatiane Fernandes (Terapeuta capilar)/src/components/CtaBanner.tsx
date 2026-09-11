export default function CtaBanner() {
  return (
    <section className="relative py-16 lg:py-20 overflow-hidden bg-[#737373]">
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
        }}
      ></div>
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">
        <div className="animate-on-scroll">
          <p className="text-[#F8E5E4] text-sm font-medium tracking-widest uppercase mb-3">
            Não espere mais
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-5 leading-tight">
            A solução para a queda dos seus
            <br className="hidden sm:block" />
            <span className="italic"> cabelos começa aqui</span>
          </h2>
          <p className="text-white/75 text-base max-w-xl mx-auto mb-8 leading-relaxed">
            Cada dia sem tratamento é um dia perdido na recuperação. Agende agora sua avaliação
            gratuita e descubra o protocolo ideal para o seu caso.
          </p>
          <a
            href="http://wa.me/553588973804?text=Olá!%20Gostaria%20de%20agendar%20uma%20avaliação%20gratuita."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#F8E5E4] hover:bg-white text-[#737373] font-bold px-10 py-4 rounded-full transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-0.5 text-sm"
          >
            Quero Agendar Minha Avaliação
          </a>
        </div>
      </div>
    </section>
  );
}

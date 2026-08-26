export default function CtaParallax() {
  return (
    <section className="relative py-32 lg:py-40 overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{
          backgroundImage:
            'url("https://storage.lucasmendes.dev/site-sp/climatec%2Fparalax.jpeg")',
        }}
      ></div>
      <div className="absolute inset-0 bg-primary/85"></div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center scroll-reveal">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
          Precisa de um servico<br />
          <span className="text-secondary">de qualidade?</span>
        </h2>
        <p className="mt-6 text-white/75 text-lg max-w-2xl mx-auto leading-relaxed">
          Entre em contato e solicite seu orcamento sem compromisso. Atendemos residencias e empresas.
        </p>
        <a
          href="#contato"
          className="mt-10 inline-flex items-center justify-center bg-secondary hover:bg-secondary-dark text-white px-10 py-4 rounded-full font-bold text-lg transition-all duration-300 hover:shadow-xl hover:shadow-secondary/25 hover:-translate-y-0.5"
        >
          Solicitar Orcamento
        </a>
      </div>
    </section>
  );
}

export default function CTA() {
  return (
    <section className="relative h-[350px] lg:h-[400px] flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center lg:bg-fixed"
        style={{
          backgroundImage:
            'url("https://storage.lucasmendes.dev/site-sp/vidral%2Fmulhersorrindolimpandovidro.jpg")',
        }}
      ></div>
      <div className="absolute inset-0 bg-[#29456D] opacity-90"></div>
      <div className="relative z-10 max-w-[900px] mx-auto px-5 lg:px-8 text-center">
        <h2 className="text-white text-3xl lg:text-[42px] font-bold mb-5">
          Pronto para Valorizar Seu Patrimônio?
        </h2>
        <p className="text-white opacity-95 text-lg leading-relaxed mb-8">
          Solicite um orçamento personalizado e descubra as melhores soluções para seu projeto
        </p>
        <a
          href="https://wa.me/556596603393?text=Olá! Gostaria de solicitar um orçamento."
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-white text-[#29456D] px-10 py-5 rounded-lg text-lg font-semibold hover:shadow-2xl transition-all hover:scale-105"
        >
          Solicitar Orçamento Agora
        </a>
      </div>
    </section>
  );
}

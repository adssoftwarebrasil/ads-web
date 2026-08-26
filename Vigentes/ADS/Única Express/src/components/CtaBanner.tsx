export default function CtaBanner() {
  return (
    <section className="relative py-20 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src="https://storage.lucasmendes.dev/site-sp/unicaexpressoficial%2Fentregademalotes.webp"
          alt="Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-[rgb(38,129,196)]/90"></div>
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">Conectando Destinos com Eficiência e Confiança</h2>
        <a
          href="https://wa.me/5562998549294"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-[rgb(163,61,55)] text-white px-12 py-4 rounded-lg font-bold text-xl hover:bg-[rgb(143,41,35)] transition-all duration-300 hover:scale-105 shadow-2xl"
        >
          Faça sua cotação!
        </a>
      </div>
    </section>
  );
}

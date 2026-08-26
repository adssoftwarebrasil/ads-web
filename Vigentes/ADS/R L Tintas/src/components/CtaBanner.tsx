export default function CtaBanner() {
  return (
    <section className="bg-gradient-to-r from-red-800 via-red-700 to-red-800 py-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white mb-4 leading-tight">
          Precisa de Tinta Automotiva Personalizada?
        </h2>
        <p className="text-red-100 text-base lg:text-lg mb-8 max-w-2xl mx-auto">
          Nosso técnico em colorimetria reproduz a cor exata do seu veículo. Traga a amostra e saia
          com a cor perfeita. Atendemos Primavera do Leste e região.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="http://wa.me/5566984628134"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-red-700 font-black text-base px-8 py-4 rounded-lg hover:bg-red-50 transition-all duration-200 hover:-translate-y-0.5 shadow-lg"
          >
            Solicitar Orçamento pelo WhatsApp
          </a>
          <a
            href="tel:+5566984628134"
            className="border-2 border-white text-white font-bold text-base px-8 py-4 rounded-lg hover:bg-white/10 transition-all duration-200 hover:-translate-y-0.5"
          >
            Ligar: (66) 98462-8134
          </a>
        </div>
      </div>
    </section>
  );
}

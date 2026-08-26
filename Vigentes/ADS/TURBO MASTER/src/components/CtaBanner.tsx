import WhatsappIcon from './WhatsappIcon';

export default function CtaBanner() {
  return (
    <section className="relative overflow-hidden bg-primary-700 py-16 md:py-20">
      <div
        className="absolute inset-0 opacity-10 bg-cover bg-center"
        style={{
          backgroundImage:
            'url("https://storage.lucasmendes.dev/site-sp/TURBO%20MASTER/oficina-mecanica-caminhoes-carros-em-reparo_1600x1200.webp")',
        }}
      ></div>
      <div className="absolute inset-0 bg-gradient-to-r from-primary-800/80 to-primary-600/60"></div>
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white mb-5 leading-tight">
          Seu veículo precisa de atenção?
        </h2>
        <p className="text-primary-100 text-base md:text-lg mb-8 max-w-xl mx-auto leading-relaxed">
          Entre em contato agora pelo WhatsApp. Nossa equipe está pronta para diagnosticar e resolver
          o problema do sistema de injeção diesel e de turbina com agilidade e precisão.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="https://wa.me/5565992174220"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-white hover:bg-gray-100 text-primary-700 font-black px-8 py-4 rounded-xl transition-all duration-200 hover:shadow-xl text-sm"
          >
            <WhatsappIcon className="w-5 h-5" />
            Solicitar Orçamento Agora
          </a>
          <a
            href="tel:+5565992174220"
            className="inline-flex items-center justify-center gap-2 border-2 border-white/40 hover:border-white text-white font-semibold px-8 py-4 rounded-xl transition-all duration-200 text-sm"
          >
            Ligar: (65) 99217-4220
          </a>
        </div>
      </div>
    </section>
  );
}

import WhatsAppIcon from './WhatsAppIcon';

export default function CTA() {
  return (
    <section className="relative overflow-hidden bg-[#af0201] py-16 sm:py-20">
      <div className="absolute inset-0 bg-gradient-to-r from-[#600202] via-[#af0201] to-[#600202]"></div>
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            'url("https://storage.lucasmendes.dev/site-sp/truck-veiculos%2Fimg%2Fcaminhoes-propaganda-truck-veiculos.webp")',
          backgroundSize: 'cover',
          backgroundPosition: 'center center',
        }}
      ></div>
      <div className="absolute inset-0 bg-[#af0201]/60"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#fefefe] leading-tight mb-4">
          Garanta Seu Caminhão Hoje
        </h2>
        <p className="text-white/80 text-base sm:text-lg mb-8 max-w-2xl mx-auto">
          Estoque limitado e renovado constantemente. Entre em contato agora e garanta a
          melhor condição de negociação em Manaus.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="http://wa.me/559292834895?text=Ol%C3%A1!%20Vim%20pelo%20site%20e%20quero%20garantir%20meu%20ve%C3%ADculo%20hoje!"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 bg-[#fefefe] hover:bg-gray-100 text-[#af0201] font-black text-base sm:text-lg px-8 py-4 rounded-xl transition-all duration-300 hover:shadow-2xl hover:-translate-y-1"
          >
            <WhatsAppIcon className="w-5 h-5 fill-current flex-shrink-0" />
            Falar no WhatsApp Agora
          </a>
          <a
            href="tel:+559292834895"
            className="inline-flex items-center justify-center gap-2 bg-transparent border-2 border-white/40 hover:border-white/80 text-[#fefefe] font-bold text-base sm:text-lg px-8 py-4 rounded-xl transition-all duration-300 hover:-translate-y-1"
          >
            (92) 9 9283-4895
          </a>
        </div>
      </div>
    </section>
  );
}

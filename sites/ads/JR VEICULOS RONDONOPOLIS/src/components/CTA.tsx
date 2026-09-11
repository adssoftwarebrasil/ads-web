export default function CTA() {
  return (
    <section className="py-24 bg-brand-black">
      <div className="max-w-4xl mx-auto px-4 md:px-8">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-brand-red via-brand-red to-brand-red-dark p-10 md:p-16 text-center shadow-2xl shadow-brand-red/20">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white rounded-full blur-[80px]" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-black rounded-full blur-[80px]" />
          </div>

          <div className="relative">
            <h2 className="text-3xl md:text-5xl font-black text-white leading-tight mb-4">
              Pronto para encontrar<br />o veículo dos seus sonhos?
            </h2>
            <p className="text-white/80 text-lg mb-8 max-w-lg mx-auto leading-relaxed">
              Entre em contato agora e descubra as melhores ofertas em seminovos de procedência
              confiável em Rondonópolis.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="https://wa.me/5566999755005?text=Olá! Gostaria de conhecer os veículos disponíveis na JR Veículos."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-10 py-4 bg-white hover:bg-gray-100 text-brand-red font-black text-base rounded-2xl transition-all duration-300 hover:scale-105 shadow-xl"
              >
                Falar no WhatsApp agora
              </a>
              <a
                href="#localizacao"
                className="w-full sm:w-auto px-10 py-4 bg-transparent border-2 border-white/50 hover:border-white text-white font-bold text-base rounded-2xl transition-all duration-300"
              >
                Ver localização
              </a>
            </div>

            <p className="mt-6 text-white/60 text-xs">
              Atendimento: Seg–Sex 07h30–18h00 | Sáb 08h00–12h00
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

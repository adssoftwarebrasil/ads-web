export default function CTABanner() {
  return (
    <section
      className="relative py-20 overflow-hidden"
      style={{ backgroundImage: `url('https://storage.lucasmendes.dev/site-sp/escolinha%20casa%20do%20futebol/img/time-de-futebol-verde-branco-campo-noturno_1440x1080.webp')`, backgroundSize: 'cover', backgroundPosition: 'center' }}
    >
      <div className="absolute inset-0 bg-[#2C4D39]/85" />
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight mb-6">
          Pronto para dar o{' '}
          <span className="text-white">próximo passo</span>?
        </h2>
        <p className="text-white/80 text-lg sm:text-xl mb-8 max-w-2xl mx-auto leading-relaxed">
          Seja para matricular seu filho na Casa do Futebol, agendar uma aula experimental ou conhecer nossa
          metodologia de ensino, nossa equipe está pronta para atender você e esclarecer todas as suas
          dúvidas.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="http://wa.me/556581172880?text=Olá!%20Quero%20falar%20com%20um%20especialista%20da%20Casa%20do%20Futebol."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-white text-[#236E45] hover:bg-[#236E45] hover:text-white font-black px-8 py-4 rounded-full transition-all duration-300 shadow-xl text-base"
          >
            <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current" xmlns="http://www.w3.org/2000/svg">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            Falar com um especialista
          </a>
          <a
            href="https://www.instagram.com/escolinhacasadofutebol/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 border-2 border-white text-white hover:bg-white hover:text-[#236E45] font-bold px-8 py-4 rounded-full transition-all duration-300 text-base"
          >
            Seguir no Instagram
          </a>
        </div>
      </div>
    </section>
  );
}

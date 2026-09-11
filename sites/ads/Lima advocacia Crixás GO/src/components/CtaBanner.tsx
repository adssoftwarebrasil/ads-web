export default function CtaBanner() {
  return (
    <section className="relative overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://storage.lucasmendes.dev/site-sp/lima%20advocacia/img/logo-lima-advocacia-fundo-marmore-preto_1080x1080.webp')",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/90" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <div className="animate-on-scroll">
          <img
            src="https://storage.lucasmendes.dev/site-sp/lima%20advocacia/logos/icone-dourado.webp"
            alt="Lima Advocacia"
            className="h-20 w-auto mx-auto mb-6 opacity-90"
          />
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-white mb-5 leading-tight">
            Seu Direito Não Pode{' '}
            <span className="gold-text-gradient">Esperar</span>
          </h2>
          <p className="font-sans text-base sm:text-lg text-white/70 max-w-2xl mx-auto mb-10 leading-relaxed">
            Cada dia sem assessoria jurídica pode custar caro. Não abra mão dos benefícios e
            direitos que você conquistou com trabalho. Fale agora com um especialista.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="http://wa.me/5562981442263"
              target="_blank"
              rel="noopener noreferrer"
              className="gold-gradient text-white font-sans font-semibold text-sm px-10 py-4 rounded-sm tracking-widest uppercase hover:opacity-90 transition-all duration-300 hover:shadow-lg hover:shadow-[#A1825A]/30"
            >
              Consulta Gratuita Agora
            </a>
            <a
              href="tel:+5562981442263"
              className="border border-[#BBB39D]/50 text-[#BBB39D] font-sans font-medium text-sm px-8 py-4 rounded-sm tracking-widest uppercase hover:border-[#A1825A] hover:text-[#A1825A] transition-all duration-300"
            >
              Ligar: (62) 9 8144-2263
            </a>
          </div>

          <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-2xl mx-auto">
            {[
              { value: 'Trabalhista', label: 'Direito' },
              { value: 'Previdenciário', label: 'Direito' },
              { value: 'Crixás/GO', label: 'Sede' },
              { value: '2022', label: 'Desde' },
            ].map((s) => (
              <div key={s.label + s.value} className="text-center">
                <p className="font-serif text-base sm:text-lg text-[#A1825A] font-semibold">{s.value}</p>
                <p className="font-sans text-xs text-white/40 tracking-wider uppercase mt-1">
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative w-full h-[100dvh] min-h-screen flex items-center justify-center overflow-hidden"
    >
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://storage.lucasmendes.dev/site-sp/topmadeiraspva/caminhao-carregado-madeira-transporte-rodoviario_1599x899.webp')",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/80" />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 md:px-6 flex flex-col items-center text-center">
        <div className="fade-in-up">
          
        </div>

        <h1 className="fade-in-up delay-100 text-4xl md:text-6xl lg:text-7xl font-black text-white leading-tight max-w-4xl">
          Madeiras de{' '}
          <span style={{ color: '#fbbf24' }}>Alta Qualidade</span>
          {' '}para Sua Obra
        </h1>

        <p className="fade-in-up delay-200 mt-6 text-base md:text-xl text-white/80 max-w-2xl leading-relaxed">
          Pinus, Madeiriti e Eucalipto Tratado direto para você. Trabalhamos com
          madeiras de <strong className="text-white">reflorestamento sustentável</strong>, garantindo
          resistência, qualidade e responsabilidade ambiental.
        </p>

        <div className="fade-in-up delay-300 mt-10 flex flex-col sm:flex-row gap-4 w-full justify-center">
          <a
            href="https://wa.me/5566999371417?text=Olá!%20Vim%20pelo%20site%20e%20gostaria%20de%20um%20orçamento."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl text-white font-bold text-base md:text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl"
            style={{ backgroundColor: 'rgb(236,28,36)' }}
          >
            Solicitar Orçamento
          </a>
          <a
            href="#produtos"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl text-white font-bold text-base md:text-lg border-2 border-white/50 hover:bg-white/10 transition-all duration-300"
          >
            Ver Produtos
          </a>
        </div>

        <div className="fade-in-up delay-400 mt-14 grid grid-cols-3 gap-8 md:gap-16">
          {[
            { value: '100%', label: 'Reflorestamento' },
            { value: '15+', label: 'Anos de Mercado' },
            { value: 'MT', label: 'Primavera do Leste' },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-2xl md:text-4xl font-black text-yellow-400">{stat.value}</p>
              <p className="text-xs md:text-sm text-white/70 mt-1 font-medium">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      <a
        href="#produtos"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/60 hover:text-white transition-colors"
      >
        <span className="text-xs font-medium tracking-widest uppercase">Role para baixo</span>
       
      </a>
    </section>
  )
}

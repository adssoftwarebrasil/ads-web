export default function Hero() {
  return (
    <section
      className="pt-24 pb-16 min-h-screen flex items-center relative bg-cover bg-center"
      style={{
        backgroundImage:
          'url("https://storage.lucasmendes.dev/site-sp/ads-marketing%2F469321357_122150304500299876_3050706717441880580_n.jpg")',
      }}
    >
      <div className="absolute inset-0 bg-black/50"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center animate-fade-in">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight drop-shadow-lg">
            Sua Empresa no Topo do <span className="text-[#F4B400]">Google</span>.
          </h1>
          <p className="text-lg sm:text-xl text-white mb-8 max-w-3xl mx-auto leading-relaxed drop-shadow-md">
            Somos Parceiros Google certificados. Aumentamos sua visibilidade em Mapas, SEO e Ads,
            transformando cliques em clientes reais.
          </p>
          <a
            href="https://wa.me/5511958550001"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#F4B400] text-[#212121] px-8 py-4 rounded-lg font-bold text-lg hover:bg-[#e5a800] transition-all transform hover:scale-105 shadow-2xl animate-pulse-subtle"
          >
            SOLICITE UM ORÇAMENTO
          </a>
        </div>
      </div>
    </section>
  );
}

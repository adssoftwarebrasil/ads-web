export default function Hero() {
  return (
    <section className="relative w-full h-[100dvh] min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        {/* Imagem Desktop */}
        <img
          src="https://storage.lucasmendes.dev/site-sp/megabaterias/FACHADA.webp"
          alt="Fachada Mega Baterias"
          className="hidden md:block w-full h-full object-cover"
          loading="eager"
        />
        {/* Imagem Mobile */}
        <img
          src="https://storage.lucasmendes.dev/site-sp/megabaterias/fachada-mobile.jpg"
          alt="Fachada Mega Baterias"
          className="block md:hidden w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0b0d10]/90 via-[#0b0d10]/70 to-transparent"></div>
      </div>
      <div className="absolute top-4 right-4 md:top-8 md:right-8 z-30">
        <div className="bg-[#d7282d] text-white px-4 py-2 rounded-full text-sm shadow-xl font-bold">
          🏆 4x Destaque do Ano
        </div>
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 text-center md:text-left">
        <h1 className="text-4xl md:text-7xl font-black text-white leading-tight mb-4">
          Levando Energia<br />para Você
        </h1>
        <p className="text-xl md:text-2xl text-[#ffef1d] font-medium mt-4 mb-8">
          Entrega e Instalação Grátis • Parcelamento em até 10x
        </p>
        <div className="flex flex-col md:flex-row gap-4 justify-center md:justify-start">
          <a
            href="https://wa.me/5577999036565?text=Olá!%20Quero%20comprar%20uma%20bateria!"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#ffef1d] text-[#0b0d10] px-8 py-4 rounded-full font-bold hover:bg-[#d7282d] hover:text-white transition-all duration-300 shadow-2xl text-center"
          >
            COMPRAR AGORA
          </a>
          <button
            onClick={() => document.getElementById('produtos')?.scrollIntoView({ behavior: 'smooth' })}
            className="border-2 border-white text-white px-8 py-4 rounded-full hover:bg-white hover:text-[#0b0d10] transition-all duration-300 font-bold"
          >
            VER PRODUTOS
          </button>
        </div>
      </div>
    </section>
  );
}
const WHATSAPP_URL =
  'https://wa.me/5599991458080?text=Olá,%20vim%20pelo%20site%20e%20gostaria%20de%20mais%20informações';

export default function Hero() {
  return (
    <section
      id="início"
      className="relative h-screen flex items-center justify-center overflow-hidden"
    >
      <div
        className="absolute inset-0 bg-cover bg-top bg-fixed md:hidden"
        style={{
          backgroundImage:
            'url("/hero.webp")',
        }}
      ></div>
      <div
        className="absolute inset-0 hidden md:block bg-cover bg-center bg-fixed"
        style={{
          backgroundImage:
            'url("/hero-wide.webp")',
        }}
      ></div>
      <div className="absolute inset-0 bg-black/30"></div>
      <div className="relative z-10 text-center px-4 transition-all duration-1000 opacity-100 translate-y-0">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
          Qualidade que Move o Seu Dia
        </h1>
        <p className="text-lg md:text-2xl text-white/90 mb-8 max-w-2xl mx-auto">
          Descubra a Excelência em Pneus
        </p>
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-[rgb(227,17,35)] text-white px-12 py-5 rounded-full font-semibold text-lg hover:scale-105 transition-transform duration-300 shadow-lg"
        >
          Enviar WhatsApp
        </a>
      </div>
    </section>
  );
}

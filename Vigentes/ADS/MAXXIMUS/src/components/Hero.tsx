export default function Hero() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center"
      style={{
        backgroundImage:
          'url("https://storage.lucasmendes.dev/site-sp/MAXXIMUS%2Fhero.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
        backgroundAttachment: 'fixed',
      }}
    >
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(135deg, rgba(19, 57, 94, 0.85), rgba(244, 95, 38, 0.7))',
        }}
      ></div>
      <div className="relative z-10 container mx-auto px-5 text-center">
        <h1 className="text-white text-4xl md:text-6xl font-bold leading-tight mb-5 animate-fade-in-up">
          Soluções Profissionais em Jardinagem e Manutenção
        </h1>
        <p className="text-white text-lg md:text-2xl mb-8 animate-fade-in-up animation-delay-200 max-w-3xl mx-auto">
          Produtos Husqvarna com preço justo e atendimento de excelência em
          Ribeirão Preto e Araraquara
        </p>
        <div className="flex flex-col md:flex-row items-center justify-center gap-5 animate-fade-in-up animation-delay-400">
          <button
            onClick={() => scrollTo('produtos')}
            className="bg-[rgb(244,95,38)] text-white px-10 py-4 rounded-full text-lg font-medium hover:scale-105 transition-transform duration-300 w-full md:w-auto max-w-xs"
          >
            Ver Produtos
          </button>
          <a
            href="https://wa.me/5516997891482?text=Olá! Gostaria de mais informações sobre os produtos da Maxximus - Ribeirão Preto."
            target="_blank"
            rel="noopener noreferrer"
            className="bg-transparent border-2 border-white text-white px-10 py-4 rounded-full text-lg font-medium hover:scale-105 transition-transform duration-300 w-full md:w-auto max-w-xs block text-center"
          >
            Fale no WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}

export default function Hero() {
  const scrollToContact = () => {
    const element = document.getElementById('contato');
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToProducts = () => {
    const element = document.getElementById('produtos');
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="inicio"
      className="min-h-screen flex items-center pt-20"
      style={{
        background: 'linear-gradient(135deg, #2b2d91 0%, #0a0d00 100%)',
      }}
    >
      <div className="max-w-[1400px] mx-auto px-6 py-20 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div
              className="text-sm tracking-[2px] uppercase animate-slide-up"
              style={{ color: '#fdf309', animationDelay: '0.2s' }}
            >
              Desde 1988 em Foz do Iguaçu
            </div>

            <h1
              className="text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight animate-slide-up"
              style={{ animationDelay: '0.4s' }}
            >
              Peças Automotivas Originais para Seu Veículo
            </h1>

            <p
              className="text-lg lg:text-xl leading-relaxed animate-slide-up"
              style={{ color: '#f2eb97', animationDelay: '0.6s' }}
            >
              Especialistas em reposição automotiva com 37 anos de tradição. Atendemos toda
              América Latina com peças de primeira linha
            </p>

            <div
              className="flex flex-col sm:flex-row gap-4 animate-slide-up"
              style={{ animationDelay: '0.8s' }}
            >
              <button
                onClick={scrollToContact}
                className="px-10 py-4 rounded-lg font-semibold transition-all hover:scale-105 hover:shadow-xl"
                style={{ backgroundColor: '#fdf309', color: '#0a0d00' }}
              >
                Solicitar Orçamento
              </button>
              <button
                onClick={scrollToProducts}
                className="px-10 py-4 rounded-lg font-semibold border-2 border-white text-white transition-all hover:bg-white hover:text-[#2b2d91]"
              >
                Ver Produtos
              </button>
            </div>
          </div>

          <div className="animate-scale-in" style={{ animationDelay: '0.4s' }}>
            <img
              src="https://storage.lucasmendes.dev/site-sp/rualpecas%2Ffachada-loja-arvores-em-frente.webp"
              alt="Fachada da Rual Peças"
              className="rounded-2xl shadow-2xl w-full"
              style={{ boxShadow: '0 20px 60px rgba(253, 243, 9, 0.3)' }}
              loading="eager"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

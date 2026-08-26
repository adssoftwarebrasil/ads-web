import { MessageCircle, ShoppingBag } from 'lucide-react';

export default function Hero() {
  const scrollToProducts = () => {
    const element = document.getElementById('produtos');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden pt-[70px] lg:pt-[80px]"
      style={{
        background: 'linear-gradient(135deg, #172059 0%, #00adec 100%)',
      }}
    >
      <div className="absolute inset-0 bg-black/60"></div>

      <div className="absolute inset-0 hidden lg:block">
        <img
          src="https://storage.lucasmendes.dev/site-sp/3G%2Fiphones-cores-variadas.webp"
          alt="iPhones"
          className="w-full h-full object-cover opacity-30"
          loading="eager"
        />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-white animate-fade-in">
            <div className="flex flex-wrap gap-3 mb-6">
              <span className="bg-[#81c227] px-4 py-2 rounded-full text-sm font-semibold">
                Desde 2005
              </span>
              <span className="bg-[#00adec] px-4 py-2 rounded-full text-sm font-semibold">
                Assistência Especializada
              </span>
              <span className="bg-[#f7cb0c] text-[#172059] px-4 py-2 rounded-full text-sm font-semibold">
                Melhores Marcas
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 leading-tight">
              Tecnologia que Conecta Você ao Futuro
            </h1>

            <p className="text-lg sm:text-xl lg:text-2xl text-gray-100 mb-8 leading-relaxed">
              Há 20 anos sendo referência em celulares, acessórios e assistência técnica em Chapecó e região
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={scrollToProducts}
                className="bg-[#81c227] text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-[#6fa01f] transition-all duration-200 hover:shadow-2xl hover:scale-105 flex items-center justify-center gap-2"
              >
                <ShoppingBag size={24} />
                Ver Produtos
              </button>

              <a
                href="https://wa.me/5549999504348"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#00adec] text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-[#0095cd] transition-all duration-200 hover:shadow-2xl hover:scale-105 flex items-center justify-center gap-2"
              >
                <MessageCircle size={24} />
                Falar no WhatsApp
              </a>
            </div>
          </div>

          <div className="hidden lg:block animate-zoom-in">
            <img
              src="https://storage.lucasmendes.dev/site-sp/3G%2Fiphones-cores-variadas.webp"
              alt="iPhones variados"
              className="w-full h-auto rounded-2xl shadow-2xl"
              loading="eager"
            />
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  );
}

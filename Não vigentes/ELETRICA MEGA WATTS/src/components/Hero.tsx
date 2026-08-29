import { ChevronDown } from 'lucide-react';

const WHATSAPP_URL =
  'https://api.whatsapp.com/send?phone=5562992380432&text=Olá! Vim pelo site e quero mais informações.';

export default function Hero() {
  return (
    <section
      className="relative min-h-screen flex items-center justify-center bg-cover bg-center bg-fixed"
      style={{
        backgroundImage:
          'url("https://storage.lucasmendes.dev/site-sp/eletricamega%2Fhero.jpeg")',
      }}
    >
      <div className="absolute inset-0 bg-black/70"></div>
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
          A Força para Construir Histórias
          <br />
          com Qualidade &amp; Segurança
        </h1>
        <p className="text-lg md:text-xl lg:text-2xl mb-4 max-w-3xl mx-auto">
          Desde 2005, somos especialistas em equipamentos profissionais Stihl, ferramentas e
          assistência técnica
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4 mb-8 text-sm md:text-base">
          <div className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
            <span className="font-bold text-[rgb(236,33,40)]">18+</span> Anos de Experiência
          </div>
          <div className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
            <span className="font-bold text-[rgb(236,33,40)]">1200+</span> Clientes Satisfeitos
          </div>
        </div>
        <p className="text-base md:text-lg mb-10 max-w-2xl mx-auto">
          Transforme seus projetos em realidade
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="#products"
            className="bg-[rgb(236,33,40)] text-white px-8 py-4 rounded-lg hover:bg-[rgb(216,13,20)] transition-all transform hover:scale-105 font-medium text-lg shadow-lg w-full sm:w-auto"
          >
            Ver Produtos
          </a>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-[rgb(41,35,88)] transition-all transform hover:scale-105 font-medium text-lg w-full sm:w-auto"
          >
            Falar no WhatsApp
          </a>
        </div>
      </div>
      <a
        href="#about"
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce cursor-pointer"
      >
        <ChevronDown className="lucide lucide-chevron-down" width={40} height={40} />
      </a>
    </section>
  );
}

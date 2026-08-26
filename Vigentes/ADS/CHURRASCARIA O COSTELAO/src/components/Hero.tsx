import { ChevronDown } from 'lucide-react';

const stats = [
  { value: '38 Anos', label: 'De tradição familiar' },
  { value: 'Seg a Seg', label: '11h às 16h' },
  { value: '100%', label: 'Comida caseira' },
];

export default function Hero() {
  const scrollToSobre = () =>
    document.getElementById('sobre')?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage:
          'linear-gradient(rgba(61, 61, 67, 0.6), rgba(61, 61, 67, 0.7)), url("https://storage.lucasmendes.dev/site-sp/churrascaria%20costelao/img/churrascaria-fachada-amarela-hero-background.webp")',
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
        backgroundAttachment: 'fixed',
      }}
    >
      <div className="container mx-auto px-4 text-center relative z-10 pt-20">
        <div className="max-w-4xl mx-auto animate-fadeIn">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Sabor de <span className="text-[rgb(212,178,37)]">Tradição</span>
            <br />há 38 Anos
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-8 font-light">
            O melhor da comida caseira e churrasco assado na hora em Foz do Iguaçu.
            <br className="hidden md:block" />
            Experiência, qualidade e preço justo em cada refeição.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="https://wa.me/5545999434290?text=Olá!%20Gostaria%20de%20fazer%20um%20pedido."
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[rgb(212,178,37)] text-[rgb(61,61,67)] px-8 py-4 rounded-full font-bold text-lg hover:bg-[rgb(212,86,96)] hover:text-white transition-all duration-300 shadow-2xl hover:scale-105 w-full sm:w-auto"
            >
              Faça Seu Pedido
            </a>
            <button className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-[rgb(61,61,67)] transition-all duration-300 w-full sm:w-auto">
              Ver Cardápio
            </button>
          </div>
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
            {stats.map((stat) => (
              <div
                key={stat.value}
                className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20 hover:bg-white/20 transition-all duration-300"
              >
                <h3 className="text-3xl font-bold text-[rgb(212,178,37)] mb-2">{stat.value}</h3>
                <p className="text-white">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <button
        onClick={scrollToSobre}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce cursor-pointer hover:text-[rgb(212,178,37)] transition-colors"
      >
        <ChevronDown className="w-10 h-10" />
      </button>
    </section>
  );
}

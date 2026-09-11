import { ArrowRight } from 'lucide-react';

const WHATSAPP_URL = 'https://api.whatsapp.com/send?phone=5575999369036';

const stats = [
  { value: '10+', label: 'Anos de Experiência' },
  { value: '5000+', label: 'Clientes Satisfeitos' },
  { value: '15000+', label: 'Veículos Atendidos' },
  { value: '5', label: 'Serviços Especializados' },
];

export default function Hero() {
  const scrollToServicos = () => {
    document.getElementById('servicos')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="inicio"
      className="relative w-full h-[100dvh] min-h-screen flex items-center justify-center overflow-hidden"
    >
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            'url("https://storage.lucasmendes.dev/site-sp/ssescapamentoeperformance%2Fhero.jpg")',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/80"></div>
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight animate-fade-in">
          Serviços de Alta Qualidade
          <br />
          <span className="text-[rgb(254,0,0)]">Para Seu Veículo</span>
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto leading-relaxed">
          Confiabilidade, transparência e excelência em cada serviço.
          <br />
          Mais de 10 anos de experiência cuidando do seu automóvel.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-[rgb(254,0,0)] hover:bg-[rgb(172,1,2)] text-white px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 hover:scale-105 shadow-2xl flex items-center gap-2"
          >
            Solicite um Orçamento
            <ArrowRight
              size={20}
              className="group-hover:translate-x-1 transition-transform"
            />
          </a>
          <button
            onClick={scrollToServicos}
            className="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 hover:scale-105 border-2 border-white/30"
          >
            Conheça Nossos Serviços
          </button>
        </div>
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20"
            >
              <div className="text-3xl md:text-4xl font-bold text-[rgb(254,0,0)] mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-gray-200">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-3 bg-white/50 rounded-full"></div>
        </div>
      </div>
    </section>
  );
}

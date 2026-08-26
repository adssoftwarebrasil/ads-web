import { useEffect, useState } from 'react';
import { Clock, Battery, Wrench } from 'lucide-react';

const features = [
  { Icon: Clock, label: 'Atendimento 24h' },
  { Icon: Battery, label: 'Melhor Preço' },
  { Icon: Wrench, label: 'Socorro Imediato' },
];

export default function Hero() {
  const [offsetY, setOffsetY] = useState(0);

  useEffect(() => {
    const onScroll = () => setOffsetY(window.scrollY * 0.5);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            'url("https://storage.lucasmendes.dev/site-sp/ze%20da%20bateria/img/homem-trocando-bateria-hero-background-paralax.webp")',
          transform: `translateY(${offsetY}px)`,
        }}
      ></div>
      <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/40"></div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-24 pb-16 lg:pt-32 lg:pb-24">
        <div className="max-w-3xl">
          <div className="mb-6 inline-block">
            <span className="bg-[rgb(233,155,29)] text-black px-4 py-2 rounded-full text-sm font-semibold uppercase tracking-wider">
              Desde 2019 em Gurupi
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-6 leading-tight">
            Socorro 24h em{' '}
            <span className="text-[rgb(233,155,29)]">Baterias Automotivas</span>
          </h1>
          <p className="text-lg sm:text-xl lg:text-2xl text-[rgb(218,221,229)] mb-8 leading-relaxed">
            Atendimento emergencial, venda de baterias e serviços de manutenção
            elétrica com qualidade e rapidez.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <a
              href="http://wa.me/556384458064"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[rgb(233,155,29)] text-black px-8 py-4 rounded-lg font-bold text-lg hover:bg-[rgb(213,135,9)] transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105 text-center"
            >
              Solicitar Socorro Agora
            </a>
            <a
              href="#servicos"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-black transition-all duration-300 text-center"
            >
              Nossos Serviços
            </a>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
            {features.map(({ Icon, label }) => (
              <div
                key={label}
                className="bg-white/10 backdrop-blur-md border border-white/20 rounded-lg p-4 flex items-center space-x-3 hover:bg-white/20 transition-all duration-300"
              >
                <div className="bg-[rgb(233,155,29)] p-3 rounded-lg">
                  <Icon size={24} className="text-black" />
                </div>
                <span className="text-white font-semibold">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center pt-2">
          <div className="w-1 h-3 bg-white rounded-full"></div>
        </div>
      </div>
    </section>
  );
}

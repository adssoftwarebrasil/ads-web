import { useEffect, useState } from 'react';
import { Sparkles, ArrowRight } from 'lucide-react';

const slides = [
  'https://storage.lucasmendes.dev/site-sp/prime%20tecidos%2Fimg%2Fhero-background-img-1.webp',
  'https://storage.lucasmendes.dev/site-sp/prime%20tecidos%2Fimg%2Fhero-background-img-2.webp',
  'https://storage.lucasmendes.dev/site-sp/prime%20tecidos%2Fimg%2Fhero-background-img-3.webp',
  'https://storage.lucasmendes.dev/site-sp/prime%20tecidos%2Fimg%2Fhero-background-img-4.webp',
  'https://storage.lucasmendes.dev/site-sp/prime%20tecidos%2Fimg%2Fhero-background-img-5.webp',
];

export default function Hero() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((c) => (c + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {slides.map((src, i) => (
        <div
          key={i}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            i === current ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url("${src}")` }}
          ></div>
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-transparent"></div>
        </div>
      ))}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-white">
        <div className="max-w-3xl">
          <div className="flex items-center space-x-2 mb-6 animate-fade-in">
            <Sparkles className="lucide lucide-sparkles text-emerald-400" size={24} />
            <span className="text-emerald-400 font-semibold tracking-wide uppercase text-sm">
              Desde 2010 em Mato Grosso
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6 animate-slide-up">
            Tecidos e Acessórios de{' '}
            <span className="bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400 bg-clip-text text-transparent">
              Excelência
            </span>{' '}
            para Cortinas e Tapeçaria
          </h1>
          <p className="text-lg sm:text-xl text-gray-200 mb-8 leading-relaxed animate-slide-up animation-delay-200">
            Referência em Cuiabá e todo Mato Grosso. Oferecemos a mais completa linha de tecidos
            para cortinas, tapeçaria automotiva e cortinas motorizadas. Qualidade superior,
            variedade incomparável e atendimento especializado.
          </p>
          <div className="flex items-center space-x-3 mb-10 animate-slide-up animation-delay-300">
            <div className="flex items-center bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
              <span className="text-emerald-400 font-bold text-2xl mr-2">✓</span>
              <span className="text-sm font-medium">Somente Lojistas</span>
            </div>
            <div className="flex items-center bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
              <span className="text-emerald-400 font-bold text-2xl mr-2">✓</span>
              <span className="text-sm font-medium">Pronta Entrega</span>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 animate-slide-up animation-delay-400">
            <button className="group bg-emerald-500 hover:bg-emerald-600 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all hover:scale-105 shadow-xl hover:shadow-2xl flex items-center justify-center space-x-2">
              <span>Fale pelo WhatsApp</span>
              <ArrowRight
                className="lucide lucide-arrow-right group-hover:translate-x-1 transition-transform"
                size={20}
              />
            </button>
            <button
              onClick={() => scrollTo('produtos')}
              className="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all hover:scale-105 border-2 border-white/30"
            >
              Nosso Catálogo
            </button>
          </div>
        </div>
      </div>
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-2 h-2 rounded-full transition-all ${
              i === current ? 'bg-white w-8' : 'bg-white/50'
            }`}
          ></button>
        ))}
      </div>
    </section>
  );
}

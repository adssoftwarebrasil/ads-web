import { useEffect, useState } from 'react';
import { ChevronDown, Star, MapPin } from 'lucide-react';

const slides = [
  {
    url: 'https://storage.lucasmendes.dev/site-sp/Hotel-Avalon%2FFachada-De-Lado.jpg',
    title: 'Bem-vindo ao',
    highlight: 'Hotel Avalon',
    subtitle: 'Conforto, acolhimento e hospitalidade genuína em Benevides – PA',
  },
  {
    url: 'https://storage.lucasmendes.dev/site-sp/Hotel-Avalon%2FFachada-de-Lado2.jpg',
    title: 'Suítes Pensadas',
    highlight: 'Para Você',
    subtitle: 'Do simples ao master, cada detalhe preparado para o seu descanso perfeito',
  },
  {
    url: 'https://storage.lucasmendes.dev/site-sp/Hotel-Avalon%2FArea-Cafe-Da-Manha.jpg',
    title: 'Café da Manhã',
    highlight: 'Incluso',
    subtitle: 'Desperte com um café da manhã completo e recarregue as energias para um ótimo dia',
  },
];

export default function Hero() {
  const [current, setCurrent] = useState(0);
  const [animated, setAnimated] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => {
      setAnimated(false);
      setTimeout(() => {
        setCurrent((prev) => (prev + 1) % slides.length);
        setAnimated(true);
      }, 400);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const scrollToSection = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="inicio" className="relative h-screen min-h-[600px] overflow-hidden">
      {slides.map((slide, i) => (
        <div
          key={i}
          className={`absolute inset-0 transition-opacity duration-700 ${
            i === current ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <img
            src={slide.url}
            alt="Hotel Avalon"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-navy/70 via-navy/50 to-navy/80" />
        </div>
      ))}

      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4 sm:px-6">
        <div
          className={`transition-all duration-500 ${
            animated ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="h-px w-12 bg-gold" />
            <span className="text-gold text-sm font-medium tracking-widest uppercase">
              Benevides – PA
            </span>
            <div className="h-px w-12 bg-gold" />
          </div>

          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-2">
            {slides[current].title}
          </h1>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gold leading-tight mb-6">
            {slides[current].highlight}
          </h1>

          <p className="text-white/85 text-base sm:text-lg md:text-xl max-w-2xl mx-auto mb-8 leading-relaxed">
            {slides[current].subtitle}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <a
              href="https://wa.me/5591982450015?text=Olá!%20Gostaria%20de%20fazer%20uma%20reserva%20no%20Hotel%20Avalon%20Benevides."
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gold hover:bg-gold-light text-navy font-bold px-8 py-4 rounded-full text-base transition-all duration-300 hover:shadow-xl hover:shadow-gold/40 hover:-translate-y-1 w-full sm:w-auto"
            >
              Faça Sua Reserva
            </a>
            <button
              onClick={() => scrollToSection('#acomodacoes')}
              className="border-2 border-white/70 text-white hover:border-gold hover:text-gold font-semibold px-8 py-4 rounded-full text-base transition-all duration-300 w-full sm:w-auto"
            >
              Ver Acomodações
            </button>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-6 text-white/80 text-sm">
            <div className="flex items-center gap-2">
              <div className="flex">
                {[1,2,3,4,5].map(s => <Star key={s} size={14} className="fill-gold text-gold" />)}
              </div>
              <span>Atendimento 24h</span>
            </div>
            <div className="w-px h-4 bg-white/30" />
            <div className="flex items-center gap-2">
              <MapPin size={14} className="text-gold" />
              <span>Rota das praias de Mosqueiro e Salinas</span>
            </div>
            <div className="w-px h-4 bg-white/30" />
            <span>10 Anos de Hospitalidade</span>
          </div>
        </div>
      </div>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2">
        <div className="flex gap-2 mb-3">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => { setCurrent(i); setAnimated(true); }}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                i === current ? 'w-8 bg-gold' : 'w-2 bg-white/40'
              }`}
            />
          ))}
        </div>
        <button
          onClick={() => scrollToSection('#sobre')}
          className="text-white/60 hover:text-gold transition-colors animate-bounce"
        >
          <ChevronDown size={24} />
        </button>
      </div>
    </section>
  );
}

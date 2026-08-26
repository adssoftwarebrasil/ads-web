import { useEffect, useState } from 'react';

const slides: { src: string; alt: string; kenBurns: string; loading: 'eager' | 'lazy' }[] = [
  {
    src: 'https://storage.lucasmendes.dev/site-sp/himitsu%2Fhero1.png',
    alt: 'Himitsu Restaurante - Culinária Japonesa 1',
    kenBurns: 'ken-burns',
    loading: 'eager',
  },
  {
    src: 'https://storage.lucasmendes.dev/site-sp/himitsu%2Fhero2.png',
    alt: 'Himitsu Restaurante - Culinária Japonesa 2',
    kenBurns: 'ken-burns-alt',
    loading: 'lazy',
  },
  {
    src: 'https://storage.lucasmendes.dev/site-sp/himitsu%2Fhero3.png',
    alt: 'Himitsu Restaurante - Culinária Japonesa 3',
    kenBurns: 'ken-burns',
    loading: 'lazy',
  },
  {
    src: 'https://storage.lucasmendes.dev/site-sp/himitsu%2FCombinado%20Himitsu%2060%20%2B%20Sushi.webp',
    alt: 'Himitsu Restaurante - Culinária Japonesa 4',
    kenBurns: 'ken-burns-alt',
    loading: 'lazy',
  },
  {
    src: 'https://storage.lucasmendes.dev/site-sp/himitsu%2FPoke%20Himitsu%20Salma%CC%83o%20Himitsu.webp',
    alt: 'Himitsu Restaurante - Culinária Japonesa 5',
    kenBurns: 'ken-burns',
    loading: 'lazy',
  },
];

const WHATSAPP_ORDER =
  'https://wa.me/556232513597?text=Olá,%20vim%20do%20site%20e%20gostaria%20de%20fazer%20um%20pedido!';

export default function Hero() {
  const [current, setCurrent] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const scrollToReservation = () => {
    document.getElementById('reservation')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative min-h-screen w-full overflow-hidden bg-black">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === current ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <img
            src={slide.src}
            alt={slide.alt}
            className={`w-full h-full object-cover object-center ${slide.kenBurns}`}
            loading={slide.loading}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/70"></div>
        </div>
      ))}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="font-bold text-white text-3xl sm:text-4xl md:text-5xl lg:text-7xl mb-4 sm:mb-6 lg:mb-8 max-w-5xl leading-tight tracking-tight animate-fade-in-up">
          Autêntica Culinária Japonesa e Contemporânea
        </h1>
        <p className="font-light text-white/95 text-base sm:text-lg md:text-xl lg:text-2xl mb-8 sm:mb-10 lg:mb-14 max-w-3xl leading-relaxed animate-fade-in-up animation-delay-200">
          Tradição e inovação em cada prato desde 2012
        </p>
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full sm:w-auto animate-fade-in-scale animation-delay-400">
          <a
            href={WHATSAPP_ORDER}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#E02023] text-white px-8 sm:px-10 py-3 sm:py-4 lg:py-5 rounded-lg hover:bg-[#c01a1e] transition-all duration-300 hover:scale-105 hover:shadow-2xl font-semibold text-base sm:text-lg lg:text-xl shadow-lg w-full sm:w-auto"
          >
            Peça Agora
          </a>
          <button
            onClick={scrollToReservation}
            className="border-2 border-white text-white px-8 sm:px-10 py-3 sm:py-4 lg:py-5 rounded-lg hover:bg-white hover:text-black transition-all duration-300 hover:scale-105 hover:shadow-2xl font-semibold text-base sm:text-lg lg:text-xl w-full sm:w-auto"
          >
            Faça sua Reserva
          </button>
        </div>
      </div>
      <div className="absolute bottom-6 sm:bottom-8 lg:bottom-10 left-1/2 -translate-x-1/2 z-20 flex gap-2 sm:gap-3 bg-black/30 backdrop-blur-sm px-3 sm:px-4 py-2 sm:py-3 rounded-full">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`rounded-full transition-all duration-300 ${
              index === current
                ? 'bg-[#E02023] w-8 sm:w-10 h-3 sm:h-3.5 shadow-lg'
                : 'bg-white/60 hover:bg-white/90 w-3 sm:w-3.5 h-3 sm:h-3.5'
            }`}
            aria-label={`Ir para imagem ${index + 1}`}
          ></button>
        ))}
      </div>
      <div className="absolute bottom-20 sm:bottom-24 left-1/2 -translate-x-1/2 z-20 hidden sm:block">
        <div className="animate-bounce">
          <svg
            className="w-6 h-6 text-white/70"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </div>
      </div>
    </section>
  );
}

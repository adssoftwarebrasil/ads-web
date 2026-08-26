import { useEffect, useState } from 'react';
import { ChevronDown, Star, MapPin, Shield } from 'lucide-react';

const WHATSAPP_NUMBER = '5563992199115';

const slides = [
  {
    image: 'https://storage.lucasmendes.dev/site-sp/hotel-ipanema%2FFachada.png',
    title: 'Bem-vindo ao',
    highlight: 'Hotel Ipanema',
    subtitle: 'Sua melhor parada em Araguaína — TO. Conforto, café da manhã incluso e atendimento 24h para viajantes que merecem o melhor.',
  },
  {
    image: 'https://storage.lucasmendes.dev/site-sp/hotel-ipanema%2FQuarto-Mais-Bonito.jpg',
    title: 'Quartos que',
    highlight: 'Encantam',
    subtitle: 'Quartos limpos, aconchegantes, com Wi-Fi, água quente, ar-condicionado e Smart TV. Descanse de verdade.',
  },
  {
    image: 'https://storage.lucasmendes.dev/site-sp/hotel-ipanema%2FRecep%C3%A7%C3%A3o-Mais-Bonita.jpg',
    title: 'Atendimento',
    highlight: 'Excepcional',
    subtitle: 'Equipe bem treinada e pronta para te receber 24 horas por dia. Há 12 anos servindo com excelência em Araguaína.',
  },
];

export default function Hero() {
  const [current, setCurrent] = useState(0);
  const [fadeIn, setFadeIn] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => {
      setFadeIn(false);
      setTimeout(() => {
        setCurrent((prev) => (prev + 1) % slides.length);
        setFadeIn(true);
      }, 500);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const handleReserve = () => {
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=Olá! Gostaria de fazer uma reserva no Hotel Ipanema.`, '_blank');
  };

  return (
    <section id="inicio" className="relative h-screen min-h-[600px] overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === current ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <img
            src={slide.image}
            alt={slide.highlight}
            className="w-full h-full object-cover"
          />
        </div>
      ))}

      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/80" />

      <div className="absolute inset-0 flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8">
        <div
          className={`text-center max-w-4xl mx-auto transition-all duration-700 ${
            fadeIn ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={18} className="text-[#fff808] fill-[#fff808]" />
            ))}
          </div>

          <p className="text-[#bdbec2] text-lg sm:text-xl font-light tracking-widest uppercase mb-2">
            {slides[current].title}
          </p>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-white leading-tight mb-6">
            {slides[current].highlight}
          </h1>
          <p className="text-white/80 text-base sm:text-xl max-w-2xl mx-auto leading-relaxed mb-10">
            {slides[current].subtitle}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={handleReserve}
              className="bg-[#f68033] hover:bg-[#fff808] text-black font-black px-10 py-4 rounded-full text-lg transition-all duration-300 hover:scale-105 active:scale-95 shadow-2xl shadow-orange-500/40"
            >
              Fazer Reserva
            </button>
            <a
              href="#quartos"
              className="border-2 border-white/40 hover:border-[#fff808] text-white hover:text-[#fff808] font-semibold px-10 py-4 rounded-full text-lg transition-all duration-300 backdrop-blur-sm"
            >
              Ver Quartos
            </a>
          </div>
        </div>

        <div className="absolute bottom-24 left-0 right-0 flex justify-center gap-3">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => { setFadeIn(false); setTimeout(() => { setCurrent(index); setFadeIn(true); }, 300); }}
              className={`transition-all duration-300 rounded-full ${
                index === current ? 'w-8 h-2 bg-[#f68033]' : 'w-2 h-2 bg-white/40'
              }`}
            />
          ))}
        </div>

        <div className="absolute bottom-0 left-0 right-0 bg-black/80 backdrop-blur-md border-t border-white/10">
          <div className="max-w-5xl mx-auto px-4 py-4 grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-white/10">
            <div className="flex items-center gap-3 justify-center py-3 sm:py-2 sm:px-6">
              <MapPin className="text-[#f68033] shrink-0" size={20} />
              <div>
                <p className="text-white font-semibold text-sm">Localização Privilegiada</p>
                <p className="text-[#bdbec2] text-xs">Vila Cearence — Araguaína, TO</p>
              </div>
            </div>
            <div className="flex items-center gap-3 justify-center py-3 sm:py-2 sm:px-6">
              <Star className="text-[#fff808] fill-[#fff808] shrink-0" size={20} />
              <div>
                <p className="text-white font-semibold text-sm">4.9 de Avaliação</p>
                <p className="text-[#bdbec2] text-xs">+500 hóspedes satisfeitos</p>
              </div>
            </div>
            <div className="flex items-center gap-3 justify-center py-3 sm:py-2 sm:px-6">
              <Shield className="text-[#f68033] shrink-0" size={20} />
              <div>
                <p className="text-white font-semibold text-sm">Check-in Flexível</p>
                <p className="text-[#bdbec2] text-xs">Atendimento 24 horas</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <a
        href="#quartos"
        className="absolute bottom-32 left-1/2 -translate-x-1/2 text-white/50 hover:text-[#fff808] transition-colors duration-200 animate-bounce hidden sm:block"
        aria-label="Rolar para baixo"
      >
        <ChevronDown size={32} />
      </a>
    </section>
  );
}

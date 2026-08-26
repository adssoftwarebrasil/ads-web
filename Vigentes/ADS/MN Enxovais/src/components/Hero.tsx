import { useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { scrollToSection } from '../lib/scroll';

const heroImages = [
  'https://storage.lucasmendes.dev/site-sp/mn%2F260437784_131421909275784_2346853528010532768_n.jpg',
  'https://storage.lucasmendes.dev/site-sp/mn%2F271178787_1840742152778478_4779711173954073962_n.jpg',
  'https://storage.lucasmendes.dev/site-sp/mn%2F275086354_1098674204289446_6842713411891329311_n.jpg',
  'https://storage.lucasmendes.dev/site-sp/mn%2F287531011_997451797624767_6489647800581322942_n.jpg',
  'https://storage.lucasmendes.dev/site-sp/mn%2F325915642_1350991139073576_6140879072850876483_n.jpg',
  'https://storage.lucasmendes.dev/site-sp/mn%2F467860741_18286731097239143_4623056862713166482_n.jpg',
];

const overlayGradient =
  'linear-gradient(135deg, rgba(155, 39, 40, 0.75) 0%, rgba(155, 39, 40, 0.5) 50%, rgba(0, 0, 0, 0.4) 100%)';

export default function Hero() {
  const [current, setCurrent] = useState(1);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((c) => (c + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const prev = () => setCurrent((c) => (c - 1 + heroImages.length) % heroImages.length);
  const next = () => setCurrent((c) => (c + 1) % heroImages.length);

  return (
    <section id="hero" className="relative h-screen w-full overflow-hidden">
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        {heroImages.map((src, i) => (
          <div key={src} className={`absolute inset-0 transition-opacity duration-1000 ${i === current ? 'opacity-100' : 'opacity-0'}`}>
            <div className="w-full h-full overflow-hidden">
              <img src={src} alt={`MN Enxovais - Produto ${i + 1}`} className={`w-full h-full object-cover ${i === current ? 'animate-ken-burns' : ''}`} loading={i === 0 ? 'eager' : 'lazy'} />
            </div>
            <div className="absolute inset-0" style={{ background: overlayGradient }}></div>
          </div>
        ))}
      </div>
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
        <div className="absolute -top-40 -left-40 w-80 h-80 rounded-full opacity-10" style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)' }}></div>
        <div className="absolute -bottom-32 -right-32 w-96 h-96 rounded-full opacity-10" style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)' }}></div>
      </div>
      <button onClick={prev} className="absolute left-4 lg:left-8 top-1/2 transform -translate-y-1/2 z-20 bg-white/10 backdrop-blur-sm hover:bg-white/20 rounded-full p-3 lg:p-4 transition-all duration-300 hover:scale-110 active:scale-95 border border-white/20" aria-label="Imagem anterior">
        <ChevronLeft size={28} className="lucide lucide-chevron-left text-white drop-shadow-lg" />
      </button>
      <button onClick={next} className="absolute right-4 lg:right-8 top-1/2 transform -translate-y-1/2 z-20 bg-white/10 backdrop-blur-sm hover:bg-white/20 rounded-full p-3 lg:p-4 transition-all duration-300 hover:scale-110 active:scale-95 border border-white/20" aria-label="Próxima imagem">
        <ChevronRight size={28} className="lucide lucide-chevron-right text-white drop-shadow-lg" />
      </button>
      <div className="relative z-10 h-full w-full flex items-center justify-center px-4">
        <div className="text-center text-white max-w-5xl mx-auto">
          <div className="mb-6 animate-fade-in">
            <div className="inline-block bg-white/10 backdrop-blur-sm px-6 py-2 rounded-full border border-white/30">
              <span className="text-sm font-medium tracking-wider uppercase">Desde 2013</span>
            </div>
          </div>
          <h1 className="text-5xl md:text-6xl lg:text-8xl font-bold mb-6 animate-fade-in-up drop-shadow-2xl" style={{ fontFamily: '"Playfair Display", serif' }}>MN Enxovais</h1>
          <div className="w-24 h-1 bg-white mx-auto mb-6 animate-scale-in" style={{ backgroundColor: 'rgba(255, 255, 255, 0.8)' }}></div>
          <p className="text-xl md:text-2xl lg:text-3xl mb-4 animate-fade-in-delay-1 font-light drop-shadow-lg" style={{ fontFamily: 'Poppins, sans-serif' }}>Transformando sua casa em um lar aconchegante</p>
          <p className="text-base md:text-lg lg:text-xl mb-10 opacity-95 animate-fade-in-delay-2 max-w-3xl mx-auto font-light drop-shadow-md">Enxoval completo para cama, mesa e banho • Atacado e Varejo • Fabricação Própria</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-delay-3">
            <button onClick={() => scrollToSection('products')} className="group px-8 py-4 bg-[rgb(155,39,40)] text-white rounded-lg font-semibold text-lg hover:bg-[rgb(120,30,31)] transform hover:-translate-y-1 hover:shadow-2xl transition-all duration-300 shadow-xl relative overflow-hidden">
              <span className="relative z-10">Ver Produtos</span>
              <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
            </button>
            <button onClick={() => scrollToSection('contact')} className="group px-8 py-4 border-2 border-white text-white rounded-lg font-semibold text-lg hover:bg-white hover:text-[rgb(155,39,40)] transform hover:-translate-y-1 hover:shadow-2xl transition-all duration-300 backdrop-blur-sm bg-white/5 relative overflow-hidden">
              <span className="relative z-10">Fale Conosco</span>
            </button>
          </div>
          <div className="mt-10 animate-fade-in-delay-4 flex flex-wrap justify-center gap-6 text-sm">
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
              <span className="text-2xl">⭐</span><span>Mais de 10 anos</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
              <span className="text-2xl">🇧🇷</span><span>Atendemos Todo Brasil</span>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-3 z-20">
        {heroImages.map((src, i) => (
          <button key={src} onClick={() => setCurrent(i)} className={`h-1 rounded-full transition-all duration-300 ${i === current ? 'bg-white w-12 shadow-lg' : 'bg-white/40 w-8 hover:bg-white/60 hover:w-10'}`} aria-label={`Ir para imagem ${i + 1}`}></button>
        ))}
      </div>
    </section>
  );
}

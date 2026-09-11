import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

export default function TestimonialsSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const testimonials = [
    {
      name: 'Mariana Santos',
      initials: 'M.S.',
      text: 'Estava com muita dificuldade para dormir, mas depois que comprei meu colchão aqui, minhas noites melhoraram significativamente!',
      rating: 5,
    },
    {
      name: 'Jorge Rodrigues',
      initials: 'J.R.',
      text: 'Excelente atendimento e muitas opções! Estou muito satisfeito com a minha compra.',
      rating: 5,
    },
    {
      name: 'Claudia Lima',
      initials: 'C.L.',
      text: 'A UDI Colchões tem produtos de alta qualidade e o atendimento é sempre muito atencioso.',
      rating: 5,
    },
    {
      name: 'Rafael Alves',
      initials: 'R.A.',
      text: 'A UDI Colchões me ajudou a escolher o melhor colchão. Atendimento excepcional e produtos de qualidade!',
      rating: 5,
    },
  ];

  const itemsPerView = {
    mobile: 1,
    tablet: 2,
    desktop: 3,
  };

  const [itemsVisible, setItemsVisible] = useState(itemsPerView.desktop);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setItemsVisible(itemsPerView.mobile);
      } else if (window.innerWidth < 1024) {
        setItemsVisible(itemsPerView.tablet);
      } else {
        setItemsVisible(itemsPerView.desktop);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const maxSlide = Math.max(0, testimonials.length - itemsVisible);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev >= maxSlide ? 0 : prev + 1));
    }, 6000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, maxSlide]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev >= maxSlide ? 0 : prev + 1));
    setIsAutoPlaying(false);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev <= 0 ? maxSlide : prev - 1));
    setIsAutoPlaying(false);
  };

  return (
    <section id="depoimentos" className="py-20 lg:py-28 bg-accent-offwhite relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.02]">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="wave-pattern-testimonials" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
              <path d="M0 50 Q 25 30, 50 50 T 100 50" fill="none" stroke="#020C7B" strokeWidth="2"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#wave-pattern-testimonials)" />
        </svg>
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h3 className="text-primary-vibrant text-lg font-bold uppercase tracking-wider mb-2">
            Depoimentos
          </h3>
          <h2 className="text-4xl lg:text-5xl font-black text-primary">Nossos Clientes</h2>
        </div>

        <div
          className="relative"
          onMouseEnter={() => setIsAutoPlaying(false)}
          onMouseLeave={() => setIsAutoPlaying(true)}
        >
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out gap-8"
              style={{
                transform: `translateX(-${currentSlide * (100 / itemsVisible)}%)`,
              }}
            >
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 px-4"
                  style={{ width: `${100 / itemsVisible}%` }}
                >
                  <div className="bg-white border-2 border-accent-pastel rounded-2xl p-8 shadow-lg hover:-translate-y-2 transition-transform duration-300 h-full min-h-[280px] relative">
                    <div className="absolute top-4 left-4 text-8xl text-accent-pastel/40 font-serif leading-none">
                      "
                    </div>

                    <div className="flex gap-1 mb-4 relative z-10">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} size={20} className="fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>

                    <p className="text-primary leading-relaxed mb-6 relative z-10">
                      {testimonial.text}
                    </p>

                    <div className="flex items-center gap-4 relative z-10">
                      <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-primary-vibrant flex items-center justify-center text-white font-bold text-xl border-3 border-accent-pastel">
                        {testimonial.initials}
                      </div>
                      <div className="font-bold text-primary text-lg">{testimonial.name}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {maxSlide > 0 && (
            <>
              <button
                onClick={prevSlide}
                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 lg:-translate-x-6 w-12 h-12 rounded-full bg-primary-vibrant text-white flex items-center justify-center hover:scale-110 transition-transform shadow-xl z-10"
                aria-label="Previous"
              >
                <ChevronLeft size={24} />
              </button>
              <button
                onClick={nextSlide}
                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 lg:translate-x-6 w-12 h-12 rounded-full bg-primary-vibrant text-white flex items-center justify-center hover:scale-110 transition-transform shadow-xl z-10"
                aria-label="Next"
              >
                <ChevronRight size={24} />
              </button>
            </>
          )}
        </div>

        <div className="flex justify-center gap-3 mt-8">
          {[...Array(maxSlide + 1)].map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setCurrentSlide(index);
                setIsAutoPlaying(false);
              }}
              className={`w-3 h-3 rounded-full transition-all ${
                currentSlide === index ? 'bg-primary w-8' : 'bg-accent-soft'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

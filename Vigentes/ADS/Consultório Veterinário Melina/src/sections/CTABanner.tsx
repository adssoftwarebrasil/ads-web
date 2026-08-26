import { useEffect, useState } from 'react';
import { MessageCircle, Calendar } from 'lucide-react';

const CTABanner = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="relative h-[400px] flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url('https://storage.lucasmendes.dev/site-sp/Consult%C3%B3rio%20veterin%C3%A1rio%20Melina%2FMedica-Atendendo-Cachorro.jpeg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          transform: `translateY(${scrollY * 0.3}px)`,
        }}
      />

      <div className="absolute inset-0 bg-primary/90 z-10" />

      <div className="relative z-20 max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
          Seu Pet Merece o Melhor Cuidado
        </h2>

        <p className="text-lg sm:text-xl text-white/90 mb-8 max-w-2xl mx-auto">
          Agende uma consulta hoje e garanta a saúde do seu companheiro
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="https://wa.me/5561992486998"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center bg-white text-primary hover:bg-gray-100 px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 hover:scale-105 shadow-2xl group"
          >
            <MessageCircle className="w-6 h-6 mr-2 group-hover:rotate-12 transition-transform" />
            Falar no WhatsApp
          </a>

          <button
            onClick={() => {
              const element = document.getElementById('contact');
              if (element) element.scrollIntoView({ behavior: 'smooth' });
            }}
            className="inline-flex items-center justify-center border-2 border-white text-white hover:bg-white hover:text-primary px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 hover:scale-105"
          >
            <Calendar className="w-6 h-6 mr-2" />
            Ver Horários
          </button>
        </div>
      </div>
    </section>
  );
};

export default CTABanner;

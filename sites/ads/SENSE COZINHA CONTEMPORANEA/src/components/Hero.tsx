import { MapPin } from 'lucide-react';

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('https://storage.lucasmendes.dev/site-sp/SENSE%20COZINHA%20CONTEMPORANEA%2FDSC09366_ultra.webp')`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/60" />
      </div>

      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <div className="animate-fade-in-up max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            Sabor contemporâneo, saúde e sofisticação. Viva a experiência Sense.
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl mb-8 max-w-3xl mx-auto font-light leading-relaxed">
            Buffet a quilo com culinária brasileira sofisticada, equilibrada e saudável no coração do Setor Bueno
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="#sobre"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector('#sobre')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="px-8 py-4 bg-orange-primary text-white rounded-full hover:bg-orange-dark transition-all duration-300 hover:scale-105 shadow-lg font-medium"
            >
              Conheça Nosso Espaço
            </a>
            <a
              href="#localizacao"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector('#localizacao')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="px-8 py-4 border-2 border-sage text-white rounded-full hover:bg-sage transition-all duration-300 hover:scale-105 flex items-center gap-2 font-medium"
            >
              <MapPin size={20} />
              Ver Localização
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-white rounded-full" />
        </div>
      </div>

      <style>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in-up {
          animation: fade-in-up 1s ease-out;
        }
      `}</style>
    </section>
  );
}

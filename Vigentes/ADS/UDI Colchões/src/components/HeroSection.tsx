import { ArrowRight, MessageCircle, Sparkles, Moon, Star } from 'lucide-react';

export default function HeroSection() {
  const badges = [
    '12x sem juros',
    'Showroom Amplo',
    'Marcas de Confiança',
    'Sob Medida',
  ];

  return (
    <section id="inicio" className="relative min-h-screen flex items-center overflow-hidden pt-20 md:pt-24 lg:pt-0">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            'url(https://storage-admin.lucasmendes.dev/api/v1/buckets/site-sp/objects/download?preview=true&prefix=udicolch%C3%B5es%2Floja.jpeg&version_id=null)',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-primary/85 via-primary-medium/75 to-primary-vibrant/60"></div>
      </div>

      <div className="absolute inset-0 pointer-events-none">
        <Moon className="absolute top-20 right-20 text-white/10 animate-float hidden lg:block" size={80} />
        <Star className="absolute top-40 left-32 text-white/10 animate-float-delay-1 hidden lg:block" size={40} />
        <Star className="absolute bottom-32 right-40 text-white/10 animate-float-delay-2 hidden lg:block" size={50} />
        <Sparkles className="absolute top-1/3 right-1/4 text-white/10 animate-float-delay-3 hidden lg:block" size={60} />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="max-w-3xl mx-auto lg:mx-0 text-center lg:text-left animate-fade-in-up">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white mb-4 leading-tight">
              Conforto para suas Noites
            </h1>
            <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white/95 mb-6 leading-tight">
              Colchões de Qualidade em Uberlândia
            </p>
            <p className="text-base sm:text-lg md:text-xl text-white/90 mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Transforme suas noites de sono com colchões das melhores marcas. Atendimento
              especializado, showroom amplo e parcelamento facilitado.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12 justify-center lg:justify-start">
              <a
                href="https://wa.me/5534996610265"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-primary-vibrant text-white text-lg font-bold rounded-xl hover:bg-primary-medium transition-all hover:scale-105 shadow-2xl group"
              >
                <MessageCircle size={24} />
                Falar no WhatsApp
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#produtos"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-transparent border-2 border-white text-white text-lg font-bold rounded-xl hover:bg-white hover:text-primary transition-all"
              >
                Conhecer Produtos
              </a>
            </div>

            <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
              {badges.map((badge, index) => (
                <div
                  key={badge}
                  className="px-5 py-2.5 bg-white/95 backdrop-blur-sm text-primary font-semibold rounded-full shadow-lg animate-slide-in-right"
                  style={{ animationDelay: `${1 + index * 0.15}s` }}
                >
                  {badge}
                </div>
              ))}
            </div>
          </div>

          <div className="hidden lg:flex items-center justify-center animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            <img
              src="https://storage-admin.lucasmendes.dev/api/v1/buckets/site-sp/objects/download?preview=true&prefix=udicolch%C3%B5es%2Flogocomfundo.jpg&version_id=null"
              alt="UDI Colchões Logo"
              className="max-w-md w-30 h-auto rounded-3xl shadow-2xl"
            />
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px) scale(0.98);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        @keyframes slide-in-right {
          from {
            opacity: 0;
            transform: translateX(30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-20px) rotate(5deg);
          }
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out 0.2s both;
        }

        .animate-slide-in-right {
          animation: slide-in-right 0.6s ease-out both;
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }

        .animate-float-delay-1 {
          animation: float 7s ease-in-out infinite 1s;
        }

        .animate-float-delay-2 {
          animation: float 8s ease-in-out infinite 2s;
        }

        .animate-float-delay-3 {
          animation: float 5s ease-in-out infinite 1.5s;
        }
      `}</style>
    </section>
  );
}

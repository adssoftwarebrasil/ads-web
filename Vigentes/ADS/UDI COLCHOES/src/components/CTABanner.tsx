import { MessageCircle, MapPin, Bed, Moon, Star } from 'lucide-react';

export default function CTABanner() {
  return (
    <section className="relative min-h-[500px] md:h-[600px] flex items-center justify-center overflow-hidden py-20 md:py-0">
      <div
        className="absolute inset-0 bg-cover bg-center md:bg-fixed"
        style={{
          backgroundImage:
            'url(https://storage.lucasmendes.dev/site-sp/udicolch%C3%B5es%2Fimgi_13_imgi_26_AdobeStock_299598572-scaled-1.jpg)',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-primary-navy/95 via-primary/90 to-primary-navy/95"></div>
      </div>

      <div className="absolute inset-0 pointer-events-none opacity-15">
        <Bed className="absolute top-20 left-20 text-white animate-float hidden md:block" size={60} />
        <Moon className="absolute top-32 right-32 text-white animate-float-delay hidden md:block" size={80} />
        <Star className="absolute bottom-32 left-40 text-white animate-float-delay-2 hidden md:block" size={50} />
        <Star className="absolute bottom-20 right-24 text-white animate-float-delay-3 hidden md:block" size={40} />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10 text-center">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-4 animate-fade-in-down">
          Visite Nosso Showroom
        </h2>
        <p className="text-xl sm:text-2xl lg:text-3xl font-bold text-white/95 mb-4 animate-fade-in-up">
          Experimente nossos colchões e escolha o seu preferido
        </p>
        <p className="text-base sm:text-lg text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed animate-fade-in-up">
          Teste pessoalmente a qualidade dos nossos produtos. Nossa equipe está pronta para ajudar
          você a encontrar o colchão perfeito.
        </p>

        <a
          href="https://wa.me/5534996610265"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 px-10 sm:px-14 py-4 sm:py-5 bg-white text-primary text-lg sm:text-xl font-black rounded-full hover:scale-110 transition-all shadow-2xl hover:shadow-3xl mb-6 animate-bounce-in"
        >
          <MessageCircle size={28} className="text-[#25D366]" />
          Falar no WhatsApp
        </a>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-2 text-white/90 text-base sm:text-lg animate-fade-in-up">
          <MapPin size={20} className="flex-shrink-0" />
          <a
            href="https://www.google.com/maps/search/?api=1&query=Av.+João+Pessoa,+635+-+Martins,+Uberlândia+-+MG"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors underline"
          >
            Av. João Pessoa, 635 - Martins, Uberlândia - MG
          </a>
        </div>
      </div>

      <style>{`
        @keyframes fade-in-down {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes bounce-in {
          0% {
            opacity: 0;
            transform: scale(0.3);
          }
          50% {
            transform: scale(1.05);
          }
          70% {
            transform: scale(0.9);
          }
          100% {
            opacity: 1;
            transform: scale(1);
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

        .animate-fade-in-down {
          animation: fade-in-down 0.8s ease-out;
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out 0.2s both;
        }

        .animate-bounce-in {
          animation: bounce-in 1s ease-out 0.4s both;
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }

        .animate-float-delay {
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

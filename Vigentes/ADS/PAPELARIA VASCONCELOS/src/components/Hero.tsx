import { Pencil, Ruler, BookOpen, Sparkles, ShoppingBag, MessageCircle } from 'lucide-react';

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-[rgb(45,52,142)] via-[rgb(18,70,156)] via-30% via-[rgb(0,148,216)] via-70% to-[rgb(18,70,156)] pt-24 md:pt-20"
    >
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              'radial-gradient(circle at 25px 25px, white 2%, transparent 0%), radial-gradient(circle at 75px 75px, white 2%, transparent 0%)',
            backgroundSize: '100px 100px',
          }}
        ></div>
      </div>

      <div className="absolute inset-0 opacity-15 hidden md:block">
        <div className="absolute top-24 left-[8%] animate-float">
          <Pencil width={56} height={56} strokeWidth={1.5} className="lucide lucide-pencil text-white drop-shadow-2xl" />
        </div>
        <div className="absolute top-32 right-[10%] animate-float-delayed-1">
          <Ruler width={56} height={56} strokeWidth={1.5} className="lucide lucide-ruler text-white drop-shadow-2xl" />
        </div>
        <div className="absolute bottom-40 left-[15%] animate-float-delayed-2">
          <BookOpen width={52} height={52} strokeWidth={1.5} className="lucide lucide-book-open text-white drop-shadow-2xl" />
        </div>
        <div className="absolute bottom-32 right-[20%] animate-float-delayed-3">
          <Sparkles width={52} height={52} strokeWidth={1.5} className="lucide lucide-sparkles text-white drop-shadow-2xl" />
        </div>
        <div className="absolute top-1/2 left-[5%] animate-float-delayed-1">
          <Sparkles width={44} height={44} strokeWidth={1.5} className="lucide lucide-sparkles text-white drop-shadow-2xl" />
        </div>
        <div className="absolute top-[35%] right-[8%] animate-float-delayed-2">
          <BookOpen width={44} height={44} strokeWidth={1.5} className="lucide lucide-book-open text-white drop-shadow-2xl" />
        </div>
        <div className="absolute bottom-[60%] left-[25%] animate-float-delayed-3">
          <Ruler width={48} height={48} strokeWidth={1.5} className="lucide lucide-ruler text-white drop-shadow-2xl" />
        </div>
        <div className="absolute top-[45%] right-[30%] animate-float">
          <Pencil width={40} height={40} strokeWidth={1.5} className="lucide lucide-pencil text-white drop-shadow-2xl" />
        </div>
      </div>

      <div className="absolute inset-0 opacity-10 md:hidden">
        <div className="absolute top-24 left-[5%] animate-float">
          <Pencil width={36} height={36} strokeWidth={1.5} className="lucide lucide-pencil text-white" />
        </div>
        <div className="absolute top-32 right-[8%] animate-float-delayed-1">
          <Ruler width={36} height={36} strokeWidth={1.5} className="lucide lucide-ruler text-white" />
        </div>
        <div className="absolute bottom-32 left-[10%] animate-float-delayed-2">
          <BookOpen width={32} height={32} strokeWidth={1.5} className="lucide lucide-book-open text-white" />
        </div>
        <div className="absolute bottom-40 right-[12%] animate-float-delayed-3">
          <Sparkles width={32} height={32} strokeWidth={1.5} className="lucide lucide-sparkles text-white" />
        </div>
      </div>

      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.15)_0%,transparent_70%)] opacity-40"></div>

      <div className="absolute inset-0 overflow-hidden opacity-10">
        <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-white to-transparent animate-pulse"></div>
        <div
          className="absolute top-0 right-1/4 w-px h-full bg-gradient-to-b from-transparent via-white to-transparent animate-pulse"
          style={{ animationDelay: '1s' }}
        ></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div className="max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 sm:px-6 py-2 sm:py-3 rounded-full mb-6 sm:mb-8 md:mb-10 border border-white/40 shadow-lg animate-fadeInDown">
            <Sparkles
              width={24}
              height={24}
              strokeWidth={2}
              className="lucide lucide-sparkles w-3.5 h-3.5 sm:w-4 sm:h-4 text-white flex-shrink-0"
            />
            <p className="text-white font-bold text-[0.65rem] sm:text-sm md:text-base tracking-wider whitespace-nowrap">
              26 ANOS DE TRADIÇÃO
            </p>
          </div>
          <h1
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-extrabold text-white mb-6 sm:mb-8 leading-tight tracking-tight animate-fadeInUp drop-shadow-2xl"
            style={{ animationDelay: '0.1s' }}
          >
            Papelaria Vasconcelos
          </h1>
          <div
            className="flex items-center justify-center gap-3 mb-8 sm:mb-10 animate-fadeInUp"
            style={{ animationDelay: '0.2s' }}
          >
            <div className="w-16 sm:w-20 md:w-24 h-[2px] bg-gradient-to-r from-transparent via-white to-white/50"></div>
            <Sparkles width={24} height={24} strokeWidth={2} className="lucide lucide-sparkles w-4 h-4 text-white" />
            <div className="w-16 sm:w-20 md:w-24 h-[2px] bg-gradient-to-l from-transparent via-white to-white/50"></div>
          </div>
          <p
            className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-white/95 mb-12 sm:mb-14 lg:mb-16 leading-relaxed font-light max-w-4xl mx-auto animate-fadeInUp drop-shadow-lg"
            style={{ animationDelay: '0.3s' }}
          >
            Tudo em papelaria, material escolar, impressão e serviços de recarga.
            <span className="block mt-2 font-medium">Sua solução completa em Afogados.</span>
          </p>
          <div
            className="flex flex-col sm:flex-row gap-4 sm:gap-5 justify-center items-stretch sm:items-center max-w-2xl mx-auto mb-10 sm:mb-12 animate-fadeInUp"
            style={{ animationDelay: '0.4s' }}
          >
            <a
              href="#produtos"
              className="group relative w-full sm:w-auto bg-white text-[rgb(45,52,142)] px-8 sm:px-10 py-4 sm:py-5 rounded-full text-base sm:text-lg font-bold hover:bg-gray-50 transition-all duration-300 transform hover:scale-105 shadow-[0_10px_40px_rgba(255,255,255,0.3)] hover:shadow-[0_15px_50px_rgba(255,255,255,0.4)] overflow-hidden"
            >
              <span className="relative z-10 flex items-center justify-center gap-2">
                <ShoppingBag width={24} height={24} strokeWidth={2} className="lucide lucide-shopping-bag w-5 h-5" />
                Ver Produtos
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-[rgb(0,148,216)] to-[rgb(18,70,156)] opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
            </a>
            <a
              href="https://wa.me/5581995483408?text=Olá! Vim do site e gostaria de saber mais sobre os produtos."
              target="_blank"
              rel="noopener noreferrer"
              className="group relative w-full sm:w-auto border-2 border-white bg-white/10 backdrop-blur-sm text-white px-8 sm:px-10 py-4 sm:py-5 rounded-full text-base sm:text-lg font-bold hover:bg-white hover:text-[rgb(45,52,142)] transition-all duration-300 transform hover:scale-105 shadow-[0_10px_40px_rgba(255,255,255,0.2)] hover:shadow-[0_15px_50px_rgba(255,255,255,0.3)] overflow-hidden"
            >
              <span className="relative z-10 flex items-center justify-center gap-2">
                <MessageCircle width={24} height={24} strokeWidth={2} className="lucide lucide-message-circle w-5 h-5" />
                Falar no WhatsApp
              </span>
              <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </a>
          </div>
          <div
            className="flex flex-wrap justify-center gap-4 sm:gap-6 lg:gap-8 text-white/90 text-xs sm:text-sm animate-fadeInUp"
            style={{ animationDelay: '0.5s' }}
          >
            <div className="flex items-center gap-2 backdrop-blur-sm bg-white/10 px-4 py-2 rounded-full">
              <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
              <span>Entrega em Afogados</span>
            </div>
            <div className="flex items-center gap-2 backdrop-blur-sm bg-white/10 px-4 py-2 rounded-full">
              <div className="w-2 h-2 bg-white rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
              <span>Segunda a Sábado</span>
            </div>
            <div className="flex items-center gap-2 backdrop-blur-sm bg-white/10 px-4 py-2 rounded-full"></div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce hidden lg:block">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-white/70 rounded-full animate-scroll-indicator"></div>
        </div>
      </div>
    </section>
  );
}

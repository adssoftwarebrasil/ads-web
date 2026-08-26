import { Zap, Phone, ChevronRight, Star, ShoppingCart, Clock } from 'lucide-react';

const WHATSAPP_URL =
  'https://wa.me/5566984052994?text=Ol%C3%A1!%20Gostaria%20de%20fazer%20um%20pedido%20de%20g%C3%A1s%20ou%20%C3%A1gua.';

const stats = [
  { Icon: Star, title: '5 Anos', subtitle: 'De experiência' },
  { Icon: ShoppingCart, title: 'Sem Taxa', subtitle: 'Entrega grátis' },
  { Icon: Clock, title: '7h às 22h', subtitle: 'Todos os dias' },
];

export default function Hero() {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center pt-20">
      <div className="absolute inset-0 z-0">
        <img
          src="https://storage.lucasmendes.dev/site-sp/kerbergas%2Fhero.jpg"
          alt="Kerber Gás - Entrega Rápida em Sinop MT"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/70 to-black/50"></div>
        <div className="absolute top-20 left-10 w-72 h-72 bg-[rgb(248,130,31)]/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-orange-600/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl">
          <div className="inline-flex items-center bg-gradient-to-r from-[rgb(248,130,31)] to-orange-600 text-white px-5 py-2.5 rounded-full text-sm font-bold mb-6 shadow-xl animate-bounce-slow">
            <Zap className="w-4 h-4 mr-2" />
            Entrega Rápida em Sinop - MT
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black text-white mb-4 sm:mb-6 leading-tight animate-fade-in-up">
            Seu Gás Acabou?
            <br />
            <span className="text-[rgb(248,130,31)] drop-shadow-2xl">
              Resolvemos Agora!
            </span>
          </h1>
          <p className="text-lg sm:text-xl lg:text-2xl text-gray-200 mb-6 sm:mb-8 font-medium animate-fade-in-up animation-delay-200">
            <span className="font-bold text-white">Entrega rápida</span> •{' '}
            <span className="font-bold text-white">Sem taxa</span> •{' '}
            <span className="font-bold text-[rgb(248,130,31)]">Melhor preço</span>
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-8 sm:mb-10 animate-fade-in-up animation-delay-400">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-gradient-to-r from-[rgb(248,130,31)] to-orange-600 text-white px-6 sm:px-8 py-3.5 sm:py-4 rounded-full hover:from-orange-600 hover:to-[rgb(248,130,31)] transition-all duration-300 shadow-2xl hover:shadow-[0_0_40px_rgba(248,130,31,0.6)] font-bold text-base sm:text-lg flex items-center justify-center transform hover:scale-105"
            >
              <Phone className="w-5 h-5 mr-2 animate-wiggle" />
              Pedir pelo WhatsApp
              <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-2 transition-transform" />
            </a>
            <a
              href="tel:6684052994"
              className="group bg-white/10 backdrop-blur-md text-white border-2 border-white/30 px-6 sm:px-8 py-3.5 sm:py-4 rounded-full hover:bg-white/20 hover:border-white/50 transition-all duration-300 font-bold text-base sm:text-lg flex items-center justify-center"
            >
              <Phone className="w-5 h-5 mr-2" />
              (66) 98405-2994
            </a>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 animate-fade-in-up animation-delay-600">
            {stats.map(({ Icon, title, subtitle }) => (
              <div
                key={title}
                className="bg-white/10 backdrop-blur-md rounded-xl sm:rounded-2xl p-4 border border-white/20 hover:bg-white/15 hover:border-[rgb(248,130,31)]/50 transition-all duration-300 group"
              >
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-[rgb(248,130,31)] to-orange-600 rounded-full flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform">
                    <Icon className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                  </div>
                  <div>
                    <p className="text-white font-bold text-xl sm:text-2xl">{title}</p>
                    <p className="text-gray-300 text-xs sm:text-sm">{subtitle}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce hidden sm:flex">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-scroll-down"></div>
        </div>
      </div>
    </section>
  );
}

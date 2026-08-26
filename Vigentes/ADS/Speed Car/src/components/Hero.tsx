import { ChevronDown, Star, Car, MapPin, Clock } from 'lucide-react';
import WhatsAppIcon from './WhatsAppIcon';

const stats = [
  { icon: Star, iconClass: 'lucide lucide-star', title: '4.8 no Google', subtitle: 'Avaliação' },
  { icon: Car, iconClass: 'lucide lucide-car', title: 'Leves e Camionetas', subtitle: 'Veículos' },
  { icon: MapPin, iconClass: 'lucide lucide-map-pin', title: 'Sinop - MT', subtitle: 'Localização' },
  { icon: Clock, iconClass: 'lucide lucide-clock', title: 'Seg a Sex', subtitle: '7:15 - 18:00' },
];

export default function Hero() {
  return (
    <section id="inicio" className="relative min-h-screen flex flex-col">
      <div className="absolute inset-0">
        <img
          src="https://storage.lucasmendes.dev/site-sp/speedcar%2Fimg%2Fhero-background.webp"
          alt=""
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/80"></div>
      </div>
      <div className="relative z-10 flex-1 flex items-center justify-center px-4 pt-20">
        <div className="text-center max-w-4xl mx-auto">
          <div className="animate-fade-in-up">
            <img
              src="https://storage.lucasmendes.dev/site-sp/speedcar%2Fimg%2Flogo-sem-fundo.webp"
              alt="SpeedCar"
              className="h-20 sm:h-24 mx-auto mb-8"
            />
          </div>
          <h1
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white mb-6 leading-[1.1] animate-fade-in-up"
            style={{ animationDelay: '150ms' }}
          >
            A Oficina Mecânica <span className="text-speedcar-red">de Confiança</span>
            <br className="hidden sm:block" /> em Sinop
          </h1>
          <p
            className="text-base sm:text-lg md:text-xl text-white/75 mb-10 max-w-2xl mx-auto leading-relaxed animate-fade-in-up"
            style={{ animationDelay: '300ms' }}
          >
            Manutenção completa para veículos leves e camionetas. Qualidade, agilidade e preço justo
            para cuidar do seu carro como ele merece.
          </p>
          <div
            className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up"
            style={{ animationDelay: '450ms' }}
          >
            <a
              href="http://wa.me/5566984369336"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-speedcar-red hover:bg-red-700 text-white px-8 py-4 rounded-lg text-sm sm:text-base font-bold tracking-wide uppercase transition-all hover:scale-105 hover:shadow-xl hover:shadow-red-900/30 inline-flex items-center justify-center gap-2"
            >
              <WhatsAppIcon className="w-5 h-5" />
              Agende pelo WhatsApp
            </a>
            <a
              href="#servicos"
              className="border-2 border-white/25 hover:border-white/60 text-white px-8 py-4 rounded-lg text-sm sm:text-base font-bold tracking-wide uppercase transition-all hover:bg-white/10 inline-flex items-center justify-center"
            >
              Nossos Serviços
            </a>
          </div>
        </div>
      </div>
      <div className="absolute bottom-24 sm:bottom-20 left-1/2 -translate-x-1/2 animate-bounce z-10">
        <ChevronDown className="lucide lucide-chevron-down w-7 h-7 text-white/40" />
      </div>
      <div className="relative z-10 mt-auto">
        <div className="bg-black/90 backdrop-blur-sm border-t border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-white/10">
              {stats.map((stat) => {
                const Icon = stat.icon;
                return (
                  <div key={stat.title} className="flex items-center gap-3 py-5 px-4 sm:px-6">
                    <Icon className={`${stat.iconClass} w-5 h-5 text-speedcar-red flex-shrink-0`} />
                    <div>
                      <p className="text-white text-xs sm:text-sm font-semibold leading-tight">
                        {stat.title}
                      </p>
                      <p className="text-white/50 text-[11px] sm:text-xs">{stat.subtitle}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

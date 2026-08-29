import { Zap, Phone, ChevronRight, Truck, DollarSign, Clock } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

interface Badge {
  icon: LucideIcon;
  iconClass: string;
  text: string;
}

const badges: Badge[] = [
  { icon: Truck, iconClass: 'lucide lucide-truck', text: 'Entrega sem taxa de entrega' },
  { icon: DollarSign, iconClass: 'lucide lucide-dollar-sign', text: 'Melhor preco da cidade' },
  { icon: Clock, iconClass: 'lucide lucide-clock', text: 'Seg a Sab: 7h as 19h | Dom: 7h as 12h' },
];

export default function CTA() {
  return (
    <section className="relative bg-gradient-to-br from-[rgb(248,130,31)] via-orange-500 to-amber-500 overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-black/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-white/5 rounded-full blur-3xl"></div>
      </div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center bg-white/20 backdrop-blur-sm text-white px-5 py-2.5 rounded-full text-sm font-bold mb-8 border border-white/30">
            <Zap className="lucide lucide-zap w-4 h-4 mr-2" />
            Entrega Rapida em Sorriso
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-6xl font-black text-white mb-6 leading-tight">
            Precisando de Gas
            <br />
            ou Agua?
          </h2>
          <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto font-medium">
            Atendimento rapido pelo WhatsApp. Entrega sem taxa em toda Sorriso.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <a
              href="https://wa.me/5566999668040?text=Ola!%20Gostaria%20de%20fazer%20um%20pedido%20de%20gas%20ou%20agua."
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-gray-900 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-800 transition-all duration-300 shadow-2xl hover:scale-105 inline-flex items-center"
            >
              <Phone className="lucide lucide-phone w-5 h-5 mr-3" />
              Pedir pelo WhatsApp
              <ChevronRight className="lucide lucide-chevron-right w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="tel:66999668040"
              className="group bg-white/20 backdrop-blur-sm text-white border-2 border-white/40 px-8 py-4 rounded-full font-bold text-lg hover:bg-white/30 transition-all duration-300 inline-flex items-center"
            >
              <Phone className="lucide lucide-phone w-5 h-5 mr-3" />
              (66) 99966-8040
            </a>
          </div>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-10">
            {badges.map((badge) => {
              const Icon = badge.icon;
              return (
                <div key={badge.text} className="flex items-center space-x-2.5 text-white/90">
                  <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
                    <Icon className={`${badge.iconClass} w-4 h-4`} />
                  </div>
                  <span className="text-sm font-medium">{badge.text}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

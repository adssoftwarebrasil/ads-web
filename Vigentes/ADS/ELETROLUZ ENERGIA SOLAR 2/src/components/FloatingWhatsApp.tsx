import { Phone } from 'lucide-react';
import { BLUE, YELLOW, WA_SOLAR_MSG } from '../theme';

export default function FloatingWhatsApp() {
  return (
    <div className="fixed bottom-6 right-6 lg:bottom-8 lg:right-8 z-[9999] flex flex-col items-end">
      <div className="flex items-center group">
        <div className="mr-3 bg-white px-4 py-2 rounded-full shadow-lg border border-[rgb(254,201,1)] animate-fadeIn hidden md:block">
          <p className="text-[rgb(0,73,176)] font-bold text-sm">Fale Conosco</p>
        </div>
        <a
          href={WA_SOLAR_MSG}
          className="wa-float-shine w-16 h-16 lg:w-20 lg:h-20 rounded-full flex items-center justify-center shadow-2xl transition-all duration-300 relative overflow-hidden"
          style={{ backgroundColor: YELLOW, cursor: 'pointer', zIndex: 10 }}
        >
          <div className="absolute inset-0 rounded-full animate-ping-slow opacity-30 bg-white"></div>
          <div className="relative z-10 flex flex-col items-center">
            <Phone
              width={28}
              height={28}
              className="lucide lucide-phone transition-transform duration-500 "
              style={{ color: BLUE, fill: BLUE, fillOpacity: 0.1 }}
            />
            <span className="text-[10px] font-black text-[rgb(0,73,176)] mt-0.5 leading-none">WA.ME</span>
          </div>
        </a>
      </div>
    </div>
  );
}

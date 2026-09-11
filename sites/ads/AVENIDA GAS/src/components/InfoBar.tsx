import { Phone, Clock, MapPin } from 'lucide-react';

export default function InfoBar() {
  return (
    <div className="bg-[#DBCC5E] py-4 animate-slide-up">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center md:text-left">
          <div className="flex items-center justify-center md:justify-start gap-3">
            <Phone className="lucide lucide-phone w-5 h-5 text-[#021C3F]" />
            <div className="text-[#021C3F] font-semibold">
              <a href="tel:+5566996186661" className="hover:underline">
                (66) 99618-6661
              </a>
            </div>
          </div>
          <div className="flex items-center justify-center gap-3">
            <Clock className="lucide lucide-clock w-5 h-5 text-[#021C3F]" />
            <div className="text-[#021C3F] font-semibold">Aberto até 21:00</div>
          </div>
          <div className="flex items-center justify-center md:justify-end gap-3">
            <MapPin className="lucide lucide-map-pin w-5 h-5 text-[#021C3F]" />
            <div className="text-[#021C3F] font-semibold">
              Jardim Imperial, Sinop - MT
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

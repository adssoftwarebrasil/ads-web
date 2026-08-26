import { Clock, MapPin, Phone } from 'lucide-react';

export default function TopBar() {
  return (
    <div className="bg-gradient-to-r from-[rgb(0,0,160)] to-[rgb(0,0,200)] text-white py-2 px-4">
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-center md:justify-between gap-3 text-xs md:text-sm">
        <div className="flex items-center gap-2">
          <Clock className="w-4 h-4" />
          <span>Seg-Sex: 08h-18h | Sáb: 08h-14h</span>
        </div>
        <div className="flex items-center gap-2">
          <MapPin className="w-4 h-4" />
          <span>Av. Afonso Pena, 1367 - Uberlândia/MG</span>
        </div>
        <a
          href="tel:3432362803"
          className="flex items-center gap-2 hover:text-blue-200 transition-colors"
        >
          <Phone className="w-4 h-4" />
          <span>(34) 3236-2803</span>
        </a>
      </div>
    </div>
  );
}

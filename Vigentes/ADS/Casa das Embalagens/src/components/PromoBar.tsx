import { Truck, Phone } from 'lucide-react';

export default function PromoBar() {
  return (
    <div className="bg-brand-red text-white text-xs sm:text-sm font-medium py-2 px-4 flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-6 text-center">
      <span className="flex items-center gap-1.5">
        <Truck size={14} className="flex-shrink-0" />
        Entregamos em toda a região de Trindade e Goiânia
      </span>
      <span className="hidden sm:block text-white/40">|</span>
      <a
        href="https://wa.me/5562984075879"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-1.5 hover:text-brand-yellow transition-colors"
      >
        <Phone size={14} className="flex-shrink-0" />
        (62) 98407-5879
      </a>
    </div>
  );
}

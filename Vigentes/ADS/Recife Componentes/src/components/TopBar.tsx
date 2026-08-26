import { Phone, MapPin } from 'lucide-react';

export default function TopBar() {
  return (
    <div className="bg-[rgb(12,27,76)] text-white py-2 px-4">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2 text-sm">
        <div className="flex items-center gap-2">
          <Phone className="lucide lucide-phone w-4 h-4" />
          <a href="http://wa.me/558199266617" className="hover:text-[rgb(231,195,37)] transition-colors">(81) 9 9926-6617</a>
        </div>
        <div className="flex items-center gap-2">
          <MapPin className="lucide lucide-map-pin w-4 h-4" />
          <span>R. Itacari, 334 - Imbiribeira, Recife - PE</span>
        </div>
      </div>
    </div>
  );
}

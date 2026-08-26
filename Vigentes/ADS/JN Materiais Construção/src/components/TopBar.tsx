import { Clock, Phone } from 'lucide-react';

export default function TopBar() {
  return (
    <div className="bg-[rgb(34,39,69)] text-white py-2 hidden md:block">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center text-sm">
          <div className="flex items-center gap-2">
            <Clock width={16} height={16} />
            <span>Seg-Sáb: 07:00 - 17:00</span>
          </div>
          <div className="flex items-center gap-2">
            <Phone width={16} height={16} />
            <a
              href="tel:+558499482060"
              className="hover:text-[rgb(216,27,27)] transition-colors"
            >
              (84) 99498-2060
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

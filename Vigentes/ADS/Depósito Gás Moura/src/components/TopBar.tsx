import { Phone, Clock, Instagram } from 'lucide-react';

export default function TopBar() {
  return (
    <div className="bg-[rgb(28,59,126)] text-white py-2 px-4">
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between text-xs md:text-sm gap-2">
        <div className="flex items-center gap-4 flex-wrap">
          <a
            href="tel:6232581139"
            className="flex items-center gap-2 hover:text-[rgb(228,29,32)] transition-colors"
          >
            <Phone className="lucide lucide-phone" width={14} height={14} />
            <span>(62) 3258-1139</span>
          </a>
          <div className="flex items-center gap-2">
            <Clock className="lucide lucide-clock" width={14} height={14} />
            <span>Seg-Sáb: 7:30-21h | Dom: 7:30-17h</span>
          </div>
        </div>
        <a
          href="https://www.instagram.com/depositodegasmoura/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 hover:text-[rgb(228,29,32)] transition-colors"
        >
          <Instagram className="lucide lucide-instagram" width={14} height={14} />
          <span>@depositodegasmoura</span>
        </a>
      </div>
    </div>
  );
}

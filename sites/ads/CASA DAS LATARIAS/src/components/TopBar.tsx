import { Clock, Phone } from 'lucide-react';

export default function TopBar() {
  return (
    <div
      className="hidden md:flex items-center justify-between px-6 py-2 text-sm text-white"
      style={{ backgroundColor: 'rgb(31, 66, 131)' }}
    >
      <div className="flex items-center gap-5">
        <span className="flex items-center gap-1.5">
          <Clock width={14} height={14} className="lucide lucide-clock" />
          Seg–Sáb: 8h às 18h
        </span>
        <span className="flex items-center gap-1.5">
          <Phone width={14} height={14} className="lucide lucide-phone" />
          (98) 9 8563-0349
        </span>
      </div>
      <div className="flex items-center gap-4">
        <a
          href="https://www.instagram.com/casa_das_latariasslz"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:opacity-75 transition-opacity"
        >
          @casa_das_latariasslz
        </a>
      </div>
    </div>
  );
}

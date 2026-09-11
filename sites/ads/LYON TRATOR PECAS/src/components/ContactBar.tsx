import { useState, useEffect } from 'react';
import { MapPin, Clock, Phone } from 'lucide-react';

export default function ContactBar() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      className={`fixed top-20 left-0 right-0 bg-[#fbba00] text-[#1a1a18] py-3 z-40 shadow-lg transition-transform duration-300 ${
        isVisible ? 'translate-y-0' : '-translate-y-full'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap items-center justify-center gap-4 md:gap-8 text-sm md:text-base font-semibold">
          <div className="flex items-center gap-2">
            <MapPin size={18} />
            <span>Boa Vista-RR</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock size={18} />
            <span>Seg-Sex 07:30-18:00</span>
          </div>
          <a
            href="https://wa.me/5595984303773"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:opacity-80 transition-opacity"
          >
            <Phone size={18} />
            <span>(95) 98430-3773</span>
          </a>
        </div>
      </div>
    </div>
  );
}

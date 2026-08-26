import { useEffect, useState } from 'react';
import { UtensilsCrossed } from 'lucide-react';
import { useIfoodPicker } from '../lib/ifood';

export default function FloatingButton() {
  const [visible, setVisible] = useState(false);
  const abrirIfood = useIfoodPicker();

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <button
      aria-label="Peça pelo iFood"
      onClick={abrirIfood}
      className={`fixed bottom-6 right-6 z-40 bg-[#EA1D2C] hover:bg-[#D01826] text-white p-4 rounded-full shadow-2xl transition-all duration-300 transform hover:scale-110 group ${
        visible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0 pointer-events-none'
      }`}
    >
      <UtensilsCrossed className="lucide lucide-utensils-crossed w-7 h-7 animate-pulse" />
      <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-[#1A1A1A] text-white px-4 py-2 rounded-lg text-sm font-semibold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none shadow-lg">
        Peça pelo iFood!
      </span>
      <span className="absolute -top-1 -right-1 w-4 h-4 bg-[#EA1D2C] rounded-full animate-ping"></span>
      <span className="absolute -top-1 -right-1 w-4 h-4 bg-[#EA1D2C] rounded-full"></span>
    </button>
  );
}

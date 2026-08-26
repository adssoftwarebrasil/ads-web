import { Gift } from 'lucide-react';

export default function FloatingDiscount() {
  return (
    <button className="fixed left-0 top-1/2 z-40 group bg-accent-red w-[50px] sm:w-[55px] hover:w-[60px] py-4 rounded-r-xl shadow-lg shadow-accent-red/30 cursor-pointer transition-all duration-500 ease-in-out -translate-x-full -translate-y-1/2 opacity-0">
      <div className="flex flex-col items-center justify-center h-full">
        <Gift
          size={22}
          className="lucide lucide-gift text-white mb-4 animate-bounce"
          style={{ animationDuration: '2s' }}
        />
        <div
          className="text-white font-bold text-[11px] sm:text-xs tracking-widest uppercase whitespace-nowrap"
          style={{ writingMode: 'vertical-rl', textOrientation: 'mixed', transform: 'rotate(180deg)' }}
        >
          Ganhe 10% de Desconto
        </div>
      </div>
    </button>
  );
}

import { Phone } from 'lucide-react';
import { scrollToId } from '../lib/scroll';

export default function FloatingButton() {
  return (
    <div className="fixed bottom-6 right-6 z-50">
      <button
        onClick={() => scrollToId('contact')}
        className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-black p-4 rounded-full shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300 "
        aria-label="Contact Alba's Cleaning Services"
      >
        <Phone className="h-6 w-6" />
      </button>
      <div className="absolute inset-0 rounded-full bg-gradient-to-r from-yellow-400 to-yellow-500 animate-ping opacity-20"></div>
    </div>
  );
}

import { useState, useEffect } from 'react';
import { X } from 'lucide-react';

export function DeliveryBadge() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const heroSection = document.getElementById('hero');
      if (heroSection) {
        const heroBottom = heroSection.offsetTop + heroSection.offsetHeight;
        const scrollPosition = window.scrollY + window.innerHeight;

        if (scrollPosition > heroBottom) {
          setIsVisible(true);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div
      className={`fixed top-24 right-4 z-40 bg-[#DC2626] text-white px-6 py-4 rounded-lg shadow-2xl transition-all duration-500 ${
        isVisible ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
      }`}
    >
      <button
        onClick={() => setIsVisible(false)}
        className="absolute -top-2 -right-2 bg-white text-[#DC2626] rounded-full p-1 hover:scale-110 transition-transform"
      >
        <X className="w-4 h-4" />
      </button>
      <div className="flex items-center space-x-2">
        <span className="text-2xl animate-pulse-slow">🚨</span>
        <div>
          <p className="font-bold text-lg">Entregamos até 23:30!</p>
          <p className="text-sm opacity-90">Atendimento disponível agora</p>
        </div>
      </div>
    </div>
  );
}

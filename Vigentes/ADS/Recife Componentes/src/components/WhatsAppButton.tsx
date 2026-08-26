import { useState, useEffect } from 'react';

export default function WhatsAppButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 300);
    window.addEventListener('scroll', onScroll);
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <a
      href="http://wa.me/558199266617"
      target="_blank"
      rel="noopener noreferrer"
      className={`fixed bottom-6 right-6 z-50 transition-all duration-300 ${
        visible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
      }`}
      aria-label="Fale conosco no WhatsApp"
    >
      <div className="relative group">
        <div className="absolute inset-0 bg-[rgb(231,195,37)] rounded-full blur-md group-hover:blur-lg transition-all duration-300 opacity-50"></div>
        <div className="relative w-16 h-16 bg-[#25D366] rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform duration-300">
          <svg viewBox="0 0 32 32" className="w-9 h-9 fill-white" xmlns="http://www.w3.org/2000/svg">
            <path d="M16.002 2.667c-7.36 0-13.335 5.974-13.335 13.334 0 2.365.617 4.585 1.697 6.505l-1.781 5.315 5.474-1.725c1.852.998 3.968 1.571 6.219 1.571 7.36 0 13.334-5.974 13.334-13.334s-5.974-13.334-13.334-13.334zm0 24.445c-2.01 0-3.906-.536-5.542-1.474l-.396-.237-4.099 1.292 1.307-3.906-.26-.411c-1.034-1.646-1.63-3.594-1.63-5.677 0-6.146 5.001-11.147 11.147-11.147s11.147 5.001 11.147 11.147-5.001 11.147-11.147 11.147zm6.115-8.349c-.333-.167-1.984-.979-2.292-1.089-.307-.109-.531-.167-.755.167-.224.333-.865 1.089-1.063 1.313-.198.224-.396.25-.729.083-1.984-.991-3.286-1.771-4.594-4.016-.349-.599.349-.556 1-1.849.109-.224.055-.417-.027-.584-.083-.167-.755-1.818-.995-2.484-.281-.646-.562-.557-.755-.573-.198-.016-.417-.016-.641-.016s-.584.083-.891.417c-.307.333-1.172 1.146-1.172 2.797s1.198 3.24 1.365 3.464c.167.224 2.349 3.584 5.693 5.026 2.109.911 2.943.974 4.001.823.641-.094 1.984-.812 2.266-1.599.281-.787.281-1.463.198-1.599-.083-.135-.307-.224-.641-.391z"></path>
          </svg>
        </div>
        <div className="absolute -top-2 -right-2 w-5 h-5 bg-red-500 rounded-full border-2 border-white flex items-center justify-center">
          <span className="text-white text-xs font-bold">1</span>
        </div>
        <div className="absolute right-full mr-4 top-1/2 -translate-y-1/2 whitespace-nowrap bg-[#25D366] text-white px-4 py-2 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
          <span className="font-semibold">Fale Conosco!</span>
          <div className="absolute top-1/2 -translate-y-1/2 -right-1 w-2 h-2 bg-[#25D366] rotate-45"></div>
        </div>
      </div>
    </a>
  );
}

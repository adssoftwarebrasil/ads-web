import { useEffect, useState } from 'react';

export default function WhatsAppFloat() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <button
      type="button"
      aria-label="Falar no WhatsApp"
      className={`fixed bottom-6 right-6 z-50 transition-all duration-500 ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'
      }`}
    >
      <span className="absolute inset-0 rounded-full bg-[#25D366] animate-pulse-ring"></span>
      <span
        className="absolute inset-0 rounded-full bg-[#25D366] animate-pulse-ring"
        style={{ animationDelay: '1s' }}
      ></span>
      <div className="relative flex items-center gap-3 bg-[#25D366] hover:bg-[#20BA5A] text-white pl-4 pr-5 py-4 rounded-full shadow-[0_10px_30px_rgba(37,211,102,0.5)] hover:shadow-[0_15px_40px_rgba(37,211,102,0.8)] hover:scale-105 transition-all">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="w-7 h-7" fill="currentColor">
          <path d="M19.11 17.205c-.372 0-1.088 1.39-1.518 1.39a.63.63 0 0 1-.315-.1c-.802-.402-1.504-.817-2.163-1.447-.545-.516-1.146-1.29-1.46-1.963a.426.426 0 0 1-.073-.215c0-.33.99-.945.99-1.49 0-.143-.73-2.09-.832-2.335-.143-.372-.214-.487-.6-.487-.187 0-.36-.043-.53-.043-.302 0-.53.115-.746.315-.688.645-1.032 1.318-1.06 2.264v.114c-.015.99.472 1.977 1.017 2.794 1.23 1.82 2.64 3.41 4.508 4.582.616.387 2.554 1.55 3.237 1.55.817 0 2.678-.48 2.678-1.953 0-.1 0-.186-.043-.28-.116-.302-1.15-.93-1.467-1.07-.186-.1-.487-.202-.687-.202zm-2.95 8.285c-.53 0-1.06-.086-1.56-.187-1.46-.286-2.835-.93-4.08-1.72l-.287-.187-2.92.945.947-2.82-.19-.286c-.898-1.41-1.37-3.04-1.37-4.722 0-4.87 3.93-8.83 8.82-8.83 2.365 0 4.574.917 6.247 2.59a8.846 8.846 0 0 1 2.593 6.246c0 4.89-3.958 8.83-8.83 8.83zm7.48-16.315C21.66 7.18 18.97 6.06 16.14 6.06 10.31 6.06 5.56 10.795 5.55 16.625c0 1.86.487 3.675 1.403 5.276l-1.49 5.45 5.577-1.46a10.9 10.9 0 0 0 5.117 1.32h.005c5.83 0 10.582-4.736 10.59-10.567a10.517 10.517 0 0 0-3.11-7.48z"></path>
        </svg>
        <div className="hidden sm:block pr-1 leading-tight text-left">
          <p className="text-[10px] uppercase tracking-widest opacity-90 font-semibold">
            Atendimento
          </p>
          <p className="text-sm font-bold">Fale no WhatsApp</p>
        </div>
      </div>
    </button>
  );
}

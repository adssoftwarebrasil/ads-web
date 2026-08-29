import { useEffect, useState } from 'react';

export default function FloatingWhatsApp() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 300);
    window.addEventListener('scroll', onScroll);
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <a
      href="http://wa.me/5564999368011"
      target="_blank"
      rel="noopener noreferrer"
      className={`fixed bottom-6 right-6 z-50 w-16 h-16 bg-[#25D366] rounded-full shadow-2xl flex items-center justify-center transition-all duration-300 hover:scale-110 group ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'
      }`}
      aria-label="Falar no WhatsApp"
    >
      <svg viewBox="0 0 32 32" className="w-10 h-10 fill-white" xmlns="http://www.w3.org/2000/svg">
        <path d="M16.002 0C7.162 0 0 7.163 0 16.003c0 2.822.744 5.568 2.155 7.977L.062 31.93l8.166-2.14a15.962 15.962 0 007.774 1.98C24.842 31.77 32 24.607 32 15.767 32 7.163 24.842 0 16.002 0zm9.39 22.753c-.388 1.097-2.286 2.008-3.146 2.139-.86.132-1.583.387-5.346-1.113-4.813-1.92-7.896-6.784-8.134-7.093-.24-.31-1.922-2.558-1.922-4.877 0-2.32 1.218-3.459 1.65-3.931.432-.471.944-.59 1.26-.59.316 0 .63.004.908.016.29.014.68-.11 1.062.81.388.935 1.326 3.233 1.44 3.467.115.233.193.505.039.815-.155.31-.232.504-.465.775-.232.27-.49.604-.698.81-.233.232-.475.483-.204.948.27.465 1.203 1.984 2.584 3.213 1.777 1.58 3.275 2.072 3.738 2.305.465.232.736.194 1.007-.117.27-.31 1.162-1.355 1.472-1.822.31-.465.62-.388 1.046-.232.427.155 2.71 1.278 3.174 1.51.465.233.775.349.89.543.114.194.114 1.126-.274 2.223z" />
      </svg>
      <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full animate-ping"></span>
      <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full"></span>
      <div className="absolute right-20 bg-white px-4 py-2 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none">
        <p className="text-gray-800 font-semibold text-sm">Fale Conosco!</p>
      </div>
    </a>
  );
}

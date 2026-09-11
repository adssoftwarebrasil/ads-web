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
      href="https://wa.me/558888033252?text=Olá! Vim do site e gostaria de mais informações!"
      target="_blank"
      rel="noopener noreferrer"
      className={`fixed bottom-6 right-6 z-50 group transition-all duration-300 ${
        visible ? 'opacity-100 scale-100' : 'opacity-0 scale-75 pointer-events-none'
      }`}
      aria-label="Fale conosco no WhatsApp"
    >
      <div className="relative">
        <div className="absolute inset-0 bg-green-400 rounded-full animate-ping opacity-75"></div>
        <div className="relative bg-green-500 hover:bg-green-600 p-4 rounded-full shadow-2xl transition-all duration-300 group-hover:scale-110">
          <svg
            viewBox="0 0 32 32"
            className="w-8 h-8 text-white"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M16.002 0h-.004C7.164 0 0 7.163 0 16c0 3.495 1.127 6.724 3.038 9.351L1.05 31.015l5.856-1.936A15.93 15.93 0 0016.002 32C24.838 32 32 24.837 32 16S24.838 0 16.002 0z"></path>
            <path
              fill="#25D366"
              d="M16.002 29.443c-3.275 0-6.321-1.175-8.664-3.125l-4.24 1.402 1.429-4.15A13.39 13.39 0 012.557 16c0-7.383 6.005-13.387 13.387-13.387 7.383 0 13.387 6.004 13.387 13.387 0 7.382-6.004 13.386-13.329 13.443z"
            ></path>
            <path
              fill="#FFF"
              d="M22.875 18.43c-.362-.181-2.141-1.056-2.473-1.177-.331-.12-.573-.181-.814.182-.241.362-.935 1.177-1.146 1.418-.211.242-.422.272-.784.091-.362-.181-1.529-.563-2.912-1.796-1.076-.959-1.803-2.143-2.014-2.505-.211-.362-.022-.558.159-.738.162-.162.362-.422.543-.633.181-.211.241-.362.362-.603.12-.242.06-.453-.03-.634-.091-.181-.814-1.96-1.116-2.684-.293-.702-.592-.606-.814-.617-.211-.01-.452-.012-.693-.012-.241 0-.633.091-.965.453-.331.362-1.267 1.237-1.267 3.016s1.297 3.499 1.478 3.74c.181.242 2.548 3.893 6.174 5.458.863.373 1.537.596 2.062.762.866.275 1.654.236 2.278.143.695-.104 2.141-.875 2.442-1.72.302-.845.302-1.569.211-1.72-.09-.151-.332-.242-.693-.423z"
            ></path>
          </svg>
        </div>
        <div className="absolute -top-2 -left-2 bg-red-500 text-white text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center animate-pulse">
          1
        </div>
      </div>
      <div className="absolute right-full mr-4 top-1/2 -translate-y-1/2 bg-gray-900 text-white px-4 py-2 rounded-lg shadow-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none">
        <span className="text-sm font-semibold">Fale conosco!</span>
        <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 w-3 h-3 bg-gray-900 rotate-45"></div>
      </div>
    </a>
  );
}

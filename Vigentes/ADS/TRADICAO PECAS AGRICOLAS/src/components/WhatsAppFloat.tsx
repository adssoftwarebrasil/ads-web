import { useEffect, useState } from 'react';

export default function WhatsAppFloat() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 300);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <a
      href="https://wa.me/557736281005?text=Olá! Gostaria de saber mais sobre as peças agrícolas."
      target="_blank"
      rel="noopener noreferrer"
      className={`fixed bottom-6 right-6 z-50 group transition-all duration-300 ${
        visible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
      }`}
      aria-label="Fale conosco no WhatsApp"
    >
      <div className="relative">
        <div className="absolute inset-0 bg-green-400 rounded-full blur-xl opacity-50 group-hover:opacity-75 transition-opacity animate-pulse"></div>
        <div className="relative w-16 h-16 bg-green-500 hover:bg-green-600 rounded-full flex items-center justify-center shadow-2xl transform group-hover:scale-110 transition-all duration-300">
          <svg
            viewBox="0 0 32 32"
            className="w-9 h-9 fill-white"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M16 0C7.164 0 0 7.164 0 16c0 2.826.746 5.58 2.156 8L0 32l8.157-2.14A15.937 15.937 0 0016 32c8.836 0 16-7.164 16-16S24.836 0 16 0zm0 29.333c-2.58 0-5.08-.74-7.25-2.126l-.52-.312-5.387 1.414 1.44-5.255-.343-.54A13.272 13.272 0 012.667 16c0-7.364 5.97-13.333 13.333-13.333S29.333 8.636 29.333 16 23.364 29.333 16 29.333z"></path>
            <path d="M23.334 19.48c-.397-.2-2.353-1.162-2.717-1.295-.365-.133-.63-.2-.896.2-.265.397-1.029 1.295-1.262 1.56-.232.266-.464.3-.86.1-.398-.2-1.68-.62-3.2-1.976-1.183-1.055-1.981-2.358-2.214-2.755-.232-.398-.025-.613.175-.81.18-.18.397-.465.596-.697.2-.232.266-.398.398-.664.133-.265.067-.498-.033-.697-.1-.2-.896-2.158-1.228-2.955-.323-.776-.652-.671-.896-.684-.232-.012-.498-.015-.763-.015s-.697.1-1.062.498c-.365.398-1.394 1.362-1.394 3.32s1.427 3.852 1.627 4.117c.199.266 2.81 4.29 6.807 6.015.951.411 1.693.656 2.27.84.955.303 1.823.26 2.51.157.765-.114 2.353-.963 2.685-1.892.332-.93.332-1.726.232-1.893-.1-.166-.365-.266-.763-.465z"></path>
          </svg>
        </div>
        <div className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 rounded-full flex items-center justify-center animate-bounce">
          <span className="text-white text-xs font-bold">1</span>
        </div>
      </div>
      <div className="absolute right-20 top-1/2 -translate-y-1/2 bg-white text-[rgb(1,52,47)] px-4 py-2 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap font-semibold text-sm pointer-events-none">
        Fale Conosco!
        <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 rotate-45 w-2 h-2 bg-white"></div>
      </div>
    </a>
  );
}

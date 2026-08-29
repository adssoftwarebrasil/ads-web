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
      href="http://wa.me/556481322676"
      target="_blank"
      rel="noopener noreferrer"
      className={`fixed bottom-6 right-6 z-50 bg-[#25D366] hover:bg-[#20BA5A] text-white p-4 rounded-full shadow-2xl transition-all duration-300 transform hover:scale-110 group ${
        visible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
      }`}
      aria-label="Fale conosco no WhatsApp"
    >
      <div className="relative">
        <svg viewBox="0 0 32 32" className="w-8 h-8 fill-current" xmlns="http://www.w3.org/2000/svg">
          <path d="M16.002 0C7.164 0 0 7.164 0 16.002c0 2.832.738 5.491 2.032 7.8L.7 30.305l6.688-1.755a15.947 15.947 0 0 0 8.614 2.538c8.838 0 16.002-7.164 16.002-16.002S24.84 0 16.002 0zm0 29.298c-2.508 0-4.947-.702-7.015-2.03l-.504-.299-5.215 1.368 1.392-5.08-.328-.522a13.291 13.291 0 0 1-2.035-7.133c0-7.364 5.989-13.353 13.353-13.353s13.353 5.989 13.353 13.353-5.989 13.353-13.353 13.353zm7.317-9.997c-.401-.201-2.373-1.171-2.741-1.305-.368-.133-.636-.2-.904.201-.268.401-1.038 1.305-1.272 1.573-.234.268-.468.301-.869.1-.401-.201-1.693-.624-3.225-1.989-1.192-1.063-1.996-2.376-2.229-2.777-.234-.401-.025-.618.176-.817.181-.181.401-.468.602-.702.201-.234.268-.401.401-.669.133-.268.067-.502-.033-.702-.1-.201-.904-2.178-1.239-2.981-.326-.782-.657-.676-.904-.688-.234-.012-.502-.015-.77-.015s-.703.1-1.071.502c-.368.401-1.405 1.372-1.405 3.348s1.438 3.883 1.639 4.151c.201.268 2.832 4.324 6.862 6.065.959.415 1.708.663 2.292.849.962.306 1.838.263 2.53.159.772-.115 2.373-.971 2.708-1.908.335-.937.335-1.74.234-1.908-.1-.168-.368-.268-.769-.468z"></path>
        </svg>
        <span className="absolute -top-1 -right-1 bg-[rgb(221,40,45)] text-white text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center animate-pulse">
          1
        </span>
      </div>
      <div className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-gray-900 text-white px-4 py-2 rounded-lg whitespace-nowrap opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 shadow-xl">
        <span className="font-semibold">Fale Conosco!</span>
        <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-full border-8 border-transparent border-l-gray-900"></div>
      </div>
    </a>
  );
}

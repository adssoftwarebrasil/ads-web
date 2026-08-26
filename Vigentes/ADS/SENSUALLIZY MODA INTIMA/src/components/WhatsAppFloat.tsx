const WHATSAPP = 'http://wa.me/556696681932';

export default function WhatsAppFloat() {
  return (
    <a
      href={WHATSAPP}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 w-16 h-16 bg-[#25D366] rounded-full shadow-2xl hover:shadow-[#25D366]/50 flex items-center justify-center transition-all duration-300 hover:scale-110 group animate-bounce-in"
      aria-label="Fale conosco no WhatsApp"
    >
      <svg viewBox="0 0 32 32" className="w-9 h-9 fill-white group-hover:scale-110 transition-transform duration-300" xmlns="http://www.w3.org/2000/svg">
        <path d="M16 0c-8.837 0-16 7.163-16 16 0 2.825 0.737 5.607 2.137 8.048l-2.137 7.952 7.933-2.127c2.42 1.37 5.173 2.127 8.067 2.127 8.837 0 16-7.163 16-16s-7.163-16-16-16zM16 29.467c-2.482 0-4.908-0.646-7.07-1.87l-0.507-0.292-5.247 1.408 1.417-5.232-0.321-0.527c-1.294-2.117-1.979-4.56-1.979-7.061 0-7.384 6.009-13.393 13.393-13.393s13.393 6.009 13.393 13.393c0 7.384-6.009 13.393-13.393 13.393zM21.938 18.304c-0.294-0.148-1.737-0.858-2.006-0.955-0.269-0.099-0.464-0.148-0.659 0.148s-0.757 0.955-0.928 1.151c-0.171 0.196-0.342 0.221-0.636 0.073s-1.241-0.457-2.363-1.458c-0.874-0.779-1.464-1.741-1.635-2.035s-0.018-0.455 0.129-0.602c0.133-0.133 0.294-0.342 0.441-0.513s0.196-0.294 0.294-0.489c0.099-0.196 0.049-0.367-0.025-0.513s-0.659-1.588-0.904-2.176c-0.239-0.571-0.478-0.489-0.659-0.501-0.171-0.012-0.367-0.012-0.562-0.012s-0.513 0.073-0.782 0.367c-0.269 0.294-1.026 1.003-1.026 2.447s1.051 2.839 1.197 3.034c0.148 0.196 2.059 3.14 4.986 4.404 0.696 0.301 1.241 0.481 1.664 0.616 0.699 0.221 1.336 0.189 1.839 0.115 0.561-0.086 1.737-0.708 1.981-1.393 0.245-0.685 0.245-1.273 0.171-1.393s-0.269-0.196-0.562-0.342z"></path>
      </svg>
      <span className="absolute -top-1 -right-1 w-4 h-4 bg-[#E24244] rounded-full animate-ping"></span>
      <span className="absolute -top-1 -right-1 w-4 h-4 bg-[#E24244] rounded-full"></span>
    </a>
  );
}

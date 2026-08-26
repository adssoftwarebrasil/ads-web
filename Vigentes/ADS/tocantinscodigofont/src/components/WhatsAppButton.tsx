export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/556392280772"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-all duration-300 hover:shadow-[0_0_30px_rgba(37,211,102,0.6)] group"
      aria-label="Fale conosco no WhatsApp"
    >
      <svg
        viewBox="0 0 32 32"
        className="w-8 h-8"
        fill="currentColor"
      >
        <path d="M16 0c-8.837 0-16 7.163-16 16 0 2.825 0.737 5.607 2.137 8.048l-2.137 7.952 7.933-2.127c2.42 1.37 5.173 2.127 8.067 2.127 8.837 0 16-7.163 16-16s-7.163-16-16-16zM16 29.467c-2.482 0-4.908-0.646-7.07-1.87l-0.507-0.292-5.247 1.405 1.405-5.232-0.321-0.527c-1.362-2.22-2.074-4.758-2.074-7.419 0-7.51 6.11-13.62 13.62-13.62s13.62 6.11 13.62 13.62-6.11 13.62-13.62 13.62zM21.305 19.26c-0.346-0.174-2.049-1.007-2.366-1.123-0.317-0.116-0.548-0.174-0.779 0.174s-0.896 1.123-1.099 1.355c-0.203 0.232-0.405 0.261-0.751 0.087s-1.467-0.54-2.794-1.722c-1.033-0.92-1.73-2.056-1.933-2.402s-0.022-0.536 0.152-0.709c0.156-0.155 0.346-0.405 0.52-0.607s0.231-0.347 0.347-0.578c0.116-0.232 0.058-0.435-0.029-0.607s-0.779-1.875-1.068-2.567c-0.281-0.672-0.567-0.581-0.779-0.592-0.202-0.010-0.433-0.012-0.664-0.012s-0.606 0.087-0.923 0.435c-0.317 0.347-1.213 1.185-1.213 2.889s1.242 3.351 1.416 3.582c0.174 0.232 2.445 3.733 5.922 5.235 0.827 0.357 1.473 0.571 1.977 0.731 0.831 0.263 1.586 0.226 2.183 0.137 0.666-0.099 2.049-0.837 2.338-1.645s0.289-1.501 0.202-1.645c-0.087-0.145-0.318-0.232-0.664-0.405z"></path>
      </svg>

      <span className="absolute -top-1 -right-1 flex h-3 w-3">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
        <span className="relative inline-flex rounded-full h-3 w-3 bg-white"></span>
      </span>

      <div className="absolute right-16 top-1/2 -translate-y-1/2 bg-white text-[rgb(45,62,84)] px-4 py-2 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none">
        <span className="font-semibold">Fale conosco!</span>
        <div className="absolute right-[-8px] top-1/2 -translate-y-1/2 w-0 h-0 border-t-8 border-b-8 border-l-8 border-transparent border-l-white"></div>
      </div>
    </a>
  );
}

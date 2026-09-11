import { useState, useEffect } from 'react';

const WhatsAppButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  return (
    <a
      href="https://wa.me/5562993741022"
      target="_blank"
      rel="noopener noreferrer"
      className={`fixed bottom-6 right-6 z-50 bg-[#25D366] text-white rounded-full p-4 shadow-2xl hover:shadow-3xl transform hover:scale-110 transition-all duration-300 group ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
      }`}
      aria-label="Fale conosco no WhatsApp"
    >
      <div className="relative">
        <svg
          viewBox="0 0 32 32"
          className="w-8 h-8"
          fill="currentColor"
        >
          <path d="M16 0c-8.837 0-16 7.163-16 16 0 2.825 0.737 5.607 2.137 8.048l-2.137 7.952 7.933-2.127c2.42 1.37 5.173 2.127 8.067 2.127 8.837 0 16-7.163 16-16s-7.163-16-16-16zM16 29.467c-2.482 0-4.908-0.646-7.07-1.87l-0.507-0.292-5.247 1.405 1.417-5.195-0.321-0.533c-1.331-2.217-2.039-4.769-2.039-7.448 0-7.868 6.401-14.267 14.267-14.267s14.267 6.399 14.267 14.267c0 7.868-6.401 14.267-14.267 14.267z"/>
          <path d="M23.201 19.43c-0.371-0.186-2.197-1.083-2.539-1.208-0.342-0.124-0.591-0.186-0.839 0.186s-0.964 1.208-1.183 1.456c-0.217 0.248-0.435 0.279-0.807 0.093-0.371-0.186-1.567-0.578-2.985-1.841-1.103-0.984-1.849-2.201-2.067-2.573s-0.023-0.572 0.163-0.757c0.167-0.166 0.371-0.435 0.557-0.652 0.186-0.217 0.248-0.371 0.371-0.619 0.124-0.248 0.062-0.465-0.031-0.652-0.093-0.186-0.839-2.023-1.151-2.771-0.303-0.727-0.611-0.628-0.839-0.64-0.217-0.011-0.465-0.013-0.713-0.013s-0.652 0.093-0.993 0.465c-0.341 0.371-1.302 1.271-1.302 3.101s1.333 3.597 1.519 3.845c0.186 0.248 2.617 4.001 6.341 5.611 0.886 0.383 1.577 0.612 2.116 0.783 0.889 0.283 1.698 0.244 2.339 0.148 0.713-0.107 2.197-0.898 2.507-1.766s0.31-1.612 0.217-1.766c-0.093-0.155-0.341-0.248-0.713-0.435z"/>
        </svg>

        <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full animate-ping"></span>
        <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"></span>
      </div>

      <div className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-white text-[#393939] px-4 py-2 rounded-lg shadow-xl whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
        <span className="font-semibold">Fale Conosco!</span>
        <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 rotate-45 w-2 h-2 bg-white"></div>
      </div>
    </a>
  );
};

export default WhatsAppButton;

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/556232113304?text=Olá!%20Gostaria%20de%20falar%20com%20um%20especialista%20da%20Exatidão%20Contabilidade."
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 md:bottom-6 md:right-6 z-[999] w-16 h-16 md:w-20 md:h-20 bg-[#25D366] rounded-full flex items-center justify-center border-4 border-white shadow-2xl transition-all duration-300 hover:scale-110 hover:shadow-3xl animate-pulse group"
      aria-label="Fale Conosco no WhatsApp"
    >
      <svg viewBox="0 0 32 32" fill="white" className="w-8 h-8 md:w-10 md:h-10">
        <path d="M16 0c-8.837 0-16 7.163-16 16 0 2.825 0.737 5.607 2.137 8.048l-2.137 7.952 7.933-2.127c2.42 1.37 5.173 2.127 8.067 2.127 8.837 0 16-7.163 16-16s-7.163-16-16-16zM16 29.467c-2.482 0-4.908-0.646-7.07-1.87l-0.507-0.292-5.245 1.407 1.408-5.24-0.292-0.508c-1.224-2.163-1.87-4.588-1.87-7.070 0-7.653 6.23-13.883 13.883-13.883s13.883 6.23 13.883 13.883-6.23 13.883-13.883 13.883zM21.826 18.67c-0.292-0.146-1.727-0.854-1.995-0.951-0.268-0.097-0.463-0.146-0.658 0.146s-0.756 0.951-0.927 1.146c-0.171 0.195-0.341 0.219-0.634 0.073s-1.236-0.456-2.353-1.453c-0.870-0.777-1.457-1.737-1.628-2.030s-0.018-0.45 0.128-0.595c0.131-0.131 0.292-0.341 0.439-0.512s0.195-0.292 0.292-0.487c0.097-0.195 0.049-0.366-0.024-0.512s-0.658-1.587-0.902-2.173c-0.238-0.571-0.479-0.494-0.658-0.502-0.171-0.008-0.366-0.010-0.561-0.010s-0.512 0.073-0.78 0.366c-0.268 0.292-1.024 1.001-1.024 2.441s1.048 2.832 1.195 3.027c0.146 0.195 2.062 3.148 4.995 4.415 0.697 0.301 1.241 0.481 1.665 0.616 0.699 0.223 1.336 0.191 1.839 0.116 0.561-0.084 1.727-0.706 1.970-1.388s0.243-1.267 0.171-1.388c-0.073-0.121-0.268-0.195-0.561-0.341z"></path>
      </svg>
      <span className="absolute -top-2 -left-2 bg-red-500 text-white text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center animate-bounce">
        !
      </span>
    </a>
  );
}

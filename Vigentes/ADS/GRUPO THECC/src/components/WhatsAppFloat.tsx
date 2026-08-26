export default function WhatsAppFloat() {
  return (
    <a href="https://wa.me/556198449664?text=Ol%C3%A1!%20Gostaria%20de%20solicitar%20um%20or%C3%A7amento." target="_blank" rel="noopener noreferrer" className="fixed bottom-6 right-6 z-50 group" aria-label="Chamar no WhatsApp">
      <div className="relative">
        <div className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-75"></div>
        <div className="absolute inset-0 rounded-full bg-[#25D366] animate-pulse opacity-50"></div>
        <div className="relative w-16 h-16 lg:w-18 lg:h-18 bg-[#25D366] rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform duration-300 cursor-pointer">
          <svg viewBox="0 0 32 32" className="w-9 h-9 lg:w-10 lg:h-10" fill="white"><path d="M16 0c-8.837 0-16 7.163-16 16 0 2.825 0.737 5.607 2.137 8.048l-2.137 7.952 7.933-2.127c2.42 1.37 5.173 2.127 8.067 2.127 8.837 0 16-7.163 16-16s-7.163-16-16-16zM16 29.467c-2.482 0-4.908-0.646-7.07-1.87l-0.507-0.292-5.247 1.408 1.408-5.247-0.292-0.507c-1.224-2.162-1.87-4.588-1.87-7.07 0-7.51 6.11-13.62 13.62-13.62s13.62 6.11 13.62 13.62c0 7.51-6.11 13.62-13.62 13.62z"></path><path d="M23.305 19.61c-0.329-0.165-1.947-0.961-2.248-1.071s-0.521-0.165-0.741 0.165c-0.22 0.329-0.851 1.071-1.043 1.291s-0.384 0.247-0.713 0.082c-0.329-0.165-1.388-0.512-2.644-1.631-0.977-0.871-1.637-1.947-1.829-2.276s-0.021-0.507 0.144-0.671c0.148-0.148 0.329-0.384 0.493-0.576s0.22-0.329 0.329-0.549c0.11-0.22 0.055-0.412-0.027-0.576s-0.741-1.785-1.016-2.445c-0.267-0.644-0.539-0.556-0.741-0.567-0.192-0.010-0.412-0.012-0.632-0.012s-0.576 0.082-0.877 0.412c-0.302 0.329-1.153 1.128-1.153 2.751s1.181 3.191 1.345 3.411c0.165 0.22 2.324 3.548 5.631 4.976 0.787 0.339 1.4 0.542 1.879 0.693 0.79 0.251 1.509 0.216 2.077 0.131 0.634-0.095 1.947-0.796 2.22-1.565s0.274-1.428 0.192-1.565c-0.082-0.137-0.302-0.22-0.632-0.384z"></path></svg>
        </div>
        <div className="absolute right-full mr-4 top-1/2 -translate-y-1/2 bg-[#1A1A2E] text-white px-4 py-2 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none shadow-xl">
          <div className="font-semibold text-sm">Fale conosco!</div>
          <div className="text-xs text-gray-300">Atendimento 24h</div>
          <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-full">
            <div className="border-8 border-transparent border-l-[#1A1A2E]"></div>
          </div>
        </div>
      </div>
    </a>
  );
}

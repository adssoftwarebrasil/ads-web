export default function WhatsAppFloat() {
  return (
    <a
      href="http://wa.me/556292766466?text=Olá! Vim através do site e gostaria de mais informações."
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-2xl hover:shadow-green-500/50 transition-all hover:scale-110 group"
      aria-label="Fale conosco no WhatsApp"
    >
      <svg viewBox="0 0 32 32" className="w-8 h-8 sm:w-10 sm:h-10" fill="currentColor">
        <path d="M16 0c-8.837 0-16 7.163-16 16 0 2.825 0.737 5.607 2.137 8.048l-2.137 7.952 7.933-2.127c2.42 1.37 5.173 2.127 8.067 2.127 8.837 0 16-7.163 16-16s-7.163-16-16-16zM16 29.467c-2.482 0-4.908-0.646-7.07-1.87l-0.507-0.292-5.245 1.408 1.408-5.245-0.292-0.507c-1.224-2.162-1.87-4.588-1.87-7.07 0-7.72 6.28-14 14-14s14 6.28 14 14-6.28 14-14 14zM21.803 18.893c-0.327-0.163-1.933-0.953-2.233-1.062s-0.518-0.163-0.735 0.163c-0.218 0.327-0.844 1.062-1.034 1.28s-0.381 0.245-0.707 0.082c-0.327-0.163-1.378-0.508-2.624-1.62-0.97-0.865-1.625-1.933-1.815-2.26s-0.020-0.503 0.143-0.666c0.147-0.147 0.327-0.381 0.49-0.572s0.218-0.327 0.327-0.545c0.109-0.218 0.054-0.409-0.027-0.572s-0.735-1.771-1.008-2.426c-0.265-0.638-0.534-0.551-0.735-0.562-0.19-0.009-0.409-0.011-0.627-0.011s-0.572 0.082-0.872 0.409c-0.3 0.327-1.144 1.118-1.144 2.726s1.171 3.162 1.334 3.38c0.163 0.218 2.3 3.516 5.573 4.929 0.779 0.336 1.387 0.537 1.861 0.687 0.783 0.248 1.495 0.213 2.058 0.129 0.628-0.094 1.933-0.79 2.205-1.553s0.272-1.417 0.19-1.553c-0.082-0.136-0.3-0.218-0.627-0.381z"></path>
      </svg>
      <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center animate-pulse">
        !
      </span>
      <div className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-gray-900 text-white px-4 py-2 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
        Fale Conosco!
        <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-full border-8 border-transparent border-l-gray-900"></div>
      </div>
    </a>
  );
}

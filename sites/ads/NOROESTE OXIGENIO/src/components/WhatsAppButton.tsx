const WHATSAPP = 'http://wa.me/5538999719665';

export default function WhatsAppButton() {
  return (
    <a
      href={WHATSAPP}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 w-16 h-16 bg-green-500 rounded-full shadow-2xl hover:bg-green-600 transition-all transform hover:scale-110 flex items-center justify-center group"
      aria-label="Contato via WhatsApp"
    >
      <svg viewBox="0 0 32 32" className="w-9 h-9 fill-white" xmlns="http://www.w3.org/2000/svg">
        <path d="M16 0c-8.837 0-16 7.163-16 16 0 2.825 0.737 5.607 2.137 8.048l-2.137 7.952 7.933-2.127c2.42 1.37 5.173 2.127 8.067 2.127 8.837 0 16-7.163 16-16s-7.163-16-16-16zM16 29.467c-2.482 0-4.908-0.646-7.07-1.87l-0.507-0.292-5.247 1.409 1.417-5.267-0.316-0.525c-1.335-2.207-2.037-4.73-2.037-7.323 0-7.51 6.11-13.62 13.62-13.62s13.62 6.11 13.62 13.62-6.11 13.62-13.62 13.62zM21.52 19.093c-0.247-0.123-1.462-0.721-1.689-0.804-0.227-0.083-0.391-0.123-0.556 0.124s-0.639 0.804-0.783 0.969c-0.145 0.165-0.289 0.185-0.536 0.062-0.247-0.124-1.043-0.385-1.987-1.226-0.734-0.655-1.229-1.462-1.373-1.709s-0.015-0.38 0.108-0.503c0.111-0.108 0.247-0.289 0.371-0.433 0.124-0.145 0.165-0.247 0.247-0.412 0.083-0.165 0.041-0.309-0.021-0.433s-0.556-1.34-0.762-1.833c-0.201-0.481-0.405-0.415-0.556-0.423-0.144-0.008-0.309-0.009-0.474-0.009s-0.433 0.062-0.66 0.309c-0.227 0.247-0.866 0.845-0.866 2.062s0.887 2.391 1.010 2.556c0.124 0.165 1.747 2.665 4.232 3.738 0.591 0.256 1.053 0.408 1.413 0.522 0.594 0.188 1.134 0.162 1.561 0.098 0.476-0.071 1.462-0.598 1.668-1.176s0.206-1.073 0.144-1.176c-0.062-0.103-0.227-0.165-0.474-0.289z"></path>
      </svg>
      <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full animate-ping"></span>
      <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full"></span>
      <div className="absolute right-20 top-1/2 -translate-y-1/2 bg-gray-900 text-white px-4 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-xl pointer-events-none">
        <span className="text-sm font-semibold">Fale conosco agora!</span>
        <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1 w-2 h-2 bg-gray-900 rotate-45"></div>
      </div>
    </a>
  );
}

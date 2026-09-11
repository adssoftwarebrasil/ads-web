import WhatsAppIcon from './WhatsAppIcon';

export default function WhatsAppButton() {
  return (
    <a href="http://wa.me/554599938248" target="_blank" rel="noopener noreferrer" className="fixed bottom-6 right-6 z-50 group transition-all duration-500 opacity-100 translate-y-0">
      <div className="relative">
        <div className="absolute inset-0 bg-green-500 rounded-full blur-xl opacity-60 "></div>
        <div className="relative w-16 h-16 bg-green-500 hover:bg-green-600 rounded-full shadow-2xl flex items-center justify-center transform transition-all duration-300 hover:scale-110 group-hover:rotate-12">
          <WhatsAppIcon className="w-9 h-9 text-white" />
        </div>
        <div className="absolute -top-2 -right-2 w-6 h-6 bg-red-500 rounded-full flex items-center justify-center shadow-lg animate-bounce">
          <span className="text-white text-xs font-bold">1</span>
        </div>
      </div>
      <div className="absolute right-20 top-1/2 -translate-y-1/2 bg-white rounded-lg shadow-xl px-4 py-3 opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none whitespace-nowrap">
        <p className="text-sm font-semibold text-gray-800">Fale Conosco!</p>
        <p className="text-xs text-gray-600">Tire suas dúvidas</p>
        <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 w-0 h-0 border-t-8 border-b-8 border-l-8 border-transparent border-l-white"></div>
      </div>
    </a>
  );
}

import { MessageCircle } from 'lucide-react';

export default function WhatsAppFloat() {
  return (
    <a
      href="https://wa.me/556293474673?text=Olá!%20Vim%20pelo%20site%20e%20gostaria%20de%20fazer%20um%20pedido"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Abrir WhatsApp para fazer pedido"
      className="fixed bottom-4 right-4 lg:bottom-6 lg:right-6 z-50 w-16 h-16 lg:w-20 lg:h-20 bg-[rgb(242,51,52)] hover:bg-red-700 rounded-full shadow-2xl hover:shadow-red-500/50 flex items-center justify-center cursor-pointer transition-all duration-300 hover:scale-110 group translate-x-0 opacity-100"
    >
      <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 border-2 border-white rounded-full"></div>
      <MessageCircle className="w-8 h-8 lg:w-10 lg:h-10 text-white" />
      <div className="hidden lg:block absolute right-full mr-4 bg-black text-white px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
        Fale conosco no WhatsApp
        <div className="absolute top-1/2 -right-1 transform -translate-y-1/2 w-2 h-2 bg-black rotate-45"></div>
      </div>
    </a>
  );
}

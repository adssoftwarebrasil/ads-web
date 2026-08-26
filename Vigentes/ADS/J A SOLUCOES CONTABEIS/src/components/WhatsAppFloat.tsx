import WhatsAppIcon from './WhatsAppIcon';

export default function WhatsAppFloat() {
  return (
    <a
      href="https://wa.me/5566999215475?text=Olá! Gostaria de mais informações sobre os serviços da Soluções Contábeis."
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 group transition-all duration-300 opacity-100 translate-y-0"
      aria-label="Chamar no WhatsApp"
    >
      <div className="relative">
        <div className="absolute inset-0 bg-[#25D366] rounded-full blur-lg opacity-50 group-hover:opacity-75 transition-opacity animate-pulse"></div>
        <div className="relative bg-[#25D366] p-4 rounded-full shadow-2xl hover:bg-[#20BA5A] transition-all transform group-hover:scale-110">
          <WhatsAppIcon className="w-8 h-8 text-white" />
        </div>
        <div className="absolute -top-1 -right-1 bg-red-500 text-white text-xs w-6 h-6 flex items-center justify-center rounded-full border-2 border-white font-bold animate-bounce">
          1
        </div>
      </div>
      <div className="absolute right-full mr-4 top-1/2 -translate-y-1/2 bg-white px-4 py-2 rounded-lg shadow-xl whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
        <p className="text-[rgb(47,55,56)] font-semibold text-sm">
          Fale conosco!
        </p>
        <div className="absolute top-1/2 -translate-y-1/2 right-0 translate-x-full w-0 h-0 border-t-8 border-t-transparent border-b-8 border-b-transparent border-l-8 border-l-white"></div>
      </div>
    </a>
  );
}

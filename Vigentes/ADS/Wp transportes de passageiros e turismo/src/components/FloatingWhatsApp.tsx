import WhatsAppIcon from './WhatsAppIcon';

export default function FloatingWhatsApp() {
  return (
    <div className="fixed bottom-6 right-6 z-40">
      <div className="relative">
        <a
          href="https://wa.me/557981183939?text=Olá! Vim do site e gostaria de mais informações."
          target="_blank"
          rel="noopener noreferrer"
          className="relative flex items-center justify-center w-16 h-16 bg-[#25D366] hover:bg-[#20BA5A] rounded-full shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-110 animate-pulse"
        >
          <WhatsAppIcon className="w-8 h-8 text-white" />
          <div className="absolute -top-1 -right-1 w-5 h-5 bg-[rgb(245,131,31)] rounded-full flex items-center justify-center text-white text-xs font-bold animate-pulse">
            !
          </div>
        </a>
      </div>
    </div>
  );
}

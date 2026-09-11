import WhatsAppIcon from './WhatsAppIcon';

export default function WhatsAppFloat() {
  return (
    <a
      href="http://wa.me/556599164429?text=Olá! Vim pelo site e gostaria de mais informações."
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar no WhatsApp"
      className="fixed bottom-6 right-6 z-50 group"
    >
      <div className="relative flex items-center">
        <span className="absolute right-16 bg-black text-white text-xs font-semibold px-4 py-2 rounded-full whitespace-nowrap opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-2 group-hover:translate-x-0 shadow-lg pointer-events-none">
          Falar no WhatsApp
        </span>
        <div className="relative w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#20b858] shadow-2xl shadow-green-500/40 flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-green-500/60">
          <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-25"></span>
          <WhatsAppIcon className="w-7 h-7 fill-white relative z-10" />
        </div>
      </div>
    </a>
  );
}

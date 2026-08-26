import WhatsappIcon from './WhatsappIcon';

export default function WhatsAppFloat() {
  return (
    <div className="fixed bottom-6 right-6 z-50 transition-all duration-500 opacity-100 translate-y-0">
      <div className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-40"></div>
      <a
        href="http://wa.me/556596828492?text=Ol%C3%A1!%20Vim%20pelo%20site%20e%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es%20sobre%20os%20servi%C3%A7os%20da%20FerrariCont."
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Fale conosco pelo WhatsApp"
        className="relative flex items-center justify-center w-14 h-14 bg-[#25D366] hover:bg-[#20B95A] rounded-full shadow-2xl shadow-green-600/40 transition-all duration-300 hover:scale-110 hover:shadow-green-600/60"
      >
        <WhatsappIcon size={28} fill="white" />
      </a>
    </div>
  );
}

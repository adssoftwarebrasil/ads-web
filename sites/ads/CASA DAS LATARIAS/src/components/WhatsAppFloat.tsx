import WhatsAppIcon from './WhatsAppIcon';

export default function WhatsAppFloat() {
  return (
    <a
      href="http://wa.me/5598985630349?text=Olá!%20Vim%20pelo%20site%20e%20gostaria%20de%20um%20orçamento."
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Fale conosco no WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 rounded-full shadow-2xl transition-all duration-500 hover:scale-110 active:scale-95 opacity-100 translate-y-0"
      style={{ backgroundColor: 'rgb(37, 211, 102)' }}
    >
      <WhatsAppIcon className="w-7 h-7 relative z-10" fill="white" />
    </a>
  );
}

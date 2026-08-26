import WhatsAppIcon from './WhatsAppIcon';

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/5562985345037?text=Olá!%20Gostaria%20de%20fazer%20um%20orçamento."
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:bg-[#20BA5A] transition-all transform hover:scale-110 z-50 animate-pulse flex items-center justify-center"
      aria-label="WhatsApp"
    >
      <WhatsAppIcon size={32} />
    </a>
  );
}

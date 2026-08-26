import { MessageCircle } from 'lucide-react';

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/5579981641628?text=Ol%C3%A1!%20Gostaria%20de%20obter%20mais%20informa%C3%A7%C3%B5es%20sobre%20os%20servi%C3%A7os%20jur%C3%ADdicos."
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:bg-[#20BA5A] transition-all duration-300 hover:scale-110 animate-pulse hover:animate-none group"
      aria-label="Contato via WhatsApp"
    >
      <MessageCircle size={32} className="group-hover:rotate-12 transition-transform" />
    </a>
  );
}

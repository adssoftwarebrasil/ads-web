import { Phone } from 'lucide-react';

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/5577999036565?text=Olá!%20Gostaria%20de%20mais%20informações%20sobre%20baterias."
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform animate-pulse"
      aria-label="WhatsApp"
    >
      <Phone size={28} />
    </a>
  );
}

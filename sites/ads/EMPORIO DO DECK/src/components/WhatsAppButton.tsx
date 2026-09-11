import { MessageCircle } from 'lucide-react';
import { useState } from 'react';

export default function WhatsAppButton() {
  const [isExpanded, setIsExpanded] = useState(false);

  // Mensagem padrão para o WhatsApp codificada
  const whatsappUrl = "https://wa.me/5562991093647?text=Ol%C3%A1%2C%20vim%20pelo%20Google%20e%20gostaria%20de%20solicitar%20um%20or%C3%A7amento!";

  return (
    <>
      <a
        href={whatsappUrl}
        className="whatsapp-float"
        onMouseEnter={() => setIsExpanded(true)}
        onMouseLeave={() => setIsExpanded(false)}
        aria-label="Falar no WhatsApp"
        target="_blank"
        rel="noopener noreferrer"
      >
        <MessageCircle size={28} />
        {isExpanded && (
          <span className="whatsapp-float-text">
            Fale conosco
          </span>
        )}
      </a>
    </>
  );
}
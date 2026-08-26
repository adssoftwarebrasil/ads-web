import { useEffect, useState } from 'react';
// Importamos o ícone oficial do WhatsApp da biblioteca 'react-icons'
import { FaWhatsapp } from 'react-icons/fa'; 

export default function FloatingWhatsApp() {
  const [isVisible, setIsVisible] = useState(true);
  const [showTooltip, setShowTooltip] = useState(false);

  // Informações de Contato
  const phoneNumber = '557193469993';
  const message = 'Olá! Vim do site e gostaria de mais informações';
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  // --- Lógica de Scroll Otimizada ---
  useEffect(() => {
    let lastScrollY = window.scrollY;
    // Define a distância para começar a esconder (em pixels)
    const SCROLL_THRESHOLD = 500; 

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Mostrar se subindo OU se no topo da página
      if (currentScrollY < lastScrollY || currentScrollY < 100) {
        setIsVisible(true);
      } 
      // Esconder se descendo E já tiver rolado uma distância mínima
      else if (currentScrollY > lastScrollY && currentScrollY > SCROLL_THRESHOLD) {
        setIsVisible(false);
      }

      lastScrollY = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div 
      // Posicionamento: bottom-8 right-8 é mais elegante que bottom-6 right-6
      // Transição: Rápida e suave
      className={`fixed bottom-8 right-8 z-50 transition-all duration-300 ease-out 
        ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0 pointer-events-none'}`
      }
      // Adiciona um pequeno delay para o tooltip desaparecer suavemente
      onMouseLeave={() => setTimeout(() => setShowTooltip(false), 200)}
    >
      <div className="relative group">
        
        {/* --- Tooltip Profissional (Melhorado) --- */}
        {showTooltip && (
          <div 
            className="absolute bottom-full right-0 mb-3 px-4 py-2 bg-white text-gray-800 font-semibold text-sm rounded-lg shadow-xl whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-x-1"
          >
            Fale Conosco
            {/* Seta do Tooltip */}
            <div className="absolute top-full right-7 w-2 h-2 bg-white transform rotate-45 -translate-y-2 rounded-sm shadow-sm"></div>
          </div>
        )}

        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          onMouseEnter={() => setShowTooltip(true)}
          // Mantendo o tamanho: w-16 h-16 (tamanho padrão ideal)
          className="relative flex items-center justify-center w-16 h-16 md:w-18 md:h-18 bg-green-500 hover:bg-green-600 rounded-full shadow-2xl transition-all duration-300 transform hover:scale-105"
          aria-label="Fale conosco pelo WhatsApp"
        >
          {/* --- Logotipo do WhatsApp --- */}
          <FaWhatsapp className="w-8 h-8 text-white" />

          {/* Animação 'Ping' Sutil (Se você quiser que ele pulse uma vez ao carregar) */}
          {/* Removido o ping contínuo para manter a aparência profissional e menos intrusiva */}
        </a>
      </div>
    </div>
  );
}
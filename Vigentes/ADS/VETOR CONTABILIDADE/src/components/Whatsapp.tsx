import { MessageCircle, Copy, Check } from 'lucide-react';
import { useState } from 'react';

export default function WhatsAppFloat() {
  const [showMenu, setShowMenu] = useState(false);
  const [copied, setCopied] = useState(false);
  const phoneNumber = '5594981573663';
  const whatsappLink = `https://wa.me/${phoneNumber}`;

  const handleClick = () => {
    window.open(whatsappLink, '_blank');
  };

  const handleContextMenu = (e) => {
    e.preventDefault();
    setShowMenu(true);
  };

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(whatsappLink);
      setCopied(true);
      setTimeout(() => {
        setCopied(false);
        setShowMenu(false);
      }, 2000);
    } catch (err) {
      console.error('Erro ao copiar link:', err);
    }
  };

  const handleClickOutside = () => {
    setShowMenu(false);
  };

  return (
    <>
      {/* Overlay para fechar o menu */}
      {showMenu && (
        <div 
          className="fixed inset-0 z-40"
          onClick={handleClickOutside}
        />
      )}

      <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
        {/* Menu de contexto */}
        {showMenu && (
          <div className="bg-white rounded-lg shadow-2xl border border-gray-200 overflow-hidden animate-fade-in">
            <button
              onClick={handleCopyLink}
              className="flex items-center gap-3 px-4 py-3 hover:bg-gray-50 transition-colors w-full text-left"
            >
              {copied ? (
                <>
                  <Check size={18} className="text-green-600" />
                  <span className="text-sm font-medium text-green-600">Link Copiado!</span>
                </>
              ) : (
                <>
                  <Copy size={18} className="text-gray-700" />
                  <span className="text-sm font-medium text-gray-700">Copiar Link</span>
                </>
              )}
            </button>
          </div>
        )}

        {/* Botão principal do WhatsApp */}
        <div className="relative group">
          {/* Tooltip */}
          <div className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-gray-900 text-white px-3 py-2 rounded-lg text-sm font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
            Fale conosco no WhatsApp
            <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 rotate-45 w-2 h-2 bg-gray-900"></div>
          </div>

          <button
            onClick={handleClick}
            onContextMenu={handleContextMenu}
            className="bg-[#25D366] hover:bg-[#20BA5A] text-white p-4 rounded-full shadow-2xl transition-all transform hover:scale-110 active:scale-95 flex items-center justify-center relative overflow-hidden"
            aria-label="WhatsApp"
          >
            {/* Animação de pulso */}
            <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-75"></span>
            
            {/* Ícone do WhatsApp */}
            <svg 
              className="relative z-10" 
              width="28" 
              height="28" 
              viewBox="0 0 24 24" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <path 
                d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" 
                fill="currentColor"
              />
              <path 
                d="M20.52 3.449C18.24 1.245 15.24 0 12.045 0 5.463 0 .104 5.334.101 11.893c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.652c1.746.943 3.71 1.444 5.71 1.447h.006c6.585 0 11.944-5.336 11.947-11.892 0-3.176-1.24-6.165-3.478-8.411zm-8.475 18.299c-1.776 0-3.517-.477-5.033-1.378l-.36-.214-3.742.98 1-3.648-.235-.374c-.99-1.574-1.512-3.393-1.513-5.26.002-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.886-9.886 9.886z" 
                fill="currentColor"
              />
            </svg>
          </button>
        </div>

        {/* Texto indicativo */}
        <div className="bg-white px-4 py-2 rounded-full shadow-lg text-sm font-medium text-gray-700 opacity-0 group-hover:opacity-100 transition-opacity">
          Online agora
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fade-in 0.2s ease-out;
        }
      `}</style>
    </>
  );
}
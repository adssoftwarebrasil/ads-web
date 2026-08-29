import { useState } from 'react';
import { MessageCircle, X, MapPin } from 'lucide-react';

const WHATSAPP_LINKS = [
  { name: 'Matriz — Campo Novo do Parecis', phone: '556533822270', display: '(65) 3382-2270' },
  { name: 'Filial Juara', phone: '556635562222', display: '(66) 3556-2222' },
  { name: 'Filial Sapezal', phone: '556533832221', display: '(65) 3383-2221' },
];

export default function WhatsAppButton() {
  const [isOpen, setIsOpen] = useState(false);

  // Mensagem padrão que já vai preenchida no WhatsApp do cliente
  const defaultMessage = encodeURIComponent('Olá! Estava no site e gostaria de falar com um consultor.');

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-4">
      {/* Menu flutuante que aparece quando isOpen for true */}
      {isOpen && (
        <div className="bg-white rounded-2xl shadow-2xl p-4 w-80 border border-gray-100 origin-bottom-right transition-all animate-in fade-in slide-in-from-bottom-4">
          <div className="mb-3 border-b border-gray-100 pb-3">
            <h4 className="text-gray-900 font-bold text-sm">Fale com nossos consultores</h4>
            <p className="text-gray-500 text-xs mt-1">Escolha a unidade mais próxima de você:</p>
          </div>
          
          <div className="flex flex-col gap-2">
            {WHATSAPP_LINKS.map((link) => (
              <a
                key={link.phone}
                href={`https://wa.me/${link.phone}?text=${defaultMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsOpen(false)} // Fecha o menu ao clicar
                className="flex items-center gap-3 p-3 rounded-xl hover:bg-gray-50 transition-colors border border-transparent hover:border-gray-100 group"
              >
                <div className="bg-[#25D366]/10 w-10 h-10 rounded-full flex items-center justify-center group-hover:bg-[#25D366] transition-colors shrink-0">
                  <MapPin size={18} className="text-[#25D366] group-hover:text-white" />
                </div>
                <div>
                  <p className="text-sm font-bold text-gray-900 leading-tight mb-0.5">{link.name}</p>
                  <p className="text-xs text-gray-500 font-medium">{link.display}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      )}

      {/* Botão Principal */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Falar no WhatsApp"
        aria-expanded={isOpen}
        className="flex items-center justify-center w-14 h-14 bg-[#25D366] hover:bg-[#20ba5c] text-white rounded-full shadow-2xl transition-all duration-300 hover:scale-105 active:scale-95"
      >
        {isOpen ? (
          <X size={28} className="transition-transform rotate-90 animate-in fade-in" />
        ) : (
          <MessageCircle size={28} fill="white" strokeWidth={0} className="transition-transform animate-in fade-in" />
        )}
      </button>
    </div>
  );
}
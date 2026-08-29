import { useState } from 'react';
import { X, User, Store } from 'lucide-react';

export default function WhatsAppButton() {
  const [isOpen, setIsOpen] = useState(false);

  const contatos = [
    {
      nome: "André Luiz",
      cargo: "Vendedor",
      numero: "5547999235654",
      numeroVisual: "(47) 99923-5654",
      icon: <User size={20} />
    },
    {
      nome: "DJ Impermeabilizantes e Tintas",
      cargo: "Loja",
      numero: "5547996340671",
      numeroVisual: "(47) 99634-0671",
      icon: <Store size={20} />
    }
  ];

  const handleContactClick = (numero: string) => {
    const mensagem = encodeURIComponent("Olá, vim pelo site e gostaria de mais informações");
    window.open(`https://wa.me/${numero}?text=${mensagem}`, '_blank');
  };

  return (
    <>
      {/* Botão Flutuante (Abre o Modal) */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 z-50 group border-none outline-none focus:outline-none"
        aria-label="Fale conosco no WhatsApp"
      >
        <div className="relative">
          <div className="absolute inset-0 bg-[#25D366] rounded-full animate-ping opacity-75"></div>

          <div className="relative w-16 h-16 bg-[#25D366] rounded-full flex items-center justify-center shadow-2xl hover:bg-[#20BA5A] transition-all hover:scale-110">
            <svg
              viewBox="0 0 24 24"
              fill="white"
              className="w-9 h-9"
            >
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
            </svg>
          </div>
        </div>

        <div className="absolute -top-12 right-0 bg-[#525152] text-white px-4 py-2 rounded-lg text-sm font-semibold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity shadow-xl pointer-events-none">
          Fale Conosco!
          <div className="absolute -bottom-1 right-6 w-2 h-2 bg-[#525152] rotate-45"></div>
        </div>
      </button>

      {/* Modal de Opções */}
      {isOpen && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-white rounded-2xl w-full max-w-sm shadow-2xl overflow-hidden animate-in zoom-in-95 duration-200">
            {/* Cabeçalho do Modal */}
            <div className="bg-[#25D366] p-4 flex justify-between items-center">
              <h3 className="text-white font-bold text-lg">Escolha um contato</h3>
              <button 
                onClick={() => setIsOpen(false)}
                className="text-white hover:bg-white/20 p-1 rounded-full transition-colors"
              >
                <X size={24} />
              </button>
            </div>

            {/* Lista de Contatos */}
            <div className="p-4 space-y-3">
              {contatos.map((contato, index) => (
                <button
                  key={index}
                  onClick={() => handleContactClick(contato.numero)}
                  className="w-full flex items-center p-4 bg-gray-50 hover:bg-green-50 border border-gray-100 hover:border-green-200 rounded-xl transition-all duration-200 group text-left"
                >
                  <div className="w-10 h-10 bg-green-100 text-[#25D366] rounded-full flex items-center justify-center mr-3 group-hover:bg-[#25D366] group-hover:text-white transition-colors">
                    {contato.icon}
                  </div>
                  <div>
                    <p className="text-xs font-bold text-gray-400 uppercase tracking-wide">
                      {contato.cargo}
                    </p>
                    <p className="font-bold text-[#525152]">
                      {contato.nome}
                    </p>
                    <p className="text-sm text-gray-500 group-hover:text-[#25D366] transition-colors">
                      {contato.numeroVisual}
                    </p>
                  </div>
                </button>
              ))}
            </div>
            
            <div className="p-4 bg-gray-50 text-center text-xs text-gray-400">
              Clique em uma opção para iniciar a conversa
            </div>
          </div>
        </div>
      )}
    </>
  );
}
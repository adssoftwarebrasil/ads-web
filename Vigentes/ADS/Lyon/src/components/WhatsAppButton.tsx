import React, { useState } from 'react';
import { X, MapPin, ChevronRight } from 'lucide-react';

// Ícone SVG Oficial do WhatsApp
const WhatsAppIcon = ({ size = 24, className = "" }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="currentColor" 
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.414 0 .018 5.396.015 12.03a11.784 11.784 0 001.592 5.96L0 24l6.117-1.605a11.782 11.782 0 005.925 1.598h.005c6.635 0 12.032-5.396 12.035-12.03a11.799 11.799 0 00-3.417-8.507z"/>
  </svg>
);

export default function WhatsAppFloatingButton() {
  const [isOpen, setIsOpen] = useState(false);

  const locations = [
    {
      city: 'Novo Progresso - PA',
      type: 'Matriz',
      numbers: [
        { label: 'Vendas 1', phone: '5593984006462' },
        { label: 'Vendas 2', phone: '5593981195811' }
      ]
    },
    {
      city: 'Itaituba - PA',
      type: 'Filial',
      numbers: [
        { label: 'Vendas', phone: '5593992199688' }
      ]
    },
    {
      city: 'Boa Vista - RR',
      type: 'Filial',
      numbers: [
        { label: 'Vendas', phone: '5595984303773' }
      ]
    }
  ];

  return (
    <>
      {/* Botão Flutuante */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white w-16 h-16 rounded-full shadow-2xl flex items-center justify-center hover:bg-[#1ea952] transition-all hover:scale-110 group"
      >
        <WhatsAppIcon size={32} />
        {/* Efeito de Ping/Notificação */}
        <span className="absolute -top-1 -right-1 flex h-4 w-4">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
          <span className="relative inline-flex rounded-full h-4 w-4 bg-[#fbba00]"></span>
        </span>
      </button>

      {/* Modal de Seleção */}
      {isOpen && (
        <div className="fixed inset-0 z-[60] flex items-end md:items-center justify-center md:justify-end p-4 md:p-8">
          {/* Overlay escuro */}
          <div 
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={() => setIsOpen(false)}
          />

          {/* Conteúdo do Modal */}
          <div className="relative w-full max-w-[360px] bg-white rounded-[2rem] shadow-2xl overflow-hidden animate-scale-in">
            
            {/* Header */}
            <div className="bg-[#1a1a18] p-6 text-white">
              <button
                onClick={() => setIsOpen(false)}
                className="absolute top-5 right-5 text-gray-400 hover:text-white transition-colors"
              >
                <X size={20} />
              </button>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-[#25D366] rounded-2xl flex items-center justify-center">
                  <WhatsAppIcon size={28} />
                </div>
                <div>
                  <h3 className="font-bold text-lg leading-tight">Lyon Tratores</h3>
                  <p className="text-xs text-gray-400">Escolha uma unidade:</p>
                </div>
              </div>
            </div>

            {/* Lista de Contatos */}
            <div className="p-4 space-y-4 max-h-[65vh] overflow-y-auto bg-gray-50/50">
              {locations.map((loc, idx) => (
                <div key={idx} className="space-y-2">
                  <div className="flex items-center gap-2 px-2">
                    <MapPin size={12} className="text-[#fbba00]" />
                    <span className="text-[10px] font-bold uppercase tracking-widest text-gray-500">
                      {loc.type} • {loc.city}
                    </span>
                  </div>
                  
                  {loc.numbers.map((num, nIdx) => (
                    <a
                      key={nIdx}
                      href={`https://wa.me/${num.phone}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between p-4 rounded-2xl bg-white border border-gray-100 hover:border-[#25D366] hover:shadow-md transition-all group"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-[#25D366]/10 flex items-center justify-center text-[#25D366]">
                          <WhatsAppIcon size={20} />
                        </div>
                        <div>
                          <p className="font-bold text-[#1a1a18] text-sm">{num.label}</p>
                          <p className="text-[10px] text-green-600 font-medium flex items-center gap-1">
                            <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></span>
                            Online Agora
                          </p>
                        </div>
                      </div>
                      <ChevronRight size={18} className="text-gray-300 group-hover:text-[#25D366] group-hover:translate-x-1 transition-all" />
                    </a>
                  ))}
                </div>
              ))}
            </div>

            {/* Footer */}
            <div className="p-4 text-center border-t border-gray-100 bg-white">
              <p className="text-[10px] text-gray-400 uppercase font-bold tracking-tighter">
                Atendimento de Segunda a Sexta
              </p>
            </div>
          </div>
        </div>
      )}

      <style>{`
        @keyframes scale-in {
          from { opacity: 0; transform: translateY(20px) scale(0.95); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }
        .animate-scale-in {
          animation: scale-in 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        }
      `}</style>
    </>
  );
}
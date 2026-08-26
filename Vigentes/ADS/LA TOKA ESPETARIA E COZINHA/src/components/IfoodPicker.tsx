import { useCallback, useEffect, useState, ReactNode } from 'react';
import { MapPin, UtensilsCrossed, X } from 'lucide-react';
import { unidades } from '../lib/unidades';
import { IfoodContext } from '../lib/ifood';

export function IfoodProvider({ children }: { children: ReactNode }) {
  const [aberto, setAberto] = useState(false);
  const abrir = useCallback(() => setAberto(true), []);
  const fechar = useCallback(() => setAberto(false), []);

  useEffect(() => {
    if (!aberto) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setAberto(false);
    };
    document.addEventListener('keydown', onKey);
    const overflowAnterior = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = overflowAnterior;
    };
  }, [aberto]);

  return (
    <IfoodContext.Provider value={abrir}>
      {children}
      {aberto && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-70 backdrop-blur-sm animate-fade-in"
          role="dialog"
          aria-modal="true"
          aria-labelledby="ifood-titulo"
          onClick={fechar}
        >
          <div
            className="relative bg-white rounded-2xl shadow-2xl w-full max-w-lg max-h-[90vh] overflow-y-auto p-6 md:p-8"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={fechar}
              aria-label="Fechar"
              className="absolute top-4 right-4 text-[#2D2D2D] hover:text-[#F93131] transition-colors"
            >
              <X className="lucide lucide-x w-6 h-6" />
            </button>
            <div className="text-center mb-6">
              <div className="bg-[#EA1D2C] w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4">
                <UtensilsCrossed className="lucide lucide-utensils-crossed w-7 h-7 text-white" />
              </div>
              <h2 id="ifood-titulo" className="text-2xl md:text-3xl font-bold text-[#1A1A1A]">
                Escolha a unidade
              </h2>
              <p className="text-[#2D2D2D] mt-2">Selecione a loja mais perto de você para pedir pelo iFood</p>
            </div>
            <div className="space-y-4">
              {unidades.map((unidade) => (
                <a
                  key={unidade.id}
                  href={unidade.ifood}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={fechar}
                  className="group flex items-start gap-4 border-2 border-[#FFF5E6] hover:border-[#EA1D2C] bg-[#FFF5E6] hover:bg-white rounded-xl p-5 transition-all duration-300"
                >
                  <div className="bg-[#F93131] p-3 rounded-lg flex-shrink-0">
                    <MapPin className="lucide lucide-map-pin w-5 h-5 text-white" />
                  </div>
                  <div className="text-left">
                    <h3 className="font-bold text-lg text-[#1A1A1A] group-hover:text-[#EA1D2C] transition-colors">
                      Unidade {unidade.nome}
                    </h3>
                    <p className="text-sm text-[#2D2D2D]">
                      {unidade.endereco.map((linha) => (
                        <span key={linha} className="block">
                          {linha}
                        </span>
                      ))}
                    </p>
                    <span className="inline-flex items-center gap-2 mt-3 text-[#EA1D2C] font-semibold text-sm">
                      <UtensilsCrossed className="lucide lucide-utensils-crossed w-4 h-4" />
                      Pedir no iFood
                    </span>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      )}
    </IfoodContext.Provider>
  );
}

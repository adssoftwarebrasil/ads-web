import { useState, useEffect } from 'react';

const PromoModal = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  // --- CONFIGURAÇÕES ---
  const imageUrl = "https://storage-admin.lucasmendes.dev/api/v1/buckets/site-sp/objects/download?preview=true&prefix=faculdade-finan%2FFinanBanner.jpeg&version_id=null";
  const DELAY_MS = 10000; // 10 segundos
  const SESSION_KEY = 'hasSeenPromoBanner_v4'; // Mudei para v3 para você testar
  
  // Data limite: O banner só aparece ATÉ o final do dia 14/12/2025
  const EXPIRATION_DATE = new Date('2025-12-14T23:59:59');

  useEffect(() => {
    // 1. Verificação de Data (Segurança)
    const now = new Date();
    if (now > EXPIRATION_DATE) {
      console.log('Promoção encerrada. Banner oculto.');
      return; // Para a execução aqui se já passou da data
    }

    // 2. Verificação de Sessão (Já viu?)
    const hasSeen = sessionStorage.getItem(SESSION_KEY);
    
    // REMOVA O '!' ABAIXO APENAS SE QUISER TESTAR SEMPRE (Modo Dev)
    if (!hasSeen) { 
      const timer = setTimeout(() => {
        setIsMounted(true);
        // Pequeno delay para a animação CSS pegar
        setTimeout(() => setIsVisible(true), 50);
        
        sessionStorage.setItem(SESSION_KEY, 'true');
      }, DELAY_MS);

      return () => clearTimeout(timer);
    }
  }, []);

  const handleClose = () => {
    setIsVisible(false);
    setTimeout(() => setIsMounted(false), 500); // Tempo para animação de saída
  };

  if (!isMounted) return null;

  return (
    <div 
      className={`fixed inset-0 z-[9999] flex items-center justify-center px-4 transition-all duration-500 ease-out
        ${isVisible ? 'bg-black/80 backdrop-blur-md opacity-100' : 'bg-black/0 opacity-0 pointer-events-none'}`}
      onClick={handleClose}
    >
      {/* Container Principal com Animação de Escala e Opacidade */}
      <div 
        className={`relative flex flex-col w-full max-w-[400px] transform transition-all duration-500 cubic-bezier(0.16, 1, 0.3, 1)
          ${isVisible ? 'scale-100 opacity-100 translate-y-0' : 'scale-90 opacity-0 translate-y-8'}`}
        onClick={(e) => e.stopPropagation()}
        style={{ maxHeight: '90vh' }}
      >
        
        {/* --- HEADER DE CONTROLE (Novo Design Profissional) --- 
            Cria uma barra acima da imagem para o botão, garantindo que 
            1) Não corte na tela 
            2) Não cubra o texto da imagem 
        */}
        <div className="flex justify-end mb-2">
          <button
            onClick={handleClose}
            className="group flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 hover:bg-white/20 text-white text-sm font-medium backdrop-blur-md border border-white/10 transition-all duration-300 shadow-lg cursor-pointer"
          >
            <span>Fechar</span>
            <div className="bg-white/20 p-1 rounded-full group-hover:bg-white/30 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </div>
          </button>
        </div>

        {/* --- CONTAINER DA IMAGEM --- */}
        <div className="relative w-full overflow-hidden rounded-2xl bg-[#1a1a1a] shadow-2xl border border-white/10">
          {/* Efeito de brilho no topo (opcional, dá um toque premium) */}
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
          
          <img
            src={imageUrl}
            alt="Comunicado Importante"
            className="w-full h-auto object-contain block"
            style={{ maxHeight: 'calc(90vh - 60px)' }} // Desconta o tamanho do header para não estourar a tela
          />
        </div>
        
      </div>
    </div>
  );
};

export default PromoModal;
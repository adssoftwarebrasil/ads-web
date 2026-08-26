import { createContext, useContext, useState, ReactNode } from 'react';

export const WHATSAPP_CONTACTS = [
  {
    name: 'Lorena Dias',
    phone: '5562998327769',
    displayPhone: '(62) 9 9832-7769',
  },
  {
    name: 'Gustavo Silveira',
    phone: '5562998899975',
    displayPhone: '(62) 9 9889-9975',
  },
];

export const DEFAULT_WHATSAPP_MESSAGE =
  'Olá! Gostaria de mais informações sobre os serviços da Vidrolatas.';

// Todo CTA de WhatsApp precisa ser um <a> com href wa.me para o Google Ads
// contabilizar o clique; o clique em si abre o modal de escolha do atendente.
export function whatsappLink(message?: string) {
  const text = encodeURIComponent(message || DEFAULT_WHATSAPP_MESSAGE);
  return `https://wa.me/${WHATSAPP_CONTACTS[0].phone}?text=${text}`;
}

interface WhatsAppModalContextType {
  isOpen: boolean;
  message: string;
  openModal: (customMessage?: string) => void;
  closeModal: () => void;
}

const WhatsAppModalContext = createContext<WhatsAppModalContextType | undefined>(undefined);

export function WhatsAppModalProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');

  const openModal = (customMessage?: string) => {
    setMessage(customMessage || DEFAULT_WHATSAPP_MESSAGE);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <WhatsAppModalContext.Provider value={{ isOpen, message, openModal, closeModal }}>
      {children}
    </WhatsAppModalContext.Provider>
  );
}

export function useWhatsAppModal() {
  const context = useContext(WhatsAppModalContext);
  if (context === undefined) {
    throw new Error('useWhatsAppModal must be used within a WhatsAppModalProvider');
  }
  return context;
}

import { X, MessageCircle, MapPin, Instagram } from 'lucide-react';
import { stores } from '../data/stores';
import { Store } from '../types';
import { buildWhatsAppUrl, trackWhatsAppClick } from '../lib/tracking';

interface StoreModalProps {
  isOpen: boolean;
  onClose: () => void;
  prefillMessage?: string;
}

export default function StoreModal({ isOpen, onClose, prefillMessage }: StoreModalProps) {
  if (!isOpen) return null;

  const handleWhatsApp = (store: Store, url: string) => {
    trackWhatsAppClick({
      storeName: store.name,
      phone: store.phone,
      url,
      location: 'modal_unidades',
      message: prefillMessage,
    });
    // Fecha só depois que o navegador processou a navegação do link.
    setTimeout(onClose, 150);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />
      <div
        className="relative bg-white rounded-2xl shadow-2xl w-full max-w-md overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="bg-gradient-to-r from-green-700 to-green-600 p-6 text-white">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-white/80 hover:text-white transition-colors"
          >
            <X size={22} />
          </button>
          <div className="flex items-center gap-3">
            <div className="bg-white/20 rounded-full p-2">
              <MessageCircle size={22} />
            </div>
            <div>
              <h3 className="font-bold text-lg leading-tight">Fale com a gente</h3>
              <p className="text-green-100 text-sm">Escolha a unidade mais próxima</p>
            </div>
          </div>
        </div>

        <div className="p-4 space-y-3">
          {stores.map((store) => {
            const whatsappUrl = buildWhatsAppUrl(store.whatsapp, prefillMessage);
            return (
            <div
              key={store.id}
              className="border border-gray-100 rounded-xl p-4 hover:border-green-200 hover:bg-green-50/50 transition-all"
            >
              <div className="flex items-start justify-between mb-3">
                <div>
                  <span className="inline-block bg-green-100 text-green-700 text-xs font-semibold px-2 py-0.5 rounded-full mb-1">
                    {store.id === 1 ? 'Matriz' : `Filial 0${store.id - 1}`}
                  </span>
                  <h4 className="font-semibold text-gray-800 text-sm">{store.name}</h4>
                </div>
              </div>

              <div className="flex items-start gap-1.5 mb-3">
                <MapPin size={13} className="text-gray-400 mt-0.5 shrink-0" />
                <span className="text-gray-500 text-xs leading-relaxed">{store.address}</span>
              </div>

              <div className="flex items-center gap-2 flex-wrap">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => handleWhatsApp(store, whatsappUrl)}
                  data-gtm="whatsapp"
                  data-gtm-location="modal_unidades"
                  data-gtm-store={store.name}
                  aria-label={`Falar no WhatsApp com ${store.name}`}
                  className="flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white text-sm font-medium px-3 py-2 rounded-lg transition-colors flex-1 justify-center"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4" aria-hidden="true">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  <span>WhatsApp {store.phone}</span>
                </a>

                {store.instagram && (
                  <a
                    href={store.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 border border-gray-200 hover:border-pink-300 hover:bg-pink-50 text-gray-600 hover:text-pink-600 text-sm px-3 py-2 rounded-lg transition-colors"
                  >
                    <Instagram size={15} />
                  </a>
                )}
              </div>
            </div>
            );
          })}
        </div>

        <div className="px-4 pb-4">
          <p className="text-center text-xs text-gray-400">
            Atendimento: Segunda a Sábado das 7h às 21h • Domingo das 7h às 12h
          </p>
        </div>
      </div>
    </div>
  );
}

import { useState, useEffect } from 'react';
import { X } from 'lucide-react';

export default function WhatsAppFAB() {
  const [visible, setVisible] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 1500);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!visible || dismissed) return;
    const timer = setTimeout(() => setShowTooltip(true), 3000);
    return () => clearTimeout(timer);
  }, [visible, dismissed]);

  const handleDismiss = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setShowTooltip(false);
    setDismissed(true);
  };

  return (
    <div
      className={`fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3 transition-all duration-500 ${
        visible ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'
      }`}
    >
      {showTooltip && !dismissed && (
        <div className="flex items-start gap-2 bg-white rounded-2xl shadow-xl border border-green-100 p-3 max-w-xs animate-fade-in">
          <div className="flex-1">
            <p className="text-sm font-bold text-gray-800">Fale conosco!</p>
            <p className="text-xs text-gray-500 mt-0.5">
              Agende a consulta do seu filho agora pelo WhatsApp.
            </p>
          </div>
          <button
            onClick={handleDismiss}
            className="w-5 h-5 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center flex-shrink-0 transition-colors mt-0.5"
            aria-label="Fechar"
          >
            <X size={11} className="text-gray-500" />
          </button>
        </div>
      )}

      <a
        href="http://wa.me/553799766089"
        target="_blank"
        rel="noopener noreferrer"
        className="relative flex items-center justify-center w-16 h-16 bg-green-500 hover:bg-green-600 rounded-full shadow-2xl hover:shadow-green-500/40 transition-all duration-300 hover:scale-110 group whatsapp-ring"
        aria-label="Contato via WhatsApp"
        onClick={() => setShowTooltip(false)}
      >
        <svg
          className="w-8 h-8 text-white"
          viewBox="0 0 24 24"
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
          <path d="M12 0C5.373 0 0 5.373 0 12c0 2.125.557 4.124 1.531 5.862L.057 23.166a.5.5 0 0 0 .613.635l5.457-1.432A11.937 11.937 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.802 9.802 0 0 1-5.045-1.394l-.361-.214-3.24.851.866-3.164-.235-.375A9.803 9.803 0 0 1 2.182 12C2.182 6.578 6.578 2.182 12 2.182S21.818 6.578 21.818 12 17.422 21.818 12 21.818z" />
        </svg>

        <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full border-2 border-white animate-pulse" />
      </a>
    </div>
  );
}

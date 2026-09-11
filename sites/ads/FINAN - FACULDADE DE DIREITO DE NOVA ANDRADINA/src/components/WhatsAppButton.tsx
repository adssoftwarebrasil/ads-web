import { useEffect, useState } from 'react';
import { MessageCircle, X, Phone, Clock, Sparkles } from 'lucide-react';

export default function WhatsAppButton() {
  const [isVisible, setIsVisible] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [showNotification, setShowNotification] = useState(false);

  useEffect(() => {
    // Mostrar botão após 2 segundos
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 2000);

    // Mostrar notificação após 5 segundos
    const notificationTimer = setTimeout(() => {
      setShowNotification(true);
      // Esconder notificação após 10 segundos
      setTimeout(() => setShowNotification(false), 10000);
    }, 5000);

    return () => {
      clearTimeout(timer);
      clearTimeout(notificationTimer);
    };
  }, []);

  const quickMessages = [
    {
      icon: Phone,
      title: 'Quero mais informações',
      message: 'Olá! Gostaria de mais informações sobre a FINAN.'
    },
    {
      icon: Sparkles,
      title: 'Falar com consultor',
      message: 'Olá! Gostaria de falar com um consultor FINAN.'
    },
    {
      icon: Clock,
      title: 'Agendar uma visita',
      message: 'Olá! Gostaria de agendar uma visita ao campus da FINAN.'
    }
  ];

  const handleQuickMessage = (message: string) => {
    const whatsappUrl = `https://wa.me/5567999780073?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
    setIsExpanded(false);
  };

  return (
    <>
      {/* Notification bubble */}
      {showNotification && !isExpanded && (
        <div 
          className={`fixed bottom-24 right-5 md:right-24 max-w-xs bg-white rounded-2xl shadow-2xl p-4 transition-all duration-500 z-40 border-2 ${
            showNotification ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
          style={{ borderColor: '#25D366' }}
        >
          <button
            onClick={() => setShowNotification(false)}
            className="absolute -top-2 -right-2 w-6 h-6 bg-gray-200 hover:bg-gray-300 rounded-full flex items-center justify-center transition-colors"
          >
            <X size={14} />
          </button>
          
          <div className="flex items-start gap-3">
            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
              <MessageCircle size={20} style={{ color: '#25D366' }} />
            </div>
            <div>
              <p className="font-bold text-sm mb-1" style={{ color: '#074785' }}>
                Precisa de ajuda?
              </p>
              <p className="text-xs text-gray-600 mb-2">
                Estamos online! Fale conosco agora.
              </p>
              <button
                onClick={() => {
                  setShowNotification(false);
                  setIsExpanded(true);
                }}
                className="text-xs font-semibold hover:underline"
                style={{ color: '#25D366' }}
              >
                Iniciar conversa →
              </button>
            </div>
          </div>
          
          {/* Triangle pointer */}
          <div 
            className="absolute -bottom-2 right-8 w-4 h-4 bg-white transform rotate-45 border-r-2 border-b-2"
            style={{ borderColor: '#25D366' }}
          ></div>
        </div>
      )}

      {/* Expanded menu */}
      {isExpanded && (
        <div 
          className={`fixed bottom-24 right-5 w-80 bg-white rounded-2xl shadow-2xl transition-all duration-300 z-40 overflow-hidden ${
            isExpanded ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
          }`}
        >
          {/* Header */}
          <div className="p-4 text-white relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #25D366 0%, #128C7E 100%)' }}>
            <div className="absolute top-0 right-0 w-32 h-32 bg-white opacity-10 rounded-full -translate-y-1/2 translate-x-1/2"></div>
            <div className="relative flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                  <MessageCircle size={24} />
                </div>
                <div>
                  <p className="font-bold text-lg">FINAN</p>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-300 rounded-full animate-pulse"></div>
                    <p className="text-xs text-white/90">Online agora</p>
                  </div>
                </div>
              </div>
              <button
                onClick={() => setIsExpanded(false)}
                className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30 flex items-center justify-center transition-colors"
              >
                <X size={18} />
              </button>
            </div>
          </div>

          {/* Content */}
          <div className="p-4">
            <p className="text-sm text-gray-600 mb-4">
              Olá! 👋 Como podemos ajudar você hoje?
            </p>

            <div className="space-y-2">
              {quickMessages.map((item, index) => {
                const Icon = item.icon;
                return (
                  <button
                    key={index}
                    onClick={() => handleQuickMessage(item.message)}
                    className="group w-full flex items-center gap-3 p-3 rounded-xl bg-gray-50 hover:bg-green-50 transition-all duration-300 border-2 border-transparent hover:border-green-200"
                  >
                    <div 
                      className="flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-300"
                      style={{ backgroundColor: '#e7f5ec' }}
                    >
                      <Icon size={20} style={{ color: '#25D366' }} />
                    </div>
                    <div className="flex-1 text-left">
                      <p className="text-sm font-semibold text-gray-800 group-hover:text-green-700 transition-colors">
                        {item.title}
                      </p>
                    </div>
                    <svg 
                      className="w-5 h-5 text-gray-400 group-hover:text-green-600 group-hover:translate-x-1 transition-all" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                );
              })}
            </div>

            {/* Custom message */}
            <div className="mt-4 pt-4 border-t border-gray-200">
              
                <a href="https://wa.me/5567999780073"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full px-4 py-3 rounded-xl text-white font-semibold transition-all hover:scale-105 shadow-md"
                style={{ backgroundColor: '#25D366' }}
              >
                <MessageCircle size={20} />
                <span>Enviar mensagem personalizada</span>
              </a>
            </div>

            {/* Footer */}
            <div className="mt-4 flex items-center justify-center gap-2 text-xs text-gray-500">
              <Clock size={14} />
              <span>Atendimento: Seg-Sex, 12h às 22h</span>
            </div>
          </div>
        </div>
      )}

      {/* Main WhatsApp button */}
      <div className="fixed bottom-5 right-5 z-50">
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className={`relative group transition-all duration-500 ${
            isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-0'
          }`}
          aria-label="Contato via WhatsApp"
        >
          {/* Pulsing rings */}
          <div className="absolute inset-0 rounded-full animate-ping opacity-20" style={{ backgroundColor: '#25D366' }}></div>
          <div className="absolute inset-0 rounded-full animate-pulse opacity-30" style={{ backgroundColor: '#25D366' }}></div>
          
          {/* Main button */}
          <div 
            className={`relative w-16 h-16 md:w-20 md:h-20 rounded-full flex items-center justify-center shadow-2xl transition-all duration-300 ${
              isExpanded ? 'scale-90' : 'hover:scale-110'
            }`}
            style={{
              background: 'linear-gradient(135deg, #25D366 0%, #128C7E 100%)'
            }}
          >
            {/* Badge notification */}
            {!isExpanded && showNotification && (
              <div className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full border-2 border-white animate-bounce"></div>
            )}

            {isExpanded ? (
              <X size={32} color="white" className="transition-transform duration-300" />
            ) : (
              <MessageCircle size={32} color="white" className="group-hover:scale-110 transition-transform duration-300" />
            )}
          </div>

          {/* Tooltip */}
          {!isExpanded && (
            <div className="absolute right-full mr-3 top-1/2 -translate-y-1/2 px-4 py-2 bg-gray-900 text-white text-sm rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
              Fale conosco!
              <div className="absolute top-1/2 -translate-y-1/2 left-full w-2 h-2 bg-gray-900 transform rotate-45"></div>
            </div>
          )}
        </button>
      </div>

      <style jsx>{`
        @keyframes ping {
          75%, 100% {
            transform: scale(1.5);
            opacity: 0;
          }
        }
        
        @keyframes pulse {
          0%, 100% {
            transform: scale(1);
            opacity: 0.3;
          }
          50% {
            transform: scale(1.2);
            opacity: 0.2;
          }
        }
      `}</style>
    </>
  );
}
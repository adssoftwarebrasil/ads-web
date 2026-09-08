import { FormEvent, useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { CheckCircle2, Send, X } from 'lucide-react';
import { supabase } from '../lib/supabase';

const STORAGE_KEY = 'veranita_widget_dismissed';

export function WhatsAppIcon({ className = 'w-6 h-6' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 32 32" fill="currentColor" aria-hidden="true">
      <path d="M16 .5C7.44.5.5 7.44.5 16c0 2.83.75 5.49 2.07 7.79L.5 31.5l7.91-2.07A15.45 15.45 0 0 0 16 31.5C24.56 31.5 31.5 24.56 31.5 16S24.56.5 16 .5Zm0 28.27a12.7 12.7 0 0 1-6.49-1.78l-.46-.27-4.7 1.23 1.25-4.58-.3-.47A12.74 12.74 0 1 1 28.77 16C28.77 23.04 23.04 28.77 16 28.77Zm7.27-9.55c-.4-.2-2.36-1.16-2.72-1.29-.36-.13-.62-.2-.89.2-.27.4-1.02 1.29-1.25 1.55-.23.27-.46.3-.86.1-.4-.2-1.69-.62-3.22-1.98-1.19-1.06-1.99-2.36-2.22-2.76-.23-.4-.02-.61.18-.81.18-.18.4-.46.6-.69.2-.23.27-.4.4-.66.13-.27.07-.5-.03-.7-.1-.2-.89-2.14-1.22-2.93-.32-.77-.65-.66-.89-.67h-.76c-.27 0-.7.1-1.06.5s-1.39 1.36-1.39 3.32c0 1.95 1.42 3.84 1.62 4.1.2.27 2.79 4.27 6.77 5.99.95.41 1.69.65 2.27.83.95.3 1.81.26 2.49.16.76-.11 2.36-.96 2.69-1.89.33-.93.33-1.72.23-1.89-.1-.17-.36-.27-.76-.47Z" />
    </svg>
  );
}

export default function WhatsAppWidget() {
  const [open, setOpen] = useState(false);
  const [autoOpened, setAutoOpened] = useState(false);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState(
    'Gostaria de saber mais sobre os produtos Veranita.'
  );
  const [status, setStatus] = useState<'idle' | 'sending' | 'success'>('idle');

  useEffect(() => {
    if (typeof window === 'undefined' || sessionStorage.getItem(STORAGE_KEY)) return;
    const timer = setTimeout(() => {
      setOpen(true);
      setAutoOpened(true);
    }, 6500);
    return () => clearTimeout(timer);
  }, []);

  const close = () => {
    setOpen(false);
    if (autoOpened) sessionStorage.setItem(STORAGE_KEY, '1');
  };

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    setStatus('sending');

    try {
      await supabase.from('whatsapp_leads').insert({
        name,
        phone,
        message,
        source: 'floating-widget',
      });
    } catch (error) {
      console.error(error);
    }

    const text = `Olá, sou ${name}.%0A%0A${message}%0A%0AContato: ${phone}`;
    window.open(`https://wa.me/5516997516375?text=${text}`, '_blank');
    setStatus('success');
    setTimeout(() => {
      setStatus('idle');
      setOpen(false);
      sessionStorage.setItem(STORAGE_KEY, '1');
      setName('');
      setPhone('');
      setMessage('Gostaria de saber mais sobre os produtos Veranita.');
    }, 1800);
  };

  return (
    <>
      <motion.button
        type="button"
        onClick={() => setOpen((value) => !value)}
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.4, type: 'spring' }}
        className="fixed bottom-6 right-6 z-40 group"
        aria-label="Abrir conversa no WhatsApp"
      >
        <span className="absolute inset-0 rounded-full bg-[#25d366] animate-ping opacity-30" />
        <span className="relative flex items-center justify-center w-16 h-16 rounded-full bg-[#25d366] text-white shadow-card-hover hover:scale-110 transition-transform">
          {open ? <X className="w-7 h-7" /> : <WhatsAppIcon className="w-7 h-7" />}
        </span>
      </motion.button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 24, scale: 0.95 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="fixed bottom-28 right-4 sm:right-6 z-40 w-[calc(100vw-2rem)] sm:w-96 max-w-sm rounded-3xl bg-white shadow-card-hover overflow-hidden"
          >
            <div className="bg-[#075e54] text-white p-5 flex items-center gap-3 relative">
              <div className="w-12 h-12 rounded-full bg-white/15 flex items-center justify-center">
                <WhatsAppIcon className="w-6 h-6" />
              </div>
              <div className="flex-1">
                <p className="font-extrabold text-sm">Veranita Atendimento</p>
                <p className="text-xs text-white/80 inline-flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                  Online agora
                </p>
              </div>
              <button
                type="button"
                onClick={close}
                aria-label="Fechar"
                className="text-white/80 hover:text-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="bg-[#e5ddd5] p-5">
              <div className="bg-white rounded-2xl rounded-tl-none p-4 shadow-soft">
                <p className="text-sm text-brand-brown font-medium mb-1">Olá! 👋</p>
                <p className="text-sm text-brand-brown/85 leading-relaxed font-book">
                  Somos a equipe Veranita. Preencha seus dados e nossa equipe entra em contato em
                  instantes pelo WhatsApp.
                </p>
              </div>
            </div>

            {status === 'success' ? (
              <div className="p-6 flex flex-col items-center text-center">
                <CheckCircle2 className="w-12 h-12 text-[#25d366] mb-3" />
                <p className="font-extrabold text-brand-brown">Tudo certo!</p>
                <p className="text-sm text-brand-brown/75 font-book mt-1">
                  Estamos abrindo o WhatsApp para você...
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="p-5 space-y-3">
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(event) => setName(event.target.value)}
                  placeholder="Seu nome"
                  className="w-full px-4 py-3 rounded-xl bg-brand-beige text-brand-brown text-sm font-medium placeholder:text-brand-brown/50 focus:outline-none focus:ring-2 focus:ring-brand-gold transition"
                />
                <input
                  type="tel"
                  required
                  value={phone}
                  onChange={(event) => setPhone(event.target.value)}
                  placeholder="Seu telefone (WhatsApp)"
                  className="w-full px-4 py-3 rounded-xl bg-brand-beige text-brand-brown text-sm font-medium placeholder:text-brand-brown/50 focus:outline-none focus:ring-2 focus:ring-brand-gold transition"
                />
                <textarea
                  required
                  rows={3}
                  value={message}
                  onChange={(event) => setMessage(event.target.value)}
                  placeholder="Como podemos ajudar?"
                  className="w-full px-4 py-3 rounded-xl bg-brand-beige text-brand-brown text-sm font-medium placeholder:text-brand-brown/50 focus:outline-none focus:ring-2 focus:ring-brand-gold transition resize-none"
                />
                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="w-full inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-[#25d366] text-white text-sm font-bold uppercase tracking-wider hover:bg-[#1ebe5b] transition-colors disabled:opacity-60"
                >
                  {status === 'sending' ? (
                    'Enviando...'
                  ) : (
                    <>
                      <Send className="w-4 h-4" /> Enviar pelo WhatsApp
                    </>
                  )}
                </button>
                <p className="text-[11px] text-brand-brown/60 text-center font-book">
                  Ao enviar, você concorda em ser contatado por nossa equipe.
                </p>
              </form>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

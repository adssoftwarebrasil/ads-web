import { useEffect, useRef, useState } from 'react';
import { WhatsAppGlyph, CloseGlyph } from './icons';

const WPP = '5531000000000';
const KEY = 'veacci-wpp';

export default function ContactWidget() {
  const [open, setOpen] = useState(false);
  const nomeRef = useRef<HTMLInputElement>(null);

  const setOpenState = (v: boolean, dismiss = false) => {
    setOpen(v);
    if (v) {
      window.setTimeout(() => nomeRef.current?.focus(), 320);
    } else if (dismiss) {
      try {
        localStorage.setItem(KEY, 'dismissed');
      } catch {
        /* noop */
      }
    }
  };

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && open) setOpenState(false, true);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open]);

  useEffect(() => {
    const isDesktop = window.matchMedia('(min-width: 1024px) and (pointer: fine)').matches;
    let dismissed = false;
    try {
      dismissed = !!localStorage.getItem(KEY);
    } catch {
      dismissed = false;
    }
    if (isDesktop && !dismissed) {
      const t = window.setTimeout(() => setOpen(true), 15000);
      return () => window.clearTimeout(t);
    }
  }, []);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const linhas = [
      'Olá, Veacci! Quero falar com um especialista.',
      '',
      `Nome: ${data.get('nome') || '-'}`,
      `WhatsApp: ${data.get('fone') || '-'}`,
      '',
      `${data.get('msg') || ''}`,
    ];
    window.open(`https://wa.me/${WPP}?text=${encodeURIComponent(linhas.join('\n'))}`, '_blank', 'noopener');
    try {
      localStorage.setItem(KEY, 'engaged');
    } catch {
      /* noop */
    }
    setOpen(false);
  };

  return (
    <div
      id="contact-widget"
      className="pointer-events-none fixed bottom-5 right-5 z-[55] flex flex-col items-end gap-3 print:hidden"
    >
      {/* Painel */}
      <div
        id="cw-panel"
        className={`w-[20.5rem] max-w-[calc(100vw-2.5rem)] transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] ${
          open
            ? 'pointer-events-auto translate-y-0 scale-100 opacity-100'
            : 'pointer-events-none translate-y-3 scale-95 opacity-0'
        }`}
        role="dialog"
        aria-label="Falar com a Veacci"
        aria-hidden={!open}
      >
        <div className="overflow-hidden rounded-xl border border-line bg-paper shadow-pop">
          <div className="flex items-start justify-between gap-3 border-b border-line bg-ivory px-5 py-4">
            <div className="flex items-center gap-2.5">
              <span className="relative flex size-2.5">
                <span className="absolute inline-flex size-full animate-ping rounded-full bg-lime opacity-60" />
                <span className="relative inline-flex size-2.5 rounded-full bg-lime" />
              </span>
              <div>
                <p className="font-serif text-lg leading-none tracking-tight text-ink">Vamos conversar?</p>
                <p className="mt-1 text-xs text-stone">Resposta rápida pelo WhatsApp</p>
              </div>
            </div>
            <button
              id="cw-close"
              type="button"
              onClick={() => setOpenState(false, true)}
              className="-mr-1 -mt-1 grid size-8 place-items-center rounded-md text-mist transition-colors hover:bg-sand hover:text-ink"
              aria-label="Fechar"
            >
              <CloseGlyph className="size-4" />
            </button>
          </div>
          <form id="cw-form" onSubmit={onSubmit} className="flex flex-col gap-3 px-5 py-5">
            <p className="text-[0.92rem] leading-relaxed text-stone">
              Conte em uma linha o seu desafio. Atendemos empresas de grande porte.
            </p>
            <input
              ref={nomeRef}
              id="cw-nome"
              name="nome"
              type="text"
              required
              aria-label="Seu nome"
              placeholder="Seu nome"
              className="cw-field"
              autoComplete="name"
            />
            <input
              id="cw-fone"
              name="fone"
              type="tel"
              required
              aria-label="Seu WhatsApp"
              placeholder="Seu WhatsApp (DDD + número)"
              className="cw-field"
              autoComplete="tel"
            />
            <textarea
              id="cw-msg"
              name="msg"
              rows={2}
              aria-label="Mensagem"
              placeholder="Sua empresa e o que você busca"
              className="cw-field resize-none"
            />
            <button
              type="submit"
              className="mt-1 inline-flex items-center justify-center gap-2 rounded-sm bg-lime px-5 py-3 font-medium text-ink transition-colors hover:bg-lime-bright"
            >
              <WhatsAppGlyph className="size-[1.15rem]" />
              Continuar no WhatsApp
            </button>
            <p className="text-[0.7rem] leading-relaxed text-mist">
              Ao enviar, você abre uma conversa no WhatsApp. Veja a{' '}
              <a href="/privacidade" className="underline underline-offset-2 hover:text-moss">
                privacidade
              </a>
              .
            </p>
          </form>
        </div>
      </div>

      {/* Botão */}
      <button
        id="cw-toggle"
        type="button"
        onClick={() => setOpenState(!open, open)}
        className="group pointer-events-auto relative grid size-14 place-items-center rounded-full bg-ink text-lime shadow-pop transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] hover:scale-105 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-moss"
        aria-label={open ? 'Fechar conversa' : 'Abrir conversa no WhatsApp'}
        aria-expanded={open}
        aria-controls="cw-panel"
      >
        <WhatsAppGlyph className={`size-7${open ? ' hidden' : ''}`} />
        <CloseGlyph className={`size-6${open ? '' : ' hidden'}`} strokeWidth="1.9" />
      </button>
    </div>
  );
}

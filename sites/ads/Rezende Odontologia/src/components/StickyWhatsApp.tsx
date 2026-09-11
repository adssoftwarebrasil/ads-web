import { useEffect, useState } from 'react';
import WhatsAppLink from './ui/WhatsAppLink';

/**
 * Botão flutuante: aparece depois do hero e some quando o CTA final entra na
 * tela, para não competir com o formulário.
 */
export default function StickyWhatsApp() {
  const [visible, setVisible] = useState(false);
  const [overFinalCta, setOverFinalCta] = useState(false);

  useEffect(() => {
    let queued = false;
    const render = () => {
      queued = false;
      const hero = document.getElementById('inicio');
      const threshold = Math.max(160, (hero?.offsetHeight ?? 0) * 0.56);
      setVisible(window.scrollY > threshold);
    };
    const onScroll = () => {
      if (queued) return;
      queued = true;
      requestAnimationFrame(render);
    };
    render();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const finalCta = document.getElementById('contato');
    if (!finalCta || !('IntersectionObserver' in window)) return;
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        setOverFinalCta(Boolean(entry?.isIntersecting) && (entry?.intersectionRatio ?? 0) > 0.24);
      },
      { threshold: [0.24, 0.5] }
    );
    observer.observe(finalCta);
    return () => observer.disconnect();
  }, []);

  const shown = visible && !overFinalCta;

  return (
    <WhatsAppLink
      section="sticky-mobile"
      position="bottom"
      aria-label="Agendar avaliação pelo WhatsApp"
      className={`fixed bottom-[18px] right-[18px] z-20 inline-flex min-h-[46px] items-center gap-[.42rem] rounded-full border border-white/25 bg-[#168a61] px-[.83rem] py-[.62rem] text-[.74rem] font-extrabold text-white shadow-[0_12px_26px_rgba(7,27,50,.2)] transition-all duration-200 max-md:bottom-[10px] max-md:right-[10px] max-md:min-h-[44px] max-md:px-[.72rem] max-[390px]:px-[.62rem] ${
        shown ? 'translate-y-0 opacity-100' : 'pointer-events-none translate-y-3 opacity-0'
      }`}
    >
      <svg viewBox="0 0 32 32" aria-hidden="true" className="h-[21px] w-[21px]">
        <path
          d="M16 3a13 13 0 0 0-11.2 19.6L3.4 29l6.6-1.3A13 13 0 1 0 16 3Zm0 23.6c-1.9 0-3.8-.5-5.5-1.5l-.4-.2-3.9.8.8-3.8-.3-.4a10.6 10.6 0 1 1 9.3 5.1Zm5.8-7.9c-.3-.1-1.9-.9-2.2-1s-.5-.1-.8.2l-1 1.2c-.2.2-.4.3-.7.2a8.7 8.7 0 0 1-2.6-1.6 9.9 9.9 0 0 1-1.8-2.3c-.2-.3 0-.5.1-.7l.5-.6.3-.5c.1-.2 0-.5 0-.6l-1-2.3c-.2-.5-.5-.4-.7-.4h-.6c-.2 0-.6.1-.9.5s-1.2 1.2-1.2 3 .1 2.1 1.2 3.8a13.6 13.6 0 0 0 5.2 4.7c.7.3 1.3.5 1.8.7.8.2 1.5.2 2 .1.6-.1 1.9-.8 2.1-1.5.3-.7.3-1.4.2-1.5 0-.2-.3-.3-.6-.4Z"
          fill="currentColor"
        />
      </svg>
      <span className="max-[390px]:sr-only">Agendar avaliação</span>
    </WhatsAppLink>
  );
}

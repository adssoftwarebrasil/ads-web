import { useEffect, useRef, useState } from 'react';

function shouldStartVisible() {
  if (typeof window === 'undefined' || typeof IntersectionObserver === 'undefined') return true;
  return window.matchMedia?.('(prefers-reduced-motion: reduce)').matches ?? false;
}

/**
 * Revela o elemento quando ele entra na viewport.
 * Se o navegador não suportar IntersectionObserver (ou o usuário pedir menos
 * animação), o elemento já nasce visível — o conteúdo nunca fica escondido.
 */
export default function useReveal<T extends HTMLElement = HTMLDivElement>() {
  const ref = useRef<T>(null);
  const [visible, setVisible] = useState(shouldStartVisible);

  useEffect(() => {
    const el = ref.current;
    if (!el || shouldStartVisible()) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -60px 0px' }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return { ref, visible };
}

import { useEffect, useRef, useState } from 'react';

/**
 * Revela um bloco quando ele entra na viewport. Elementos que já nascem
 * visíveis aparecem sem animação, evitando "flash" no primeiro paint.
 */
export function useReveal<T extends HTMLElement = HTMLDivElement>() {
  const ref = useRef<T>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    if (!('IntersectionObserver' in window)) {
      setVisible(true);
      return;
    }

    if (element.getBoundingClientRect().top < window.innerHeight * 1.04) {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.12, rootMargin: '0px 0px -6%' }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return { ref, className: visible ? 'reveal reveal-visible' : 'reveal' };
}

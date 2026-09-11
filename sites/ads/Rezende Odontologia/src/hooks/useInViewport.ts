import { useEffect, useRef, useState } from 'react';

type Options = {
  /** Mantém `true` depois da primeira entrada — útil para montar iframes sob demanda. */
  once?: boolean;
  threshold?: number | number[];
  rootMargin?: string;
};

export function useInViewport<T extends HTMLElement = HTMLDivElement>({
  once = false,
  threshold = 0,
  rootMargin = '0px',
}: Options = {}) {
  const ref = useRef<T>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    if (!('IntersectionObserver' in window)) {
      setInView(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (!entry) return;
        setInView(entry.isIntersecting);
        if (entry.isIntersecting && once) observer.disconnect();
      },
      { threshold, rootMargin }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [once, rootMargin, threshold]);

  return { ref, inView };
}

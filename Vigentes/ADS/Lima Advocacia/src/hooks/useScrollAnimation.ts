import { useEffect, useRef } from 'react';

export function useScrollAnimation() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll(
      '.animate-on-scroll, .animate-on-scroll-left, .animate-on-scroll-right'
    );

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return ref;
}

import { useLayoutEffect } from 'react';

export function useRevealOnScroll() {
  useLayoutEffect(() => {
    const targets = Array.from(document.querySelectorAll<HTMLElement>('.fade-in'));

    if (!('IntersectionObserver' in window)) {
      return;
    }

    // Só esconde o conteúdo depois que o observer existe para revelá-lo.
    document.documentElement.classList.add('js-reveal');

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('fade-in-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0, rootMargin: '0px 0px -80px 0px' }
    );

    targets.forEach((el) => observer.observe(el));

    return () => {
      observer.disconnect();
      document.documentElement.classList.remove('js-reveal');
    };
  }, []);
}

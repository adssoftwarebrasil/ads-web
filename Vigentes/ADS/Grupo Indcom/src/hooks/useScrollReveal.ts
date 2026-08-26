import { useEffect } from 'react';

/**
 * Reproduces the site's scroll-reveal behaviour. Elements are transcribed
 * with their original static classes (opacity-0 + translate-*). Once they
 * enter the viewport we swap the hidden classes for the visible ones so the
 * existing `transition-all duration-700` (and inline transition-delay) animate.
 */
export function useScrollReveal(): void {
  useEffect(() => {
    const hiddenSelector =
      '.opacity-0.translate-y-8, .opacity-0.-translate-y-8, .opacity-0.translate-x-8, .opacity-0.-translate-x-8';
    const nodes = Array.from(
      document.querySelectorAll<HTMLElement>(hiddenSelector)
    );

    const reveal = (el: HTMLElement) => {
      el.classList.remove(
        'opacity-0',
        'translate-y-8',
        '-translate-y-8',
        'translate-x-8',
        '-translate-x-8'
      );
      el.classList.add('opacity-100', 'translate-y-0', 'translate-x-0');
    };

    if (!('IntersectionObserver' in window)) {
      nodes.forEach(reveal);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            reveal(entry.target as HTMLElement);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -60px 0px' }
    );

    nodes.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, []);
}

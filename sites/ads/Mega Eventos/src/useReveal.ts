import { useEffect } from 'react';

/**
 * Observes elements carrying reveal / reveal-left / reveal-right / reveal-scale
 * classes and adds the "visible" class once they enter the viewport.
 */
export function useReveal() {
  useEffect(() => {
    const selectors = '.reveal, .reveal-left, .reveal-right, .reveal-scale';
    const elements = Array.from(document.querySelectorAll<HTMLElement>(selectors));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    );

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);
}

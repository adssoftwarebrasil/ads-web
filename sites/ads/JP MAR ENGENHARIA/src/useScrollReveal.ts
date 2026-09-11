import { useEffect } from 'react';

/**
 * Observes elements with entrance-animation classes and toggles the
 * `in-view` class when they scroll into the viewport, replicating the
 * original site's IntersectionObserver-driven reveal behavior.
 */
export function useScrollReveal() {
  useEffect(() => {
    const selector =
      '.animate-fade-up, .animate-slide-left, .animate-slide-right, .animate-slide-up, .animate-fade-in';
    const elements = Array.from(document.querySelectorAll<HTMLElement>(selector));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
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

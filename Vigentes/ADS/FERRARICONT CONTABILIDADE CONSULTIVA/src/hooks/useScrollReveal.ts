import { useEffect } from 'react';

export function useScrollReveal() {
  useEffect(() => {
    const selector =
      '.animate-on-scroll, .animate-on-scroll-left, .animate-on-scroll-right';
    const elements = Array.from(document.querySelectorAll(selector));

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

    elements.forEach((el) => {
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight) {
        el.classList.add('visible');
      } else {
        observer.observe(el);
      }
    });

    return () => observer.disconnect();
  }, []);
}

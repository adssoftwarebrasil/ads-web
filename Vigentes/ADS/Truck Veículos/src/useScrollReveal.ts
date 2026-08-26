import { useEffect } from 'react';

export default function useScrollReveal() {
  useEffect(() => {
    const selector =
      '.animate-on-scroll, .animate-on-scroll-left, .animate-on-scroll-right';
    const elements = Array.from(
      document.querySelectorAll<HTMLElement>(selector)
    );

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);
}

export function scrollToSection(id: string) {
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}

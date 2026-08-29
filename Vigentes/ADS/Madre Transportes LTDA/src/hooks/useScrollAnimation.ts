import { useEffect, useRef } from 'react';

export function useScrollAnimation() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.15 }
    );

    const el = ref.current;
    if (el) {
      const animatedEls = el.querySelectorAll(
        '.animate-on-scroll, .animate-on-scroll-left, .animate-on-scroll-right'
      );
      animatedEls.forEach((el) => observer.observe(el));
    }

    return () => observer.disconnect();
  }, []);

  return ref;
}

export function useElementAnimation(className = 'animate-on-scroll') {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.15 }
    );

    const el = ref.current;
    if (el) {
      el.classList.add(className);
      observer.observe(el);
    }

    return () => observer.disconnect();
  }, [className]);

  return ref;
}

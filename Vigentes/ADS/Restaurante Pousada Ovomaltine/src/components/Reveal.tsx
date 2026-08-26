import { useEffect, useRef, useState, type ReactNode } from 'react';

interface RevealProps {
  children: ReactNode;
  className?: string;
  from?: string;
  delay?: string;
  style?: React.CSSProperties;
}

/**
 * Wraps content in a div that fades/slides into view on scroll,
 * mirroring the original site's IntersectionObserver reveal.
 */
export default function Reveal({
  children,
  className = '',
  from = 'opacity-0 translate-y-8',
  delay = '',
  style,
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.12 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={style}
      className={`${className} ${delay} transition-all duration-700 ${
        visible ? 'opacity-100 translate-y-0 translate-x-0' : from
      }`}
    >
      {children}
    </div>
  );
}

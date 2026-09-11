import { useEffect, useRef, type ElementType, type ReactNode } from 'react';

type Props = {
  children: ReactNode;
  /** `stagger` revela os filhos em cascata; `single` revela o bloco inteiro. */
  mode?: 'single' | 'stagger';
  as?: ElementType;
  className?: string;
  id?: string;
};

/**
 * Revela o conteúdo quando ele entra na tela. Quem prefere menos animação
 * recebe o conteúdo já visível (ver regra em styles.css).
 */
export default function Reveal({
  children,
  mode = 'single',
  as: Tag = 'div',
  className = '',
  id,
}: Props) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (typeof IntersectionObserver === 'undefined') {
      el.classList.add('is-in');
      return;
    }

    const obs = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-in');
            obs.unobserve(entry.target);
          }
        }
      },
      { rootMargin: '0px 0px -12% 0px', threshold: 0.08 },
    );

    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const base = mode === 'stagger' ? 'reveal-stagger' : 'reveal';

  return (
    <Tag ref={ref} id={id} className={`${base} ${className}`.trim()}>
      {children}
    </Tag>
  );
}

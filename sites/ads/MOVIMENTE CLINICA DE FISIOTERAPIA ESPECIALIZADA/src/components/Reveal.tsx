import type { CSSProperties, ReactNode } from 'react';
import useReveal from '../hooks/useReveal';

const offsets = {
  up: 'translate-y-8',
  left: '-translate-x-8',
  right: 'translate-x-8',
} as const;

type Props = {
  children: ReactNode;
  className?: string;
  from?: keyof typeof offsets;
  delay?: string;
  style?: CSSProperties;
};

export default function Reveal({ children, className = '', from = 'up', delay, style }: Props) {
  const { ref, visible } = useReveal<HTMLDivElement>();
  const state = visible ? 'opacity-100 translate-x-0 translate-y-0' : `opacity-0 ${offsets[from]}`;

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${state} ${className}`}
      style={delay ? { transitionDelay: delay, ...style } : style}
    >
      {children}
    </div>
  );
}

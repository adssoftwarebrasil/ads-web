import { useMemo } from 'react';

interface Props {
  count: number;
  colors: string[];
  minDuration: number;
  maxDuration: number;
}

export default function FloatingParticles({ count, colors, minDuration, maxDuration }: Props) {
  const particles = useMemo(
    () =>
      Array.from({ length: count }).map((_, i) => ({
        width: 1 + Math.random() * 4,
        height: 1 + Math.random() * 4,
        left: Math.random() * 100,
        top: Math.random() * 100,
        color: colors[i % colors.length],
        opacity: 0.3 + Math.random() * 0.5,
        delay: Math.random() * 5,
        duration: minDuration + Math.random() * (maxDuration - minDuration),
      })),
    [count, colors, minDuration, maxDuration]
  );

  return (
    <>
      {particles.map((p, i) => (
        <div
          key={i}
          className="absolute rounded-full animate-float"
          style={{
            width: `${p.width}px`,
            height: `${p.height}px`,
            left: `${p.left}%`,
            top: `${p.top}%`,
            background: p.color,
            opacity: p.opacity,
            animationDelay: `${p.delay}s`,
            animationDuration: `${p.duration}s`,
          }}
        ></div>
      ))}
    </>
  );
}

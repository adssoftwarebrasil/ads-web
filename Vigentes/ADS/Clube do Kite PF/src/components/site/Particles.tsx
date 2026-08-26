import { useMemo } from "react";

export function Particles({ count = 28 }: { count?: number }) {
  const items = useMemo(
    () =>
      Array.from({ length: count }).map(() => ({
        left: Math.random() * 100,
        top: 60 + Math.random() * 40,
        size: 2 + Math.random() * 4,
        delay: Math.random() * 8,
        duration: 6 + Math.random() * 8,
        tx: 80 + Math.random() * 200,
        ty: -(150 + Math.random() * 250),
        hue: Math.random() > 0.5 ? "var(--kite-yellow)" : "var(--kite-orange)",
      })),
    [count]
  );
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {items.map((p, i) => (
        <span
          key={i}
          className="absolute rounded-full"
          style={{
            left: `${p.left}%`,
            top: `${p.top}%`,
            width: p.size,
            height: p.size,
            background: p.hue,
            boxShadow: `0 0 ${p.size * 3}px ${p.hue}`,
            animation: `float-particle ${p.duration}s linear ${p.delay}s infinite`,
            // @ts-expect-error custom CSS vars
            "--tx": `${p.tx}px`,
            "--ty": `${p.ty}px`,
          }}
        />
      ))}
    </div>
  );
}
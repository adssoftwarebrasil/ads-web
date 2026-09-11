export function WhatsAppIcon({ size = 20, ...props }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path d="M20.6 11.8a8.7 8.7 0 0 1-12.9 7.6L3 20.7l1.3-4.5A8.7 8.7 0 1 1 20.6 11.8Z" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
      <path d="M8.1 7.4c.4-.3.8-.2 1 .2l.9 1.8c.1.3.1.6-.2.8l-.6.6c.8 1.5 1.9 2.6 3.5 3.3l.6-.7c.2-.3.5-.4.8-.2l1.8.8c.4.2.5.5.3.9-.4 1-1.1 1.5-2.1 1.4-3.7-.5-6.8-3.6-7.2-6.6-.1-1 .4-1.8 1.2-2.3Z" fill="currentColor" />
    </svg>
  );
}

export function AutomotiveIcon({ type, size = 34 }) {
  const paths = {
    alignment: <><rect x="4" y="7" width="6" height="18" rx="2" /><rect x="22" y="7" width="6" height="18" rx="2" /><path d="M10 12h12M10 20h12M16 4v5m0 14v5M2 16h3m22 0h3" /></>,
    tire: <><circle cx="16" cy="16" r="12" /><circle cx="16" cy="16" r="6" /><path d="m7.5 7.5 3 1m13 15-3-1M4 16l3-2m21 2-3 2M16 4l2 3m-2 21-2-3m10.5-17.5-1 3m-15 13 1-3" /></>,
    wrench: <><path d="M27 5a8 8 0 0 1-10 10L7 26a3 3 0 0 1-4-4l11-10A8 8 0 0 1 24 2l-5 5 2 4 4-1 4-5Z" /><circle cx="6" cy="23" r=".7" /></>,
    suspension: <><path d="M16 2v5m0 18v5M11 3h10M11 29h10M11 7h10l-10 5 10 4-10 4 10 5H11" /><path d="M9 7h2m10 18h2" /></>,
    brake: <><circle cx="15" cy="17" r="11" /><circle cx="15" cy="17" r="3" /><path d="M22 4h6v16h-5V9l-3-2ZM15 9v1m-8 7h1m7 7v1m-5.5-13.5.7.7m-.7 10.6.7-.7m10.6.7-.7-.7" /></>,
    engine: <><path d="M3 12h5l3-5h11l4 5h3v12h-5l-3 3H10l-3-6H3ZM12 3h9M16 3v4M3 10v14" /><path d="m18 11-4 6h5l-4 6" /></>,
  };
  return <svg width={size} height={size} viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{paths[type]}</svg>;
}

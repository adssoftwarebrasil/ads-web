interface IconProps {
  size?: number;
  className?: string;
}

const base = {
  xmlns: 'http://www.w3.org/2000/svg',
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 2,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
};

export function MessageCircle({ size = 24, className = '' }: IconProps) {
  return (
    <svg {...base} width={size} height={size} className={`lucide lucide-message-circle ${className}`}>
      <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" />
    </svg>
  );
}

export function Menu({ size = 24, className = '' }: IconProps) {
  return (
    <svg {...base} width={size} height={size} className={`lucide lucide-menu ${className}`}>
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  );
}

export function X({ size = 24, className = '' }: IconProps) {
  return (
    <svg {...base} width={size} height={size} className={`lucide lucide-x ${className}`}>
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  );
}

export function ChevronDown({ size = 24, className = '' }: IconProps) {
  return (
    <svg {...base} width={size} height={size} className={`lucide lucide-chevron-down ${className}`}>
      <path d="m6 9 6 6 6-6" />
    </svg>
  );
}

export function TrendingUp({ size = 24, className = '' }: IconProps) {
  return (
    <svg {...base} width={size} height={size} className={`lucide lucide-trending-up ${className}`}>
      <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
      <polyline points="16 7 22 7 22 13" />
    </svg>
  );
}

export function Headphones({ size = 24, className = '' }: IconProps) {
  return (
    <svg {...base} width={size} height={size} className={`lucide lucide-headphones ${className}`}>
      <path d="M3 14h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7a9 9 0 0 1 18 0v7a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3" />
    </svg>
  );
}

export function ShieldCheck({ size = 24, className = '' }: IconProps) {
  return (
    <svg {...base} width={size} height={size} className={`lucide lucide-shield-check ${className}`}>
      <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  );
}

export function ThumbsUp({ size = 24, className = '' }: IconProps) {
  return (
    <svg {...base} width={size} height={size} className={`lucide lucide-thumbs-up ${className}`}>
      <path d="M7 10v12" />
      <path d="M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2h0a3.13 3.13 0 0 1 3 3.88Z" />
    </svg>
  );
}

export function MapPin({ size = 24, className = '' }: IconProps) {
  return (
    <svg {...base} width={size} height={size} className={`lucide lucide-map-pin ${className}`}>
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

export function Clock({ size = 24, className = '' }: IconProps) {
  return (
    <svg {...base} width={size} height={size} className={`lucide lucide-clock ${className}`}>
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  );
}

export function Mail({ size = 24, className = '' }: IconProps) {
  return (
    <svg {...base} width={size} height={size} className={`lucide lucide-mail ${className}`}>
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  );
}

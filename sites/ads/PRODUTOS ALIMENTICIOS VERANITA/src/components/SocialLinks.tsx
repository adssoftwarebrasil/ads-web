import { Facebook, Instagram } from 'lucide-react';
import { social } from '../data/products';

export function TikTokIcon({ className = 'w-4 h-4' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5.8 20.1a6.34 6.34 0 0 0 10.86-4.43V8.16a8.16 8.16 0 0 0 4.77 1.52V6.23a4.85 4.85 0 0 1-1.84.46Z" />
    </svg>
  );
}

interface SocialLinksProps {
  className?: string;
  iconClassName?: string;
  bg?: string;
  hoverBg?: string;
  color?: string;
  hoverColor?: string;
}

export default function SocialLinks({
  className = '',
  iconClassName = 'w-4 h-4',
  bg = 'bg-brand-brown',
  hoverBg = 'hover:bg-brand-gold',
  color = 'text-brand-gold',
  hoverColor = 'hover:text-brand-brown',
}: SocialLinksProps) {
  const base = `w-10 h-10 inline-flex items-center justify-center rounded-full transition-all duration-300 ${bg} ${hoverBg} ${color} ${hoverColor}`;

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <a
        href={social.instagram}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Instagram"
        className={base}
      >
        <Instagram className={iconClassName} />
      </a>
      <a
        href={social.tiktok}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="TikTok"
        className={base}
      >
        <TikTokIcon className={iconClassName} />
      </a>
      <a
        href={social.facebook}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Facebook"
        className={base}
      >
        <Facebook className={iconClassName} />
      </a>
    </div>
  );
}

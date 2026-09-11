type IconProps = {
  size?: number;
  className?: string;
  strokeWidth?: number;
};

const base = (size: number, className?: string, strokeWidth = 2) => ({
  width: size,
  height: size,
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
  className,
});

export function HomeIcon({ size = 24, className, strokeWidth }: IconProps) {
  return (
    <svg {...base(size, className, strokeWidth)}>
      <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
      <polyline points="9 22 9 12 15 12 15 22"></polyline>
    </svg>
  );
}

export function CarIcon({ size = 24, className, strokeWidth }: IconProps) {
  return (
    <svg {...base(size, className, strokeWidth)}>
      <path d="M14 16H9m10 0h3v-3.15a1 1 0 0 0-.84-.99L16 11l-2.7-3.6a1 1 0 0 0-.8-.4H5.24a2 2 0 0 0-1.8 1.1l-.8 1.63A6 6 0 0 0 2 12.42V16h2"></path>
      <circle cx="6.5" cy="16.5" r="2.5"></circle>
      <circle cx="16.5" cy="16.5" r="2.5"></circle>
    </svg>
  );
}

export function BarChartIcon({ size = 24, className, strokeWidth }: IconProps) {
  return (
    <svg {...base(size, className, strokeWidth)}>
      <line x1="12" y1="20" x2="12" y2="10"></line>
      <line x1="18" y1="20" x2="18" y2="4"></line>
      <line x1="6" y1="20" x2="6" y2="16"></line>
    </svg>
  );
}

export function TruckIcon({ size = 24, className, strokeWidth }: IconProps) {
  return (
    <svg {...base(size, className, strokeWidth)}>
      <rect x="1" y="3" width="15" height="13"></rect>
      <polygon points="16 8 20 8 23 11 23 16 16 16 16 8"></polygon>
      <circle cx="5.5" cy="18.5" r="2.5"></circle>
      <circle cx="18.5" cy="18.5" r="2.5"></circle>
    </svg>
  );
}

export function StarIcon({ size = 24, className, strokeWidth }: IconProps) {
  return (
    <svg {...base(size, className, strokeWidth)}>
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
    </svg>
  );
}

export function CheckIcon({ size = 24, className, strokeWidth = 3 }: IconProps) {
  return (
    <svg {...base(size, className, strokeWidth)}>
      <polyline points="20 6 9 17 4 12"></polyline>
    </svg>
  );
}

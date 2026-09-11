import type { SVGProps } from 'react';

type IconProps = SVGProps<SVGSVGElement> & { size?: number };

function Icon({ size = 18, children, ...rest }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.7}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
      {...rest}
    >
      {children}
    </svg>
  );
}

export const Phone = (p: IconProps) => (
  <Icon {...p}>
    <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2Z" />
  </Icon>
);

export const MapPin = (p: IconProps) => (
  <Icon {...p}>
    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
    <circle cx="12" cy="10" r="3" />
  </Icon>
);

export const Clock = (p: IconProps) => (
  <Icon {...p}>
    <circle cx="12" cy="12" r="9" />
    <path d="M12 7v5l3.2 1.9" />
  </Icon>
);

export const Mail = (p: IconProps) => (
  <Icon {...p}>
    <rect x="2.5" y="4.5" width="19" height="15" rx="2" />
    <path d="m3 6.5 9 6 9-6" />
  </Icon>
);

export const Instagram = (p: IconProps) => (
  <Icon {...p}>
    <rect x="3" y="3" width="18" height="18" rx="5" />
    <circle cx="12" cy="12" r="3.8" />
    <path d="M17.2 6.8h.01" />
  </Icon>
);

export const ArrowRight = (p: IconProps) => (
  <Icon {...p}>
    <path d="M5 12h13" />
    <path d="m12.5 5.5 6.5 6.5-6.5 6.5" />
  </Icon>
);

export const Check = (p: IconProps) => (
  <Icon {...p}>
    <path d="m4.5 12.5 5 5 10-11" />
  </Icon>
);

export const ChevronDown = (p: IconProps) => (
  <Icon {...p}>
    <path d="m6 9.5 6 6 6-6" />
  </Icon>
);

export const Menu = (p: IconProps) => (
  <Icon {...p}>
    <path d="M3.5 7h17" />
    <path d="M3.5 12h17" />
    <path d="M3.5 17h17" />
  </Icon>
);

export const X = (p: IconProps) => (
  <Icon {...p}>
    <path d="m6 6 12 12" />
    <path d="m18 6-12 12" />
  </Icon>
);

export const Star = ({ size = 15, ...rest }: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
    focusable="false"
    {...rest}
  >
    <path d="m12 2.6 2.9 5.9 6.5.9-4.7 4.6 1.1 6.5-5.8-3.1-5.8 3.1 1.1-6.5L2.6 9.4l6.5-.9Z" />
  </svg>
);

export const WhatsApp = ({ size = 20, ...rest }: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
    focusable="false"
    {...rest}
  >
    <path d="M12.04 2C6.6 2 2.2 6.4 2.2 11.84c0 1.9.53 3.68 1.45 5.2L2 22l5.1-1.6a9.8 9.8 0 0 0 4.94 1.33h.01c5.43 0 9.84-4.4 9.84-9.85 0-2.63-1.02-5.1-2.88-6.96A9.78 9.78 0 0 0 12.04 2Zm0 1.8c2.14 0 4.15.84 5.67 2.36a7.97 7.97 0 0 1 2.35 5.68c0 4.45-3.6 8.06-8.03 8.06a8.1 8.1 0 0 1-4.1-1.13l-.3-.17-3.03.95.96-2.95-.19-.3a8 8 0 0 1-1.23-4.28c0-4.44 3.61-8.05 8.05-8.05Zm-2.4 4.03c-.2 0-.53.08-.81.38-.28.3-1.07 1.04-1.07 2.54s1.1 2.95 1.25 3.15c.15.2 2.13 3.25 5.17 4.44.72.28 1.29.45 1.73.58.73.23 1.39.2 1.92.12.58-.09 1.8-.74 2.06-1.45.25-.71.25-1.32.18-1.45-.08-.13-.28-.2-.58-.35-.3-.15-1.79-.88-2.06-.98-.28-.1-.48-.15-.68.15s-.78.98-.96 1.18c-.17.2-.35.22-.65.07-.3-.15-1.28-.47-2.43-1.5-.9-.8-1.51-1.79-1.68-2.09-.18-.3-.02-.46.13-.61.14-.14.3-.35.45-.53.15-.17.2-.3.3-.5.1-.2.05-.38-.02-.53-.08-.15-.67-1.65-.92-2.26-.24-.58-.49-.5-.67-.51h-.58Z" />
  </svg>
);

export const ShieldCheck = (p: IconProps) => (
  <Icon {...p}>
    <path d="M12 2.8 4.8 5.6v5.6c0 4.5 3.1 8.7 7.2 9.9 4.1-1.2 7.2-5.4 7.2-9.9V5.6Z" />
    <path d="m9 12 2.2 2.2L15.4 10" />
  </Icon>
);

export const Award = (p: IconProps) => (
  <Icon {...p}>
    <circle cx="12" cy="9.2" r="5.4" />
    <path d="m8.4 13.6-1.3 7 4.9-2.5 4.9 2.5-1.3-7" />
  </Icon>
);

export const Headset = (p: IconProps) => (
  <Icon {...p}>
    <path d="M4 14v-2a8 8 0 0 1 16 0v2" />
    <path d="M20 15.5a2.5 2.5 0 0 1-2.5 2.5H17v-5h.5A2.5 2.5 0 0 1 20 15.5Z" />
    <path d="M4 15.5A2.5 2.5 0 0 1 6.5 13H7v5h-.5A2.5 2.5 0 0 1 4 15.5Z" />
    <path d="M18 18v.6a2.4 2.4 0 0 1-2.4 2.4H13" />
  </Icon>
);

export const Layers = (p: IconProps) => (
  <Icon {...p}>
    <path d="m12 3 9 4.5-9 4.5-9-4.5Z" />
    <path d="m3 12.5 9 4.5 9-4.5" />
    <path d="m3 17 9 4.5 9-4.5" />
  </Icon>
);

export const Users = (p: IconProps) => (
  <Icon {...p}>
    <circle cx="9" cy="8" r="3.4" />
    <path d="M2.8 20a6.2 6.2 0 0 1 12.4 0" />
    <path d="M16.2 5a3.4 3.4 0 0 1 0 6.5" />
    <path d="M17.6 14.4A6.2 6.2 0 0 1 21.2 20" />
  </Icon>
);

export const Building = (p: IconProps) => (
  <Icon {...p}>
    <path d="M4 21V5.5A1.5 1.5 0 0 1 5.5 4h7A1.5 1.5 0 0 1 14 5.5V21" />
    <path d="M14 10h4.5A1.5 1.5 0 0 1 20 11.5V21" />
    <path d="M2.5 21h19" />
    <path d="M7.2 8h3.6M7.2 12h3.6M7.2 16h3.6M17 14h.01M17 17.5h.01" />
  </Icon>
);

export const HandHeart = (p: IconProps) => (
  <Icon {...p}>
    <path d="M11 5.6a2.6 2.6 0 0 0-4.4 1.8c0 2.4 4.4 5 4.4 5s4.4-2.6 4.4-5A2.6 2.6 0 0 0 11 5.6Z" />
    <path d="M3.5 20.5v-4a2 2 0 0 1 2-2h2.2l2.6 2h2.4a1.4 1.4 0 0 1 0 2.8h-2.6" />
    <path d="m13 19.3 5.3-1.6a1.6 1.6 0 0 1 2 1 1.6 1.6 0 0 1-.9 2l-6 2.1a3 3 0 0 1-1.9 0l-3.8-1.3" />
  </Icon>
);

export const Stethoscope = (p: IconProps) => (
  <Icon {...p}>
    <path d="M5 3v5a4 4 0 0 0 8 0V3" />
    <path d="M4 3h2M12 3h2" />
    <path d="M9 12v2.5a5 5 0 0 0 10 0V13" />
    <circle cx="19" cy="11" r="2" />
  </Icon>
);

export const Package = (p: IconProps) => (
  <Icon {...p}>
    <path d="M20.5 7.8 12 3.2 3.5 7.8v8.4L12 20.8l8.5-4.6Z" />
    <path d="m3.5 7.8 8.5 4.6 8.5-4.6" />
    <path d="M12 12.4v8.4" />
  </Icon>
);

export default function WhatsAppIcon({ size = 20, ...props }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.65"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path d="M20.5 11.6a8.5 8.5 0 0 1-12.6 7.5L3 20.5l1.4-4.8A8.5 8.5 0 1 1 20.5 11.6Z" />
      <path d="M8.3 7.5c-.5.3-.8.8-.7 1.5.2 2.8 3.8 6.3 6.6 6.3.7 0 1.2-.4 1.5-1 .1-.3.1-.6-.2-.7l-1.8-.9-.8.9c-1.5-.6-2.6-1.7-3.2-3.2l.8-.8-.9-2c-.2-.4-.8-.4-1.3-.1Z" />
    </svg>
  );
}

export default function WhatsAppIcon({ size = 22, ...props }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path d="M20.4 11.5a8.4 8.4 0 0 1-12.5 7.3L3 20l1.3-4.7A8.4 8.4 0 1 1 20.4 11.5Z" />
      <path d="M8.1 7.8c.2-.5.5-.6.8-.4l1.2 2c.1.2.1.4-.1.6l-.6.7c.5 1.1 1.4 2 2.6 2.5l.7-.7c.2-.2.4-.2.6-.1l1.9 1c.4.2.3.6.2.9-.5 1.2-1.5 1.5-2.7 1-2.7-.9-4.8-3-5.3-5.1-.3-1 .1-1.8.7-2.4Z" />
    </svg>
  );
}

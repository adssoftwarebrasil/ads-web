const icons = {
  arrow: (
    <>
      <path d="M5 12h14" />
      <path d="m13 6 6 6-6 6" />
    </>
  ),
  close: (
    <>
      <path d="m6 6 12 12" />
      <path d="M18 6 6 18" />
    </>
  ),
  instagram: (
    <>
      <rect width="18" height="18" x="3" y="3" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r=".8" fill="currentColor" stroke="none" />
    </>
  ),
  menu: (
    <>
      <path d="M4 7h16" />
      <path d="M4 12h16" />
      <path d="M4 17h16" />
    </>
  ),
  whatsapp: (
    <>
      <path d="M20.5 11.7a8.5 8.5 0 0 1-12.4 7.6l-4.6 1.2 1.2-4.4a8.5 8.5 0 1 1 15.8-4.4Z" />
      <path d="M8.2 7.7c.3-.5.6-.5 1-.5.2 0 .4 0 .6.4l.9 2c.1.3 0 .5-.2.8l-.6.7c-.2.2-.2.5 0 .8.8 1.4 2 2.5 3.4 3.2.3.2.6.1.8-.2l.9-1c.2-.3.5-.3.8-.2l1.8.9c.3.1.5.3.4.7-.1.7-.4 1.5-.9 2-.7.6-1.6.8-2.5.6-1.2-.3-2.7-.9-4.3-2.2-1.5-1.2-2.8-2.8-3.4-4.4-.6-1.5-.6-2.8.1-3.6.3-.3.8-.5 1.2 0Z" />
    </>
  ),
  next: <path d="m9 18 6-6-6-6" />,
  previous: <path d="m15 18-6-6 6-6" />,
};

function Icon({ name, size = 24, className = "" }) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      fill="none"
      height={size}
      viewBox="0 0 24 24"
      width={size}
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
    >
      {icons[name]}
    </svg>
  );
}

export default Icon;

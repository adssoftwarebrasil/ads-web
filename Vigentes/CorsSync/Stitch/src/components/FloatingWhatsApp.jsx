import { primaryWhatsappLink } from "../data/siteData";

function FloatingWhatsApp() {
  return (
    <a
      aria-label="Conversar com a Kadima pelo WhatsApp"
      className="whatsapp-float"
      href={primaryWhatsappLink}
      rel="noreferrer"
      target="_blank"
    >
      <svg
        aria-hidden="true"
        viewBox="0 0 32 32"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M16 3A12.7 12.7 0 0 0 5.1 22.2L3.4 28.6l6.6-1.7A12.8 12.8 0 1 0 16 3Zm0 2.6a10.1 10.1 0 0 1 0 20.2c-1.8 0-3.5-.5-5-1.3l-.5-.3-3.9 1 1-3.8-.3-.5A10.1 10.1 0 0 1 16 5.6Zm-4.3 4.7c-.2 0-.5.1-.7.4-.3.3-1 1-1 2.4s1 2.8 1.2 3c.2.2 2 3.1 5 4.3 2.5 1 3 .8 3.6.7.5-.1 1.7-.7 2-1.4.2-.7.2-1.3.1-1.4-.1-.1-.3-.2-.6-.4l-2-.9c-.3-.1-.5-.2-.7.1l-1 1.2c-.2.2-.3.2-.6.1a8.1 8.1 0 0 1-2.4-1.5 9 9 0 0 1-1.7-2.1c-.2-.3 0-.5.1-.6l.5-.6.3-.5c.1-.2 0-.4 0-.6l-.9-2.1c-.2-.5-.5-.5-.7-.5h-.5Z" />
      </svg>
      <span>WhatsApp</span>
    </a>
  );
}

export default FloatingWhatsApp;

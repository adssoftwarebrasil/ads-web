export default function WhatsAppButton() {
  return (
    <a
      href="http://wa.me/5562999690082?text=Olá! Vim pelo site e gostaria de mais informações sobre o Colégio Sinapse."
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 w-16 h-16 bg-[#25D366] rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-all duration-300 group"
      aria-label="Falar no WhatsApp"
    >
      <svg viewBox="0 0 32 32" className="w-9 h-9 fill-white" xmlns="http://www.w3.org/2000/svg">
        <path d="M16.002 3.2c-7.069 0-12.8 5.731-12.8 12.8 0 2.278.6 4.512 1.738 6.49l-1.85 5.518 5.688-1.806a12.744 12.744 0 006.224 1.598c7.069 0 12.8-5.731 12.8-12.8s-5.731-12.8-12.8-12.8zm6.323 17.869c-.272.771-1.598 1.453-2.202 1.549-.595.094-.595.453-3.819-.794-3.224-1.246-5.274-4.512-5.435-4.717-.165-.206-1.306-1.733-1.306-3.301 0-1.568.826-2.336 1.12-2.653.294-.318.643-.397.859-.397.213 0 .43.003.619.01.2.01.467-.075.731.557.272.645.923 2.25.999 2.413.077.163.128.355.026.56-.102.206-.154.333-.307.512-.154.18-.322.4-.46.538-.154.154-.314.32-.134.627.18.294.798 1.315 1.712 2.131 1.178 1.050 2.17 1.376 2.477 1.53.307.154.486.128.665-.078.18-.206.77-.898 1.976-.898.243 0 .464.037.665.077.32.063 1.024.483 1.203.571.18.09.294.134.333.206.04.077.04.45-.232 1.221z"></path>
      </svg>
      <span className="absolute -top-1 -right-1 w-4 h-4 bg-[rgb(234,58,35)] rounded-full animate-ping"></span>
      <span className="absolute -top-1 -right-1 w-4 h-4 bg-[rgb(234,58,35)] rounded-full"></span>
    </a>
  );
}

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/559691327966"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Fale conosco pelo WhatsApp"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-[#25D366] flex items-center justify-center shadow-lg shadow-[#25D366]/30 hover:scale-110 transition-all duration-300 animate-pulse-glow opacity-100 translate-y-0"
      style={{ transition: 'opacity 0.5s, transform 0.5s' }}
    >
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="w-7 h-7" fill="white">
        <path d="M16.004 0h-.008C7.174 0 0 7.176 0 16.004c0 3.5 1.128 6.744 3.046 9.378L1.054 31.29l6.118-1.958A15.923 15.923 0 0016.004 32C24.826 32 32 24.826 32 16.004 32 7.176 24.826 0 16.004 0zm9.312 22.594c-.39 1.1-1.932 2.014-3.162 2.28-.842.18-1.94.322-5.638-1.212-4.732-1.962-7.776-6.756-8.012-7.07-.226-.314-1.9-2.53-1.9-4.826s1.2-3.426 1.628-3.894c.39-.426.922-.622 1.23-.622.15 0 .284.008.406.014.428.018.642.044.924.716.354.844 1.218 2.97 1.324 3.184.108.216.216.504.07.792-.136.296-.256.478-.472.734-.216.258-.422.454-.638.732-.198.24-.422.498-.176.926.244.428 1.09 1.796 2.34 2.91 1.608 1.432 2.962 1.876 3.382 2.084.314.156.688.128.942-.144.322-.348.72-.926 1.124-1.498.288-.408.652-.46.998-.314.35.14 2.218 1.046 2.598 1.236.38.19.632.286.726.446.092.16.092.916-.298 2.016z" />
      </svg>
    </a>
  );
}

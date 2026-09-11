export default function WhatsAppFloat() {
  return (
    <div className="fixed bottom-6 right-6 z-[999] hidden sm:block">
      <a
        href="https://wa.me/5511958136971"
        target="_blank"
        rel="noopener noreferrer"
        className="group relative flex items-center justify-center w-16 h-16 bg-[#25D366] rounded-full shadow-2xl hover:scale-110 transition-all duration-300 animate-pulse-slow"
        aria-label="Fale Conosco pelo WhatsApp"
      >
        <svg viewBox="0 0 32 32" fill="currentColor" className="w-9 h-9 text-white">
          <path d="M16 0C7.2 0 0 7.2 0 16c0 2.8 0.7 5.5 2.1 7.9L0 32l8.4-2.1C10.8 31.3 13.3 32 16 32c8.8 0 16-7.2 16-16S24.8 0 16 0zm9.1 22.4c-0.4 1.1-2.1 2-2.8 2.1-0.7 0.1-0.7 0.5-4.3-0.9-3.6-1.4-5.9-5.1-6.1-5.3-0.2-0.2-1.4-1.9-1.4-3.6s0.9-2.5 1.2-2.9c0.3-0.3 0.7-0.4 0.9-0.4 0.2 0 0.5 0 0.7 0 0.2 0 0.5-0.1 0.8 0.6 0.3 0.7 1 2.5 1.1 2.7 0.1 0.2 0.1 0.4 0 0.6-0.1 0.2-0.2 0.3-0.4 0.5-0.2 0.2-0.4 0.4-0.6 0.6-0.2 0.2-0.4 0.4-0.2 0.7 0.2 0.4 1 1.6 2.2 2.6 1.5 1.3 2.8 1.7 3.2 1.9 0.3 0.2 0.5 0.1 0.7-0.1 0.2-0.2 0.8-1 1.1-1.3 0.2-0.4 0.5-0.3 0.8-0.2 0.3 0.1 2 0.9 2.3 1.1 0.3 0.2 0.6 0.3 0.7 0.4 0.1 0.3 0.1 1.4-0.3 2.5z"></path>
        </svg>
      </a>
    </div>
  );
}

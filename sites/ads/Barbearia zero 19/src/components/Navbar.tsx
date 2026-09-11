import { WHATSAPP_URL } from '../constants';

export default function Navbar() {
  return (
    <nav
      aria-label="Navegação principal"
      className="animate-slide-down fixed top-0 left-0 w-full z-50 bg-black/80 backdrop-blur-md border-b border-white/10"
    >
      <div className="container mx-auto px-4 md:px-6 h-20 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <img
            src="/logo_oficial_v2.webp"
            alt="Barbearia Zero19"
            width="160"
            height="80"
            loading="eager"
            fetchPriority="high"
            className="h-16 md:h-20 w-auto brightness-0 invert"
          />
        </div>
        <a
          href={WHATSAPP_URL}
          className="btn-whatsapp bg-premium-red text-white px-6 py-2 rounded-md font-outfit font-bold text-sm tracking-widest hover:bg-premium-red-dark hover:scale-105 active:scale-95 transition-all shadow-lg shadow-premium-red/20 animate-pulse-slow"
        >
          AGENDAR AGORA
        </a>
      </div>
    </nav>
  );
}

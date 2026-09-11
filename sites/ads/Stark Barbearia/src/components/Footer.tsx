import { Instagram, MessageCircle } from 'lucide-react';
import { WHATSAPP_URL, INSTAGRAM_URL, LOGO_URL } from '../data';

export default function Footer() {
  return (
    <footer className="bg-zinc-950 text-white py-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-8">
          <img src={LOGO_URL} alt="Stark Barbearia" className="h-10 w-auto invert opacity-90" />
          <div className="flex items-center gap-6">
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/50 hover:text-white transition-colors duration-300"
              aria-label="Instagram"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/50 hover:text-white transition-colors duration-300"
              aria-label="WhatsApp"
            >
              <MessageCircle className="w-5 h-5" />
            </a>
          </div>
          <div className="h-px w-full max-w-xs bg-white/10"></div>
          <p className="text-white/30 text-xs tracking-wide text-center">
            © 2026 Stark Barbearia. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}

import { Instagram, Facebook, Phone, MapPin, Clock } from 'lucide-react';
import { WHATSAPP, WHATSAPP_DISPLAY } from '../config';

const navLinks = [
  { label: 'Início', href: '#inicio' },
  { label: 'Sobre Nós', href: '#sobre' },
  { label: 'Cardápio', href: '#cardapio' },
  { label: 'Galeria', href: '#galeria' },
  { label: 'Avaliações', href: '#avaliacoes' },
  { label: 'Contato', href: '#contato' },
];

export default function Footer() {
  return (
    <footer className="bg-black border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="lg:col-span-2">
            <img
              src="/img/logo-sem-fundo.webp"
              alt="In Brasa Chopp &amp; Grill"
              className="h-14 w-auto object-contain mb-5"
            />
            <p className="text-white/50 text-sm leading-relaxed max-w-sm mb-6">
              No coração de Sinop, o In Brasa é referência em espetinhos artesanais, chopp gelado e
              atendimento que vai muito além do básico. Um espaço para toda a família.
            </p>
            <div className="flex items-center gap-3">
              <a
                href="https://www.instagram.com/inbrasaespetaria_"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-surface-lighter border border-white/10 flex items-center justify-center text-white/50 hover:text-brand hover:border-brand/50 transition-all duration-200"
                aria-label="Instagram"
              >
                <Instagram className="lucide lucide-instagram" width={18} height={18} />
              </a>
              <a
                href="https://www.facebook.com/p/In-Brasa-Chopp-Grill-61553305465842/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-surface-lighter border border-white/10 flex items-center justify-center text-white/50 hover:text-brand hover:border-brand/50 transition-all duration-200"
                aria-label="Facebook"
              >
                <Facebook className="lucide lucide-facebook" width={18} height={18} />
              </a>
              <a
                href={WHATSAPP}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-surface-lighter border border-white/10 flex items-center justify-center text-white/50 hover:text-brand hover:border-brand/50 transition-all duration-200"
                aria-label="WhatsApp"
              >
                <Phone className="lucide lucide-phone" width={18} height={18} />
              </a>
            </div>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-5 text-sm tracking-wide uppercase">
              Navegação
            </h4>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-white/50 hover:text-brand text-sm transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-5 text-sm tracking-wide uppercase">
              Informações
            </h4>
            <ul className="space-y-4">
              <li className="flex gap-3">
                <MapPin className="lucide lucide-map-pin text-brand flex-shrink-0 mt-0.5" width={16} height={16} />
                <div>
                  <p className="text-white/70 text-sm leading-relaxed">
                    Av. dos Tarumãs, 2368
                    <br />
                    Jardim Maringá — Sinop, MT
                  </p>
                </div>
              </li>
              <li className="flex gap-3">
                <Clock className="lucide lucide-clock text-brand flex-shrink-0 mt-0.5" width={16} height={16} />
                <div>
                  <p className="text-white/70 text-sm">Seg–Sáb: 17h00 – 23h00</p>
                  <p className="text-white/30 text-xs mt-0.5">Domingo: Fechado</p>
                </div>
              </li>
              <li className="flex gap-3">
                <Phone className="lucide lucide-phone text-brand flex-shrink-0 mt-0.5" width={16} height={16} />
                <a
                  href={WHATSAPP}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/70 hover:text-brand text-sm transition-colors"
                >
                  {WHATSAPP_DISPLAY}
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="py-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-white/30 text-xs text-center sm:text-left">
            © 2026 In Brasa Chopp &amp; Grill. Todos os direitos reservados.
          </p>
          <p className="text-white/20 text-xs">Sinop – Mato Grosso</p>
        </div>
      </div>
    </footer>
  );
}

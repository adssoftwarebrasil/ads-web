import { Instagram, Facebook, Phone, MapPin, Clock } from 'lucide-react';
import { WhatsAppIcon } from '../icons';

const quickLinks = [
  { href: '#inicio', label: 'Início' },
  { href: '#produtos', label: 'Produtos' },
  { href: '#sobre', label: 'Sobre nós' },
  { href: '#avaliacoes', label: 'Avaliações' },
  { href: '#contato', label: 'Contato' },
];

export default function Footer() {
  return (
    <footer className="bg-brand-dark text-white">
      <div className="container mx-auto px-4 max-w-6xl py-14">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="lg:col-span-2">
            <img
              src="https://storage.lucasmendes.dev/site-sp/delta%20gas/img/logo-sem-fundo.webp"
              alt="Delta Gás"
              className="h-16 w-auto mb-5 brightness-0 invert"
            />
            <p className="text-white/60 text-sm leading-relaxed max-w-sm">
              A Delta Gás é a distribuidora de gás e água mais próxima de você no Residencial Delta.
              Qualidade, rapidez e confiança desde 2018.
            </p>
            <div className="flex items-center gap-3 mt-6">
              <a
                href="https://www.instagram.com/deltagas.br/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-white/10 hover:bg-brand-light hover:text-brand-dark text-white/70 flex items-center justify-center transition-all duration-300"
                aria-label="Instagram"
              >
                <Instagram size={17} />
              </a>
              <a
                href="https://www.facebook.com/p/Delta-G%C3%A1s-61574287110780/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-white/10 hover:bg-brand-light hover:text-brand-dark text-white/70 flex items-center justify-center transition-all duration-300"
                aria-label="Facebook"
              >
                <Facebook size={17} />
              </a>
              <a
                href="https://wa.me/556699814075"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-white/10 hover:bg-brand-light hover:text-brand-dark text-white/70 flex items-center justify-center transition-all duration-300"
                aria-label="WhatsApp"
              >
                <WhatsAppIcon size={17} />
              </a>
            </div>
          </div>
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-wide mb-5">
              Links Rápidos
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-white/55 hover:text-brand-light text-sm transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-wide mb-5">
              Contato
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone size={15} className="text-brand-light mt-0.5 flex-shrink-0" />
                <a
                  href="https://wa.me/556699814075"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/60 hover:text-brand-light text-sm transition-colors"
                >
                  (66) 99981-4075
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={15} className="text-brand-light mt-0.5 flex-shrink-0" />
                <span className="text-white/60 text-sm leading-relaxed">
                  R. Otávio Pereira Lima, 1042
                  <br />
                  Res. Delta, Sinop-MT
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Clock size={15} className="text-brand-light mt-0.5 flex-shrink-0" />
                <span className="text-white/60 text-sm">
                  Todos os dias
                  <br />
                  7:00h às 22:00h
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="container mx-auto px-4 max-w-6xl py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-white/40 text-xs">
            © 2026 Delta Gás. Todos os direitos reservados.
          </p>
          <p className="text-white/30 text-xs">Distribuidora de Gás e Água em Sinop-MT</p>
        </div>
      </div>
    </footer>
  );
}

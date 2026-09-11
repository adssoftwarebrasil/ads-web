import { Phone, MapPin, Instagram, Facebook } from 'lucide-react';
import { WhatsAppIcon } from './icons';

const navLinks = [
  { href: '#hero', label: 'Início' },
  { href: '#benefits', label: 'Diferenciais' },
  { href: '#products', label: 'Produtos' },
  { href: '#about', label: 'Sobre Nós' },
  { href: '#testimonials', label: 'Avaliações' },
  { href: '#contact', label: 'Contato' },
];

const productLinks = [
  'Gás 13kg (P13) — Residencial',
  'Gás 20kg (P20) — Comércios',
  'Gás 45kg (P45) — Industrial',
];

export default function Footer() {
  return (
    <footer className="bg-gray-950 text-gray-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="mb-6">
              <img
                src="https://storage.lucasmendes.dev/site-sp/imperial%20gas/img2/logo.webp"
                alt="Logo Imperial Gás - Gás do Povo Goiânia"
                className="w-48 h-auto drop-shadow-lg"
              />
            </div>
            <p className="text-gray-500 text-sm leading-relaxed mb-5">
              Revendedor autorizado Supergasbras. Há mais de 20 anos levando gás
              de qualidade para Goiânia e região.
            </p>
            <div className="flex gap-3">
              <a
                href="https://www.instagram.com/imperialgasgo/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-gray-800 hover:bg-pink-500 rounded-lg flex items-center justify-center text-gray-400 hover:text-white transition-all duration-200"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://www.facebook.com/imperialgasgoiania"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-gray-800 hover:bg-blue-600 rounded-lg flex items-center justify-center text-gray-400 hover:text-white transition-all duration-200"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="http://wa.me/556282381551"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-gray-800 hover:bg-green-500 rounded-lg flex items-center justify-center text-gray-400 hover:text-white transition-all duration-200"
                aria-label="WhatsApp"
              >
                <WhatsAppIcon className="w-5 h-5" />
              </a>
            </div>
          </div>
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-4">
              Navegação
            </h4>
            <ul className="space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm hover:text-orange-400 transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-4">
              Produtos
            </h4>
            <ul className="space-y-2.5">
              {productLinks.map((label) => (
                <li key={label}>
                  <a
                    href="#products"
                    className="text-sm hover:text-orange-400 transition-colors leading-relaxed block"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-4">
              Contato
            </h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-orange-400 flex-shrink-0 mt-0.5" />
                <div className="text-sm">
                  <div>(62) 3259-8600</div>
                  <div>(62) 3259-9755</div>
                  <div>(62) 98238-1551 (WhatsApp)</div>
                </div>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-orange-400 flex-shrink-0 mt-0.5" />
                <span className="text-sm leading-relaxed">
                  R. C-149, 1591 — Jardim América
                  <br />
                  Goiânia - GO, 74275-080
                </span>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-gray-600 text-center sm:text-left">
            © 2026 Imperial Comércio Varejista de Gás LTDA. Todos os direitos
            reservados.
          </p>
          <div className="flex flex-col items-center sm:items-end gap-1">
            <p className="text-xs text-gray-700 text-center">
              Revendedor autorizado Supergasbras · Regularizado pela ANP
            </p>
            <p className="text-xs text-gray-700 text-center">
              Imperial Gás (Gás do Povo) - A sua distribuidora para comprar gás
              perto de mim Goiânia.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

import { Instagram, Facebook } from 'lucide-react';
import {
  ADDRESS,
  EMAIL,
  FACEBOOK_URL,
  IMG,
  INSTAGRAM_URL,
  PHONE_DISPLAY,
} from '../data';

const NAV = [
  { label: 'Sobre', href: '#sobre' },
  { label: 'Serviços', href: '#servicos' },
  { label: 'Vantagens', href: '#vantagens' },
  { label: 'Contato', href: '#contato' },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-ink py-14">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <img src={IMG.logo} alt="Grife do Carro" className="h-12 w-auto" />
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-white/60">
              Há mais de 10 anos transformando a forma como Sinop compra, vende e
              troca veículos.
            </p>
            <div className="mt-5 flex gap-3">
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener"
                aria-label="Instagram"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-white/70 hover:border-gold hover:text-gold transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href={FACEBOOK_URL}
                target="_blank"
                rel="noopener"
                aria-label="Facebook"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-white/70 hover:border-gold hover:text-gold transition-colors"
              >
                <Facebook className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-white">
              Navegação
            </h4>
            <ul className="mt-5 space-y-3">
              {NAV.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="text-sm text-white/60 hover:text-gold transition-colors"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-white">
              Contato
            </h4>
            <ul className="mt-5 space-y-3 text-sm text-white/60">
              <li>{PHONE_DISPLAY}</li>
              <li>{EMAIL}</li>
              <li>{ADDRESS}</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

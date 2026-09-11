import { Facebook, Instagram, MapPin, Phone, Mail } from 'lucide-react';

const LOGO =
  'https://storage-admin.lucasmendes.dev/api/v1/buckets/site-sp/objects/download?preview=true&prefix=supercasaimoveis%2Flogo.png&version_id=null';

const navLinks = [
  { href: '#inicio', label: 'Início' },
  { href: '#sobre', label: 'Sobre' },
  { href: '#servicos', label: 'Serviços' },
  { href: '#regioes', label: 'Regiões' },
  { href: '#contato', label: 'Contato' },
];

export default function Footer() {
  return (
    <footer className="bg-neutral-950 border-t border-neutral-900 pt-16 pb-8 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-5">
              <img src={LOGO} alt="Super Casa Imóveis" className="h-14 w-auto" />
              <div>
                <div className="font-serif text-xl text-white leading-tight">Super Casa</div>
                <div className="text-xs tracking-[0.3em] uppercase text-[#d5a222]">Imóveis</div>
              </div>
            </div>
            <p className="text-neutral-400 text-sm leading-relaxed max-w-md">
              Referência no mercado imobiliário de Sinop — MT. Venda, locação, lançamentos e
              investimentos com mais de 20 anos de experiência.
            </p>
            <div className="flex gap-3 mt-6">
              <a
                href="https://www.facebook.com/supercasaimoveis"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-10 h-10 rounded-full border border-neutral-800 flex items-center justify-center text-neutral-300 hover:bg-[#d5a222] hover:text-black hover:border-[#d5a222] transition-all duration-300"
              >
                <Facebook size={18} />
              </a>
              <a
                href="https://www.instagram.com/supercasaimoveis"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-10 h-10 rounded-full border border-neutral-800 flex items-center justify-center text-neutral-300 hover:bg-[#d5a222] hover:text-black hover:border-[#d5a222] transition-all duration-300"
              >
                <Instagram size={18} />
              </a>
            </div>
          </div>
          <div>
            <h4 className="text-[#d5a222] text-xs tracking-[0.3em] uppercase font-semibold mb-5">
              Navegação
            </h4>
            <ul className="space-y-3 text-sm">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-neutral-300 hover:text-[#d5a222] transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-[#d5a222] text-xs tracking-[0.3em] uppercase font-semibold mb-5">
              Contato
            </h4>
            <ul className="space-y-3 text-sm text-neutral-300">
              <li className="flex gap-2">
                <MapPin size={16} className="text-[#d5a222] shrink-0 mt-0.5" />
                <span>R. das Nogueiras, 819 — Sinop/MT</span>
              </li>
              <li className="flex gap-2">
                <Phone size={16} className="text-[#d5a222] shrink-0 mt-0.5" />
                <a href="tel:+556699231818" className="hover:text-[#d5a222]">
                  (66) 99923-1818
                </a>
              </li>
              <li className="flex gap-2">
                <Mail size={16} className="text-[#d5a222] shrink-0 mt-0.5" />
                <a
                  href="mailto:adm@supercasaimoveis.com.br"
                  className="hover:text-[#d5a222] break-all"
                >
                  adm@supercasaimoveis.com.br
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-neutral-900 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-neutral-500 text-xs text-center md:text-left">
            © 2026 Super Casa Imóveis. Todos os direitos reservados.
          </p>
          <a
            href="https://supercasaimoveis.com.br/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-neutral-500 hover:text-[#d5a222] text-xs transition-colors"
          >
            supercasaimoveis.com.br
          </a>
        </div>
      </div>
    </footer>
  );
}

import { Instagram, MapPin, Phone, Mail } from 'lucide-react';

const WA_LINK =
  'https://wa.me/5565996610607?text=Ol%C3%A1!%20Gostaria%20de%20agendar%20uma%20avalia%C3%A7%C3%A3o.';

const NAV_LINKS = [
  { label: 'Início', href: '#hero' },
  { label: 'Serviços', href: '#servicos' },
  { label: 'Sobre', href: '#sobre' },
  { label: 'Diferenciais', href: '#diferenciais' },
  { label: 'Contato', href: '#contato' },
];

export default function Footer() {
  const year = new Date().getFullYear();

  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-950 text-gray-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-16">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-[#32A19A] flex items-center justify-center">
                <span className="text-white font-display font-bold text-sm">AC</span>
              </div>
              <div>
                <div className="text-white font-semibold text-sm font-display">
                  Dr. Antonio Carlos Junior
                </div>
                <div className="text-[#32A19A] text-xs font-medium tracking-wide uppercase">
                  CRO-MT 3988
                </div>
              </div>
            </div>
            <p className="text-sm leading-relaxed mb-5">
              Odontologia de qualidade ao alcance de todos. Mais de 20 anos cuidando do seu sorriso
              em Várzea Grande — MT.
            </p>
            <a
              href="https://www.instagram.com/_antoniocarlosjunior"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-[#A9C5C3] transition-colors"
            >
              <Instagram size={16} />
              @_antoniocarlosjunior
            </a>
          </div>

          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-widest mb-5">
              Navegação
            </h4>
            <ul className="space-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => scrollTo(link.href)}
                    className="text-sm hover:text-[#A9C5C3] transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-widest mb-5">
              Contato
            </h4>
            <ul className="space-y-4">
              <li className="flex gap-3 text-sm">
                <MapPin size={15} className="text-[#32A19A] flex-shrink-0 mt-0.5" />
                <span>Av. Couto Magalhães, 2277 — Ed. Edenever, 4º Andar, Sala 402 — Centro, Várzea Grande — MT</span>
              </li>
              <li className="flex gap-3 text-sm">
                <Phone size={15} className="text-[#32A19A] flex-shrink-0 mt-0.5" />
                <a href="tel:+556530263254" className="hover:text-[#A9C5C3] transition-colors">
                  (65) 3026-3254
                </a>
              </li>
              <li className="flex gap-3 text-sm">
                <Phone size={15} className="text-[#32A19A] flex-shrink-0 mt-0.5" />
                <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="hover:text-[#A9C5C3] transition-colors">
                  (65) 99661-0607 (WhatsApp)
                </a>
              </li>
              <li className="flex gap-3 text-sm">
                <Mail size={15} className="text-[#32A19A] flex-shrink-0 mt-0.5" />
                <a
                  href="mailto:juniormassarioli@hotmail.com"
                  className="hover:text-[#A9C5C3] transition-colors break-all"
                >
                  juniormassarioli@hotmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-600">
            © {year} Clínica Odontológica Dr. Antonio Carlos Junior. Todos os direitos reservados.
          </p>
          <p className="text-xs text-gray-600">CRO-MT 3988 — Várzea Grande, Mato Grosso</p>
        </div>
      </div>
    </footer>
  );
}

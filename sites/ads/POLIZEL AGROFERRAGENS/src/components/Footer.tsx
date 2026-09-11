import { Instagram, Phone, Mail, MapPin } from 'lucide-react';

const NAV_LINKS = [
  { label: 'Início', href: '#inicio' },
  { label: 'Produtos', href: '#produtos' },
  { label: 'Sobre', href: '#sobre' },
  { label: 'Localização', href: '#localizacao' },
  { label: 'Contato', href: '#contato' },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const handleNavClick = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#3a1c00] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          <div className="lg:col-span-2">
            <img
              src="https://storage.lucasmendes.dev/site-sp/polizel/polizel-logo-semfundo.png"
              alt="Polizel Agroferragens"
              className="h-14 w-auto object-contain mb-5"
            />
            <p className="text-white/65 text-sm leading-relaxed max-w-sm mb-6">
              Qualidade, confiança e praticidade para quem vive e trabalha no campo e na cidade.
              Tudo para sua fazenda e sua obra em um só lugar.
            </p>
            <div className="flex items-center gap-3">
              <a
                href="https://www.instagram.com/polizelagroferragensematerias?igsh=MXBsMTkwczRjeHA1eQ%3D%3D&utm_source=qr"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-white/10 hover:bg-[#663300] flex items-center justify-center transition-colors duration-200"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
              <a
                href="https://wa.me/5566999996760"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-[#006633] hover:bg-[#005a2d] flex items-center justify-center transition-colors duration-200"
                aria-label="WhatsApp"
              >
                <Phone size={18} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-heading font-bold text-white mb-5 text-sm uppercase tracking-wider">
              Navegação
            </h4>
            <ul className="space-y-2.5">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => handleNavClick(link.href)}
                    className="text-white/60 hover:text-white text-sm transition-colors duration-200"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-bold text-white mb-5 text-sm uppercase tracking-wider">
              Contato
            </h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin size={16} className="text-green-400 shrink-0 mt-0.5" />
                <span className="text-white/60 text-sm leading-relaxed">
                  Rua Exuperio Alves Pereira, 482<br />
                  Vila Mineira — Rondonópolis, MT
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={16} className="text-green-400 shrink-0" />
                <a
                  href="tel:+5566999996760"
                  className="text-white/60 hover:text-white text-sm transition-colors"
                >
                  (66) 99999-6760
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={16} className="text-green-400 shrink-0" />
                <a
                  href="mailto:polizel.2025pj@gmail.com"
                  className="text-white/60 hover:text-white text-sm transition-colors break-all"
                >
                  polizel.2025pj@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/35 text-xs text-center sm:text-left">
            &copy; {currentYear} Polizel Agroferragens e Materiais de Construção. Todos os direitos reservados.
          </p>
          <p className="text-white/25 text-xs">
            Vila Mineira — Rondonópolis, MT
          </p>
        </div>
      </div>
    </footer>
  );
}

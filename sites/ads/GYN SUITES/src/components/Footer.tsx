import { Phone, Mail, MapPin, Instagram } from 'lucide-react';

const menuLinks = [
  { href: '#inicio', label: 'Início' },
  { href: '#sobre', label: 'Sobre' },
  { href: '#servicos', label: 'Serviços' },
  { href: '#vantagens', label: 'Vantagens' },
  { href: '#depoimentos', label: 'Depoimentos' },
  { href: '#contato', label: 'Contato' },
];

export default function Footer() {
  return (
    <footer className="bg-[rgb(51,58,114)] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <img
              src="https://storage.lucasmendes.dev/site-sp/gynsuite%2Flogo-1.png"
              alt="GYN SUITES Logo"
              className="h-16 w-auto mb-4"
            />
            <p className="text-white/80 leading-relaxed">
              Bem-vindo à GYN SUITES, onde nossa missão é proporcionar uma experiência de
              hospedagem única e confortável em Goiânia.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4 text-[rgb(251,246,199)]">Menu</h3>
            <ul className="space-y-2">
              {menuLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-white/80 hover:text-[rgb(251,246,199)] transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4 text-[rgb(251,246,199)]">Contato</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2">
                <Phone width={18} height={18} className="text-[rgb(251,246,199)]" />
                <a
                  href="https://api.whatsapp.com/send?phone=556292441945"
                  className="text-white/80 hover:text-[rgb(251,246,199)] transition-colors"
                >
                  (62) 99244-1945
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail width={18} height={18} className="text-[rgb(251,246,199)]" />
                <a
                  href="mailto:contato@gynsuites.com.br"
                  className="text-white/80 hover:text-[rgb(251,246,199)] transition-colors"
                >
                  contato@gynsuites.com.br
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin
                  width={18}
                  height={18}
                  className="text-[rgb(251,246,199)] mt-1 flex-shrink-0"
                />
                <span className="text-white/80">Bairro Serrinha, Goiânia - GO</span>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/gynsuites"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-white/80 hover:text-[rgb(251,246,199)] transition-colors"
                >
                  <Instagram width={18} height={18} className="text-[rgb(251,246,199)]" />
                  @gynsuites
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-white/10 text-center text-white/60">
          <p>Copyright © 2026 GYN SUITES - Todos os direitos reservados</p>
        </div>
      </div>
    </footer>
  );
}

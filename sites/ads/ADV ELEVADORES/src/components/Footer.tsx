import { Instagram, Linkedin, MapPin, Phone, Mail, Clock } from 'lucide-react';

const navLinks = [
  { href: '#inicio', label: 'Início' },
  { href: '#servicos', label: 'Serviços' },
  { href: '#produtos', label: 'Produtos' },
  { href: '#sobre', label: 'Sobre Nós' },
  { href: '#contato', label: 'Contato' },
];

const serviceLinks = [
  'Instalação de Elevadores',
  'Manutenção Preventiva',
  'Modernização de Elevadores',
  'Reparos e Corretiva',
  'Plataformas PNE',
  'Monta-Prato e Monta-Carga',
];

export default function Footer() {
  return (
    <footer className="bg-[rgb(42,30,75)] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="lg:col-span-1">
            <img
              src="https://storage.lucasmendes.dev/site-sp/advence-elevadores/img/logo-sem-fundo.webp"
              alt="Advence System Elevadores"
              className="h-12 w-auto mb-5 brightness-0 invert"
            />
            <p className="text-gray-300 text-sm leading-relaxed mb-6">
              Desde 2004, oferecendo excelência em soluções de elevadores para Goiás e Distrito
              Federal. Segurança, qualidade e atendimento 24h.
            </p>
            <div className="flex gap-3">
              <a
                href="https://www.instagram.com/advencesystemelevadores"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-white/10 hover:bg-[rgb(219,38,27)] rounded-lg flex items-center justify-center transition-colors duration-200"
                aria-label="Instagram"
              >
                <Instagram width={17} height={17} className="lucide lucide-instagram " />
              </a>
              <a
                href="https://www.linkedin.com/company/advance-system-elevadores-ltda/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-white/10 hover:bg-[rgb(219,38,27)] rounded-lg flex items-center justify-center transition-colors duration-200"
                aria-label="LinkedIn"
              >
                <Linkedin width={17} height={17} className="lucide lucide-linkedin " />
              </a>
            </div>
          </div>
          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest text-gray-300 mb-5">
              Navegação
            </h4>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-white text-sm transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest text-gray-300 mb-5">
              Serviços
            </h4>
            <ul className="space-y-3">
              {serviceLinks.map((label) => (
                <li key={label}>
                  <a
                    href="https://wa.me/5562998152991"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white text-sm transition-colors duration-200"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest text-gray-300 mb-5">
              Contato
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin
                  width={16}
                  height={16}
                  className="text-[rgb(219,38,27)] mt-0.5 flex-shrink-0"
                />
                <span className="text-gray-400 text-sm">
                  R. Arquimedes Rocha, 73 — Castelo Branco, Goiânia-GO, CEP: 74423-375
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone width={16} height={16} className="text-[rgb(219,38,27)] flex-shrink-0" />
                <a href="tel:6230927735" className="text-gray-400 hover:text-white text-sm transition-colors">
                  (62) 3092-7735
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone width={16} height={16} className="text-[rgb(219,38,27)] flex-shrink-0" />
                <a
                  href="https://wa.me/5562998152991"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white text-sm transition-colors"
                >
                  (62) 9 9815-2991
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail width={16} height={16} className="text-[rgb(219,38,27)] flex-shrink-0" />
                <a
                  href="mailto:advanceelevadores@hotmail.com"
                  className="text-gray-400 hover:text-white text-sm transition-colors break-all"
                >
                  advanceelevadores@hotmail.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Clock
                  width={16}
                  height={16}
                  className="text-[rgb(219,38,27)] mt-0.5 flex-shrink-0"
                />
                <span className="text-gray-400 text-sm">
                  Seg-Sex: 8h às 17h45
                  <br />
                  <span className="text-[rgb(219,38,27)] font-semibold">Plantão 24h</span> — Fins de
                  semana e feriados
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-gray-400 text-xs text-center sm:text-left">
            © 2026 Advence System Elevadores LTDA — CNPJ: 07.296.500/0001-61
          </p>
          <p className="text-gray-500 text-xs">
            Goiânia-GO | Brasília-DF | Goiás e Distrito Federal
          </p>
        </div>
      </div>
    </footer>
  );
}

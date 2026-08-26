import { Instagram, Mail, MapPin, Phone, Clock } from 'lucide-react';
import WhatsAppIcon from './WhatsAppIcon';

const navItems = [
  { label: 'Início', id: 'inicio' },
  { label: 'Sobre', id: 'sobre' },
  { label: 'Produtos', id: 'produtos' },
  { label: 'Galeria', id: 'produtos' },
  { label: 'Depoimentos', id: 'depoimentos' },
  { label: 'Contato', id: 'contato' },
];

export default function Footer() {
  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <footer className="bg-[rgb(103,66,42)] text-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-3 gap-12">
          <div>
            <img
              src="https://storage.lucasmendes.dev/site-sp/dom-manoel-moveis-e-decoracoes/img/logo-sem-fundo.webp"
              alt="Dom Manoel Móveis"
              className="h-14 w-auto mb-5 object-contain"
            />
            <p className="text-cream/70 text-sm leading-relaxed mb-6">
              Especialistas em móveis vitalícios de madeira maciça há mais de 10 anos. Qualidade,
              tradição e o melhor acabamento de toda a região.
            </p>
            <div className="flex gap-3">
              <a
                href="https://www.instagram.com/dom_manoel/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-cream/10 hover:bg-[rgb(183,149,108)] flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
              <a
                href="http://wa.me/556696455950"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-cream/10 hover:bg-[rgb(183,149,108)] flex items-center justify-center transition-colors"
                aria-label="WhatsApp"
              >
                <WhatsAppIcon width={18} height={18} />
              </a>
              <a
                href="mailto:dommanoel1735@gmail.com"
                className="w-10 h-10 rounded-full bg-cream/10 hover:bg-[rgb(183,149,108)] flex items-center justify-center transition-colors"
                aria-label="E-mail"
              >
                <Mail size={18} />
              </a>
            </div>
          </div>
          <div>
            <h4 className="font-serif text-lg font-bold mb-5 text-[rgb(183,149,108)]">Navegação</h4>
            <ul className="space-y-3">
              {navItems.map((item) => (
                <li key={item.label}>
                  <button
                    onClick={() => scrollTo(item.id)}
                    className="text-cream/70 hover:text-cream text-sm transition-colors hover:translate-x-1 inline-block"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-serif text-lg font-bold mb-5 text-[rgb(183,149,108)]">
              Informações
            </h4>
            <ul className="space-y-4">
              <li className="flex gap-3 items-start">
                <MapPin size={16} className="text-[rgb(183,149,108)] mt-0.5 flex-shrink-0" />
                <span className="text-cream/70 text-sm">
                  Av. dos Ingás, 3855 - Jardim Imperial, Sinop - MT, 78555-024
                </span>
              </li>
              <li className="flex gap-3 items-center">
                <Phone size={16} className="text-[rgb(183,149,108)] flex-shrink-0" />
                <a
                  href="tel:+556696455950"
                  className="text-cream/70 hover:text-cream text-sm transition-colors"
                >
                  (66) 9 9645-5950
                </a>
              </li>
              <li className="flex gap-3 items-center">
                <Clock size={16} className="text-[rgb(183,149,108)] flex-shrink-0" />
                <span className="text-cream/70 text-sm">
                  Seg - Sex: 08h às 18h | Sáb: 08h às 12h
                </span>
              </li>
              <li className="flex gap-3 items-center">
                <Mail size={16} className="text-[rgb(183,149,108)] flex-shrink-0" />
                <a
                  href="mailto:dommanoel1735@gmail.com"
                  className="text-cream/70 hover:text-cream text-sm transition-colors break-all"
                >
                  dommanoel1735@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-cream/10 mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-cream/50 text-xs">
            © 2026 Dom Manoel Móveis e Decorações. Todos os direitos reservados.
          </p>
          <p className="text-cream/30 text-xs">Sinop - MT · (66) 9 9645-5950</p>
        </div>
      </div>
    </footer>
  );
}

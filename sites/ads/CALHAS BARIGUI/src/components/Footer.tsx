import { Phone, Mail, MapPin, Instagram, Facebook, ExternalLink } from 'lucide-react';

const WA_URL = 'https://api.whatsapp.com/send?phone=5541998468028&text=Ol%C3%A1%2C%20tudo%20bem%3F%20Acabei%20de%20visitar%20o%20site%20poderia%20me%20falar%20um%20pouco%20mais%20sobre%20seus%20servi%C3%A7os%3F';

const navLinks = [
  { label: 'Início', href: '#inicio' },
  { label: 'Sobre', href: '#sobre' },
  { label: 'Produtos', href: '#produtos' },
  { label: 'Vantagens', href: '#vantagens' },
  { label: 'Depoimentos', href: '#depoimentos' },
  { label: 'Contato', href: '#contato' },
];

const productLinks = [
  'Calhas e Condutores',
  'Rufos e Chapas',
  'Coifas e Dutos',
  'Selante PU40',
  'Borracha Líquida',
  'Ferramentas',
];

export default function Footer() {
  const year = new Date().getFullYear();

  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-dark-900 border-t border-dark-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="lg:col-span-1">
            <img
              src="https://storage.lucasmendes.dev/site-sp/Calhas%20Barigui/logo.webp"
              alt="Calhas Barigui"
              className="h-12 w-auto object-contain mb-5"
            />
            <p className="text-dark-300 font-body text-sm leading-relaxed mb-6">
              Especialistas em calhas e sistemas de drenagem em Curitiba e Região Metropolitana. Qualidade, eficiência e compromisso desde a fundação.
            </p>
            <div className="flex items-center gap-3">
              <a
                href="https://www.instagram.com/CALHASBARIGUIOFICIAL"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-dark-700 flex items-center justify-center text-dark-300 hover:bg-primary hover:text-dark-900 transition-all duration-200"
                aria-label="Instagram"
              >
                <Instagram size={16} />
              </a>
              <a
                href="https://www.facebook.com/CALHASBARIGUI"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-dark-700 flex items-center justify-center text-dark-300 hover:bg-primary hover:text-dark-900 transition-all duration-200"
                aria-label="Facebook"
              >
                <Facebook size={16} />
              </a>
              <a
                href={WA_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-dark-700 flex items-center justify-center text-dark-300 hover:bg-primary hover:text-dark-900 transition-all duration-200"
                aria-label="WhatsApp"
              >
                <ExternalLink size={16} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-heading font-bold text-white text-sm mb-5">Menu</h4>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => { e.preventDefault(); scrollTo(link.href); }}
                    className="text-dark-300 font-body text-sm hover:text-primary transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-bold text-white text-sm mb-5">Produtos</h4>
            <ul className="space-y-3">
              {productLinks.map((p) => (
                <li key={p}>
                  <a
                    href="#produtos"
                    onClick={(e) => { e.preventDefault(); scrollTo('#produtos'); }}
                    className="text-dark-300 font-body text-sm hover:text-primary transition-colors"
                  >
                    {p}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-bold text-white text-sm mb-5">Contato</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone size={14} className="text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <a href="tel:+5541998468028" className="text-dark-300 font-body text-sm hover:text-primary transition-colors block">(41) 99846-8028</a>
                  <a href="tel:+5541999115632" className="text-dark-300 font-body text-sm hover:text-primary transition-colors block">(41) 99911-5632</a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail size={14} className="text-primary flex-shrink-0 mt-0.5" />
                <a href="mailto:calhasbariguicuritiba@gmail.com" className="text-dark-300 font-body text-xs hover:text-primary transition-colors break-all">
                  calhasbariguicuritiba@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={14} className="text-primary flex-shrink-0 mt-0.5" />
                <span className="text-dark-300 font-body text-sm leading-snug">
                  BR-277, 1606 – Santo Inácio<br />Curitiba/PR – 82.305-100
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-dark-700 py-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-dark-400 font-body text-xs text-center sm:text-left">
            © {year} Calhas Barigui. Todos os direitos reservados.
          </p>
          <p className="text-dark-500 font-body text-xs">
            Curitiba e Região Metropolitana – PR
          </p>
        </div>
      </div>
    </footer>
  );
}

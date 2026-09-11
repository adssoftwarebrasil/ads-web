import { Phone, Mail, MapPin, Facebook, Instagram } from 'lucide-react';

const menuLinks = [
  { href: '#inicio', label: 'Início' },
  { href: '#sobre', label: 'Sobre' },
  { href: '#servicos', label: 'Serviços' },
  { href: '#vantagens', label: 'Vantagens' },
  { href: '#depoimentos', label: 'Depoimentos' },
  { href: '#contato', label: 'Contato' },
];

const serviceLinks = [
  'Venda de Lubrificantes',
  'Teste de Baterias',
  'Recarga de Baterias',
  'Vendas de Alternadores',
  'Revisão Elétrica',
];

export default function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-12">
          <div>
            <img
              src="https://storage.lucasmendes.dev/site-sp/ze%20da%20bateria/img/logo.webp"
              alt="Zé da Bateria Logo"
              className="h-16 w-auto object-contain mb-4"
            />
            <p className="text-[rgb(218,221,229)] leading-relaxed mb-6">
              Zé da Bateria atua em Gurupi desde 2019, oferecendo soluções
              completas em baterias automotivas, acessórios e serviços de
              manutenção elétrica com plantão 24 horas.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 hover:bg-[rgb(233,155,29)] p-3 rounded-lg transition-all duration-300 hover:scale-110"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a
                href="https://www.instagram.com/zedabateriaa"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 hover:bg-[rgb(233,155,29)] p-3 rounded-lg transition-all duration-300 hover:scale-110"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Menu</h3>
            <ul className="space-y-3">
              {menuLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-[rgb(218,221,229)] hover:text-[rgb(233,155,29)] transition-colors duration-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Serviços</h3>
            <ul className="space-y-3">
              {serviceLinks.map((label) => (
                <li key={label}>
                  <a
                    href="#servicos"
                    className="text-[rgb(218,221,229)] hover:text-[rgb(233,155,29)] transition-colors duration-300"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Contato</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <Phone
                  size={20}
                  className="text-[rgb(233,155,29)] flex-shrink-0 mt-1"
                />
                <a
                  href="tel:+556384458064"
                  className="text-[rgb(218,221,229)] hover:text-[rgb(233,155,29)] transition-colors duration-300"
                >
                  (63) 98445-8064
                </a>
              </li>
              <li className="flex items-start space-x-3">
                <Mail
                  size={20}
                  className="text-[rgb(233,155,29)] flex-shrink-0 mt-1"
                />
                <a
                  href="mailto:contato@zedasbaterias.com.br"
                  className="text-[rgb(218,221,229)] hover:text-[rgb(233,155,29)] transition-colors duration-300 break-all"
                >
                  contato@zedasbaterias.com.br
                </a>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin
                  size={20}
                  className="text-[rgb(233,155,29)] flex-shrink-0 mt-1"
                />
                <span className="text-[rgb(218,221,229)]">
                  Rua f, R. Quatro, 2<br />
                  Waldir Lins I, Gurupi - TO<br />
                  77423-040
                </span>
              </li>
            </ul>
            <a
              href="http://wa.me/556384458064"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[rgb(233,155,29)] text-black px-6 py-3 rounded-lg font-bold mt-6 hover:bg-[rgb(213,135,9)] transition-all duration-300 hover:scale-105"
            >
              WhatsApp
            </a>
          </div>
        </div>
        <div className="border-t border-white/10 pt-8">
          <p className="text-center text-[rgb(218,221,229)]">
            Copyright © 2026 Zé da Bateria. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}

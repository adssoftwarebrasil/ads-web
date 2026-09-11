import { Instagram, Facebook, MapPin, Phone, Mail } from 'lucide-react';

const menuLinks = [
  { href: '#inicio', label: 'Início' },
  { href: '#sobre', label: 'Sobre' },
  { href: '#servicos', label: 'Serviços' },
  { href: '#vantagens', label: 'Vantagens' },
  { href: '#contato', label: 'Contato' },
];

const serviceItems = [
  'Pizzas Artesanais',
  'Pizzas dois sabores',
  'Pizzas Doce',
  'Bordas Especiais',
  'Porções',
];

export default function Footer() {
  return (
    <footer className="bg-[#2A2A77] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <img
                src="https://storage.lucasmendes.dev/site-sp/kangaslanches/logo.webp"
                alt="Kangas Logo"
                className="h-16 w-16 object-contain"
              />
              <div>
                <h3 className="text-2xl font-bold text-white">Kangas</h3>
                <p className="text-[#FDF7E7] text-sm">Lanches &amp; Pizzas</p>
              </div>
            </div>
            <p className="text-[#FDF7E7] leading-relaxed mb-6">
              Tradição e qualidade há 34 anos, servindo os melhores lanches e pizzas de Cuiabá.
            </p>
            <div className="flex gap-4">
              <a
                href="https://www.instagram.com/kangaspizzaria"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 hover:bg-[#FF3333] rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://www.facebook.com/kangaspizzaria"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 hover:bg-[#FF3333] rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
            </div>
          </div>
          <div>
            <h4 className="text-xl font-bold mb-6">Menu</h4>
            <ul className="space-y-3">
              {menuLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-[#FDF7E7] hover:text-[#FF3333] transition-colors duration-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-xl font-bold mb-6">Serviços</h4>
            <ul className="space-y-3">
              {serviceItems.map((item) => (
                <li key={item}>
                  <span className="text-[#FDF7E7]">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-xl font-bold mb-6">Contato</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={20} className="flex-shrink-0 mt-1 text-[#FF3333]" />
                <span className="text-[#FDF7E7] text-sm">
                  R. Manoel Ramos Lino, 275
                  <br />
                  Coophamil, Cuiabá - MT
                  <br />
                  CEP: 78040-000
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={20} className="flex-shrink-0 text-[#FF3333]" />
                <a
                  href="tel:6536254300"
                  className="text-[#FDF7E7] hover:text-[#FF3333] transition-colors text-sm"
                >
                  (65) 3625-4300
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={20} className="flex-shrink-0 text-[#FF3333]" />
                <a
                  href="mailto:kangaspizzaria@outlook.com"
                  className="text-[#FDF7E7] hover:text-[#FF3333] transition-colors text-sm break-all"
                >
                  kangaspizzaria@outlook.com
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-[#FDF7E7] text-sm text-center md:text-left">
              Copyright © 2026 Kangas Lanches e Pizzaria. Todos os direitos reservados.
            </p>
            <div className="flex gap-6">
              <a
                href="https://api.whatsapp.com/send?phone=55556536254300&text=Ol%C3%A1%2C%20tudo%20bem%3F%20Acabei%20de%20visitar%20o%20site%20poderia%20me%20falar%20um%20pouco%20mais%20sobre%20seus%20servi%C3%A7os%3F"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#FDF7E7] hover:text-[#FF3333] transition-colors text-sm"
              >
                WhatsApp
              </a>
              <a
                href="https://pedir.delivery/kangas"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#FDF7E7] hover:text-[#FF3333] transition-colors text-sm"
              >
                Delivery
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

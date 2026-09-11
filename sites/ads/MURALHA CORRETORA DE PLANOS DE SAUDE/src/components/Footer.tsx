import { Mail, Phone, MapPin, Facebook, Instagram } from 'lucide-react';

export default function Footer() {
  const menuLinks = [
    { label: 'Início', href: '#inicio' },
    { label: 'Produtos', href: '#produtos' },
    { label: 'Sobre', href: '#sobre' },
    { label: 'Serviços', href: '#servicos' },
    { label: 'Depoimentos', href: '#depoimentos' },
    { label: 'Contato', href: '#contato' },
  ];

  const services = [
    'Seguro Viagem',
    'Seguros Residenciais',
    'Seguros Empresariais',
    'Seguro Auto',
    'Vida e Previdência',
    'Planos Odontológicos',
    'Planos de Saúde',
  ];

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-neutral-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <img
              src="https://storage.lucasmendes.dev/site-sp/muralhacorretora/logo.png"
              alt="Muralha Corretora"
              className="h-12 w-auto mb-6"
            />
            <p className="text-neutral-300 text-sm leading-relaxed mb-6">
              Há mais de 25 anos trabalhamos para proteger o que é mais importante para nossos
              clientes, oferecendo soluções personalizadas em seguros e planos de saúde com
              excelência, transparência e comprometimento.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Menu</h3>
            <ul className="space-y-2">
              {menuLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => scrollToSection(e, link.href)}
                    className="text-neutral-300 hover:text-primary transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Serviços</h3>
            <ul className="space-y-2">
              {services.map((service, index) => (
                <li key={index}>
                  <a
                    href="#produtos"
                    onClick={(e) => scrollToSection(e, '#produtos')}
                    className="text-neutral-300 hover:text-primary transition-colors text-sm"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Contato</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <a
                  href="tel:+558191952020"
                  className="text-neutral-300 hover:text-primary transition-colors text-sm"
                >
                  (81) 99195-2020
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <a
                  href="contato@muralhacorretora.com.br"
                  className="text-neutral-300 hover:text-primary transition-colors text-sm"
                >
              contato@muralhacorretora.com.br
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <p className="text-neutral-300 text-sm">
                  Empresarial Renato Dias - Av. Gov. Agamenon Magalhães, 4318 - Sala 1201 -
                  Paissandu, Recife - PE
                </p>
              </li>
            </ul>

            <div className="flex gap-4 mt-6">
              <a
                href="https://www.instagram.com/muralhacorretorabr/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-neutral-800 hover:bg-primary rounded-lg flex items-center justify-center transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://api.whatsapp.com/send?phone=558191952020&text=Ol%C3%A1%2C%20tudo%20bem%3F%20Acabei%20de%20visitar%20o%20site%20poderia%20me%20falar%20um%20pouco%20mais%20sobre%20seus%20servi%C3%A7os%3F"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-neutral-800 hover:bg-primary rounded-lg flex items-center justify-center transition-colors"
              >
                <Phone className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-neutral-800 pt-8">
          <div className="mb-8">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7900.784257699981!2d-34.898174!3d-8.061424!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7ab19fe96556ecb%3A0xd94fca70d26698ee!2sMuralha%20%26%20Lapenda%20Corretora%20de%20Seguros%20e%20Planos%20de%20Sa%C3%BAde%20-%20Unidade%20Recife!5e0!3m2!1spt-BR!2sus!4v1766248127412!5m2!1spt-BR!2sus"
              className="w-full h-64 rounded-lg"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

          <p className="text-center text-neutral-400 text-sm">
            Copyright © {new Date().getFullYear()} Muralha Corretora. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}

import { Phone, Mail, MapPin, Instagram, Facebook } from 'lucide-react';

const quoteUrl =
  'https://api.whatsapp.com/send?phone=553186610041&text=Ol%C3%A1%2C%20tudo%20bem%3F%20Acabei%20de%20visitar%20o%20site%20poderia%20me%20falar%20um%20pouco%20mais%20sobre%20seus%20servi%C3%A7os%3F';

const menuLinks = [
  { href: '#hero', label: 'Início' },
  { href: '#about', label: 'Sobre' },
  { href: '#services', label: 'Serviços' },
  { href: '#advantages', label: 'Vantagens' },
  { href: '#testimonials', label: 'Depoimentos' },
  { href: '#contact', label: 'Contato' },
];

const serviceItems = [
  'Seguro Auto',
  'Seguro Empresarial',
  'Financiamentos',
  'Consórcio',
  'Seguro Residencial',
  'Seguro de Vida',
];

export default function Footer() {
  return (
    <footer className="bg-[#256C8F] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div className="space-y-4">
            <img
              src="https://storage.lucasmendes.dev/site-sp/asmysegcorretora/logo.webp"
              alt="Asmyseg Logo"
              className="h-12 w-auto mb-4"
            />
            <p className="text-gray-200 leading-relaxed">
              A Asmyseg Corretora de Seguros foi fundada em 2014 com o propósito
              de atender a demanda de seguros personalizados na região do
              Barreiro, em Belo Horizonte.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Menu</h4>
            <ul className="space-y-2">
              {menuLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-gray-200 hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Serviços</h4>
            <ul className="space-y-2 text-gray-200">
              {serviceItems.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Contato</h4>
            <ul className="space-y-4">
              <li>
                <a
                  href={quoteUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-[#FA0000] text-white px-6 py-2 rounded-full font-semibold hover:bg-red-700 transition-all duration-300 shadow-lg"
                >
                  Faça aqui sua cotação
                </a>
              </li>
              <li className="flex items-center gap-2 text-gray-200">
                <Phone className="w-4 h-4" />
                <a
                  href="tel:+5531986610041"
                  className="hover:text-white transition-colors"
                >
                  +55 (31) 98661-0041
                </a>
              </li>
              <li className="flex items-center gap-2 text-gray-200">
                <Mail className="w-4 h-4" />
                <a
                  href="mailto:asmysegcorretora@yahoo.com.br"
                  className="hover:text-white transition-colors"
                >
                  asmysegcorretora@yahoo.com.br
                </a>
              </li>
              <li className="flex items-start gap-2 text-gray-200">
                <MapPin className="w-4 h-4 mt-1 flex-shrink-0" />
                <span>
                  Avenida Sinfronio Brochado 864, sala 02
                  <br />
                  Barreiro - MG 30.640-000, Brasil
                </span>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-200 text-sm text-center md:text-left">
            Copyright © 2026 - Desenvolvido por Parceiro Google
          </p>
          <div className="flex items-center gap-4">
            <a
              href="https://www.instagram.com/asmysegseguros/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/10 p-2 rounded-full hover:bg-white/20 transition-all duration-300"
              aria-label="Instagram"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="bg-white/10 p-2 rounded-full hover:bg-white/20 transition-all duration-300"
              aria-label="Facebook"
            >
              <Facebook className="w-5 h-5" />
            </a>
          </div>
        </div>
        <div className="mt-6 text-center text-xs text-gray-300">
          <p>
            Horário de funcionamento: Segunda a Sexta, 8:00 - 12:00 | 13:30 -
            17:30
          </p>
        </div>
      </div>
    </footer>
  );
}

import { Facebook, Instagram, MapPin, Phone, Mail } from 'lucide-react';
import { WHATSAPP_URL, LOGO_URL } from '../constants';

const menuLinks = [
  { href: '#início', label: 'Início' },
  { href: '#sobre', label: 'Sobre' },
  { href: '#serviços', label: 'Serviços' },
  { href: '#vantagens', label: 'Vantagens' },
  { href: '#contato', label: 'Contato' },
];

const serviceLinks = [
  'Diagnostico auditivo',
  'Consultoria auditiva',
  'Aparelhos Auditivos',
  'Treinamento de uso',
  'Suporte pós-venda',
  'Manutenção de Aparelhos',
  'Peças e acessórios',
];

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <img src={LOGO_URL} alt="CSA Logo" className="h-12 w-auto mb-6" />
            <p className="text-gray-400 leading-relaxed mb-6">
              A CSA Centro de Soluções Auditivas é uma empresa especializada em oferecer soluções
              personalizadas para pessoas com perda auditiva. Com mais de 34 anos de experiência no
              mercado, a CSA se destaca pelo atendimento humanizado e pela qualidade de seus
              produtos, que incluem aparelhos auditivos de alta tecnologia, acessórios e serviços de
              manutenção e acompanhamento. A empresa valoriza a saúde auditiva de seus clientes,
              proporcionando mais qualidade de vida.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 hover:bg-primary rounded-full flex items-center justify-center transition-colors"
              >
                <Facebook className="lucide lucide-facebook w-5 h-5" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 hover:bg-primary rounded-full flex items-center justify-center transition-colors"
              >
                <Instagram className="lucide lucide-instagram w-5 h-5" />
              </a>
            </div>
          </div>
          <div>
            <h3 className="text-white font-bold text-lg mb-6">Menu</h3>
            <ul className="space-y-3">
              {menuLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="hover:text-primary transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-white font-bold text-lg mb-6">Serviços</h3>
            <ul className="space-y-3">
              {serviceLinks.map((label) => (
                <li key={label}>
                  <a href="#servicos" className="hover:text-primary transition-colors text-sm">
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-white font-bold text-lg mb-6">Contato</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="lucide lucide-map-pin w-5 h-5 text-primary mr-3 flex-shrink-0 mt-1" />
                <span className="text-sm">
                  Av. Constantino Nery, 957 - Pres. Vargas, Manaus - AM, 69010-160
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="lucide lucide-phone w-5 h-5 text-primary mr-3" />
                <a href="tel:+559232347371" className="text-sm hover:text-primary transition-colors">
                  (92) 3234-7371
                </a>
              </li>
              <li className="flex items-center">
                <Mail className="lucide lucide-mail w-5 h-5 text-primary mr-3" />
                <a
                  href="mailto:csa.manaus@yahoo.com.br"
                  className="text-sm hover:text-primary transition-colors"
                >
                  csa.manaus@yahoo.com.br
                </a>
              </li>
            </ul>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center mt-6 px-6 py-3 bg-primary hover:bg-primary/90 text-white font-semibold rounded-full transition-all duration-300"
            >
              Enviar WhatsApp
            </a>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="text-center text-sm text-gray-400">
            <p>Copyright © 2026 </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

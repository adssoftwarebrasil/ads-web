import { Phone, Mail, MapPin, Instagram } from 'lucide-react';
import { INSTAGRAM_URL, WHATSAPP_DEFAULT, scrollToId } from '../constants';

const menuItems = [
  { label: 'Início', id: 'inicio' },
  { label: 'Sobre', id: 'sobre' },
  { label: 'Serviços', id: 'servicos' },
  { label: 'Produtos', id: 'servicos' },
  { label: 'Galeria', id: 'servicos' },
  { label: 'Vantagens', id: 'vantagens' },
  { label: 'Depoimentos', id: 'depoimentos' },
  { label: 'Contato', id: 'contato' },
];

const services = [
  {
    label: 'Tubos e Conexões',
    href: 'https://api.whatsapp.com/send?phone=5565998064793&text=Ol%C3%A1%2C%20tudo%20bem%3F%20Gostaria%20de%20saber%20mais%20sobre%20Tubos%20e%20Conex%C3%B5es',
  },
  {
    label: 'Ferramentas',
    href: 'https://api.whatsapp.com/send?phone=5565998064793&text=Ol%C3%A1%2C%20tudo%20bem%3F%20Gostaria%20de%20saber%20mais%20sobre%20Ferramentas',
  },
  {
    label: 'Iluminação',
    href: 'https://api.whatsapp.com/send?phone=5565998064793&text=Ol%C3%A1%2C%20tudo%20bem%3F%20Gostaria%20de%20saber%20mais%20sobre%20Ilumina%C3%A7%C3%A3o',
  },
  {
    label: 'Tintas',
    href: 'https://api.whatsapp.com/send?phone=5565998064793&text=Ol%C3%A1%2C%20tudo%20bem%3F%20Gostaria%20de%20saber%20mais%20sobre%20Tintas',
  },
  {
    label: 'Hidráulica',
    href: 'https://api.whatsapp.com/send?phone=5565998064793&text=Ol%C3%A1%2C%20tudo%20bem%3F%20Gostaria%20de%20saber%20mais%20sobre%20Hidr%C3%A1ulica',
  },
];

export default function Footer() {
  return (
    <footer className="bg-[rgb(34,34,34)] text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">
              Detudo <span className="text-[rgb(246,239,3)]">Eletro Ferragens</span>
            </h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              Com mais de 25 anos de atuação, a Detudo Eletro Ferragens se consolidou como uma
              referência em Cuiabá no comércio de ferragens e ferramentas. Trabalhamos com um
              vasto portfólio de produtos voltados para elétrica, hidráulica, utilidades
              domésticas e muito mais.
            </p>
          </div>
          <div>
            <h4 className="text-xl font-bold mb-4 text-[rgb(246,239,3)]">Menu</h4>
            <ul className="space-y-2">
              {menuItems.map((item, i) => (
                <li key={i}>
                  <button
                    onClick={() => scrollToId(item.id)}
                    className="text-gray-300 hover:text-[rgb(246,239,3)] hover:underline transition-colors text-left"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-xl font-bold mb-4 text-[rgb(246,239,3)]">Serviços</h4>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service.label}>
                  <a
                    href={service.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-[rgb(246,239,3)] hover:underline transition-colors"
                  >
                    {service.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-xl font-bold mb-4 text-[rgb(246,239,3)]">Contato</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href={WHATSAPP_DEFAULT}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-[rgb(246,239,3)] transition-colors flex items-center gap-2"
                >
                  <Phone size={18} />
                  <span>65 99806-4793</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:detudoltda760@gmail.com"
                  className="text-gray-300 hover:text-[rgb(246,239,3)] transition-colors flex items-center gap-2"
                >
                  <Mail size={18} />
                  <span className="text-sm">detudoltda760@gmail.com</span>
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin size={18} className="flex-shrink-0 mt-1" />
                <span className="text-gray-300 text-sm">
                  Av. Pres. Getúlio Vargas, 1343 - Popular, Cuiabá - MT
                </span>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-gray-700">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex gap-4">
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[rgb(246,239,3)] p-3 rounded-full hover:scale-110 transition-transform"
              >
                <Instagram className="text-[rgb(34,34,34)]" />
              </a>
            </div>
            <div className="text-center text-gray-400 text-sm">
              <p>
                Copyright © 2025 Detudo Eletro Ferragens - Todos os direitos reservados
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

import { Facebook, Instagram, Phone, Mail, MapPin } from 'lucide-react';
import { scrollToSection } from '../lib/scroll';

const menuItems = [
  { label: 'Início', id: 'inicio' },
  { label: 'Sobre', id: 'sobre' },
  { label: 'Serviços', id: 'servicos' },
  { label: 'Vantagens', id: 'vantagens' },
  { label: 'Depoimentos', id: 'depoimentos' },
  { label: 'Contato', id: 'contato' },
];

const serviceItems = [
  'Consulta Veterinária',
  'Acessórios para Pets',
  'Produtos Veterinários',
  'Embelezamento de Pets',
];

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <img
              src="https://storage.lucasmendes.dev/site-sp/petshowe%2Flogo.png"
              alt="Pet Show Estética Animal"
              className="h-16 w-auto mb-6"
            />
            <p className="text-gray-400 leading-relaxed mb-6">
              A Pet Show Estética Animal, fundada em 15 de outubro de 2013, é referência em serviços
              de higiene e embelezamento de animais domésticos em Cascavel, Paraná.
            </p>
            <div className="flex gap-4">
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 p-3 rounded-full hover:bg-[#09b588] transition-all duration-300"
              >
                <Facebook size={20} />
              </a>
              <a
                href="https://www.instagram.com/petshowesteticanimal"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 p-3 rounded-full hover:bg-[#09b588] transition-all duration-300"
              >
                <Instagram size={20} />
              </a>
            </div>
          </div>
          <div>
            <h4 className="text-lg font-bold mb-6">Menu</h4>
            <ul className="space-y-3">
              {menuItems.map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => scrollToSection(item.id)}
                    className="text-gray-400 hover:text-[#09b588] transition-colors duration-300"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-bold mb-6">Serviços</h4>
            <ul className="space-y-3">
              {serviceItems.map((item) => (
                <li key={item}>
                  <button
                    onClick={() => scrollToSection('servicos')}
                    className="text-gray-400 hover:text-[#09b588] transition-colors duration-300 text-left"
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-bold mb-6">Contato</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone size={20} className="text-[#09b588] flex-shrink-0 mt-1" />
                <a
                  href="tel:+5545991434496"
                  className="text-gray-400 hover:text-[#09b588] transition-colors duration-300"
                >
                  (45) 99143-4496
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Mail size={20} className="text-[#09b588] flex-shrink-0 mt-1" />
                <a
                  href="mailto:contato@petshowesteticanimal.com.br"
                  className="text-gray-400 hover:text-[#09b588] transition-colors duration-300 break-all"
                >
                  contato@petshowesteticanimal.com.br
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={20} className="text-[#09b588] flex-shrink-0 mt-1" />
                <span className="text-gray-400">
                  Rua Vitória, 934 - Bairro Neva, Cascavel - PR
                </span>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-8">
          <p className="text-center text-gray-400">
            Copyright © 2026 Pet Show Estética Animal. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}

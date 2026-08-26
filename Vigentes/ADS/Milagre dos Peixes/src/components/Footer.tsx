import { Instagram, Phone, Mail } from 'lucide-react';

const menuLinks = [
  { href: '#inicio', label: 'Início' },
  { href: '#sobre', label: 'Sobre' },
  { href: '#cursos', label: 'Cursos' },
  { href: '#galeria', label: 'Galeria' },
  { href: '#contato', label: 'Contato' },
];

const serviceLinks = [
  { href: '#cursos', label: 'Arte' },
  { href: '#cursos', label: 'Música' },
  { href: '#cursos', label: 'Corpo e Mente' },
  { href: '#cursos', label: 'Idiomas' },
];

export default function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <img
              src="https://storage.lucasmendes.dev/site-sp/espacomilagredospeixes%2Flogo.png"
              alt="Espaço Cultural Milagre dos Peixes"
              className="h-16 w-auto mb-6"
            />
            <p className="text-gray-400 leading-relaxed mb-6">
              Fundado em 2006, somos um centro de arte dedicado a promover a
              expressão cultural e o bem-estar em Goiânia.
            </p>
            <div className="flex items-center gap-4">
              <a
                href="https://www.instagram.com/milagredospeixes/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 hover:bg-[#ED1B24] rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
              >
                <Instagram size={20} />
              </a>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-6">Menu</h3>
            <ul className="space-y-3">
              {menuLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-[#ED1B24] transition-colors duration-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-6">Serviços</h3>
            <ul className="space-y-3">
              {serviceLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-[#ED1B24] transition-colors duration-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-6">Contato</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone className="text-[#ED1B24] flex-shrink-0 mt-1" size={20} />
                <div className="text-gray-400">
                  <p>(62) 98184-2290</p>
                  <p>(62) 3207-7801</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="text-[#ED1B24] flex-shrink-0 mt-1" size={20} />
                <p className="text-gray-400">contato@milagredospeixes.com.br</p>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-white/10 mt-12 pt-8 text-center">
          <p className="text-gray-400">
            Copyright © 2026 Espaço Cultural Milagre dos Peixes. Todos os
            direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}

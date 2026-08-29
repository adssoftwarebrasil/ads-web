import { Facebook, Instagram } from 'lucide-react';
import { WHATSAPP_URL, navItems, scrollToSection } from '../lib/constants';

const footerProducts = [
  'Carvão Vegetal',
  'Alcachofra + Berinjela',
  'Amora Miura',
  'Abacateiro',
  'Chá Verde',
  'Florais de Bach',
  'Dermatologia',
];

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-gray-900 to-gray-800 text-white overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div className="space-y-6">
            <img
              src="https://storage.lucasmendes.dev/site-sp/pharmafloris/logo.webp"
              alt="Pharma Floris"
              className="h-16 w-auto"
            />
            <p className="text-gray-400 leading-relaxed">
              Na Pharma Floris, oferecemos medicamentos manipulados com alta
              qualidade e segurança. Localizada em São Carlos/SP, nossa farmácia
              de manipulação conta com uma equipe de profissionais qualificados.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-6">Menu</h3>
            <ul className="space-y-3">
              {navItems.map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => scrollToSection(item.id)}
                    className="text-gray-400 hover:text-[rgb(88,171,218)] transition-colors duration-200"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-6">Produtos</h3>
            <ul className="space-y-3 text-gray-400">
              {footerProducts.map((p) => (
                <li key={p}>{p}</li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-6">Contato</h3>
            <div className="space-y-4">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="block text-gray-400 hover:text-[rgb(88,171,218)] transition-colors"
              >
                16 99236-8763
              </a>
              <a
                href="mailto:pharmafloris@gmail.com"
                className="block text-gray-400 hover:text-[rgb(88,171,218)] transition-colors break-all"
              >
                pharmafloris@gmail.com
              </a>
              <p className="text-gray-400">
                AV. REGIT ARAB 335, CIDADE ARACY SÃO CARLOS/SP
              </p>
              <div className="flex gap-4 pt-4">
                <a
                  href="#"
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-[rgb(88,171,218)] transition-all duration-300 hover:scale-110"
                  aria-label="Facebook"
                >
                  <Facebook
                    width={20}
                    height={20}
                    className="lucide lucide-facebook"
                  />
                </a>
                <a
                  href="https://www.instagram.com/pharmafloris/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-[rgb(88,171,218)] transition-all duration-300 hover:scale-110"
                  aria-label="Instagram"
                >
                  <Instagram
                    width={20}
                    height={20}
                    className="lucide lucide-instagram"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-700 pt-8 text-center">
          <p className="text-gray-400">
            Copyright © 2026 Pharma Floris. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}

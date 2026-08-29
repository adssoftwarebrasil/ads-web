import { Facebook, Instagram } from 'lucide-react';
import { WHATSAPP_URL, navLinks, footerServices } from '../data';

export default function Footer() {
  return (
    <footer className="bg-black text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <img
              src="https://storage.lucasmendes.dev/site-sp/belezaporfernanda%2Flogo.webp"
              alt="Beleza por Fernanda de Jesus"
              className="h-16 w-auto mb-4"
            />
            <p className="text-gray-400 leading-relaxed mb-4">
              Beleza por Fernanda de Jesus nasceu com a missão de oferecer serviços de beleza de
              alta qualidade em um ambiente acolhedor.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-all"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://www.instagram.com/belezaporfernandadejesus_/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-all"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Menu</h3>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-gray-400 hover:text-white transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Serviços</h3>
            <ul className="space-y-2">
              {footerServices.map((service) => (
                <li key={service}>
                  <span className="text-gray-400">{service}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Contato</h3>
            <ul className="space-y-3 text-gray-400">
              <li>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  (85) 98805-5759
                </a>
              </li>
              <li>
                <a
                  href="mailto:contato@belezaporfj.com.br"
                  className="hover:text-white transition-colors"
                >
                  contato@belezaporfj.com.br
                </a>
              </li>
              <li>
                Rua Nogueira Acioli, 330
                <br />
                Centro - Fortaleza/CE
                <br />
                CEP: 60.110-140
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-white/10 pt-8 text-center text-gray-400 text-sm">
          <p>Copyright © 2026 – Desenvolvido por Parceiro Google</p>
        </div>
      </div>
    </footer>
  );
}

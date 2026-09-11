import { Facebook, Instagram, MapPin, Phone, Mail } from 'lucide-react';
import { scrollToSection } from '../lib/scroll';

const quickLinks: { label: string; target: string }[] = [
  { label: 'Início', target: 'hero' },
  { label: 'Sobre', target: 'about' },
  { label: 'Serviços', target: 'services' },
  { label: 'Cardápio', target: 'services' },
  { label: 'Galeria', target: 'gallery' },
  { label: 'Contato', target: 'location' },
];

export default function Footer() {
  return (
    <footer className="bg-[#25262A] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div className="space-y-4">
            <img
              src="https://storage-admin.lucasmendes.dev/api/v1/buckets/site-sp/objects/download?preview=true&prefix=costelaco%2Flogo-Photoroom%20(3).png&version_id=null"
              alt="Costelaço"
              className="h-16 w-auto"
            />
            <p className="text-gray-400 leading-relaxed">
              O melhor churrasco de Sinop desde 2014. Qualidade, sabor e tradição
              em cada prato.
            </p>
            <div className="flex gap-4">
              <a
                href="https://www.facebook.com/costelacosinop"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-[#F7BC33] transition-colors duration-300"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a
                href="https://www.instagram.com/costelacoespetaria"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-[#F7BC33] transition-colors duration-300"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4 text-[#F7BC33]">
              Links Rápidos
            </h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => scrollToSection(link.target)}
                    className="text-gray-400 hover:text-[#F7BC33] transition-colors duration-300"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4 text-[#F7BC33]">Horários</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <strong className="text-white">Seg - Sex:</strong> 17:00 - 23:00
              </li>
              <li>
                <strong className="text-white">Sábado:</strong> 09:00 - 16:00
                <br />
                <span className="ml-16">17:00 - 23:00</span>
              </li>
              <li>
                <strong className="text-white">Domingo e Feriados:</strong> 09:00
                - 16:00
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4 text-[#F7BC33]">Contato</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin
                  size={20}
                  className="text-[#F7BC33] flex-shrink-0 mt-1"
                />
                <span className="text-gray-400">
                  Av. dos Ipês, 356 - Jardim Imperial, Sinop - MT
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={20} className="text-[#F7BC33] flex-shrink-0" />
                <a
                  href="tel:5566996360441"
                  className="text-gray-400 hover:text-[#F7BC33] transition-colors"
                >
                  (66) 99996-0441
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={20} className="text-[#F7BC33] flex-shrink-0" />
                <a
                  href="mailto:tiagobastosmt@gmail.com"
                  className="text-gray-400 hover:text-[#F7BC33] transition-colors break-all"
                >
                  tiagobastosmt@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-white/10 pt-8 text-center text-gray-400">
          <p>© 2026 Costelaço. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}

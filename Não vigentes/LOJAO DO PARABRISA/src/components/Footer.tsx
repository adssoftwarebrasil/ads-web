import { MapPin, Phone, Smartphone, Clock } from 'lucide-react';
import { scrollToSection } from '../lib/useReveal';

const LOGO = 'https://storage.lucasmendes.dev/site-sp/lojao%20do%20parabrisa/img/logo.png';

const navLinks = [
  { label: 'Início', id: 'hero' },
  { label: 'Serviços', id: 'services' },
  { label: 'Sobre Nós', id: 'about' },
  { label: 'Contato', id: 'contact' },
];

const serviceList = [
  'Parabrisas',
  'Vidros Automotivos',
  'Faróis e Lanternas',
  'Retrovisores',
  'Borrachas',
  'Reparos',
];

export default function Footer() {
  return (
    <footer className="bg-gray-900 pt-16 pb-8 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-12">
          <div className="flex flex-col space-y-4">
            <img src={LOGO} alt="Lojão do Parabrisa" className="h-12 w-auto object-contain self-start" />
            <p className="text-sm text-gray-400 leading-relaxed">
              Especialistas em parabrisas e vidros automotivos em Salvador desde 2005. Qualidade, preço justo e atendimento excepcional.
            </p>
            <p className="text-xs text-gray-500 font-mono">CNPJ: 07.527.565/0001-70</p>
          </div>
          <div>
            <h3 className="text-white font-bold text-lg mb-6 relative inline-block after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-8 after:h-1 after:bg-[rgb(1,160,199)] after:rounded-full">
              Navegação
            </h3>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="text-gray-400 hover:text-[rgb(1,160,199)] hover:translate-x-1 text-sm transition-all duration-300 flex items-center gap-2"
                  >
                    <span className="w-1.5 h-1.5 bg-[rgb(1,160,199)] rounded-full opacity-0 hover:opacity-100 transition-opacity"></span>
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-white font-bold text-lg mb-6 relative inline-block after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-8 after:h-1 after:bg-[rgb(1,160,199)] after:rounded-full">
              Serviços
            </h3>
            <ul className="grid grid-cols-1 gap-2">
              {serviceList.map((service) => (
                <li key={service} className="text-gray-400 text-sm flex items-center gap-2">
                  <span className="w-1 h-1 bg-gray-600 rounded-full"></span>
                  {service}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-white font-bold text-lg mb-6 relative inline-block after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-8 after:h-1 after:bg-[rgb(1,160,199)] after:rounded-full">
              Contato
            </h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3 text-gray-400 text-sm group">
                <MapPin
                  width={18}
                  height={18}
                  className="text-[rgb(1,160,199)] flex-shrink-0 mt-0.5 group-hover:text-white transition-colors"
                />
                <span className="leading-snug">
                  Av. Barros Reis, 318 - Pau Miúdo, Salvador - BA, 40310-005
                </span>
              </div>
              <div className="flex items-center gap-3 text-gray-400 text-sm group">
                <Phone
                  width={18}
                  height={18}
                  className="text-[rgb(1,160,199)] flex-shrink-0 group-hover:text-white transition-colors"
                />
                <a href="tel:+557132583386" className="hover:text-white transition-colors">
                  (71) 3258-3386
                </a>
              </div>
              <div className="flex items-center gap-3 text-gray-400 text-sm group">
                <Smartphone
                  width={18}
                  height={18}
                  className="text-[rgb(1,160,199)] flex-shrink-0 group-hover:text-white transition-colors"
                />
                <a
                  href="http://wa.me/557188114690"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  (71) 98811-4690
                </a>
              </div>
              <div className="flex items-start gap-3 text-gray-400 text-sm group">
                <Clock
                  width={18}
                  height={18}
                  className="text-[rgb(1,160,199)] flex-shrink-0 mt-0.5 group-hover:text-white transition-colors"
                />
                <span className="leading-snug">
                  Seg-Sex: 8h-17h30 <br /> Sáb: 8h-12h
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-500 text-center md:text-left">
              © 2026 Lojão do Parabrisa. Todos os direitos reservados.
            </p>
            <div className="flex gap-6 justify-center md:justify-end text-sm text-gray-600">
              <span>Termos de Uso</span>
              <span>Política de Privacidade</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
